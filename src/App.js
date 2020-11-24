import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import GenealogiaProject from "./Pages/GenealogiaProject/GenealogiaProject";
import Header from "./CommonComponents/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
      <Header/> 
      

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/app" component={GenealogiaProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
