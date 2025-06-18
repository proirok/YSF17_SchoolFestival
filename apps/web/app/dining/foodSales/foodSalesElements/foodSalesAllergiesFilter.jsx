import styles from "../page.module.css";
import { foodSalesMenu } from "./foodSalesMenus";
import { FoodSalesCardExporter } from "./foodSaleCardExporter";

export function FoodSalesAllergiesFilter(allergies = []) {
  const Cards = foodSalesMenu().map(item => <FoodSalesCardExporter cardData={item}/>);
  return (
    //とりあえずそのまま横流し
    <div>
      {/** アレルギー物質を「含まない」やつ */}
      <div id="foodSaleMenus" className={styles.foodSalesMenuArea}>
        { Cards }
      </div>
      {/** 下はアレルギー物質を「含む」やつ */}
      <div id="foodSaleMenus" className={styles.foodSalesMenuArea}>
        
      </div>
    </div>
  )
}
