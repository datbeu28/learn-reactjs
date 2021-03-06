const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [],
    },
    reducers: {
        showMiniCart(state) {
            return state.showMiniCart = true;
        },
        hideMiniCart(state) {
            return state.showMiniCart = false;
        },
        addToCart(state, action) {
            const newItem = action.payload;
            //new Item={id, product, quantity}
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);
            if (index >= 0) {
                // increase quantity
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                //add to cart
                state.cartItems.push(newItem);
            }
        },
        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            //Check if product is available
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity = quantity;
            }
        },
        removeFromCart(state, action) {
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
        },


    }
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;