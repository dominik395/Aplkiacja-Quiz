import React from "react";
import Navigation from "./main/Navigation";
import 'bulma/css/bulma.min.css'
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
