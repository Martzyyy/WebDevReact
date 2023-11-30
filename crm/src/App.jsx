import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";
import ListCustomers from "./containers/ListCustomers";
import AddCustomer from "./containers/AddCustomer";
import EditCustomer from "./containers/EditCustomer";

function App() {
    return (
        <div>
            <Sidebar />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/new" element={<AddCustomer/>} />
                    <Route path="/edit" element={<EditCustomer/>}/>
                    <Route path="/customers" element={< ListCustomers/>} />
                </Routes>
            </div>
        </div>
    );
}
export default App;