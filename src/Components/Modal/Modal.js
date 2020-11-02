import React, {Fragment} from 'react';
import './Modal.css';

const Modal = ({item}) => {
    return (
        <Fragment>
            <div className="modal fade" id={item.ref} tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{item.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`} width="170" height="170" alt="citron"/>
                                </div>
                                <div className="col-sm ml-4">
                                    <p>Descriptif</p>
                                    <h3>{item.price} € /{item.unit}</h3>
                                    <div
                                        className="btn-group"
                                        role="group"
                                        aria-label="Basic example"
                                    >
                                        <button
                                            type="button"
                                            className="btn btn-secondary">
                                            -
                                        </button>
                                        <span className="btn btn-light qty">1</span>
                                        <button
                                            type="button"
                                            className="btn btn-secondary">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;
