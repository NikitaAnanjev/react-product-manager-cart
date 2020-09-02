import React from "react";
import {useStateValue} from "../globalContext/StateProvider";
import ProductPrice from "./ProductPrice";
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';

const ManagerProduct = (props) => {
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