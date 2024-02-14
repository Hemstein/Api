import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
  const [data, setdata] = useState()


useEffect(() => {
  console.log('object')
 axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
 
    console.log(response.data);
    setdata(response.data)
  }
 ).catch( function (error) {
    // handle error
    console.log(error);
  }
 )


}, [])

console.log(data)
  return (
  <div>
      <table>
       <thead>
         <tr>
             <th>Name</th>
             <th>Username</th>
             <th>E-mail</th>
             <th>City</th>
             <th>Phone</th>
         </tr>

       </thead>
        <tbody>
                {data&&data.map((el)=><tr>
            <th>{el.name}</th>
            <th>{el.username}</th>
            <th>{el.email}</th>
            <th>{el.address.city}</th>
            <th>{el.phone}</th>
          </tr>)}
        </tbody>

      </table>
      
    </div>
  )
}

export default UserList
