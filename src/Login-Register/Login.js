import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Login-Register.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className="login-form">
        <MDBContainer className="container">
          <form>
            <MDBRow>
              <MDBCol
                col="6"
                className="right-login"
                style={{ position: "relative" }}
              >
                <div className="d-flex flex-column ms-0 left-login">
                  <div className="text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style={{ width: "105px" }}
                      alt="logo"
                    />

                    <h4 className="mt-2 mb-0 pb-0 team-text">
                      We are The Lotus Team
                    </h4>
                  </div>
                  <p className="loginacc-text">Please login to your account</p>
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Email address"
                    htmlFor="form1"
                    type="email"
                  />
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Password"
                    htmlFor="form2"
                    type="password"
                  />
                  <div className="text-center pt-1 mb-5 pb-5">
                    <MDBBtn className=" w-100 gradient-custom-2 sign-in">
                      Sign in
                    </MDBBtn>
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-0">
                      Don't have an account?&nbsp;
                      <a className="text-muted" href="#!"  onClick={()=>navigate("/Registration")}>
                        Register Now
                      </a>
                    </p>
                  </div>
                </div>
              </MDBCol>
              <MDBCol className="mb-5">
                <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 right-login">
                  <div className="text-white">
                    <span class="material-symbols-outlined close-icon">
                      close
                    </span>
                    <h4
                      className="mb-2 right-login-head"
                      style={{ textAlign: "center" }}
                    >
                      We are more than just a company
                    </h4>
                    <p className="small mb-0" style={{ textAlign: "justify" }}>
                      Discover the perfect blend of comfort, style, and
                      craftsmanship with our exquisite furniture collection.
                      Elevate your living space with pieces that seamlessly
                      marry functionality and aesthetics. Each meticulously
                      crafted item is a testament to our commitment to quality,
                      ensuring that your home is adorned with not just
                      furniture, but works of art. Explore our diverse range
                      today and redefine the way you experience your living
                      spaces.
                    </p>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
      </div>
      <Footer/>
    </div>
  );
}
