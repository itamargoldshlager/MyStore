import React, {FC} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from "../GenericTable/GenericTableStyle"
import { ButtonBase } from '@material-ui/core';

export enum OrderState{
    Done = 'Done',
    Open = 'Open',
    Canceled = 'Canceled'
}

export interface OrderProps {
    totalPrice: number,
    date: Date,
    status: OrderState,
    id: number,
    imageSrc: string
}

const SingleOrderRow: FC<OrderProps> = ({date, status, totalPrice, imageSrc}) => {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} src={imageSrc} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {date.toDateString()}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {status}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${totalPrice}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default SingleOrderRow;