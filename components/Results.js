import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  return (
    <div className="bg-gray-700 text-gray-200 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <Thumbnail key={result.key} result={result} />
      ))}
    </div>
  );
}
