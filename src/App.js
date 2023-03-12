import React from 'react';
// Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainIndex from './components/mainIndex/mainIndex';

// import ProductDelete from './components/productDelete/productDelete' // TO DO
// import Flights from './components/Flights/flightsList/flightsList'
// import FlightsCreate from './components/Flights/flightCreate/flightCreate'
// import FlightsDetail from './components/Flights/flightDetail/flightDetail'
// import FlightsUpdate from './components/Flights/flightUpdate/flightUpdate'
// import Hotels from './components/Hotels/hotelList/hotelList'
// import HotelCreate from './components/Hotels/hotelCreate/hotelCreate'
// import HotelDetail from './components/Hotels/hotelDetail/hotelDetail'
// import HotelUpdate from './components/Hotels/HotelUpdate/hotelUpdate'
// import Packages from './components/Packages/packagesList/packagesList'
// import PackageCreate from './components/Packages/packagesCreate/packageCreate'
// import PackageDetail from './components/Packages/packageDetail/packageDetail'
// import PackageUpdate from './components/Packages/packageUpdate/packageUpdate'
// import Choose from './components/User/choose/choose'
// import Profile from './components/User/profile/profile'
// import Loggin from './components/User/loggin/loggin'
// import Register from './components/User/register/register'
// import CreateChose from './components/createChoose/createChoose'
// import Cart from './components/cart/cart'
// import DeleteConfirmUser from './components/User/deleteConfirm/deleteConfirm'
// import EditUser from './components/User/editUser/editUser'

// ***********************************************
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/****************** HOME ******************/}
        <Route path="/" component={MainIndex} />

        {/* ***************** PRODUCTS *****************
      <Route path="/productDelete" component={ProductDelete} /> 
      {/* Flights */}
        {/* <Route path="/flights" component={Flights} />  */}
        {/* <Route path="/flightsCreate" component={FlightsCreate} />  */}
        {/* <Route path="/flightsDetail" component={FlightsDetail} />  */}
        {/* <Route path="/flightsUpdate" component={FlightsUpdate} />  */}

        {/* Hotels */}
        {/* <Route path="/hotels" component={Hotels} />  */}
        {/* <Route path="/hotelCreate" component={HotelCreate} />  */}
        {/* <Route path="/hotelDetail" component={HotelDetail} />  */}
        {/* <Route path="/hotelUpdate" component={HotelUpdate} />  */}

        {/* Packages */}
        {/* <Route path="/packages" component={Packages} /> */}
        {/* <Route path="/packageCreate" component={PackageCreate} /> */}
        {/* <Route path="/packageDetail" component={PackageDetail} />  */}
        {/* <Route path="/packageUpdate" component={PackageUpdate} />  */}

        {/****************** USER ******************/}
        {/* <Route path="/choose" component={Choose} />  */}
        {/* <Route path="/profile/:id" component={Profile} />  */}
        {/* <Route path="/loggin" component={Loggin} />  */}
        {/* <Route path="/Register" component={Register} />  */}
        {/* <Route path="/createChoose" component={CreateChose} />  */}
        {/* <Route path="/cart" component={Cart} />  */}
        {/* <Route path="/deleteConfirmUser" component={DeleteConfirmUser} />  */}
        {/* <Route path="/editUser" component={EditUser} /> */}

        <Route path="" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;