import React, { useContext, useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { Navigate, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, setCart } = useContext(MyData);
  const navigate=useNavigate();
  
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);


  const qtyplus = (itemId) => {
    const cartPlus = cart.map((value) => {
      console.log(value);
      if (value.id === parseInt(itemId)) {
        return { ...value, quantity: value.quantity + 1 }; //value = {id , cateo ,quantity ,quantity:}
      }
      return value;
    });
    setCart(cartPlus);
  };


  const qtyminus = (itemId) => {
    const cartMinus = cart.map((value) => {
      if (value.id === parseInt(itemId) && value.quantity > 1) {
        return { ...value,quantity: value.quantity - 1 };
      }
      return value;
    });
    setCart(cartMinus);
  };

  const totalPrice = cart.length > 0
  ? cart.reduce((total, value) => {
      const itemprice = parseFloat(value.price.replace(/,/g, ""));
      return total + parseInt(itemprice) * value.quantity;
    }, 0)
  : 0;

  const removeProductcart=(itemId)=>{
    const productafterremove=cart.filter(value=>value.id !== itemId);
    setCart(productafterremove);

  }





  





  // const increment=()=>{
  //     setCount(count+1);
  // }
  // const decrement=()=>{
  //     count>1?setCount(count-1):setCount(1);

  // }

  // const itempricecomma = cart.length > 0 ? cart[0].price : 0;
  // const itemprice=parseFloat(itempricecomma.replace(/,/g,""));
  // const TotalPrice=count*itemprice;

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100 py-5">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                className="shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="text-black">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>

                      {cart.map((item) => (
                        <div className="d-flex align-items-center mb-5">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              src={item.src}
                              fluid
                              style={{ width: "150px" }}
                              alt="Generic placeholder image"
                            />
                          </div>

                          <div className="flex-grow-1 ms-3">
                            <a  className="float-end text-black">
                              <MDBIcon fas icon="times" onClick={()=>removeProductcart(item.id)} />
                            </a>
                            <MDBTypography tag="h5" className="text-primary">
                              {item.name}
                            </MDBTypography>
                            <MDBTypography
                              tag="h6"
                              style={{ color: "#9e9e9e" }}
                            >
                              {/* Color: red */}
                            </MDBTypography>

                            <div className="d-flex align-items-center">
                              <p className="fw-bold mb-0 me-5 pe-3">
                                {item.price}
                              </p>

                              <div className="def-number-input number-input safari_only">
                                <button
                                  className="minus"
                                  onClick={() => qtyminus(item.id)}
                                ></button>
                                <input
                                  className="quantity fw-bold text-black"
                                  min={1}
                                  value={item.quantity}
                                  type="number"
                                  disabled
                                />
                                <button
                                  className="plus"
                                  onClick={() => qtyplus(item.id)}
                                ></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}







                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />

                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">95$</p>
                      </div>
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          Total:
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          {totalPrice}
                        </MDBTypography>
                      </div>
                    </MDBCol>
                    <MDBCol lg="5" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Payment
                      </MDBTypography>

                      <form className="mb-5">
                        <MDBInput
                          className="mb-5"
                          label="Card number"
                          type="text"
                          size="lg"
                          defaultValue="1234 5678 9012 3457"
                        />

                        <MDBInput
                          className="mb-5"
                          label="Name on card"
                          type="text"
                          size="lg"
                          defaultValue="John Smith"
                        />

                        <MDBRow>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Expiration"
                              type="text"
                              size="lg"
                              minLength="7"
                              maxLength="7"
                              defaultValue="01/22"
                              placeholder="MM/YYYY"
                            />
                          </MDBCol>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Cvv"
                              type="text"
                              size="lg"
                              minLength="3"
                              maxLength="3"
                              placeholder="&#9679;&#9679;&#9679;"
                              defaultValue="&#9679;&#9679;&#9679;"
                            />
                          </MDBCol>
                        </MDBRow>

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit
                          <a href="#!"> obcaecati sapiente</a>.
                        </p>

                        <MDBBtn block size="lg">
                          Buy now
                        </MDBBtn>

                        <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a onClick={()=>navigate("/")}>
                            <MDBIcon fas icon="angle-left me-2" />
                            Back to shopping
                          </a>
                        </MDBTypography>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
