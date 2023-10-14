import { addDoc, collection } from "firebase/firestore";
import Head from "next/head";
import { useState } from "react";
import { auth, db } from "../utils/firebase";
import { useRouter } from "next/router";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const router = useRouter();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>CreatePost Page</title>
      </Head>
      <div>
        <h1 className="text-red-500">記事を投稿</h1>
        <div>
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <button onClick={createPost}>投稿する</button>
      </div>
    </>
  );
};

export default CreatePost;
