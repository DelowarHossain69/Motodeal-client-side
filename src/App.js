import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/pages/Home/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import UpdateProduct from './components/pages/UpdateProduct/UpdateProduct';
import Header from './components/shared/Header/Header';
import Products from './components/pages/Products/Products';
import ManageInventory from './components/pages/ManageInventory/ManageInventory';
import Error from './components/pages/Error/Error';
import Footer from './components/shared/Footer/Footer';
import AddProduct from './components/pages/AddProduct/AddProduct';
import ProductDetails from './components/pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/inventory/:id' element={<Inventory/>}></Route>
          <Route path='/manageInventory' element={<ManageInventory/>}></Route>
          <Route path='/update/:id' element={<UpdateProduct/>}></Route>
          <Route path='/addProduct' element={<AddProduct/>}></Route>
          <Route path='/productDetails/:id' element={<ProductDetails/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
        <ToastContainer/>
    </div>
  );
}

export default App;
