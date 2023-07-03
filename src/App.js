import { Route, Switch, Redirect } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Proudect';
import MainHeader from './componet/MainHeader';
import Proudectdel from './pages/Productdel';
import { Fragment } from "react";
import SectionOne from "./componet/Section/SectionOne";
import AddUser from "./componet/AddUser/AddUser";
import UserList from "./componet/CheckFrom/UserList";
import { useState } from "react";

function App() {

  const [userdata, setdata] = useState([]);
  const userHadler = (name, lastname, email, password) => {
    setdata((datapast) => {
      return [...datapast, { name: name, lastname: lastname, email: email, password: password, id: Math.random().toString() }];
    })

  }
  return (

    <div>
      <MainHeader />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome' />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path='/product' exact>
          <Products />
        </Route>
        <Route path='/product/:productId'>
          <Proudectdel />
        </Route>
      </Switch>

      <Fragment>
        <SectionOne />
        <AddUser onAddUser={userHadler} />
        <UserList users={userdata} />






      </Fragment>

    </div>
  );
}

export default App;

