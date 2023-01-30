
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateItem(props) {

  const [name, setName] = useState('');
const [company, setCompany] = useState('');
const [design, setDesign] = useState('');
const [address, setAddress] = useState('');
const navigate = useNavigate();


const {id} = useParams();

useEffect(() => {

  axios.get(`http://localhost:8000/Items/${id}`)
  .then((res) => {
    setName(res.data.name);
    setCompany(res.data.company);
    setDesign(res.data.design);
    setAddress(res.data.address);

  });
},[]);

const newData = 

  {
      name: name,
      company : company,
      design : design,
      address : address
  }

const submit = (e) => {
  e.preventDefault();
  
try{
  axios.put(`http://localhost:8000/Items/${id}`,newData)
}
catch(error){
  console.log(error)
}
  navigate('/')
}













  return (
    <>

      <div class="d-flex justify-content-center">  <div class="card shadow mb-4">
        <div class="card-body">
          <h5 class="card-title">Update User</h5>
          <form onSubmit={submit}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required
            defaultValue={name}
            onChange = {(e) => setName(e.target.value)}
            />
            <label for="company">Company</label>
            <input type="text" id="company" name="company" required
            defaultValue={company}
            onChange = {(e) => setCompany(e.target.value)}
            
            />

            <label for="design">Designation</label>
            <input type="text" id="design" name="design" required
            defaultValue={design}
            onChange = {(e) => setDesign(e.target.value)}
            
            />
            <label for="address">Address</label>
            <input type="text" id="address" name="address" required
            defaultValue={address}
            onChange = {(e) => setAddress(e.target.value)}
            
            />


            <button class="btn btn-primary" type="submit">update</button>
          </form>

        </div>
      </div></div>



    </>
  )
}

export default UpdateItem