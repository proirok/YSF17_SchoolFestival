import styles from "./timetable_column_elementStyles.module.css";
import common_styles from "./timetable_common.css";

export function Column_element({ content, startIndex, endIndex }) {
    const gridStyle = {
        'grid-row': `${startIndex} / ${endIndex}`
    }
    return (
        <div style={gridStyle} className={styles.columnElement}>
            <p>{content}</p>
        </div>
    )
}