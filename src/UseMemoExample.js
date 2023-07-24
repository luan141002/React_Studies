import { useState, useEffect, useMemo, useRef } from "react";

function CalTotalPrice() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
  };
  const total = useMemo(() => {
    const result = products.reduce(
      (total, current) => total + current.price,
      0
    );
    setName("");
    setPrice("");
    nameRef.current.focus();

    return result;
  }, [products]);
  return (
    <>
      <div>
        <input
          value={name}
          ref={nameRef}
          placeholder="Enter name ..."
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          value={price}
          placeholder="Enter price ..."
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Add</button>
        <br />
        Total : {total}
        <ul>
          {products.map((prod, index) => (
            <li key={index}>
              {prod.name}- {prod.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default CalTotalPrice;
