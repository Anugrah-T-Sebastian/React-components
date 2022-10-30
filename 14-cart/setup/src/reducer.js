import CartItem from "./CartItem";

const reducer = (state, action) => {
    if (action.type === 'LOADING') {
        return { ...state, loading: true };
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, loading: false, cart: action.payload };
    }
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] };
    }
    if (action.type === 'REMOVE') {
        return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) };
    }
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem;
        });
        return { ...state, cart: tempCart };
    }
    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 };
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart };
    }
    if (action.type === 'GET_TOTALs') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            cartTotal.amount += amount;
            cartTotal.total += amount * price;
            return cartTotal;
        }, {
            total: 0,
            amount: 0
        })

        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount };
    }
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (action.payload.type === 'INC') {
                    return { ...cartItem, amount: cartItem.amount + 1 };
                }
                if (action.payload.type === 'DEC') {
                    return { ...cartItem, amount: cartItem.amount - 1 };
                }
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0);     //Using filter, so if value is less than 0, then item is removed from the cart

        return { ...state, cart: tempCart }
    }
    throw new Error('No matching action type');
    // return state;
}

export default reducer;