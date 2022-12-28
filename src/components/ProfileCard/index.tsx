import Image from "next/image";
import { ProfileData } from "../../../app/page";
import { GithubLinkContainer, ProfileCardContainer, ProfileCardHeader } from "./styles";
import { Icon } from "../Icon";

interface ProfileCardProps {
  profile: ProfileData;
}

export function ProfileCard({
  profile
}: ProfileCardProps) {
  const {
    avatarUrl,
    bio,
    company,
    followers,
    name,
    username 
  } = profile;

  return (
    <ProfileCardContainer>
      <Image
        className="hidden lg2:block rounded-lg"
        src={avatarUrl.toString()}
        alt=""
        width={148}
        height={148}
      />
      <div>
        <ProfileCardHeader>
          <h1>{name}</h1>
          <GithubLinkContainer target="_blank" href="https://github.com/l-marcel">
            GitHub
            <Icon
              name="BsBoxArrowUpRight"
            />
          </GithubLinkContainer>
        </ProfileCardHeader>
        { bio && <main>
          <p>{bio}</p>
        </main> }
        <footer>
          <ul className="profile-info-list">
            <li>
              <Icon
                name="FaGithub"
              />
              <p>
                {username}
              </p>
            </li>
            { company && <li>
              <Icon
                name="FaBuilding"
              />
              <p>
                {company}
              </p>
            </li> }
            <li>
              <Icon
                name="FaUsers"
              />
              <p>
                {followers} seguidores
              </p>
            </li>
          </ul>
        </footer>
      </div>
    </ProfileCardContainer>
  );
}