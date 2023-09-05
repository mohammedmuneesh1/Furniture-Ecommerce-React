import "./App.css";
import { MyData } from "./Main-Component/MyData";
import Header from "./Header/Header";
import Login from "./Login-Register/Login";
import Register from "./Login-Register/Register";
import Navbar from "./Header/Trail";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import SocialMediaCarousel from "./Body/SocialMediaCrousel";
import { product } from "./Main-Component/Product";
import { UserData } from "./Main-Component/UserData";
import Main from "../src/Main-Component/Main";
import {
  Route,
  Routes,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Sofa from "./Main-Component/Category Page/Sofa";
import ProductPage from "./Body/ProductPage";
import Bowl from "./Main-Component/Category Page/Bowl";
import Mattresses from "./Main-Component/Category Page/Mattresses";
import Lamps from "./Main-Component/Category Page/Lamps";
import Appliances from './Main-Component/Category Page/Appliances'
import Plants from "./Main-Component/Category Page/Plants";
import Cart from "./Body/Cart";
import AdminHome from "./Admin/AdminHome";
import Auser from "./Admin/Auser";
import AdminAside from "./Admin/AdminAside";
import AdminHead from "./Admin/AdminHead";
import AallProduct from "./Admin/AallProduct";

// P-TYPE importing 
import Asofa from "./Admin/P-TYPE/Asofa";
import ABowls from "./Admin/P-TYPE/ABowls";
import ALamps from "./Admin/P-TYPE/ALamps";
import Aplants from './Admin/P-TYPE/Aplants';
import Amattress from "./Admin/P-TYPE/Amattress";
import Aappliances from "./Admin/P-TYPE/Aappliances";

import ProductEditPage from "./Admin/ProductEditPage";
import ProductAddPage from "./Admin/ProductAddPage";
function App() {
  const [item, setItem] = useState(product);
  console.log(item);
  const [user, setUser] = useState(UserData);
  const [lstatus, setLstatus] = useState(true);
  const [logname, setLogname] = useState("");
  const [close, setClose] = useState(false);
  const [cart, setCart] = useState([]);

  //code to remove header and footer admin dashboard
  const location = useLocation();
  const HeadFoot = location.pathname.startsWith("/Admin");
   //code for admin to delete the product(admin page)
   const removeItem=(ItemIndex)=>{
    const UpdateProduct=[...item];
    UpdateProduct.splice(ItemIndex,1);
    setItem(UpdateProduct);

    }
  return (
    <>
      <MyData.Provider
        value={{
          item,
          setItem,
          user,
          setUser,
          lstatus,
          setLstatus,
          logname,
          setLogname,
          close,
          setClose,
          cart,
          setCart,
          removeItem
        }}
      >
        { !HeadFoot && <Header />}
        <Routes>
  <Route path="/" element={<Main />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Registration" element={<Register />} />
  <Route path="/sofa" element={<Sofa />} />
  <Route path="/Bowl" element={<Bowl />} />
  <Route path="/Mattress" element={<Mattresses />} />
  <Route path="/Lamps" element={<Lamps />} />
  <Route path="/Appliances" element={<Appliances />} />
  <Route path="/Plant" element={<Plants />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/Product/:id" element={<ProductPage />} />


  <Route path="/Admin" element={<AdminHome />}>
      <Route path="/Admin/Auser" element={<Auser/>} />
      <Route path="/Admin/Products" element={<AallProduct/>} />
      <Route path="/Admin/Products/Sofa" element={<Asofa/>} />
      <Route path="/Admin/Products/Bowl" element={<ABowls/>} />
      <Route path="/Admin/Products/Plant" element={<Aplants/>} />
      <Route path="/Admin/Products/Lamp" element={<ALamps/>} />
      <Route path="/Admin/Products/Mattress" element={<Amattress/>} />
      <Route path="/Admin/Products/Appliances" element={<Aappliances/>} />
      <Route path="/Admin/Productedit" element={<ProductEditPage/>} />
      <Route path="/Admin/ProductAddPage" element={<ProductAddPage/>} />
      {/* routennte ullil wrap cheyyaane so parent-pathname + child path name */}
    
    </Route>
 





    
</Routes>
        { !HeadFoot && <Footer />}
      </MyData.Provider>
    </>
  );
}

export default App;
