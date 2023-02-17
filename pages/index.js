import { useState, useEffect } from "react";
import Head from "next/head";
import { GithubIcon } from "components/icons/GithubIcon";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <>
      <Head>
        <title>Fashion app</title>
        <meta name="description" content="Fashion app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <a
          href="https://github.com/vana-com/vana-mit-hackathon"
          target="_blank"
        >
          <GithubIcon />
        </a>
      </header>
      <main className="main">
        <div className="content container">
          <div className="space-y-4"></div>

          {/** Show the images a user has created */}
          {/* <div className="pt-1 space-y-4">
            {user?.textToImage?.map((image, i) => (
              <img src={image} key={i} className="w-full" />
            ))}
          </div> */}
        </div>
      </main>
    </>
  );
}
