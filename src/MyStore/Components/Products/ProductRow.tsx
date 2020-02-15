import React, {FC, ChangeEvent} from 'react';
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
    amount: number,
    image: Buffer
    removeFromCart?: () => void
    removeFromStore?: () => void
    updateAmount?: (amount: number) => void
}

const arrayBufferToBase64 = (buffer: any): any => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer.data));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

const SingleProductRow: FC<ProductProps> = (
    {
        id,
        name,
        description,
        price,
        amount,
        removeFromCart,
        removeFromStore,
        updateAmount,
        image
    }) => {
    const classes = useStyles();
    const base64Flag = 'data:image/jpeg;base64,';
    const imageStr = arrayBufferToBase64(image);
    const imgData = base64Flag + imageStr
    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} src={imgData} alt={name}/>
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
                            {
                                removeFromStore !== undefined && updateAmount !== undefined ?
                                    <div>
                                        <div>
                                            <Button 
                                                variant="contained" 
                                                color="secondary"
                                                onClick= {() => removeFromStore()}
                                            >
                                            remove from store
                                            </Button> 
                                        </div>
                                        <div>
                                            amount in storage: 
                                            <input 
                                                type="number" 
                                                name="quantity"
                                                min="0" 
                                                max="5" 
                                                value={amount} 
                                                onChange={(event: ChangeEvent<HTMLInputElement>) => updateAmount(Number(event.target.value))}
                                            />
                                        </div>
                                    </div> :
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