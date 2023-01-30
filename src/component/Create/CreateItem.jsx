import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import "./CreateItem.css";

function CreateItem() {

const [name, setName] = useState('');
const [company, setCompany] = useState('');
const [design, setDesign] = useState('');
const [address, setAddress] = useState('');

const navigate = useNavigate();

const onSubmit = async (e) => {

    e.preventDefault()
    const post = 

    {
        name: name,
        company : company,
        design : design,
        address : address
    }

    try {
        const res = await axios.post('http://localhost:8000/Items',post)
        console.log(res.data);
        

    } catch (e){
        console.log(e);
    }
    navigate('/')
    
}




    return (

        <>

            <div class="d-flex justify-content-center">  <div class="card shadow mb-4">
                <div class="card-body">
                    <h5 class="card-title">Add User</h5>
                    <form onSubmit={onSubmit}> 
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required
                        onChange={(event) => {

                            setName(event.target.value)
                        }}
                        value = {name}
                        
                        />

                        <label for="company">Company</label>
                        <input type="text" id="company" name="company" required 
                         onChange={(event) => {

                            setCompany(event.target.value)
                        }}
                        value = {company}
                        
                        />

                        <label for="designstion">Designation</label>
                        <input type="text" id="designstion" name="designation" required 
                         onChange={(event) => {

                            setDesign(event.target.value)
                        }}

                        value = {design}
                        
                        />

                        <label for="address">Address</label>
                        <input type="text" id="address" name="address" required 
                         onChange={(event) => {

                            setAddress(event.target.value)
                        }}
                        value = {address}
                        
                        />

                        <button class="btn btn-primary" type="submit">Submit</button>
                    </form>

                </div>
            </div></div>







        </>
    )
}

export default CreateItem