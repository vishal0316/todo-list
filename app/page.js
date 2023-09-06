"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2 className="text-center">No task available</h2>;

  if (mainTask.length>0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
          <h5 className="text-xl font-semibold  ">{t.title}</h5>
          <h6 className="text-xl font-semibold">{t.desc}</h6>
        </div>
        <button onClick={() =>
        deleteHandler(i)} className="bg-red-500 px-4 py-2 rounded font-bold">Delete</button>

<button onClick={() =>
        deleteHandler(i)} className="bg-green-500  px-4 py-2 rounded font-bold">complete</button>
        </li>
 
    );
  });
}
  return (
    <>
      <h1 className="bg-slate-800 p-5 text-2xl font-bold text-center">
        My todo list
      </h1>

      <form onSubmit={sumbitHandler}>
        <input
          type="text"
          className="text-xl border-zinc-950 border-4 m-5 px-4 py-2 "
          placeholder="enter Title here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-xl border-zinc-950 border-4 m-5 px-4 py-2 "
          placeholder="enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-yellow-50  px-4 py-2 text-2xl font-bold rounded m-5">
          Add task
        </button>
      </form>
      <hr />

      <div className="p-8 bg-rose-200">
        {" "}
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
