import { parseProgramsData } from "@/app/lib/index.js";
import ProgramSample from "@/app/program.mock.json";

export async function generateStaticParams() {
  const programs = parseProgramsData(ProgramSample);
  return programs.map((program) => ({ slug: program.id }));
}

/**
 *
 * @param {Promise<{ slug: string }>} params
 * @returns {Promise<React.ReactNode>}
 * @constructor
 */
export default async function Program({ params }) {
  const { slug } = await params;
  const programs = parseProgramsData(ProgramSample);
  const program = programs.find((program) => program.id === slug);

  return (
    <div>
      <h2>{program.name}</h2>
      <p>場所:{program.location}</p>
      <p>{program.prText || ""}</p>
    </div>
  );
}
