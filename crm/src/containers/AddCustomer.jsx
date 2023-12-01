import { useNavigate, useParams } from "react-router-dom"
import { useState, useId } from 'react';

import FormSelect from "../components/FormSelect"
import FormText from "../components/FormText"
import Api from "../helpers/Api"

function ManageCustomer() {

    //used for navigating to other pages after adding/editing a record
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("Male");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("999")

    function validate() {
        if (name.trim().length <= 0) {
            alert("Please enter a name");
            return false;
        }
        if (address.trim().length <= 0) {
            alert("Please enter an address");
            return false;
        }
        if (phone.trim().length <= 0) {
            alert("Please enter a phone number");
            return false;
        }
        return true;
    }

    function handleAddAction(e) {
        e.preventDefault();
        if (validate()) 
        {
            const json = {
                name,
                gender,
                address,
                phone
            }

            Api.addCustomer(json);
            navigate(+1);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleAddAction}>
                <div className="row align-right">

                <FormText
                    labelCaption="Name"
                    inputText={name}
                    onChange={(e) => setName(e.target.value)}/>
                <FormSelect
                    labelCaption="Gender"
                    selectData={["Male", "Female"]}
                    selectedValue={gender}
                    onChange={(e) => setGender(e.target.value)}/>
                <FormText
                    labelCaption="Address"
                    inputText={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                <FormText
                    labelCaption="Phone"
                    inputText={phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="row align-right">
                    <button
                        classname="btn btn-blue">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default ManageCustomer; 