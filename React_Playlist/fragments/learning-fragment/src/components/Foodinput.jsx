import styles from "./Foodinput.module.css";
const FoodInput=()=>{
  const handleOnChange=(event)=>{
    console.log(event.target.value);
  };
  return <input type="text" placeholder="Enter food Item here" className={styles.foodInput}
  onChange={(event)=>console.log(handleOnChange)}/>;
}
export default FoodInput;