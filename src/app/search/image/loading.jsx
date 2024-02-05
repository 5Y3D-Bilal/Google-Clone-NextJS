import React from "react";

export default function loading() {
  return (
    <div className="pt-10  mx-2 w-full lg:pl-52 sm:max-w-6xl flex sm:space-x-8 gap-10 flex-col sm:flex-row pb-42">
      <div>
        <div className="loader">
          <div className="wrapper"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
      <div className="hidden sm:inline-flex">
        <div className="loader">
          <div className="wrapper"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
      <div>
        <div className="loader">
          <div className="wrapper"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
    </div>
  );
}
