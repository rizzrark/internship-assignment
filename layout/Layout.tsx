import TopNav from "@/components/navigation/TopNav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* <TopNav /> */}
      <div className="h-screen text-gray-800 ">{children}</div>
    </>
  );
};

export default Layout;
