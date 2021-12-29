import Image from "next/image";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className=" p-4 cursor-pointer select-none hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform duration-200">
      <Image
        className="object-cover"
        width="200"
        height="100"
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path}`}
      />
      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-xl font-bold my-2">
          {result.title || result.original_title || result.name}
        </h2>
        <p>{result.release_date || result.first_air_date}</p>
      </div>
    </div>
  );
}
