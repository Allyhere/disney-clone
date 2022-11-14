import { Layout } from "../components/Layout";
import { fetchAccount } from "../lib/CMSService";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps, account }) => {

  return (
    <>
      <Layout account={account} >
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

MyApp.getInitialProps = async () => {
  const { account } = await fetchAccount();
  return { account }
}

export default MyApp;
