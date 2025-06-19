import styles from "../page.module.css";
import { foodSalesMenu } from "./foodSalesMenus"
import { FoodSalesAllergiesFilter } from "./foodSalesAllergiesFilter";

export function FoodSalesAllergiesSettings() {
  //let foodSalesMenuOriginal = foodSalesMenu;

  //処理

  return (
    <div>
      <div id="AllergySlection">
        {/** アレルギー選択部分 */}
      </div>

      <FoodSalesAllergiesFilter />
    </div>
  )
}
