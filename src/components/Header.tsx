interface IHeaderProps {
  styles?: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ styles }) => {
  return (
    <header className={`px-[60px] py-[22px] ${styles ? styles : ""}`}>
      <h1 className={`text-[20px] leading-[24px] font-customBold`}>
        Dashboard
      </h1>
    </header>
  );
};

export default Header;
