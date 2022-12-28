import { FaGithub, FaBuilding, FaUsers, FaCalendarDay, FaChevronLeft, FaComment } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";


const icons = {
  FaGithub,
  FaBuilding,
  FaUsers,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  BsBoxArrowUpRight
};

interface IconProps extends IconType {
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