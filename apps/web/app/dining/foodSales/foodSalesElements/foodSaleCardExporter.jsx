import styles from "../page.module.css";

export function FoodSalesCardExporter(cardData = {
      team: "unknown_team",
      name: "unknown_name",
      menus: [
        {
          "name": "unknown_food",
          "price": 500,
          "specificIngredients": ["卵", "りんご"],
          "ingredients": ["卵", "米", "りんご"]
        }
      ]
    }) {
  const NameAndPrices = cardData.menus.map(item => <NameAndPrice menu={item}/>);//メニューを生成してそれを配列化
  const Ingredients = cardData.menus.map(item => <Ingredient menu={item}/>);//原材料表示を生成してそれを配列化

  return (
    <div className={styles.foodSalesMenuCard}>
      <table className={styles.foodSalesMenuBox}>
        <tr>
          <th scope="row" colSpan={3}>
            <p>{ cardData.team } - { cardData.name }</p>
          </th>
        </tr>
        
        { NameAndPrices }
        
      </table>
      <div className={styles.line}/>
      <details className={styles.ingredients}>
        <summary className={styles.ingredientsSummary}>アレルギー・原材料情報</summary>
        <div className={styles.ingredientsTable}>
          
          { Ingredients }

        </div>
      </details>
    </div>
  )
}

//商品名とその価格
export function NameAndPrice(menu) {
  return (
    <tr>
      <th scope="row" className={styles.foodSalesMenuName}>
        <p className={styles.foodSalesMenuBigChars}>{ menu.name }</p>
      </th>
      <td className={styles.foodSalesMenuName2Price}>
        <p className={styles.foodSalesMenuBigChars}>―</p>
      </td>
      <td className={styles.foodSalesMenuPrice}>
        <p className={styles.foodSalesMenuBigChars}>{ menu.price }円</p>
      </td>
    </tr>
  )
}


//商品名とその原材料
export function Ingredient(menu) {
  return (
    <table>
      <tr>
        <th>{ menu.name }</th>
      </tr>
      <tr>
        <table
          style={{ marginLeft: "0.5em" }}
          className={styles.ingredient}
        >
          <tr>
            <th>特定原材料27品目:</th>
            <td>{ menu.specificIngredients.join("、<wrb/>") }</td>
          </tr>
          <tr>
            <th>原材料名:</th>
            <td>{ menu.ingredients.join("、<wrb/>") }</td>
          </tr>
        </table>
      </tr>
    </table>
  )
}

/**
 * {/** 例。図形どうしよう  一カード？の塊 }
    <div className={styles.foodSalesMenuCard}>
      <table className={styles.foodSalesMenuBox}>
        <tr>
          <th scope="row" colSpan={3}>
            <p>ここには食販企画名が入るよ</p>
          </th>
        </tr>
        <tr>
          <th scope="row" className={styles.foodSalesMenuName}>
            <p className={styles.foodSalesMenuBigChars}>食べ物名1</p>
          </th>
          <td className={styles.foodSalesMenuName2Price}>
            <p className={styles.foodSalesMenuBigChars}>―</p>
          </td>
          <td className={styles.foodSalesMenuPrice}>
            <p className={styles.foodSalesMenuBigChars}>100円</p>
          </td>
        </tr>
      </table>
      <div className={styles.line}/>
      <details className={styles.ingredients}>
        <summary className={styles.ingredientsSummary}>アレルギー・原材料情報</summary>
        <div className={styles.ingredientsTable}>
          <table>
            <tr>
              <th>食べ物名1</th>
            </tr>
            <tr>
              <table
                style={{ marginLeft: "0.5em" }}
                className={styles.ingredient}
              >
                <tr>
                  <th>特定原材料27品目:</th>
                  <td>卵、りんご</td>
                </tr>
                <tr>
                  <th>原材料名:</th>
                  <td>卵、米、りんご</td>
                </tr>
              </table>
            </tr>
          </table>
        </div>
      </details>
    </div>
 */
