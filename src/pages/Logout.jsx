import Head from "next/head";
import { auth, provider } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

const Logout = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      router.push("/Login");
    });
  };
  return (
    <>
      <Head>
        <title>Logout Page</title>
      </Head>
      <div>
        <h1 className="text-red-500">ログアウト</h1>
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Googleログアウト
        </button>
      </div>
    </>
  );
};

export default Logout;
