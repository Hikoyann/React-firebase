import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const Index = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <div>
        {postList.map((post) => {
          return (
            <div key={post.id}>
              <div>
                <h1 className="text-red-500">{post?.title}</h1>
              </div>
              <div>{post?.text}</div>
              <div>
                <div>{post?.postText}</div>
                <div>@{post?.author.username}</div>
                <button>削除</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
