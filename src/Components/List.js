import React from 'react';
import Card from "./Card/Card";

const List = ({data, category}) => {
    const fruits = data[category] /*Ciblez les fruits*/
    console.log(fruits)
    return (
        <div className="col-sm">
          <div className="row">
              {fruits.map((fruit, index) => <Card key={index} panier={fruit}/>)}
          </div>
        </div>
    );
};

export default List;
