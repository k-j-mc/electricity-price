import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./reducers/store";
import "./index.css";
import "./App.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
