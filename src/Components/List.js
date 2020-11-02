import React from 'react';
import Card from "./Card/Card";

const List = ({data, addToCard, count}) => {

    return (
        <div className="col-sm">
          <div className="row">
              {data.map((item) => <Card key={item.ref} item={item} addToCard={addToCard} count={count}/>)}
          </div>
        </div>
    );
};

export default List;
