import tw from "tw-tailwind";

export const ProfileCardContainer = tw.article`
  px-10
  py-8
  -mt-20
  w-full
  h-56
  rounded-lg
  flex
  gap-8
  bg-base-profile
  items-center
  relative
`;

export const ProfileCardHeader = tw.header`
  w-full
`;

export const LinkContainer = tw.a`
  flex
  items-center
  gap-2
`;

export const GithubLinkContainer = tw(LinkContainer)`
  absolute
  rounded-md
  top-0
  right-0
  px-2
  mt-10
  mr-8
`;