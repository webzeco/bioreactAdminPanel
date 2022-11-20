import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/dark.scss';
import { useContext, useEffect } from 'react';
import { DarkModeContext } from './context/darkModeContext.js';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './components/table/Table';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './formSource.js';
import Products from './pages/products/Products.jsx';
import { useSelector } from 'react-redux';
import Welcome from './components/welcome/Welcome.jsx';
import NewStore from './pages/newStore/NewStore.jsx';
import Register from './pages/Register/Register.jsx';
import Stores from './pages/stores/Stores.jsx';
// import socketIO from 'socket.io-client';
import Payment from './pages/CheckOut/Payment.jsx';
// import dotenv from 'dotenv';
// const socket = socketIO.connect('http://localhost:9999');

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const {
    isLoggedIn,
    info: { isAdmin },
  } = useSelector(({ user }) => user);
  useEffect(() => {
    console.log({ isLoggedIn });
  }, []);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              {isAdmin && (
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New inputs={userInputs} title="Add New User" />
                    }
                  />
                </Route>
              )}
              <Route path="products">
                <Route index element={<Products />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <NewStore
                      inputs={productInputs}
                      title="Add New Product"
                    />
                  }
                />
              </Route>
              <Route path="stores">
                <Route index element={<Stores />} />
                <Route path=":storeId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <NewStore
                      inputs={productInputs}
                      title="Add New Product"
                    />
                  }
                />
              </Route>

              <Route path="restaurants">
                <Route index element={<Products />} />
                <Route path=":restaurantId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New
                      inputs={productInputs}
                      title="Add New Product"
                    />
                  }
                />
              </Route>
              <Route path="animals">
                <Route index element={<Products />} />
                <Route path=":animalId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New
                      inputs={productInputs}
                      title="Add New Product"
                    />
                  }
                />
              </Route>
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/">
              <Route index element={<Welcome />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="orders">
                <Route index element={<Payment />} />
              </Route>
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
