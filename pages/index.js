import Head from "next/head";
import { useMoralis } from "react-moralis";

import Login from "../components/Login";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Home = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className='h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-800'>
      <Head>
        <title>Metaverse Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mx-auto max-w-screen-2xl'>
        {/* Header */}
        <Header />

        {/* Messages */}
        <Messages />
      </div>

      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
};

export default Home;
