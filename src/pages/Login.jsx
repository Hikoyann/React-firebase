import Head from "next/head";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const loginInWithGoogle = () => {
    // googlログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      router.push("/");
    });
  };
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div>
        <h1 className="text-red-500">ログインして始めよう！</h1>
        <button
          onClick={loginInWithGoogle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Googleログイン
        </button>
      </div>
    </>
  );
};

export default Login;
