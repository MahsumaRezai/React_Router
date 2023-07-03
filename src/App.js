import { Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Products from './pages/Proudect';

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path='/product'>
        <Products/>
      </Route>


    </div>
  );
}

export default App;

