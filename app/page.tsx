import { IssuesList } from "../src/components/IssuesList";
import { ProfileCard } from "../src/components/ProfileCard";
import { api } from "../src/services/axios";
import { HomePageContainer } from "../src/styles/pages/homeStyles";

export type ProfileData = {
  username: string;
  name: string;
  avatarUrl: string | URL;
  followers: number;
  company: string | null;
  bio: string | null;
};

export type IssueData = {
  comments: number;
  createdAt: string | Date;
  author: string;
  title: string;
  body: string;
  id: number;
  url: string;
  description?: string;
};

export type IssueDataResponseItem = {
  comments: number;
  created_at: string;
  user: {
    login: string;
  };
  html_url: string;
  title: string;
  body: string;
  id: number;
};

export type IssueDataResponse = {
  items: IssueDataResponseItem[];
};

async function getProfile(): Promise<ProfileData> {
  return await api.get("users/l-marcel")
    .then(res => res.data)
    .then(data => ({
      username: data.login,
      name: data.name,
      avatarUrl: data.avatar_url,
      followers: data.followers,
      company: data.company,
      bio: data.bio
    } as ProfileData));
}

async function getIssues(): Promise<IssueData[]> {
  const repository = "L-Marcel/ignite-03-reactjs-2022-github-blog";

  return await api.get<IssueDataResponse>(`search/issues?q=repo:${repository}`)
    .then(res => res.data)
    .then(data => (data.items.map(issue => {
      let description = undefined;

      try {
        description = issue.body.split(".")[0] + ".";
      } catch (error) { 
        console.log(error);
      }

      return {
        comments: issue.comments,
        createdAt: issue.created_at,
        author: issue.user.login,
        body: issue.body,
        title: issue.title,
        id: issue.id,
        description,
        url: issue.html_url
      } as IssueData;
    }) as IssueData[]));
}

export default async function HomePage() {
  const profile = await getProfile();
  const issues = await getIssues();

  return (
    <HomePageContainer>
      <ProfileCard profile={profile}/>
      <IssuesList issues={issues}/>
    </HomePageContainer>
  );
}