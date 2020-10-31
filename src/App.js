import React, {Fragment, useState} from 'react'
import Navbar from './Components/Navbar'
import SideMenu from "./Components/SideMenu/SideMenu";
import List from "./Components/List"
import './App.css'
import {list} from './data'

const App = ()=> {
    const [category, setCategory] = useState(0)
    const loadCategory = (index)=> {
        setCategory(index)
    }

  return (
    <Fragment>
      <Navbar/>
      <div className="container">
          <div className="row mt-5">
              <SideMenu load={loadCategory} category={category}/>
              <div className="col-sm">
                  <div className="row">
                      <List data={list} category={category}/>
                  </div>
              </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
