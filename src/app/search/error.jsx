"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went worng!</h1>
      <button onClick={reset} className="text-blue-500">
        Try Again!
      </button>
    </div>
  );
}
