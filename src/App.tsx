import { Inventory } from "./Inventory";

const App = () => (
  <div className="App">
     <Inventory jsonFile="inventory1.json" />
     <Inventory jsonFile="inventory2.json" />
  </div>
);

export default App;
