import React, { useContext } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MyData } from '../Main-Component/MyData';

export default function Auser() {
  const {user} =useContext(MyData);
  const customers=user.filter((value)=>value.type === "user");
  return (
    <>
 <div className="a-body">
<MDBTable striped >
  <MDBTableHead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
    </tr>
  </MDBTableHead>
     <MDBTableBody>
  {customers.map((value,index)=>(
     <tr key={index} >
       <th scope="row">{value.id}</th>
       <td >{value.name}</td>
       <td>{value.email}</td>
       <td>{value.password}</td>
     </tr>
 
 ))}
   </MDBTableBody>
 
</MDBTable>

</div>



    </>
  )
}
