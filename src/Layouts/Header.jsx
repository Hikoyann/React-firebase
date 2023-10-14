import Link from "next/link";
import Login from "../pages/Login";

export const Header = () => {
  const { isAuth, setIsAuth } = Login();
  console.log(isAuth);
  return (
    <header className="flex justify-center items-center border-b w-full h-24 mb-4 bg-Amber-700">
      <>
        <Link
          href="/"
          className="inline-block py-2 px-6 text-xl text-gray-700 hover:text-blue-500 focus:text-blue-500 active:text-blue-500"
        >
          Home
        </Link>
        <Link
          href="/CreatePost"
          className="inline-block py-2 px-6 text-xl text-gray-700 hover:text-blue-500 focus:text-blue-500 active:text-blue-500"
        >
          CreatePost
        </Link>

        <Link
          href="/Login"
          className="inline-block py-2 px-6 text-xl text-gray-700 hover:text-blue-500 focus:text-blue-500 active:text-blue-500"
        >
          Login
        </Link>

        <Link
          href="/Logout"
          className="inline-block py-2 px-6 text-xl text-gray-700 hover:text-blue-500 focus:text-blue-500 active:text-blue-500"
        >
          Logout
        </Link>
      </>
    </header>
  );
};
