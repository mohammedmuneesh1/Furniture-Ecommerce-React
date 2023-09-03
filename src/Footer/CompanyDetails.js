import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import gp from '../Assets/footer-Assests/google-play.png';
import ps from '../Assets/footer-Assests/playstore.webp';

const CompanyDetails = () => {
  const [showMore, setShowMore] = useState(true);

  const change = () => {
    setShowMore(!showMore);
  };

  const handleSize = () => {
    if (window.innerWidth <= 800) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className="CD-main">
      {showMore && (
        <div className="CD-details">
          <hr/>
          <div className="email-sub">
            <span>Sign up for our offer</span>
            <input type="email" id="email" className="input-field" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          <p className="CD-para">When you're looking for fantastic furnishings, look no further than Pepperfry. We offer a great range of designer furnishings for you to choose from. Take your pick from funky cushion covers, blinds and shades, rugs, carpets, diwan sets and durries and runners when you're looking for great living room furnishings. Select from interesting table linen, cushion insters, floor mats, pillows, door curtains and curtain brackets and rods to add some luxury home furnishings. We also offer pillows and kids furnishings as well.Shop from Wide Range of Home Furnishings Products Online at Pepperfry.comAt Pepperfry, we offer over 10,000 products for you to choose from. With our convenient payment options (COD, Mastercard, Visa and Paypal), easy returns, free assembly and delivery, it's no secret why we are the leading brand in India in the furnishings segment. You can also avail discounts & offers on wide range of furniture, home decor, home & office furniture, decor items, furnishing products, bed & bath products online, kitchen products and accessories and electrical appliances online, housekeeping products, dining products for home, home bar accessories, hardware and electricals, Garden and Outdoor Products and kids products, that suit your need.</p>
      <hr/>
       <div className="CD-brand">
         < div className="CD-d">
                <h2>Popular Categories</h2>
                <p style={{textAlign:"justify"}}>
                <a href="#">Sectional Sofas, </a>
<a href="#"> Sofa Sets,</a>
<a href="#">Queen Size Beds, </a>
<a href="#">King Size Beds, </a>
<a href="#">Coffee Tables, </a>
<a href="#">Dining Sets, </a>
<a href="#"> Recliners,</a>
<a href="#">Sofa Cum Beds, </a>
<a href="#">Rocking Chairs, </a>
<a href="#"> Cabinets & Sideboards,</a>
<a href="#">Book Shelves, </a>
<a href="#">TV & Media Units, </a>
<a href="#"> Wardrobes,</a>
<a href="#">Outdoor Furniture, </a>
<a href="#">Bar Cabinets, </a>
<a href="#">Wall Shelves, </a>
<a href="#"> Photo Frames,</a>
<a href="#">Bed Sheets, </a>
<a href="#">Table Linen, </a>
<a href="#">Study Tables, </a>
<a href="#">Office Furniture, </a>
<a href="#">Dining Tables, </a>
<a href="#">Carpets, </a>
<a href="#">Wall Art </a>
                </p>
              </div>
              < div className="CD-d">
                <h2>Popular Brands</h2>
                <p style={{textAlign:"justify"}}>
                <a href="#">Mintwud, </a>
<a href="#">Woodsworth, </a>
<a href="#">CasaCraft, </a>
<a href="#">Amberville, </a>
<a href="#">Mudramark, </a>
<a href="#">Bohemiana, </a>
<a href="#">Clouddio, </a>
<a href="#">Spacewood, </a>
<a href="#">A Globia Creations, </a>
<a href="#">Febonic, </a>
<a href="#">@home, </a>
<a href="#">Durian, </a>
<a href="#">Evok, </a>
<a href="#">Hometown,</a>
<a href="#">Nilkamal, </a>
<a href="#">Crystal Furnitech, </a>
<a href="#">Bluewud, </a>
<a href="#">Duroflex,</a>
<a href="#">Sleepyhead,</a>
<a href="#">Green Soul,</a>
<a href="#">Orange Tree</a>

                </p>
              </div>
              < div className="CD-d">
                <h2>Popular cities</h2>
                <p style={{textAlign:"justify"}}>
                <a href="#">Bengaluru, </a>
<a href="#">Mumbai, </a>
<a href="#">Navi Mumbai, </a>
<a href="#">Delhi, </a>
<a href="#">Hyderabad, </a>
<a href="#">Pune, </a>
<a href="#">Chennai, </a>
<a href="#">Gurgaon, </a>
<a href="#">Kolkata, </a>
<a href="#">Noida, </a>
<a href="#">Goa, </a>
<a href="#">Ghaziabad, </a>
<a href="#">Faridabad, </a>
<a href="#">Jaipur, </a>
<a href="#">Lucknow, </a>
<a href="#">Kochi, </a>
<a href="#">Visakhapatnam, </a>
<a href="#">Chandigarh, </a>
<a href="#">Vadodara, </a>
<a href="#">Nagpur, </a>
<a href="#">Thiruvananthapuram, </a>
<a href="#">Indore, </a>
<a href="#">Mysore, </a>
<a href="#">Bhopal, </a>
<a href="#">Surat, </a>
<a href="#">Jalandhar, </a>
<a href="#">Patna, </a>
<a href="#">Ludhiana, </a>
<a href="#">Ahmedabad, </a>
<a href="#">Nashik, </a>
<a href="#">Madurai, </a>
<a href="#">Kanpur, </a>
<a href="#">Aurangabad </a>
                </p>
              </div>
              < div className="CD-d CD-dimg">
                <h2>Links</h2>
                <img src={ps}/>
                <br/>
                <img src={gp} />
              </div>
              </div>
              <hr/>
        </div>
      )}
      <div className="CD-btn">
        <MDBBtn onClick={change} color="primary">
          {showMore ? "Show Less ▲" : "Show More ▼"}
        </MDBBtn>
      </div>
    </div>
  )
};

export default CompanyDetails;
