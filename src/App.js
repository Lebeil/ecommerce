import Navbar from "./Components/Navbar";
import SideMenu from "./Components/SideMenu";
import Card from './Components/Card';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    row: {
        display: "flex",
        flexDirection: "column",
    }
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar/>
            <Grid container>
                <Grid item xs={12} sm={3}>
                    <SideMenu/>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Grid className={classes.row}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
