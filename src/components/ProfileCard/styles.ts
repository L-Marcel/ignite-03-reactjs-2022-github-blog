import tw from "tw-tailwind";

export const ProfileCardContainer = tw.article`
  px-10
  py-8
  -mt-20
  w-full
  min-h-56
  rounded-lg
  flex
  gap-8
  bg-base-profile
  items-center
  relative
`;

export const ProfileCardHeader = tw.header`
  w-full
  md:mb-3
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
  py-2
  px-4
  translate-x-4
  -translate-y-1/2
  lg:px-2
  lg:py-0
  bg-base-post
  lg:translate-y-0
  lg:translate-x-0
  lg:bg-transparent
  lg:mt-10
  lg:mr-8
`;