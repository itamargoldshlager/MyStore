import React from 'react';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Components/MainPage/Header"
import SideBarDrawer from "./Components/MainPage/SideBarDrawer";
import RouterPage from "./Components/Router/RouterPage";
import {BrowserRouter as Router} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const MyStore: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Router>
                <Header
                    handleDrawerOpen={()=>handleDrawerOpen()}
                    open={open}
                />
                <SideBarDrawer
                    handleDrawerClose={()=> handleDrawerClose()}
                    open={open}
                />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <RouterPage/>

                    {/*<GenericTable rowComponent={TableOrder} rows={[{status: "2", date: new Date(), totalPrice:"20"}]}/>*/}
                </main>
            </Router>
        </div>
    );
};

export default MyStore;
