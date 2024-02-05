'use client'
import Image from "next/image";
import React from "react";

export default async function page({ searchParams }) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}`
  );
  if (!res.ok) console.log("eawe");
  const data = await res.json();
  const results = data.items;
  console.log(results);

  return (
    <div>
     
    </div>
  );
}
