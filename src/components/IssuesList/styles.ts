import Link from "next/link";
import tw from "tw-tailwind";

export const IssueListHeader = tw.header`
  mt-12
  flex
  flex-col
  gap-3
`;

export const SearchIssueInput = tw.input`
  h-12
  rounded-md
  bg-base-input
  placeholder:text-base-label
  text-base-subtitle
  px-4
  py-3
`;

export const IssueListItemContainer = tw.article`
  rounded-xl
  min-w-[250px]
  w-full
  bg-base-post
  p-8
  flex
  flex-col
  gap-3
`;

export const IssueListItemHeader = tw.header`
  relative
  flex
  flex-row
  justify-between
  w-full
  gap-6
`;

export const IssueListItemTime = tw.time`
  hidden
  md:block
  text-base-span
  font-normal
  text-sm
  mt-1
  text-right
`;

interface IssueListItemLinkProps {
  $filtered: boolean;
}

export const IssueListItemLink = tw(Link)<IssueListItemLinkProps>`
  card-link
  mb-8
  flex
  rounded-xl
  ${props => props.$filtered? "cursor-pointer pointer-events-auto opacity-100":"cursor-not-allowed pointer-events-none opacity-40"}
`;