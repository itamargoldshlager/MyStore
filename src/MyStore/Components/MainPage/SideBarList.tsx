import React, {FC} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TvIcon from '@material-ui/icons/Tv';
import AndroidIcon from '@material-ui/icons/Android';
import ComputerIcon from '@material-ui/icons/Computer';
import HeadsetIcon from '@material-ui/icons/Headset';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StorageIcon from '@material-ui/icons/Storage';
import {Link} from "react-router-dom";

import "./linkStyle.css"

const SideBarList: FC = () => {
    return (
        <div className="App">
            <List>
                <ListItem button>
                    <ListItemIcon><Link to="/products/Televisions" className="LinkStyle"><TvIcon/></Link></ListItemIcon>
                    <Link to="/products/Televisions" className="LinkStyle"><ListItemText primary="Televisions"/></Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><Link to="/products/Cellphones" className="LinkStyle"><AndroidIcon/></Link></ListItemIcon>
                    <Link to="/products/Cellphones" className="LinkStyle"><ListItemText primary="Cellphones" /></Link>
                </ListItem>

                <ListItem button>
                    <ListItemIcon><Link to="/products/Computers" className="LinkStyle"><ComputerIcon/></Link></ListItemIcon>
                    <Link to="/products/Computers" className="LinkStyle"><ListItemText primary="Computers" /></Link>
                </ListItem>

                <ListItem button>
                    <ListItemIcon><Link to="/products/Headset" className="LinkStyle"><HeadsetIcon/></Link></ListItemIcon>
                    <Link to="/products/Headset" className="LinkStyle"><ListItemText primary="Headset" /></Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><Link to="/products/Sport" className="LinkStyle"><SportsFootballIcon/></Link></ListItemIcon>
                    <Link to="/products/Sport" className="LinkStyle"><ListItemText primary="Sport" /></Link>
                </ListItem>

            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><Link to="/shoppingcart" className="LinkStyle"><ShoppingCartIcon/></Link></ListItemIcon>
                    <Link to="/shoppingcart" className="LinkStyle"><ListItemText primary="Shopping Cart"/></Link>
                </ListItem>

                <ListItem button>
                    <ListItemIcon><Link to="/orders" className="LinkStyle"><AssignmentIcon/></Link></ListItemIcon>
                    <Link to="/orders" className="LinkStyle"><ListItemText primary="Orders"/></Link>
                </ListItem>

                <ListItem button>
                    <ListItemIcon><Link to="/Store" className="LinkStyle"><StorageIcon/></Link></ListItemIcon>
                    <Link to="/Store" className="LinkStyle"><ListItemText primary="Store manage"/></Link>
                </ListItem>
            </List>
        </div>
    );
};

export default SideBarList;
