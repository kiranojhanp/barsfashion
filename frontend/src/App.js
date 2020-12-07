import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

// components and screens
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Container>
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </Router>
  );
}

export default App;
