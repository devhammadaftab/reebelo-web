import { createContext, useState } from "react";
export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty = 1) => {
    const productExit = cart.find((item) => item._id === product._id);
    if (productExit) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...productExit, qty: productExit.qty + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  const removeFromCart = (product) => {
    let item = cart.find((item) => item._id == product._id);
    if (!item) return;
    if (item.qty <= 1) {
      let updatedCart = cart.filter((item) => item._id != product._id);
      setCart(updatedCart);
    } else {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const deleteProductFromCart = (product) => {
    let item = cart.find((item) => item._id == product._id);
    if (!item) return;
    let updatedCart = cart.filter((item) => item._id != product._id);
    setCart(updatedCart);
  };

  return (
    <globalContext.Provider
      value={{
        cart: cart,
        setCart: setCart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        deleteProductFromCart: deleteProductFromCart,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
