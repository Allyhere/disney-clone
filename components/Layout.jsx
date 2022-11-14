import { Navbar } from "./Navbar";

export const Layout = ({ account, children }) => {
  return (
    <>
      <Navbar account={account} />
      {children}
    </>
  );
};
