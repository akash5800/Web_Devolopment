import styles from"./Item.module.css";
const Item=(props)=>{
return <li className={`${styles["kg-item"]}`}><span className={styles["kg-span"]}>{props.foodItem}</span></li>
};
export default Item;