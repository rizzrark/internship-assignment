import Link from "next/link";

const TopNav: React.FC = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-center py-4 text-lg shadow bg-gray-50">
      <ul className="flex max-w-lg mx-auto space-x-8 font-bold tracking-wide text-gray-700">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
