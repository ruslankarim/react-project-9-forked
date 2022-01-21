import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://covid-shop-mcs.herokuapp.com")
                const data = await response.json()
                if (data) {
                    setItems(data)
                }
                console.log(data)
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])
  return <div className="flex">
      {items.map((item) => <Item info={item}/>)}
  </div>;
}
