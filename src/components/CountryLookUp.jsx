"use client";
import React, { useEffect, useState } from "react";

export default function CountryLookUp() {
  const [country, setCountry] = useState("US");

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(
        `https://extreme-ip-lookup.com/json/?key=yy9aKwejp0EGAYJGbY9e`
      )
        .then((ress) => ress.json())
        .then((data) => setCountry(data.country));
    };
    getCountry();
  }, []);
  return <div>{country}</div>;
}
