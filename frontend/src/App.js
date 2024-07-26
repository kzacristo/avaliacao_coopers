import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";
import Register from "./components/Register";
import TodoList from "./components/TodoList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/todos" component={TodoList} />
        <Route path="/add-todo" component={Todo} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;
