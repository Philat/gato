import React, {createContext, useState} from "react";
import Kitchen_Data from '../kitchen'

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
    const [products] = useState(Kitchen_Data);

    return (
      <ProductsContext.Provider value={{products}}>
        {
        children
        }
      </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;