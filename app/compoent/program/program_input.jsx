import { Tags } from "@/app/lib/index.js";
import { useId } from "react";

/**
 *
 * @param {import("react").Dispatch<import("react").SetStateAction<Tags>>} onchange
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProgramInput({ onchange }) {
  const programInputId = useId();
  return (
    <>
      <input
        type={"search"}
        onKeyDown={(event) => {
          inputChangeHandler(event, onchange);
        }}
        aria-describedby={programInputId}
      />
    </>
  );
}

/**
 *
 * @param {KeyboardEvent<HTMLInputElement>} event
 * @param {import("react").Dispatch<import("react").SetStateAction<Tags>>} onchange
 */
function inputChangeHandler(event, onchange) {
  if (event.key === "Enter") {
    /** @type {string[]} */
    const init_tags = event.currentTarget.value.split(" ");
    const tags = new Tags(init_tags);
    onchange(tags);
  }
}
