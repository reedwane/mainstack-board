import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
interface IHeaderProps {
  openNav?: boolean;
  setOpenNav?: (val: boolean) => void;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  openNav,
  setOpenNav,
}) => {
  return (
    <header
      className={`px-8 xl:px-[60px] py-[22px] flex items-center justify-between`}
    >
      <h1 className={`text-[20px] leading-[24px] font-customBold`}>
        Dashboard
      </h1>

      <span className="md:hidden" onClick={() => setOpenNav?.(!openNav)}>
        {openNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </span>
    </header>
  );
};

export default Header;
