import TitleBarWithBack from "@/app/compoent/title_bar";
import styles from "./page.module.css"

export const metadata = {
  title: "蒼煌祭17th非公式ページ｜カフェテリア",
  description: "蒼煌祭17thのカフェテリアについての情報の非公式のページです。",
};

export default function Cafeteria() {
  return (
    <div>
      <TitleBarWithBack backpage="/dining" pagename="カフェテリア"/>
      <div>
        <h1>メニュー</h1>
        {/** メニューはデータベースから取り出してくる？ */}
        {/** CSSいい感じにお願いします */}
        <div>
          <table className={styles.priceTable} style={{maxWidth: "100%"}}>
            <tr>
              <th scope="row" className={styles.priceTable}>
                ・カレー
              </th>
              <td className={styles.priceTable}>
                /400円
              </td>
            </tr>
            <tr>
              <th scope="row" className={styles.priceTable}>
                ・カツカレー
              </th>
              <td className={styles.priceTable}>
                /400円
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <h1>注意事項</h1>
        {/** 箇条書きのルールも必要？ */}
        <p>・食券を買い、そのメニューの列に並んでください。途中、通路がありますので詰めすぎないようにお気を付けください。</p>
        <p>・容器は使い捨てです。</p>
      </div>
    </div>
  );
}
