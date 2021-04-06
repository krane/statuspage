import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubIcon, KraneLogo } from "./Icons";

export default function Header() {
  return (
    <header className="px-8 text-gray-600 body-font border-b border-gray-100 w-screen">
      <div className="m-auto">
        <div className="container mx-auto flex flex-wrap py-4 flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <KraneLogo height="55" width="55" />
            </a>
          </Link>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-lg justify-center space-x-4">
            <NavLink href="/" label="Home" />
            <NavLink href="/activity" label="Activity" />
          </nav>

          <a href="https://github.com/krane" target="_blank">
            <button className="items-center bg-gray-100 border-0 p-3  focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0 hidden md:flex">
              <GithubIcon />
              <span className="ml-2">View on GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={clsx("text-black", {
          "font-bold": router.pathname == href,
        })}
      >
        {label}
      </a>
    </Link>
  );
}
