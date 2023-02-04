import styles from "../styles/layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className="container mx-auto">
        <Link href="/boilerplate" className="text-black font-bold text-2xl">
          {" "}
          Justin Zhu{" "}
        </Link>
        <Link href="/projects" className="text-gray-400 text-2xl	">
          {" "}
          Projects{" "}
        </Link>
        <Link href="/archive" className="text-gray-400 text-2xl	">
          {" "}
          Blog{" "}
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
}
