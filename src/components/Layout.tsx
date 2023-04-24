import * as React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-cols w-full h-full">
      <SideNav styles="w-[30%] min-w-[250px] max-w-[304px] border-r-[1px] border-[#EFF1F6]" />
      <div className="w-[70%]">
        <Header styles="h-[68px]" />

        <main className="py-6 px-[60px]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
