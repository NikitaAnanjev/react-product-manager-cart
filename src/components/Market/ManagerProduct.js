import React from "react";
import {useStateValue} from "../globalContext/StateProvider";
import ProductPrice from "./ProductPrice";

import ListItemText from "@material-ui/core/ListItemText";

import {makeStyles} from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },

    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const ManagerProduct = (props) => {

    const classes = useStyles();
    const {id, title, price, qty} = props

    const [{cart}, dispatch] = useStateValue()


    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            id: id,
            title: title,
            price: price,
            qty: qty
        })
    }

    return (

        <>

            <ListItemText secondary={title}/>

            <ProductPrice price={price}/>

            <Button variant="contained" color="primary" onClick={addToCart}>Добавить</Button>

        </>


    )
}

export default ManagerProduct