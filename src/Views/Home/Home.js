import React, {Fragment} from 'react';
import SideMenu from "../../Components/SideMenu/SideMenu";
import List from "../../Components/List";
import {list} from "../../data";

const Home = ({loadCategory,category,isFiltering,addToCart,filtered}) => {
    return (
        <Fragment>
            <div className="container">
                <div className="row mt-5">
                    <SideMenu load={loadCategory} category={category}/>
                    <div className="col-sm">
                        <div className="row">
                            <List
                                data={isFiltering ? filtered : list[category]}
                                addToCard={addToCart}
                                category={category}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
