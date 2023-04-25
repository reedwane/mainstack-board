import Link from "next/link";
import { ReactSVG as SVG } from "react-svg";
import styled from "styled-components";

interface NavLinkProps {
  url: string;
  label: string;
  icon: string;
  active?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  url,
  label,
  icon,
  active,
}) => {
  return (
    <LinkWrapper active={active === label}>
      <Link href={url} className={`flex items-center gap-4 font-customMed`}>
        <SVG src={icon} /> {label}
      </Link>
    </LinkWrapper>
  );
};

interface LinkWrapperProps {
  active: boolean;
}

export const LinkWrapper = styled.li<LinkWrapperProps>`
  * {
    color: ${(props) => (props.active ? "#ff5403" : "unset")};
    fill: ${(props) => (props.active ? "#ff5403" : "unset")};
  }
  &:hover {
    * {
      color: #ff5403;
      fill: #ff5403;
    }
  }
`;
