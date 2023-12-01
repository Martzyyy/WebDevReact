import { useNavigate } from "react-router-dom"
import { useState, useEffect} from 'react';

import Api from "../helpers/Api"


function ListCustomers() {
    //TODO: define state variables
    //used for navigating to other pages after adding/editing
    //a record

    const navigate = useNavigate();
    var [json, setJson] = useState([]);

    useEffect(() => {
        Api.getAllCustomers()
            .then(response => { return response.json(); })
            .then(data => setJson(data));
    }, []);

    function editCustomer(id) {
        navigate(`/edit?id=${id}`);
    }

    function deleteCustomer(id)
    {
        Api.deleteCustomer(id)
            .then(response => { return response.json(); })
            .then(Api.getAllCustomers()
                .then(response => { return response.json(); })
                .then(data => setJson(data)));
    }

    const rows = json.map((item, i) => {
        return (
            <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
                <td>
                    <button
                        classname="btn btn-orange"
                        onClick={() => editCustomer(item.id)}>
                        edit
                    </button>
                    <button
                        classname="btn btn-red"
                        onClick={() => deleteCustomer(item.id)}>
                        delete
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <div className="form-container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default ListCustomers;