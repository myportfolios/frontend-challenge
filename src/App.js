import React, {useReducer, useEffect, useState} from "react";
import DetailsPage from "../src/pages/DetailsPage";

export const context = React.createContext();


function App() {
  const initialState = [];
  const [state, setState] = useState(initialState)
  useEffect(async () => {
    let response =  await fetch("https://6025865136244d001797c552.mockapi.io/api/v1/places");
    let data = await response.json()
    setState(data)
  }, [])
  
  return (
    <context.Provider value={{state}}>
    <div className="App">
      <h1>hi</h1>
      <DetailsPage />
    </div>
    </context.Provider>
  );
}

export default App;
