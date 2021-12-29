import requests from "../utils/requests";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-center p-4 bg-gray-600 text-gray-200 text-xl sm:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h1
          className="cursor-pointer mx-8 my-2 select-none hover:text-white active:text-red-400 lg:select-auto"
          key={key}
          onClick={() => router.push(`?genre=${key}`)}
        >
          {title}
        </h1>
      ))}
    </div>
  );
}
