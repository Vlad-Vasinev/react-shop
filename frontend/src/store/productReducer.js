const product = {
    products: [

    ],

    productId: [

    ]

}

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const ProductReducer = (state = product, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCTS:
            if (state.products.find(item => item.id === action.payload.id)) {
                return {
                    ...state, products: [...state.products]
                }
            }
            return {
                ...state, products: [...state.products, action.payload]
            }

        default:
            return state
    }
}

export const getProductsCreator = (payload) => {
    return { type: "GET_ALL_PRODUCTS", payload }
}
