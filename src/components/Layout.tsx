import * as React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-cols w-full h-screen">
      <div className="w-[30%] min-w-[250px] max-w-[304px] h-full overflow-y-auto border-r-[1px] border-[#EFF1F6]">
        <SideNav />
      </div>

      <div className="h-full flex-1 relative overflow-y-auto">
        <div className="h-[68px] sticky bg-white top-0 z-[1]">
          <Header />
        </div>

        <main className="py-6 px-[60px]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
