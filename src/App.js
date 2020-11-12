import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";

const Hatspage = () => {
  return <h1>HATS PAGE</h1>;
};
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
