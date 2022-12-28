import Image from "next/image";
import coverImg from "../../assets/Cover.png";
import logoImg from "../../assets/Logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer
      style={{
        backgroundImage: `url(${coverImg.src})`
      }}
    >
      <Image
        className="mt-16 h-min"
        src={logoImg}
        alt=""
      />
    </HeaderContainer>
  );
}