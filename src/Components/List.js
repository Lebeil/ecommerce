import React from 'react';
import Card from "./Card/Card";

const List = (props) => {
    const {data} = props
    const fruits = data[0]
    console.log(fruits)
    return (
        <div className="col-sm">
          <div className="row">
              {fruits.map((fruit,index) => <Card key={index} panier={fruit}/>)}
          </div>
        </div>
    );
};

export default List;
