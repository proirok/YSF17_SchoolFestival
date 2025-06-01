import styles from "./callout.module.css";
import { createContext, useContext } from "react";

/**
 * @typedef {"warn" | "info" | "default"} calloutKind
 */

/**
 *
 * @type {React.Context<calloutKind>}
 */
const CalloutContext = createContext("default");

/**
 *
 * @param {React.ReactNode} props
 * @param {"warn" | "info" | "default" } [kind="default"]
 * @returns {React.ReactNode}
 * @constructor
 */
export function Callout({ children, kind = "default" }) {
  return (
    <div>
      <CalloutContext value={kind}>{children}</CalloutContext>
    </div>
  );
}

/**
 *
 * @returns {React.ReactNode}
 * @constructor
 */
export function CalloutIcon() {
  const kind = useContext(CalloutContext);
  switch (kind) {
    case "info":
      return <span className={styles.calloutIcon}>💡</span>;
    case "warn":
      return <span className={styles.calloutIcon}>⚠️</span>;
    default:
      return null;
  }
}
