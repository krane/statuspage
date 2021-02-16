import Link from "next/link";
import { KraneLogo } from "../components/global/Icons";

export default function FourOhFour() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-col mx-auto my-96 space-y-10 items-center">
        <KraneLogo />
        <div className="flex flex-col text-center space-y-4">
          <h1 className="font-extrabold text-5xl">404</h1>
          <Link href="/">
            <a className="py-4 px-6 rounded-md hover:shadow-lg">
              ← Go back home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
