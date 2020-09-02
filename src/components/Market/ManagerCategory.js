import React from "react";
import ManagerProduct from "./ManagerProduct"

import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const ManagerCategory = (props) => {


    const classes = useStyles();
    const {id, title, products, clearProductsId} = props
    const Products = Object.entries(products)
    let productList = []

    Products.map((product, key) => {
        productList.push(product)
    })

    return (
        <div className="ManagerCategory">
            <Grid item xs={12}>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>


                <div className="ManagerProduct">

                    <Paper>
                        <List>

                            {clearProductsId.map((product) => {
                                let id = product.T.toString()
                                return (
                                    productList.filter(prod => prod[0] === id).map((prod, index) => (
                                        <ListItem key={index}>


                                            <ManagerProduct
                                                id={prod[0]}
                                                title={prod[1].N}
                                                price={product.C}
                                                qty={product.P}
                                            />


                                        </ListItem>
                                    ))
                                )
                            })}

                        </List>
                    </Paper>


                </div>
            </Grid>
        </div>
    )
}
export default ManagerCategory