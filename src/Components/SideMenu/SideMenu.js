import React from 'react';
import './SideMenu.css'

const SideMenu = () => {
    const links = ["Légumes","Fruits","Produits Frais","Epicerie","Boissons"]

    return (
        <div className="col-sm-2">
            <ul className="sidebar">
                {links.map((link,index)=> {
                    return <li key={index}>{link}</li>
                })}
            </ul>
        </div>
    );
};

export default SideMenu;
