import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hemdem Art</title>
        <meta name="description" content="Illumination art by Serife Orak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/hemdemarts.png" alt="Hemdem Arts" width={300} height={300} />
        <h1 className={styles.title}>coming soon.</h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.instagram.com/hemdem.arts" target="_blank" rel="noopener noreferrer">
          <span className={styles.logo}>
            <Image src="/instagram.png" alt="Instagram Logo" width={72} height={72} />
          </span>
        </a>
      </footer>
    </div>
  );
}
