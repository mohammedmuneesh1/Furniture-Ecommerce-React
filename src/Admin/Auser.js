import React, { useContext } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";

export default function Auser() {
  const { user } = useContext(MyData);
  const customers = user.filter((value) => value.type === "user");

  return (
    <>
      <div className="a-body">
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ORDER ID</th>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL PRICE</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {customers.map((value, index) =>
              value.order.length > 0 ? (
                value.order.map((ovalue, oindex) => (
                  <tr key={index}>
                    {oindex === 0 ? (
                      // Display ID, Name, and Email only for the first row of each customer
                      <>
                        <th rowSpan={value.order.length}>{value.id}</th>
                        <td rowSpan={value.order.length}>{value.name}</td>
                        <td rowSpan={value.order.length}>{value.email}</td>
                      </>
                    ) : null}
                    <td>{ovalue.Oid}</td>
                    <td>{ovalue.Opname}</td>
                    <td>{ovalue.Opprice}</td>
                    <td>{ovalue.Oqty}</td>
                    {oindex === 0 ? (
                      <th rowSpan={value.order.length}>
                        {value.order.reduce(
                          (total, orderItem) =>
                            total + orderItem.Opprice * orderItem.Oqty,
                          0
                        )}
                      </th>
                    ) : null}
                  </tr>
                ))
              ) :  (
              <tr>
              <th>{value.id}</th>
              <th>{value.name}</th>
              <th>{value.email}</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              </tr>)
            )}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}
