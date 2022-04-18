import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

//instantiate the global state object
const StoreContext = createContext();
const { Provider } = StoreContext;



// functionality to manage state at a global level and make it available to all our other components through <Provider> component
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    //use this to confirm it works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
}

// custom react hook - any component has access to our store provider component using the dispatch function
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };