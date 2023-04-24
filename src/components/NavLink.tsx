import Link from "next/link";
import { ReactSVG as SVG } from "react-svg";

interface NavLinkProps {
  url: string;
  label: string;
  icon: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ url, label, icon }) => {
  return (
    <li>
      <Link
        href={url}
        className="flex items-center gap-4 font-customMed hover:text-[#FF5403]"
      >
        <SVG src={icon} className="hover:fill-[#FF5403]" /> {label}
      </Link>
    </li>
  );
};
