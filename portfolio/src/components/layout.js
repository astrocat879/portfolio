import styles from "../styles/layout.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-start py-4 md:px-16 bg-slate-100">
        <div className="w-full md:w-fit text-center md:text-left md:px-6">
          <Link href="/" className="text-black font-bold text-2xl">
            {" "}
            Justin Zhu{" "}
          </Link>
        </div>
        <div className="w-full md:w-fit text-center md:text-left">
          <Link href="/archive" className="text-gray-500 text-xl p-2">
            {" "}
            Blog{" "}
          </Link>
          <Link href="/projects" className="text-gray-500 text-xl p-2">
            {" "}
            Projects{" "}
          </Link>
        </div>
      </div>
      <div className="flex mx-4 sm:mx-16 mt-6 lg:mx-36 lg:mt-6">
        <main>{children}</main>
      </div>
      <footer className="flex justify-center content-end">
        <Link href="https://devpost.com/zhujustin879"><img className="m-1" src="https://i.imgur.com/V4Q4jI1.png" alt="Devpost" width="42px" height="42px"></img></ Link>
        <Link href="https://github.com/astrocat879"><img className="m-1" src="https://i.imgur.com/ItAdieS.png" alt="GitHub" width="42px" height="42px"></img></Link>
        <Link href="https://www.linkedin.com/in/justin-zhu-0317681a1/"><img className="m-1" src="https://i.imgur.com/3UOad2R.png" alt="LinkedIn" width="42px" height="42px"></img></Link> 
      </footer>
    </div>
  );
}
