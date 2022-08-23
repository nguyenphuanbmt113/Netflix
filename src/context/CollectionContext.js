import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
const CollectionContext = createContext();
const CollectionContextProvider = ({ children }) => {
  const [listCollection, setListCollection] = useState([]);
  const handleCollection = (item) => {
    const check = listCollection.every((i) => {
      return i.id !== item.id;
    });
    if (check) {
      setListCollection((p) => [...p, item]);
    } else {
      setListCollection([item]);
    }
    toast.success("Add to Collections");
  };
  const deleteCollection = (id) => {
    const newArr = listCollection.filter((item) => {
      return item.id !== id;
    });
    toast.success("Remove from Collections");
    setListCollection(newArr);
  };
  return (
    <CollectionContext.Provider
      value={{ listCollection, handleCollection, deleteCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};
const Collection = () => {
  return useContext(CollectionContext);
};
export { CollectionContextProvider, Collection };
