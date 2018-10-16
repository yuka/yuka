import InfiniteList = require('@codefeathers/infinity');

import copyTo from '../../util/copyTo';

interface Level {
	id : number;
	hp : { max : number };
	mp ?: { max : number };
	xp ?: { max : number };
}

interface Initialiser {
	name : string;
	baseLevel : Object;
	levelFunction : Function;
	maxLevel : number;
}

class CharacterClass {
	name : string;
	levels : Level[];
	maxLevel : number;

	private baseLevel : Object;
	private levelFunction : Function;

	constructor (obj : Initialiser) {
		copyTo(this, obj);
		const leveller = new InfiniteList(this.baseLevel, this.levelFunction)
		this.levels = leveller.take(this.maxLevel).map(x => x.value);
	}
}

export default CharacterClass;
export { Level }; //TODO: Figure out exporting interfaces