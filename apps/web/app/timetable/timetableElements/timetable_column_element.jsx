import { Timetable } from "./timetable";
import styles from "./timetable_column_elementStyles.module.css";
import common_styles from "./timetable_common.css";

export function Column_element({ timetable, startIndex, endIndex }) {
    const type = timetable.type;
    const gridStyle = {
        'grid-row': `${startIndex} / ${endIndex}`
    }
    let element;
    if (type == "event") {
        element =
            <div style={gridStyle} className={styles.columnElement}>
                <p>{`${timetable.start}～${timetable.end}`}</p>
            </div>
    }
    else if (type == "ticketDistribution") {
        element =
            <div style={gridStyle} className={styles.ticketDistributionContainer}>
                <div className={styles.ticketDistribution}>
                    <p>{timetable.name}</p>
                </div>
            </div>
    }
    return (element);
}