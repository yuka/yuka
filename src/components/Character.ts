import Entity from "./Entity";
import Class from "./Class";
import Item from "./Item";
import Skill from "./Skill";
import Effect from "./Effect";

interface Character extends Entity {
	name: string;
	type: "character";
	Class: Class,
	Drainable: { [k:string]: number },
	Inventory: Item[];
	Equipment: Item[];
	Skills: Skill[],
	Traits: Effect[],
	Effects: Effect[];
	position: {
		[k in "x"|"y"]: number;
	}|null;
}

export const create = (characterClass: Class, name: string): Character => ({
	name,
	type: "character",
	Class: characterClass,
	...characterClass,
	Drainable: {
		...characterClass.Drainable,
	},
	Inventory: [],
	Equipment: [],
	Effects: [],
	Skills: [ ...characterClass.Skills ],
	Traits: [ ...characterClass.Traits ],
	position: null,
});
export default Character;
