import { FaGithub, FaBuilding, FaUsers, FaCalendarDay, FaChevronLeft, FaComment } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconBaseProps } from "react-icons/lib";

const icons = {
  FaGithub,
  FaBuilding,
  FaUsers,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  BsBoxArrowUpRight
};

interface IconProps extends IconBaseProps {
  name: keyof typeof icons;
}

export function Icon({
  name,
  ...props
}: IconProps) {
  const CurrentIcon = icons[name];

  return (
    <CurrentIcon {...props}/>
  );
}