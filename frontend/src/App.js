import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components and screens
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Route path="/" component={RegisterScreen} exact />
    </Router>
  );
}

export default App;
