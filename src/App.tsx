import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./hooks/redux-hooks";

import { initialiseData } from "./reducers/priceReducer";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initialiseData());
    }, []);

    return <div>App</div>;
};

export default App;
