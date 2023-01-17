import Banner from "./component/Banner";
import Button from "./component/Button";
import Slogan from "./component/Slogan";
import Introduce from "./component/Introduce";

function App() {
  return (
    <div className="App">
      < Banner />
      <Slogan/>
      <Introduce/>
      <Button name="View Plans"/>
      <Button name="All Features"/>
      
    </div>
  );
}

export default App;
