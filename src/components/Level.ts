import Skill from "./Skill";
import Effect from "./Effect";

interface Level {
	level: number,
	Drainable: { [k:string]: number },
	Skills: Skill[],
	Traits: Effect[],
}

export type LevelFn = (Level: Level) => Level;
export const create: LevelFn = (level) => level;
export default Level;
