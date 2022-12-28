import Link from "next/link";
import tw from "tw-tailwind";

export const IssueCardContainer = tw.article`
  px-8
  py-8
  -mt-20
  w-full
  h-min
  rounded-lg
  flex
  flex-col
  bg-base-profile
  items-start
  relative
`;

export const IssueCardHeader = tw.header`
  w-full
  flex
  justify-between
`;

export const ReturnLinkContainer = tw(Link)`
  flex
  items-center
  gap-2
  rounded-md
  px-2
  -ml-4
`;

export const GithubLinkContainer = tw.a`
  flex
  items-center
  flex-nowrap
  whitespace-nowrap
  gap-1
  md:gap-2
  rounded-md
  px-2
  -mr-4
`;