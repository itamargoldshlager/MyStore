import React, {FC, useState, ChangeEvent} from 'react';
import { TextField, Grid, makeStyles, Select, MenuItem, Button} from '@material-ui/core';
import axios from 'axios';

const AddNewProductStyle = makeStyles({
    root: {
        width: '500px',
        margin: 'auto'
    },
});

const sendDataToServer = (image: File, id: string) => {
    const data = new FormData() 
    data.append('file', image)
    axios.post("http://localhost:4000/api/product/add/" + id, data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
    console.log(res.statusText)
    })
}

const sendProductData = (image: File, productName: string, productDescription: string, productCategory: string, productAmount: string, productPrice: number): number => {
    const data = {
        productName: productName,
        productDescription: productDescription,
        productCategory: productCategory,
        productAmount: productAmount,
        productPrice: productPrice
    }

    axios.post("http://localhost:4000/api/product/addProduct", data, {}).then(
        res => { // then print response status
            console.log(res)
            sendDataToServer(image, res.data)
    })

    return 0;
}


const AddNewProduct: FC = () => {
    const classes = AddNewProductStyle();
    const [productName, setProductName] = useState<string>('');
    const [productDescription, setProductDescription] = useState<string>('');
    const [productCategory, setProductCategory] = useState<string>('');
    const [productAmount, setProductAmout] = useState<string>('');
    const [productImgSrc, setProductImageSrc] = useState<File>();
    const [productPrice, setProductPrice] = useState<number>(0);

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={6}>
                <h3>Name: </h3>
                <TextField 
                    id="standard-basic" 
                    value={productName} 
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setProductName(event.target.value)}
                />
                <h3>Description: </h3>
                <TextField 
                    id="standard-basic" 
                    value={productDescription} 
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setProductDescription(event.target.value)}/>
                <h3>Category:</h3>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={productCategory}
                    onChange={(event: ChangeEvent<any>) => setProductCategory(event.target.value)}
                >
                    <MenuItem value={'Televisions'}>Televisions</MenuItem>
                    <MenuItem value={'Cellphones'}>Cellphones</MenuItem>
                    <MenuItem value={'Computers'}>Computers</MenuItem>
                    <MenuItem value={'Headset'}>Headset</MenuItem>
                    <MenuItem value={'Sport'}>Sport</MenuItem>
                </Select>
                <h3>Amount:</h3>
                <input 
                    type="number" 
                    name="quantity"
                    min="1" 
                    max="5" 
                    value={productAmount} 
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setProductAmout(event.target.value)}
                />
                <h3>Price:</h3>
                <TextField 
                    id="standard-basic" 
                    value={productPrice} 
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        if(event.target.value === '') {
                            setProductPrice(0)
                        }
                        else if (Number(event.target.value)) {
                            setProductPrice(Number(event.target.value))
                        }
                    }}/>
                </Grid>
                <Grid item xs={6}>
                    <h3>image src: </h3>
                    <input type="file" 
                        name="file" 
                        onChange={(event: ChangeEvent<any>)=> setProductImageSrc(event.target.files[0])}/>
                    {
                        productImgSrc !== undefined ? <img src={URL.createObjectURL(productImgSrc)}/> : <></>
                    }
                </Grid>
                    {/* <DropzoneArea 
                        maxFileSize = {3145728}
                        filesLimit= {1}
                        onChange= {(files) => {
                            setProductImageSrc(files)}
                        }
                    />       */}
            </Grid>
            <Button 
                variant="contained" 
                color="primary"
                onClick={() => {
                    if(productImgSrc !== undefined) {
                        sendProductData(productImgSrc, productName, productDescription, productCategory, productAmount, productPrice)
                    }
                }}
            >
                Add product
            </Button>
        </div>
    );
};

export default AddNewProduct;
