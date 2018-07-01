import Character from "./core";
import CharacterClass from "../class/core";
import createErrors from "../../util/createErrors";

import copyTo from "../../util/copyTo";

const validator = (obj: Object, callback: Function): void => {
	callback(
		createErrors(obj, [
			[
				"class should be an instance of CharacterClass",
				(x: Character): boolean => x.class instanceof CharacterClass
			]
		]).reduce((acc, x) => acc.concat(x), '')
	);
};

const assignDefaults = (char: Character): Character => {
	if (!char.level) char.level = 0;
	const defaults: Object = {
		hp: { current: char.levelProp("hp").max },
		mp: { current: char.levelProp("mp").max },
		xp: { current: char.levelProp("xp").max }
	};
	return copyTo(char, defaults, { override: false }) as Character;
};

export { validator, assignDefaults };
