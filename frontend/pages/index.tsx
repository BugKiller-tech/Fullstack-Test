import Head from "next/head";

import styles from "../styles/Home.module.css";

import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Welcome to our homepage. Please click the menu above to see.</div>
    </div>
  );
}
