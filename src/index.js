import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <div className="flex justify-center items-center">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setLogin(false)}>
                Выйти
            </button>
        </div>

      </>
    );
  } else {
    return (
        <div className="flex justify-center h-full items-center">
            <div className="flex flex-col items-center w-1/2 py-8 rounded border-2" >
                <div className="mb-8">
                    <h1 className="text-blue-600 text-2xl">Нужно залогиниться!</h1>
                </div>
                <div>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setLogin(true)}>
                        Войти
                    </button>
                </div>

            </div>
        </div>
    );
  }
}

render(<App />, document.querySelector("#root"));
