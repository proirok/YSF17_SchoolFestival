import { Column_element } from "./timetable_column_element";
import { Column_heading } from "./timetable_column_heading";
import { Column_detailsElement } from "./timetable_column_detailsElement";
import { Column_detailsHeading } from "./timetable_column_detailsHeading";
import styles from "./timetable_columnStyles.module.css";
import common_styles from "./timetable_common.css";
import style4action from "./timetable_action.css"

export function Timetable_column({ programsInfo, index }) {
    function timeToIndex(time_str) {
        const [hour, minute] = time_str.split(":").map((x) => Number(x));
        return (hour - 10) * 12 + Math.round(minute / 5) + 1;
    }

    const element_contents = programsInfo.details.map(
        (x, i) =>
            <Column_element
                key={`columnEl_${i}`}
                content={`${x.time.start}～${x.time.end}`}
                startIndex={timeToIndex(x.time.start)}
                endIndex={timeToIndex(x.time.end)} />
    );
    const element_detailsContents = programsInfo.details.map(
        (x, i) =>
            <Column_detailsElement
                key={`columnDetailEl_${i}`}
                programsDetail={x}
                startIndex={timeToIndex(x.time.start)}
                endIndex={timeToIndex(x.time.end)} />);
    const line_1hour = [...Array(6)].map(
        (_, i) =>
            <div
                key={`line1hour_${i}`}
                className={`${styles.line_1hour} line_1hour`}
                style={{ 'grid-row': `${1 + 12 * i} / ${1 + 12 * i}` }}></div>);

    return (
        <div id={`program_${index}`}
            className={`${styles.column} ${[styles.even, styles.odd][index % 2]} ${["even", "odd"][index % 2]} closed_inTimetable timetable_column`}>
            <div className={styles.column_main}>
                <Column_heading programsInfo={programsInfo} index={index} />
                <div className={styles.timeBoard}>
                    <p className={styles.startTime}>10:00</p>
                    <p className={styles.endTime}>15:00</p>
                    {line_1hour}
                    {element_contents}
                </div>
            </div>
            <div className={`${styles.column_details} detailsColumn`}>
                <div className={styles.details_background}>
                    <Column_detailsHeading programsInfo={programsInfo} index={index} />
                    <div className={styles.timeBoard}>
                        {element_detailsContents}
                    </div>
                </div>
            </div>
        </div>
    )
}