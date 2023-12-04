import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { initialiseData } from "./reducers/priceReducer";

import NavBar from "./components/NavBar/NavBar";
import BarChart from "./components/BarChart/BarChart";
import PriceTable from "./components/PriceTable/PriceTable";
import LoadingAtom from "./components/Loading/LoadingAtom";

const App = () => {
    const dispatch = useAppDispatch();

    const { loadingPrices } = useAppSelector((state) => state.prices);

    useEffect(() => {
        dispatch(initialiseData());
    }, []);

    return (
        <div>
            {!loadingPrices ? (
                <>
                    <NavBar />
                    <BarChart />
                    <PriceTable />
                </>
            ) : (
                <LoadingAtom />
            )}
        </div>
    );
};

export default App;
