import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    (async () => {
      try {
        const { data, status } = await axios.get("/api/categories");
        setShowLoader(false);

        if (status === 200) {
          setCategories(data.categories);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, showLoader }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
