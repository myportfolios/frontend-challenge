import React, { useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DetailsPage from "../src/pages/DetailsPage";
import PlacesPage from "../src/pages/PlacesPage";

export const context = React.createContext();


function App() {
  const initialState = [];
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const fetchData = async () => {
      let response =  await fetch("https://6025865136244d001797c552.mockapi.io/api/v1/places");
      let data = await response.json()
      setState(data)
    }
    fetchData()
  }, [])
  
  return (
    <context.Provider value={{state}}>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DetailsPage} />
        <Route path="/places/2" component={PlacesPage} />
    </Switch>
    </BrowserRouter>
    </context.Provider>
  );
}

export default App;
