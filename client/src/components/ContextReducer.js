import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr

        case "UPDATE_QUANTITY":
            return state.map(item => {
                if (item.id === action.id && item.size === action.size) {
                    return {
                        ...item,
                        quantity: action.quantity,
                        totalCost: (action.quantity) * item.price
                    };
                }
                return item;
            });

        case "CLEAR_CART": 
            return []
        default:
            return "Error: Unknown action"
    }
}




export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )

}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
