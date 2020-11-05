import React from 'react';
import Card from "./Card/Card";

const List = ({data, addToCard, category}) => {

    return (
        <div className="col-sm">
          <div className="row">
              {data.map((item) => <Card key={item.ref} item={item} addToCard={addToCard} category={category}/>)}
          </div>
        </div>
    );
};

export default List;
