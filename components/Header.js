import HeaderIcons from "./HeaderIcons";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";

export default function Header() {
  return (
    <div className="select-none px-8 bg-gray-700 text-gray-200 flex flex-col justify-center items-center sm:flex-row justify-between">
      <div className="flex p-4">
        <HeaderIcons Icon={HomeIcon} title="HOME" />
        <HeaderIcons Icon={UserIcon} title="ACCOUNT" />
        <HeaderIcons Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcons Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        className="cursor-pointer active:brightness-110"
        width="100"
        height="100"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
      />
    </div>
  );
}
