export default function HeaderIcons({ title, Icon }) {
  return (
    <div className="cursor-pointer flex flex-col w-20 m-4 justify-center items-center hover:text-white active:text-red-400">
      <Icon className="h-8" />
      <p className="my-2">{title}</p>
    </div>
  );
}
