import ImageSearchResult from "@/components/ImageSearchResult";
import Link from "next/link";
import React from "react";

export default async function page({ searchParams }) {
  // const startIndex = searchParams.start || "1"
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}&searchType=image`
  );
  if (!res.ok) console.log("eawe");
  const data = await res.json();
  const results = data.items;
  console.log(results);

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No Results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something elese{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div className="">{results && <ImageSearchResult results={data} />}</div>
  );
}
