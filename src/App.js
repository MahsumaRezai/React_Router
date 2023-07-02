import { Router } from 'react-router-dom';

import Welcome from './componet/Welcom';
import Product from './componet/Product';

function App() {
  return (
    <div>
      <main>
        <Router path='/welcome'>
          <Welcome />
        </Router>
        <Router path='/products'>
          <Product />
        </Router>
      </main>
    </div>
  );
}

export default App;

