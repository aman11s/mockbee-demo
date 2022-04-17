import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productLoader, setProductLoader] = useState(false);

  useEffect(() => {
    setProductLoader(true);
    (async () => {
      try {
        const { data, status } = await axios.get("/api/products");

        setProductLoader(false);
        if (status === 200) {
          setProducts(data.products);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, productLoader }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
