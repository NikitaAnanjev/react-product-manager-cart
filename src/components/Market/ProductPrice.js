import React from 'react';

const ProductPrice = (props) => {

    const {price} = props
    const currency = (price) => {
        const dollars = price
        const conversionRate = 74.1823
        const result = dollars * conversionRate
        const format = new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'}).format(result)
        return (
            format
        )
    }
    return (
        <div className="ManagerProduct__Price ">
            {
                currency(price)
            }
        </div>
    );

}

export default ProductPrice