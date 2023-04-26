import * as React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  const [openNav, setOpenNav] = React.useState(false);
  return (
    <div className="flex flex-cols w-full h-screen">
      <div
        onClick={() => setOpenNav(false)}
        className={`${
          openNav ? "block" : "hidden"
        } md:hidden z-[2] bg-[#eff1f674] absolute w-screen h-screen`}
      />

      <div
        className={`${
          openNav ? "block" : "hidden"
        } md:block absolute z-[3] md:relative w-[30%] min-w-[250px] xl:max-w-[304px] h-full overflow-y-auto border-r-[1px] border-[#EFF1F6] bg-white`}
      >
        <SideNav />
      </div>

      <div className="h-full flex-1 relative overflow-y-auto">
        <div className="h-[68px] sticky bg-white top-0 z-[1]">
          <Header openNav={openNav} setOpenNav={setOpenNav} />
        </div>

        <main className="px-4 py-6 xl:px-[60px]">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
