import { redirect } from "next/navigation";
import { api } from "../../../src/services/axios";
import { IssueData, IssueDataResponse } from "../../page";
import { IssuePageContainer } from "../../../src/styles/pages/issueStyles";
import { IssueCard } from "../../../src/components/IssueCard";

interface IssuePageProps {
  params: {
    id: number
  }
}

async function getIssueById(id: number): Promise<IssueData> {
  const repository = "L-Marcel/ignite-03-reactjs-2022-github-blog";

  return await api.get<IssueDataResponse>(`search/issues?q=repo:${repository}`)
    .then(res => res.data)
    .then(data => {
      return data.items.find(issue => issue.id === Number(id));
    })
    .then(issue => {
      if(!issue) {
        throw new Error("Issue not found!");
      }

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
    });
}

export default async function IssuePage({
  params: {
    id
  }
}: IssuePageProps) {
  const issue = await getIssueById(id)
    .then(res => res)
    .catch(() => redirect("/"));
  
  return (
    <IssuePageContainer>
      <IssueCard issue={issue}/>
    </IssuePageContainer>
  );
}