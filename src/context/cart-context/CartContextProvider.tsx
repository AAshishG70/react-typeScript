import { useState, ReactNode, createContext } from "react";

interface ICartContext {
  isOpen: boolean;
  setIsOpen(state: boolean): void;
}

const CartContext = createContext<ICartContext>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};
