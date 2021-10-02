import Head from "next/head";

const Dashboard = ({ allSpences }) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <section className="h-screen max-w-4xl p-8 mx-auto ">
        <h2 className="mb-3 text-3xl">This is the Dashboard</h2>
      </section>
    </>
  );
};

export default Dashboard;
