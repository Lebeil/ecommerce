import React from 'react';
import SideMenu from "../../Components/SideMenu/SideMenu";
import List from "../../Components/List";
import {list} from "../../data";

const Home = ({loadCategory, category, isFiltering, filtered, setCount, count}) => {
    return (
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

    );
};

export default Home;
