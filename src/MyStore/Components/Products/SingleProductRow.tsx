import React, {FC} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from "../GenericTable/GenericTableStyle"
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";
export interface ProductProps {
    id: number,
    name: string,
    description: string,
    price: number,
    amount: number
    removeFromCart?: () => void
}

const SingleProductRow: FC<ProductProps> = (
    {
        id,
        name,
        description,
        price,
        amount,
        removeFromCart
    }) => {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} src={"http://localhost:4000/static/" + id + ".png"} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom>
                                    {name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography>${price}</Typography>
                            <Link to={`/productById/${id}`} className="LinkStyle">
                                <Button 
                                    variant="contained" 
                                    color="default"
                                >
                                    view product
                                </Button>
                            </Link>
                            {
                                removeFromCart !== undefined ?
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    onClick= {() => removeFromCart()}
                                >
                                    remove
                                </Button> :
                                <></>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default SingleProductRow;