import Navbar from './Components/Navbar'
import SideMenu from "./Components/SideMenu/SideMenu";
import List from "./Components/List"
import './App.css'
import {list} from './data'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
          <div className="row">
              <SideMenu/>
              <div className="col-sm">
                  <div className="row">
                      <List data={list}/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
