import { useEffect } from "react";
// import { useState } from "react";

function Counter({ count, setCount }) {
  // useState mengembalikan sebuah array dengan 2 elemen: [state, setState]
  //   const [count, setCount] = useState();

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  // useEffect import dari react
  // componentDidMount -> fetch API
  //   useEffect(() => {
  //     console.log("contoh componentDidMount");
  //   }, []);

  //   // componentDidMount + componentDidUpdate -> updateForm
  //   // [] -> dependencyList
  //   useEffect(() => {
  //     console.log("panggil setiap count state berubah");
  //   }, [count]);

  // componentDidMount
  useEffect(() => {
    // componentWillUnmount
    return () => {
      console.log("component hilang");
    };
  }, [count]); // componentDidUpdate

  return (
    <>
      <button onClick={handleDecrement} className="btn btn-primary">
        -
      </button>
      <span className="mx-2">{count}</span>
      <button onClick={handleIncrement} className="btn btn-primary">
        +
      </button>
    </>
  );
}

export default Counter;

// webstorm -> rsc: react stateless component: install plugin react
// vscode -> rfc, rfce, (rfcp: proptypes) rafc, rafce, (rafcp: proptypes)
