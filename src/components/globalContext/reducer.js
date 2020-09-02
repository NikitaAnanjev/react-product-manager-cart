export const InitialState = {
    cart: [],
    total: [],
    qty: [],
}

const reducer = (state, action) => {

    // console.log(state.qty)

    let newState = [...state.total, action.price]
    let newTotal = []
    let newQtyStatus = [...state.total, action.price]
    let newQty = 0
    let updatedQty
    let product
    let newCart = [...state.cart]
    let newStateTotal = [...state.total]

    let updatedPrice

    switch (action.type) {
        case 'ADD_TO_CART':
            const check = state.cart.find(cart => cart.id === action.id);
            newState.forEach(item => {
                newTotal += item.price;
            });
            newQtyStatus.forEach(item => {
                newQty += item.qty;
            });

            if (check) {
                action.qty = 1
                return {
                    ...state,
                    qty: [...state.qty, state.cart.qty],
                    cart: [...state.cart, action],
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action],
                    total: [...state.total, action.price],
                }
            }
            break;
        case 'REMOVE_FROM_CART':

            const productIndex = state.cart.findIndex((cartItem) => cartItem.id === action.id)

            const filtered = state.cart.filter(cart => cart.id !== action.id);
            product = state.cart.find(cart => cart.id === action.id);
            // setAllPrice(allPrice - product.price * product.qty);
            updatedPrice = state.total - product.price * product.qty;
            updatedQty = 0;
            if (productIndex >= 0) {
                // Remove item if exists
                newCart.splice(productIndex, 1)
                if (newStateTotal.length >= 1) {
                    newStateTotal.splice(productIndex, 1)
                }
            } else {
                console.warn(` Hmmm... Seems that I can't remove this item because it's Not in the cart ( ${action.id})`)
            }
            return {
                ...state,
                cart: filtered,
                total: newStateTotal,
            }
            break;
        default:
            return state;
    }
}

export default reducer