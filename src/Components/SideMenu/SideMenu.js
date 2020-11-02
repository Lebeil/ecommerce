import React from 'react';
import './SideMenu.css'

const SideMenu = ({load, category}) => {
    const links = ["Fruits", "Légumes", "Produits Frais", "Epicerie", "Boissons"]

    return (
        <div className="col-sm-2">
            <ul className="sidebar">
                {links.map((link, index) => {
                    return (
                        <li
                            className={category === index ? 'active' : null}
                            key={index}
                            onClick={() => load(index)}
                        >
                            {link}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SideMenu;
