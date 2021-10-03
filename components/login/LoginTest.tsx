// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/client";

const LoginTest: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const [session, loading] = useSession();

  let right = null;

  if (loading) {
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/api/auth/signin">
          <a
            className="block w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            data-active={isActive("/signup")}
          >
            Log in with GitHub
          </a>
        </Link>
      </div>
    );
  }

  if (session) {
    right = (
      <div className="right">
        <p>{session.user.name}</p>
        <Link href="/dashboard">
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-2xl font-bold text-gray-600 sm:text-2xl dark:text-white">
        Device Register App
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-center w-full ">
          <div className="">{right}</div>
        </div>
      </div>
    </div>
    // {left}
  );
};

export default LoginTest;
