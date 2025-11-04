import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  let foodItems=["Dal","Green Vegetble","Roti","Salad","Milk"];
  return (
    <>
     <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage> 
       <FoodItems items={foodItems}></FoodItems>
    
    </>
  );
}

export default App;
