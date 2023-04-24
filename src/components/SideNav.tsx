import { navConfig } from "@/providers/sidenav";
import Image from "next/image";
import { NavLink } from "./NavLink";

interface ISideNavProps {
  styles?: string;
}

const SideNav: React.FunctionComponent<ISideNavProps> = ({ styles }) => {
  return (
    <nav
      className={`flex flex-col h-screen px-[60.74px] py-[38.75px] gap-[50.7px] ${
        styles ? styles : ""
      }`}
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
              />
            ))}
          </div>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between">
        <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
          <Image src={"/blessing.png"} fill alt="blessing" />
        </div>

        <p className="text-[15px] font-customMed text-[#56616B]">
          Blessing Daniels
        </p>

        <p>...</p>
      </div>
    </nav>
  );
};

export default SideNav;
