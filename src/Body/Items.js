import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Items = () => {
  const navigate=useNavigate();
  const {item,setItem}=useContext(MyData);
  const disP=item.slice(0,8); //to display first 8 products only
  console.log(item);
  return (
    <>
      <MDBContainer fluid className="my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Bestsellers</strong>
        </h4>

        <MDBRow>


  {disP.map((value,index) => (
    
    <MDBCol xl="3" lg="4" md="6" sm="6" xs="12" className="mb-4"   key={value.id}>
    <MDBCard className=" card-size m-auto"   key={value.id}   onClick={()=>navigate(`/Product/${value.id}`)} >
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom"
        
        >
          <div className="image-container">
            <MDBCardImage
              src={value.src}
              fluid
              className="w-100 custom-image"
              alt="Product"
            />
          </div>
          <span>
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h5>
                  <span className="badge bg-primary ms-2">New</span>
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
            </span>
        </MDBRipple>
        <MDBCardBody className="custom-card-body p-1 p-md-3 p-lg-4">
          <a  className="text-reset">
            <h5 className="card-title mb-2 mb-md-3 mb-lg-3 h5-responsive">
            {value.name}
            </h5>
          </a>
          <a className="text-reset">
            <p className="mb-2 mb-lg-4 text-muted card-category " >{value.category}</p>
          </a>
          <h6 className="mb-2 card-price"><b>₹</b>{value.price}</h6>
        </MDBCardBody>
      </MDBCard>

    </MDBCol>



  ))}

        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default Items;
