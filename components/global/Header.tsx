import Link from "next/link";
import { GithubIcon, KraneLogo, StarIcon } from "./Icons";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-6 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <KraneLogo />
            <span className="ml-3 text-xl font-semibold">Krane</span>
          </a>
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/activity">
            <a className="hover:text-gray-900">Activity</a>
          </Link>
        </nav>
        <a href="https://github.com/krane" target="_blank">
          <button className="inline-flex items-center bg-gray-100 border-0 p-3  focus:outline-none hover:bg-gray-200  rounded-md text-base mt-4 md:mt-0">
            <GithubIcon />
            <span className="ml-2">View on Github</span>
          </button>
        </a>
      </div>
    </header>
  );
}
