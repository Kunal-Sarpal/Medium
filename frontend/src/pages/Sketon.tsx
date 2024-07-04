import React from 'react';

function Skeleton({ num }: { num: number }) {
  return (
    <div className="max-w-screen-md m-auto">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="font-sans shadow p-5 rounded-md m-2 select-none flex flex-col animate-pulse bg-white">
          <div className="flex gap-1 text-zinc-500 font-light text-sm items-center">
            <div className="relative inline-flex items-center justify-center w-4 h-4 border-2 border-zinc-600 overflow-hidden bg-gray-100 rounded-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded-full w-full mt-3"></div>
          <div className="h-4 bg-gray-200 rounded-full w-3/4 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/2 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/3 mt-3"></div>
        </div>
      ))}
    </div>
  );
}

export default Skeleton;
