import React, {Fragment} from 'react';
import Modal from '../Modal/Modal';

const Card = ({item, addToCard, count}) => {
    return (
        <Fragment>
            <div className="col-sm-4">
                <div className="card carte">
                    <img
                        width="170"
                        height="290"
                        src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
                        className="card-img-top"
                        alt="Orange"
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            {item.name}
                        </h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <p>{item.price}€</p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target={`#${item.ref}`}
                        >
                            Acheter
                        </button>
                    </div>
                </div>
            </div>
            <Modal item={item} addToCard={addToCard} count={count}/>
        </Fragment>
    );
};

export default Card;
