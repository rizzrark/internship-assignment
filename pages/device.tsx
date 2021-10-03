import Head from "next/head";
import { signIn, signOut, useSession, getSession } from "next-auth/client";
import { useState } from "react";
import prisma from "@/lib/client";
import Link from "next/link";

// Components
import TableIndex from "@/components/table/TableIndex";

export default function Device({ allDevices, user }) {
  const [session, loading] = useSession();
  const [userData, setUserData] = useState(user);
  console.log(userData);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && (
        <div className="mt-12 text-lg font-bold text-center">Loading...</div>
      )}
      {!loading && (
        <div>
          {!session && (
            <div className="flex items-center justify-center h-screen">
              <div className="flex flex-col w-full max-w-sm px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center text-2xl font-bold text-gray-600 sm:text-2xl dark:text-white">
                  Device Register App
                </div>
                <div className="m-6 text-xl text-center">Not signed in</div>
                <button
                  className="block px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  onClick={() => signIn()}
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
          {session && (
            <>
              <div>
                <nav className="sticky top-0 flex items-center justify-between px-8 py-4 text-lg shadow bg-gray-50">
                  <div className="text-2xl font-bold text-gray-700">
                    Devices Register
                  </div>
                  <ul className="flex max-w-lg mx-auto space-x-8 font-bold tracking-wide text-gray-700">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>|</li>
                    <li>
                      <Link href="/device">
                        <a>Device</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="flex items-center space-x-8">
                    <div className="text-xl font-medium text-gray-700">
                      Signed in as{" "}
                      <span className="font-bold underline">
                        {session.user.name}
                      </span>
                    </div>
                    <button
                      className="block px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </div>
                </nav>
                {/* main */}
                <main className="flex items-center justify-center text-gray-700">
                  <section className="flex flex-col items-center p-8 mx-12 space-x-8">
                    <div className="text-xl font-bold text-gray-700">
                      My device
                    </div>
                    <div className="m-6">
                      <TableIndex tableData={userData} />
                    </div>
                  </section>
                </main>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  const user = await prisma.user.findUnique({
    where: {
      name: session.user.name,
    },
  });

  return {
    props: { user },
  };
};
