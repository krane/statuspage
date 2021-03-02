import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-col mx-auto my-auto space-y-2 items-center">
        <h1 className="font-extrabold text-5xl">404</h1>
        <Link href="/">
          <a>← Go back home</a>
        </Link>
      </div>
    </div>
  );
}
