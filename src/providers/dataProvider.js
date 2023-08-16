import React, { createContext, useState } from "react";

const Context = createContext();

function DataProvider({ children }) {
  const [currentData, setCurrentData] = useState(null);
  return <Context value={{ currentData, setCurrentData }}>{children}</Context>;
}

export default Context;
export { DataProvider };
