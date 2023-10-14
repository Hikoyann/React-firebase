import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <div>
        <div>
          <div>
            <h1 className="text-red-500">タイトル</h1>
          </div>
        </div>
        <div>Reactの学習中</div>
        <div>@ひこやん</div>
        <button>削除</button>
      </div>
    </>
  );
};

export default Index;
