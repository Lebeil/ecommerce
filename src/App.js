import React, {Fragment, useState, useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Views/Home/Home";
import Cart from "./Views/Cart/Cart";
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
      <Router>
        <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>

        <Route exact path='/foo' component={()=> <Home
            loadCategory={loadCategory}
            category={category}
            isFiltering={isFiltering}
            addToCart={setCount}
            filtered={filtered}
        />}
        />
        <Route path='/cart' component={Cart}/>
      </Router>

    </Fragment>
  );
}

export default App;
