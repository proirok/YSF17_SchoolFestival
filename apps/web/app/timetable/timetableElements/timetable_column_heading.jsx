import styles from "./timetable_column_headingStyles.module.css";
import common_styles from "./timetable_common.css";

export function Column_heading({ programsInfo, index }) {
    const open_detail = () => {
        const column = document.getElementById(`program_${index}`);
        column.classList.toggle("closed_inTimetable");
    }
    return (
        <div className={styles.headingBoard}>
            <p className={styles.teamName}>{programsInfo.name}</p>
            <p className={styles.summary}>{programsInfo.summary}</p>
            <p className={styles.extraInfo}>#{programsInfo.tags[0]}</p>
            <p className={styles.extraInfo}>@{programsInfo.place}</p>
            <button className={`${styles.expandButton} open_button`} onClick={open_detail}>詳細≫</button>
        </div>
    )
}