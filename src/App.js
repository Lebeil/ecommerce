import React, {Fragment, useState, useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import SideMenu from "./Components/SideMenu/SideMenu";
import List from "./Components/List"
import './App.css'
import {list} from './data'

const App = ()=> {
    const [category, setCategory] = useState(0)
    const [isFiltering, setFiltering] = useState(false)
    const [filtered, setFiltered] = useState(false)
    const [count, setCount] = useState(1)
    const loadCategory = (index)=> {
        setCategory(index)
    }
    const filterResults =(input)=> {
        let fullList = list.flat() /*affiche toute la liste sans catégorie*/
        let results = fullList.filter(item=> {
            const name = item.name.toLowerCase()
            const term = input.toLowerCase()
            return name.indexOf(term) > -1
        })
        setFiltered(results)
    }

    useEffect(()=> {
        console.log(isFiltering)
    })

  return (
    <Fragment>
      <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>
      <div className="container">
          <div className="row mt-5">
              <SideMenu load={loadCategory} category={category}/>
              <div className="col-sm">
                  <div className="row">
                      <List
                          data={isFiltering ? filtered : list[category]}
                          addToCard={setCount}
                          count={count}
                          category={category}
                      />
                  </div>
              </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
