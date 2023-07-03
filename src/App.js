import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Proudect';
import MainHeader from './componet/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path='/product'>
        <Products />
      </Route>


    </div>
  );
}

export default App;

