import { Character, CharacterClass } from '../src/yuka';
import { Level } from '../src/collections/class/core';

// Level incrementor
const levelFunction = (prev : Level) : Level => ({
	id : prev.id + 1,
	hp : { max : Math.floor(prev.hp.max * 1.2) },
	mp : { max : Math.floor(prev.mp.max * 1.2) },
	xp : { max : Math.floor(prev.xp.max * 1.2) },
})

const baseLevel = {
	id : 1,
	hp : { max: 10 },
	mp : { max : 20 },
	xp : { max : 200 },
};

// Let's create a new CharacterClass!
const Knight = new CharacterClass('Knight', baseLevel, levelFunction, 10);

// Let's creaate a new Knight character!
const Hero = new Character({name: 'Jaime', class: Knight});
