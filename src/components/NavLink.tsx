import Link from "next/link";
import { ReactSVG as SVG } from "react-svg";
import styled from "styled-components";

interface NavLinkProps {
  url: string;
  label: string;
  icon: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ url, label, icon }) => {
  return (
    <LinkWrapper>
      <Link href={url} className="flex items-center gap-4 font-customMed">
        <SVG src={icon} /> {label}
      </Link>
    </LinkWrapper>
  );
};

export const LinkWrapper = styled.li`
  &:hover {
    color: #ff5403;
    * {
      fill: #ff5403;
    }
  }
`;
