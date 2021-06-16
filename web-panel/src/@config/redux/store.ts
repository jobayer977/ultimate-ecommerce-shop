import { applyMiddleware, createStore } from "redux"

import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore } from "redux-persist"
import rootReducer from "./sourceReducer"
import thunk from "redux-thunk"

const middleware = [thunk]

export const store: any = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
)

export const persistor = persistStore(store)
