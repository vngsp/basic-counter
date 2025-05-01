"use client"
import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);


  const handleIncrementBtn = () => {
    setCount((count) => count + increment);
  }

  const handleResetBtn = () => {
    setCount(0);
  }

  const handleDecrementBtn = () => {
    setCount((count) => count - increment);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col items-center">
      <h1 className="text-4xl mt-12">Counter</h1>
      <div className="border-2 rounded-xl border-emerald-200 p-4 mt-4 w-full max-w-lg flex flex-col justify-center items-center">
        <div className="flex gap-2">
          <input onChange={(e) => setIncrement(Number(e.target.value))} type="number" placeholder="Set Counter" className="rounded-md p-2 border-2 border-emerald-300" />
          <div className="rounded-md p-2 border-2 border-emerald-300">{count}</div>
        </div>
        <div className="flex justify-around gap-2">
          <button onClick={handleIncrementBtn} className="bg-emerald-300 rounded-md p-2 mt-4">+ Increment</button>
          <button onClick={handleResetBtn} className="bg-emerald-300 rounded-md p-2 mt-4">Reset</button>
          <button onClick={handleDecrementBtn} className="bg-emerald-300 rounded-md p-2 mt-4">- Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default Page;