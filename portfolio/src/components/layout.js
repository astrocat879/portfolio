import styles from "../styles/layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex items-center flex-wrap bg-gray-100 p-6">
        <Link href="/" className="text-black font-bold text-2xl mr-6 ml-24">
          {" "}
          Justin Zhu{" "}
        </Link>
        <Link href="/projects" className="text-gray-500 text-xl mr-6">
          {" "}
          Projects{" "}
        </Link>
        <Link href="/archive" className="text-gray-500 text-xl mr-6">
          {" "}
          Blog{" "}
        </Link>
      </div>
      <div className="flex mx-36 mt-6">
        <main>{children}</main>
      </div>
    </div>
  );
}
