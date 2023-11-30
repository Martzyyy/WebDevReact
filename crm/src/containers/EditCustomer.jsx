import { useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from 'react';

import FormSelect from "../components/FormSelect"
import FormText from "../components/FormText"
import Api from "../helpers/Api"

function EditCustomer() {

    //used for navigating to other pages after adding/editing a record
    const [searchParams, setSearchParams] = useSearchParams();
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
            alert("Please enter a name");
            return false;
        }
        if (phone.trim().length <= 0) {
            alert("Please enter a name");
            return false;
        }
        return true;
    }

    useEffect(() => {
        console.log(searchParams.get('id'));
        Api.getCustomer(searchParams.get('id'))
            .then(response => { return response.json(); })
            .then(data => {
                setName(data.name);
                setGender(data.gender);
                setAddress(data.address);
                setPhone(data.phone);
            });
    }, []);
    
    function handleEditAction(e) {
        e.preventDefault();
        if (validate()) 
        {
            const json = {
                name,
                gender,
                address,
                phone
            }

            Api.editCustomer(searchParams.get('id'), json)
                .then(Api.getCustomer(searchParams.get('id'))
                    .then(response => { return response.json(); })
                    .then(data => {
                        setName(data.name);
                        setGender(data.gender);
                        setAddress(data.address);
                        setPhone(data.phone);
                    }));

            navigate(`/customers`);
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleEditAction}>
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
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
export default EditCustomer; 