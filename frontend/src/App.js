import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { SubNavbar } from './components/SubNavbar';
import { ProductList } from './components/ProductList';
import Footer from './components/Footer';
import LoginSignupPage from './pages/Login';
import MobileLogin from './pages/MobileLogin';
import EmptyCartPage from './pages/Cart';
import AllROutes from './Routes/AllRoutes';
import { ProductList1 } from './components/ProductList1';
import { ProductList2 } from './components/ProductList2';

function App() {
  return (
    <>
     <Navbar/>
     <SubNavbar/>
     <AllROutes/>
     <ProductList1/>
     <ProductList/>
     <ProductList2/>
     <Footer/>
     {/* <LoginSignupPage/> */}
     {/* <MobileLogin/> */}
     {/* <EmptyCartPage/> */}
    </>
  );
}

export default App;
