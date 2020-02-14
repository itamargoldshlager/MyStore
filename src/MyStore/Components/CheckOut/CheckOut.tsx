import React, { FC , Fragment, useState, ChangeEvent} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import axios from 'axios';
import {getUrl} from "../Products/FetchDataFromServer"

const order = (firstName: string, lastName: string, address: string, city: string, postal: string, country: string) => {
  	const data = {
		firstName: firstName,
		lastName: lastName,
		address: address,
		city: city,
		postal: postal,
		country: country
	}

	axios.post(getUrl() + "/api/order/addOrder", data, {}).then(
		res => { // then print response status
			console.log(res)
	})
}

const CheckOut: FC = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [city, setCity] = useState<string>('');
  const [postal, setPostal] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <Fragment>
      <Dialog open={showDialog}>
        <DialogTitle>
          	CompleteOreder
        </DialogTitle>
		<DialogContent>
			Are you sure?
		</DialogContent>
		<DialogActions>
			<Button
				color='primary'
				variant='contained'
				onClick={() => {
					setShowDialog(false)
					order(firstName, lastName, address, city, postal, country)
				}}
			>
				yes
			</Button>
			<Button
				color='secondary'
				variant='contained'
				onClick={() => setShowDialog(false)}
			>
				no
			</Button>
		</DialogActions>
      </Dialog>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
			required
            label="First name"
            fullWidth
			autoComplete="fname"
			value={firstName}
			onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Last name"
            fullWidth
			autoComplete="lname"
			value={lastName}
			onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Address"
            fullWidth
			autoComplete="billing address"
			value={address}
			onChange={(event: ChangeEvent<HTMLInputElement>) => setAddress(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="City"
            fullWidth
			autoComplete="billing City"
			value={city}
			onChange={(event: ChangeEvent<HTMLInputElement>) => setCity(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Zip / Postal code"
            fullWidth
			autoComplete="billing postal-code"
			value={postal}
			onChange={(event: ChangeEvent<HTMLInputElement>) => setPostal(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Country"
            fullWidth
			autoComplete="billing country"
			value={country}
			onChange={(event: ChangeEvent<HTMLInputElement>) => setCountry(event.target.value)}
          />
        </Grid>
        <Grid item xs={9}/>
        <Grid item xs={3}>
          <Button
            onClick={() => {
				setShowDialog(true)
            }}
          >
            Complete
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default CheckOut