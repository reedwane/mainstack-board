import { navConfig } from "@/providers/sidenav";
import { ReactSVG as SVG } from "react-svg";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { useState } from "react";

interface ISideNavProps {
  styles?: string;
}

const SideNav: React.FunctionComponent<ISideNavProps> = ({ styles }) => {
  const [active, setActive] = useState<string>("Dashboard");

  return (
    <nav
      className={`flex flex-col p-8 gap-6 xl:px-[60.74px] xl:py-[38.75px] xl:gap-[50.7px] overflow-y-auto`}
    >
      <div className="relative w-[40px] h-[40px]">
        <Image src={"/mainstack-logo.png"} fill alt="mainstack-logo" />
      </div>

      <ul>
        {navConfig.map((category, idx: number) => (
          <div key={idx} className="flex flex-col gap-6 mb-8">
            {category?.label ? <p className="-mb-1">{category.label}</p> : ""}

            {category.links.map((link, idx: number) => (
              <NavLink
                key={idx}
                url={link.url}
                label={link.label}
                icon={link.icon}
                active={active}
              />
            ))}
          </div>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between  cursor-pointer hover:text-[#ff5403]">
        <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
          <Image src={"/blessing.png"} fill alt="blessing" />
        </div>

        <p className="text-[15px] font-customMed text-[#56616B] hover:text-[#ff5403]">
          Blessing Daniels
        </p>

        <SVG src={"/icons/more.svg"} />
      </div>
    </nav>
  );
};

export default SideNav;
