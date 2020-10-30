import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=> ({
   ul: {
       listStyleType: "none",
   }
}))

const SideMenu = () => {
    const classes = useStyles()
    const links = ["Légumes","Fruits","Produits Frais","Epicerie","Boissons"]

    return (
        <div>
            <ul className={classes.ul}>
                {links.map(link=>{
                    return <li>{link}</li>
                })}
            </ul>
        </div>
    );
};

export default SideMenu;

