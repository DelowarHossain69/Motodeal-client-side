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
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import RequireAuth from './components/pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>

          <Route path='/inventory/:id' element={
            <RequireAuth>
                <Inventory/>
            </RequireAuth>
          }></Route>

          <Route path='/manageInventory' element={
            <RequireAuth>
                <ManageInventory/>
            </RequireAuth>
          }></Route>

          <Route path='/update/:id' element={
            <RequireAuth>
                <UpdateProduct/>
            </RequireAuth>
          }></Route>

          <Route path='/addProduct' element={
            <RequireAuth>
              <AddProduct/>
            </RequireAuth>
          }></Route>

          <Route path='/productDetails/:id' element={<ProductDetails/>}></Route>
          <Route path='*' element={<Error/>}></Route>
          
        </Routes>
        <Footer/>
        <ToastContainer/>
    </div>
  );
}

export default App;
