import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImageSearchResult({ results }) {
  return (
    <div className="pb-24 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((results) => (
          <div className="mb-8" key={results.link}>
            <div className="group">
              <Link href={results.image.contextLink}>
                <Image
                  src={results.link}
                  alt={results.title}
                  width={200}
                  height={200}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
                />
              </Link>
              <Link href={results.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {results.title}
                </h2>
              </Link>
              <Link href={results.image.contextLink}>
                <h2 className="group-hover:underline truncate text-gray-600">
                  {results.displayLink}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
