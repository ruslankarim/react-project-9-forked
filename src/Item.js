import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="flex flex-col p-8 border-2 m-5 rounded">
      <img className="rounded mb-4" src={info.image} alt="" />
      <div className="ml-2 mb-4">
        <h2 className="text-2xl" >{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="flex flex-row pl-7 pr-7">
        <button
          className="basis-1/4 border-2 rounded-full shadow-md"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="basis-1/2 text-center">{total ? total : ""}</h3>
        <button className="basis-1/4 border-2 rounded-full shadow-md" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
