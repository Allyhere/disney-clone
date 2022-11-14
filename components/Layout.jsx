import { Navbar } from "./Navbar";

export const Layout = ({ children, account }) => {
  return (
    <>
      <Navbar account={account} />
      {children}
    </>
  );
};
