import { GithubLinkContainer, IssueCardContainer, IssueCardHeader, ReturnLinkContainer } from "./styles";
import { IssueData } from "../../../app/page";
import { Icon } from "../Icon";
import { formatDistance } from "date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

interface IssueCardProps {
  issue: IssueData;
}

export function IssueCard({ 
  issue
}: IssueCardProps) {
  const { title, comments, createdAt, author, url } = issue;

  const time = formatDistance(new Date(createdAt), new Date(), {
    locale: ptBrLocale
  });

  return (
    <IssueCardContainer>
      <IssueCardHeader>
        <ReturnLinkContainer href="/">
          <Icon
            name="FaChevronLeft"
          />
            Voltar
        </ReturnLinkContainer>
        <GithubLinkContainer target="_blank" href={url}>
            Ver no GitHub
          <Icon
            name="BsBoxArrowUpRight"
          />
        </GithubLinkContainer>
      </IssueCardHeader>
      <main className="mt-5">
        <h1>{title}</h1>
      </main>
      <footer className="mt-2">
        <ul className="issue-info-list">
          <li>
            <Icon
              name="FaGithub"
            />
            <p>
              {author}
            </p>
          </li>
          <li>
            <Icon
              name="FaCalendarDay"
            />
            <time>
              Há {time}
            </time>
          </li>
          <li>
            <Icon
              name="FaComment"
            />
            <p>
              {comments} comentários
            </p>
          </li>
        </ul>
      </footer>
    </IssueCardContainer>
  );
}