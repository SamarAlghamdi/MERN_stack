import './App.css';
import ProductDetails from './components/ProductDetails';
import AllProducts from './components/AllProducts';
import {Router} from '@reach/router';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <div className="App">
    
    <Router>
      <AllProducts path='/'/>
      <ProductDetails path='/:id'/>
      <EditProduct path='/:id/edit'/>
      </Router> 

    </div>
  );
}

export default App;
