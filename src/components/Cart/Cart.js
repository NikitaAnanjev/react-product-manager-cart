import React from "react";
import {useStateValue} from "../globalContext/StateProvider";
import CartProduct from "./CartProduct"
import ProductPrice from "../Market/ProductPrice";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Cart = () => {
    const [{cart, total, qty}] = useStateValue()
    let totalPriceRub = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (total.length > 0) {
        totalPriceRub = total.reduce(reducer)
    } else {
        totalPriceRub = ''
    }
    return (
        <div className="Cart">
            <Container>
                <Grid item xs={12}>
                    <h1><ProductPrice price={totalPriceRub}/></h1>
                    {cart?.length === 0 ? (
                        <div className="cart__title">
                            <h2>КОРЗИНА ПУСТА</h2>
                            <p>Пожалуйста добавьте товар</p>
                        </div>
                    ) : (
                        <div className="cart__title">
                            <h2>КОРЗИНА</h2>
                            <Paper>
                                <List>
                                    {cart.map((item, index) => (
                                        <ListItem key={index}>
                                            <CartProduct
                                                key={index + item.id}
                                                id={item.id}
                                                title={item.title}
                                                qty={item.qty}
                                                price={item.price}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </div>
                    )
                    }

                </Grid>
            </Container>
        </div>
    )
}

export default Cart