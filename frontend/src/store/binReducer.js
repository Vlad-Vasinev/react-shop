

const bin = {
    binElements: [

    ],

    addPageElements: [

    ],

    countProduct: 0,

    countOfProducts: 0,

}

const ADD_TO_PAGE = "ADD_TO_PAGE";
const ADD_TO_BIN = "ADD_TO_BIN";
const REMOVE_FROM_BIN = "REMOVE_FROM_BIN";

const PLUS_PRICE = "PLUS_PRICE";
const MINUS_PRICE = "MINUS_PRICE";
const SET_COUNT_NULL = "SET_COUNT_NULL";

const PLUS_COUNT_OF_PRODUCT = "PLUS_COUNT_OF_PRODUCT";
const MINUS_COUNT_OF_PRODUCT = "MINUS_COUNT_OF_PRODUCT";
const SET_COUNT_NULL_OF_PRODUCT = "SET_COUNT_NULL_OF_PRODUCT";

export const BinReducer = (state = bin, action) => {
    switch (action.type) {

        case ADD_TO_BIN:
            if (state.binElements.find(el => el.id === action.payload.id)) {
                return {
                    ...state, binElements: [...state.binElements]
                }
            }
            else {
                return {
                    ...state, binElements: [...state.binElements, action.payload]
                }
            }

        case ADD_TO_PAGE:
            return {
                ...state, addPageElements: action.payload
            }

        case REMOVE_FROM_BIN:
            return {
                ...state, binElements: [...state.binElements.filter((element) => element.id !== action.payload)]
            }

        case PLUS_PRICE:
            return {
                ...state, countProduct: state.countProduct += action.payload
            }

        case MINUS_PRICE:
            if (state.countProduct >= 0) {
                return {
                    ...state, countProduct: state.countProduct -= action.payload
                }
            }
            else {
                return {
                    ...state, countProduct: 0
                }
            }

        case SET_COUNT_NULL:
            return {
                ...state, countProduct: 0
            }

        case PLUS_COUNT_OF_PRODUCT:
            state.binElements.forEach(element => {
                if (element.id === action.payload) {
                    element.countOfProduct += 1
                }

            });
            return {
                ...state, countOfProducts: state.countOfProducts -= 1
            }

        case MINUS_COUNT_OF_PRODUCT:
            state.binElements.forEach(element => {
                if (element.id === action.payload) {
                    element.countOfProduct -= 1
                }
            })
            return {
                ...state, countOfProducts: state.countOfProducts -= 1
            }

        default:
            return state
    }
}

export const addToBinCreator = (payload) => {
    console.log(payload)
    return { type: "ADD_TO_BIN", payload }
}

export const removeFromBinCreator = (payload) => {
    return { type: "REMOVE_FROM_BIN", payload }
}

export const plusProductCreator = (payload) => {
    return { type: "PLUS_PRICE", payload }
}

export const minusProductCreator = (payload) => {
    return { type: "MINUS_PRICE", payload }
}

export const setCountCreator = (payload) => {
    return { type: "SET_COUNT_NULL", payload }
}

export const countPageCreator = (payload) => {
    return { type: "ADD_TO_PAGE", payload }
}

export const plusCountOfProductCreator = (payload) => {
    return { type: "PLUS_COUNT_OF_PRODUCT", payload }
}

export const minusCountOfProductCreator = (payload) => {
    return { type: "MINUS_COUNT_OF_PRODUCT", payload }
}

export const setNullCountOfProductCreator = (payload) => {
    return { type: "SET_COUNT_NULL_OF_PRODUCT", payload }
}