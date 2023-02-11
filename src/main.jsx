import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import userReducer from "./state/user";
import cartReducer from "./state/cart";
import productReducer from "./state/products";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {combineReducers} from "redux"; 
import thunk from 'redux-thunk'

//para guardar la información
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

// import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// if( process.env.NODE_ENV === 'production') disableReactDevTools();

const reducers = combineReducers({ user : userReducer, cart : cartReducer, product : productReducer});

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig , reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
