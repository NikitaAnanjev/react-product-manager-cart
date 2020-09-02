import React from "react";
import {useStateValue} from "../globalContext/StateProvider";
import ProductPrice from "../Market/ProductPrice";
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';
import '../../App.css';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
const CartProduct = ({id, title, price, qty}) => {
    const [{cart}, dispatch] = useStateValue()
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }

    return (
        <>
            <ListItemAvatar>
                <Avatar>
                    {qty}
                </Avatar>
            </ListItemAvatar>
            <ListItemText secondary={title}/>
            <ProductPrice price={price}/>
            <Button variant="contained" color="primary" onClick={removeFromCart}> Убрать</Button>
        </>
    )
}
export default CartProduct