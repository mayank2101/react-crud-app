
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Home.css";

function Home() {
  const [item, setItem] = useState([]);

  const getItem = () => {
    axios.get(`http://localhost:8000/Items`)
      .then(
        (res) => {
          // console.log(res.data);
          setItem(res.data);
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )


  }
  useEffect(() => {
    getItem()
    getDelete()
  }, [])

const getDelete = (id) => {
  axios.delete(`http://localhost:8000/Items/${id}`)
  
  setItem(item.filter(p => p.id !== id));
  console.log("Deleted Sucessully");
}



  return (
    <>

      <div class="responsive">
      
<div className='container'>
<Link to = '/Create'>
<button  type="button" class="btn btn-info">ADD</button>
</Link>

<table class="table table-bordered box-shadow--6dp">
          
          <thead>
            <tr className='row1'>
              <th># ID</th>
              <th>Name</th>
              <th>Company</th>
              <th>Designation</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              item.map(p => {
                return (
                  <tr key={p.id} className='row2'>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.company}</td>
                    <td>{p.design}</td>
                    <td>{p.address}</td>
                    <td>
                      <Link to={`/Update/${p.id}`}> <button type="button" class="btn btn-success">Edit</button></Link>

                      <button onClick={() => getDelete(p.id)} type="button" class="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
</div>
        
      </div>
    </>





  )
}

export default Home