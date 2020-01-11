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

const SideBarList: FC = () => {
    return (
        <div className="App">
            <List>
                <ListItem button>
                    <ListItemIcon><TvIcon/></ListItemIcon>
                    <ListItemText primary="Televisions" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><AndroidIcon/></ListItemIcon>
                    <ListItemText primary="Cellphones" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon><ComputerIcon/></ListItemIcon>
                    <ListItemText primary="Computers" />
                </ListItem>

                <ListItem button>
                    <ListItemIcon><HeadsetIcon/></ListItemIcon>
                    <ListItemText primary="Headset" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon><SportsFootballIcon/></ListItemIcon>
                    <ListItemText primary="Sport" />
                </ListItem>

            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
                    <ListItemText primary="Shopping Cart"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon><AssignmentIcon/></ListItemIcon>
                    <ListItemText primary="Orders"/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon><StorageIcon/></ListItemIcon>
                    <ListItemText primary="Storage manage"/>
                </ListItem>
            </List>
        </div>
    );
};

export default SideBarList;
