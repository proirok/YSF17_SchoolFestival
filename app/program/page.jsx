"use client";

import ProgramInput from "@/app/compoent/program/program_input.jsx";
import ProgramView from "@/app/compoent/program/program_view.jsx";
import { matchPrograms, parseProgramsData, Tags } from "@/app/lib/index.js";
import ProgramSample from "@/app/program.mock.json";
import { useState } from "react";

export default function Program() {
  const [tags, setTags] = useState(new Tags([]));
  // TODO:サンプルデータにつきデータ取り扱いの正式な方式を考慮必要
  const programs = parseProgramsData(ProgramSample);
  if (tags.size !== 0) {
    const matchedPrograms = matchPrograms(programs, tags);
    return (
      <div>
        <ProgramInput onchange={setTags} />
        <ProgramView programs={matchedPrograms} />
      </div>
    );
  } else {
    return (
      <div>
        <ProgramInput onchange={setTags} />
        <ProgramView programs={programs} />
      </div>
    );
  }
}
