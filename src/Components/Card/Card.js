import React, {Fragment} from 'react';

const Card = (props) => {
    const {panier} = props;
    return (
        <Fragment>
            <div className="col-sm-4">
                <div className="card carte">
                    <img
                        width="170"
                        height="290"
                        src={process.env.PUBLIC_URL + `/assets/${panier.category}/${panier.image}`}
                        className="card-img-top"
                        alt="Orange"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{panier.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <p>{panier.price}€</p>
                        <a href="foo" className="btn btn-primary">Acheter</a>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Card;
