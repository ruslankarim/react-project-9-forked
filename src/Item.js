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
    <div className="item">
      <img src="Сюда идет картинка" alt="" />
      <div className="item-info">
        <h2>Сюда идет название</h2>
        <p>Сюда идет описание</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="item-total">{total ? total : ""}</h3>
        <button className="item-more" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
