import styles from "./page.module.css";
import TitleBarWithBack from "@/app/compoent/title_bar";
import Link from "next/link";

export const metadata = {
  title: "蒼煌祭17th非公式ページ｜食販",
  description: "蒼煌祭17thの食販についての情報の非公式のページです。",
};

export default function FoodSales() {
  return (
    <div>
      <TitleBarWithBack backpage="/dining" pagename="食品販売" />
      {/** こういう場合Linkとaどっちのほうがいいんだろ */}
      {/** リンクが青くならない！なんでそうした！ */}
      <p>
        <Link href="#how-to-use-foodSales">食販の使い方</Link>
        も併せてお読みください
      </p>
      <div style={{ paddingBottom: "50rem" }}>
        <h1>食販団体一覧</h1>
        {/** 食販に限った企画で要求される機能が似ているのでprogram/slug/page.jsxの機能を流用しようかな？ */}
        {/** スマホ想定の文字サイズ */}
        <div id="foodSaleMenus" className={styles.foodSalesMenuArea}>
          {/** 例。図形どうしよう */}{/** 一カード？の塊 */}
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
            <div className={styles.line}></div>
            <details className={styles.ingredients}>
              <summary className={styles.ingredientsSummary}>アレルゲン・原材料情報</summary>
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

          {/** 2つめ */}
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
            <div className={styles.line}></div>
            <details className={styles.ingredients}>
              <summary>アレルゲン・原材料情報</summary>
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
        </div>
      </div>
      <div id="how-to-use-foodSales">
        <h1>食販の使い方</h1>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRSvoPrrU09BtDllWGcO3DX-EMw352OwDCt9hkw02RBTGMx-iumWjVnqMANDBV99leJqEyKKtKIeyIi/pubembed?start=false&loop=false&delayms=5000"
          border={"none"}
          width={320}
          height={190}
          allowFullScreen={true}
          mozallowfullscreen={"true"}
          webkitallowfullscreen={"true"}
        ></iframe>
      </div>
    </div>
  );
}
