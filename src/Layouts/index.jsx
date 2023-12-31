import { Header } from "./Header";

const Layout = (props) => {
  return (
    <div className="flex flex-col items-center mx-auto px-2 min-h-screen max-w-2xl">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
