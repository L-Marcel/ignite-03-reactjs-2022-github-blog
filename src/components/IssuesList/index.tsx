"use client";

import { ChangeEvent, useState } from "react";
import { IssueData } from "../../../app/page";
import { IssueListHeader, IssueListItemContainer, IssueListItemHeader, IssueListItemLink, IssueListItemTime, SearchIssueInput } from "./styles";
import Masonry from "react-masonry-css";
import { formatDistance } from "date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

interface IssuesListProps {
  issues: IssueData[];
}

export function IssuesList({ issues }: IssuesListProps) {
  const [query, setQuery] = useState("");

  const filteredIssues = issues.map(({ title, author, description, ...rest }) => {
    const _wasFiltered = (
      title.toLowerCase().includes(query.toLowerCase()) ||
      author.toLowerCase().includes(query.toLowerCase()) ||
      (!!description && description?.toLowerCase().includes(query.toLowerCase()))
    );

    return {
      title,
      author,
      description,
      _wasFiltered,
      ...rest
    };
  });

  const numberOfFilteredIssues = filteredIssues.filter(issue => issue._wasFiltered).length;

  function handleOnChangeQuery(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }

  return (
    <section className="flex flex-col gap-12">
      <IssueListHeader>
        <div className="flex w-full justify-between">
          <h4 className="text-base-subtitle text-lg font-bold">Publicações</h4>
          <p className="text-base-span text-right text-sm">{numberOfFilteredIssues} publicações</p>
        </div>
        <SearchIssueInput 
          type="text" 
          placeholder="Buscar conteúdo"
          value={query}
          onChange={handleOnChangeQuery}
        />
      </IssueListHeader>
      <Masonry
        className="flex -ml-[30px] w-auto mb-10"
        columnClassName="pl-[30px] bg-clip-padding"
        breakpointCols={{
          default: 2,
          700: 2,
          500: 1
        }}
      >
        {filteredIssues
          .sort((a, b) => Number(b._wasFiltered) - Number(a._wasFiltered))
          .map(({ id, title, description, createdAt, _wasFiltered }) => {
            const time = formatDistance(new Date(createdAt), new Date(), {
              locale: ptBrLocale
            });

            return (
              <IssueListItemLink tabIndex={_wasFiltered? 0:-1} $filtered={_wasFiltered} key={id} href={`/issues/${id}`}>
                <IssueListItemContainer>
                  <IssueListItemHeader>
                    <h3>{title}</h3>
                    <IssueListItemTime>Há {time}</IssueListItemTime>
                  </IssueListItemHeader>
                  <p>{description}</p>
                </IssueListItemContainer>
              </IssueListItemLink>
            );
          })}
      </Masonry>
    </section>
  );
}