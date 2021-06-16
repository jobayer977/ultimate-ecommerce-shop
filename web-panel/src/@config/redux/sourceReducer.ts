import cartReducer from "@modules/cart/redux/cart.reducer"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
//REDUX PERSIS CONFIG

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
}

const appReducer = combineReducers({
	cart: cartReducer,
})

const rootReducer = (state: any, action: any) => {
	return appReducer(state, action)
}
export default persistReducer(persistConfig, rootReducer)
