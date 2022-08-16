import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import your route components too
import App from "../../App";
import Store from "../Store/Store";
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
            </Route>
        </Routes>
    </BrowserRouter>
);