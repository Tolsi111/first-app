import styles from "./page.module.css";
import Link from "next/link";
import AppHeader from "@/components/header"; // @ symbol refers to root project

// Page content
export default function Home() {
  return (
    <main className={styles.main}>
      <AppHeader />
      <p className={styles.description}>
        {/* This way, a brand new page is always downloaded from the BE -> No longer SPA */}
        <a href="/about">About me anchor</a>
      </p>
      <p className={styles.description}>
        {/* NextJS stays SPA. Content of next page is still prerendered, but the UI is updated via client-side JS*/}
        <Link href={"/about"}>About me Link</Link>
      </p>
      <p className={styles.description}>
        {/* NextJS stays SPA. Content of next page is still prerendered, but the UI is updated via client-side JS*/}
        <Link href={"/blog"}>Blog</Link>
      </p>
    </main>
  );
}
