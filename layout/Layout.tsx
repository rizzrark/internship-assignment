import TopNav from "@/components/navigation/TopNav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <TopNav />
      <div className="flex items-center justify-center h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
