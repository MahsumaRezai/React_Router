import { Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Proudect';
import MainHeader from './componet/MainHeader';
import Proudectdel from './pages/Productdel';

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
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

    </div>
  );
}

export default App;

