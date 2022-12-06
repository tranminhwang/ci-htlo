import { createContext, useState, useEffect } from "react";

export const ContextDemo = createContext();

export const ContextDemoProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://61ebae077ec58900177cdd0b.mockapi.io/nft")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleBuy = () => {
    setCounter(counter + 1);
  };

  return (
    <ContextDemo.Provider
      value={{
        products,
        counter,
        isOpen,
        handleBuy,
        setIsOpen,
      }}
    >
      {children}
    </ContextDemo.Provider>
  );
};
