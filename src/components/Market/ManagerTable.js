import React, {useState, useEffect} from "react";
// DATA

import Data from "../../data/data.json";

import DataSourceNames from "../../data/names.json";
import ManagerCategory from "./ManagerCategory";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const DataList = Data.Value.Goods;
let dataGroupId = []
let productId = []


const refreshData = (DataList) => {
    DataList.map((item, keys) => {
        productId.push(item)
        dataGroupId.push(item.G)
    })
}
refreshData(DataList)


// REDUCE REPEATED ARRAYS FOR CATEGORIES
const getUnique = (array) => {
    var uniqueArray = [];
    let i
    // Loop through array values
    for (i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
const cleardataGroupId = getUnique(dataGroupId);


// DATA _names
const dataFromNames = Object.entries(DataSourceNames)
let dataNames = []
dataFromNames.map((value, key) => {
    dataNames.push(value)
})

// FILTER CATEGORIES
let Categories = []
cleardataGroupId.map((value, key) => {
    const existingCatId = value.toString()
    dataNames.filter(cat => cat[0] === existingCatId).map((filteredCat, key) => {
        Categories.push(filteredCat)
    })
})


const ManagerTable = () => {
    return (
        <div className="ManagerTable">

            <Container>
                <Grid item  xs={12}>
                    <h1>Продукты</h1>

                    {
                        Categories.map((category, index) => (
                            <ManagerCategory
                                key={category[0] + index}
                                id={category[0]}
                                title={category[1].G}
                                products={category[1].B}
                                clearProductsId={productId}
                            />
                        ))
                    }

                </Grid>


            </Container>

        </div>
    )
}

export default ManagerTable