import React from "react";
import { Route, Switch } from "react-router-dom";
import TodoPage from "./todo/TodoPage";
import UsersPage from "./user/UsersPage";
import Header from "./common/Header";
import PageNotFound from "./common/PageNotFound";
function App() {
  return (
    <div className="container-fluid">
    <Header/>
      <Switch>
        <Route exact path="/" component={TodoPage} />
        <Route path="/users" component={UsersPage} />
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
