import Level from "./Level";
import { LevelFn } from "./Level";

interface Class extends Level {
	LevelFn: (Level: Level) => Level,
}

export const create = (base: Level, levelFn: LevelFn = x => x): Class => ({
	...base,
	LevelFn: levelFn,
});

export default Class;
