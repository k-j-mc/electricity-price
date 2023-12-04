import { useEffect } from "react";
import { useAppDispatch } from "./hooks/redux-hooks";
import { initialiseData } from "./reducers/priceReducer";

import BarChart from "./components/BarChart/BarChart";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initialiseData());
    }, []);

    return (
        <div>
            <BarChart />
        </div>
    );
};

export default App;
