import copyTo from '../../util/copyTo';
import maxMin from '../../util/maxMin';
import InfiniteList = require('@codefeathers/infinity');

interface Level {
	id : number,
	hp : { max : number },
	mp ?: { max : number },
	xp ?: { max : number },
}

class CharacterClass {
	protected name : string;
	protected levels : Level[];
	protected maxLevel : number;
	protected abilities : Object[];
	protected magic : Object[];

	constructor (name : string, baseLevel : Object, levelFunction : Function, maxLevel : number) {
		this.name = name;
		this.maxLevel = maxLevel;
		const leveller = new InfiniteList(baseLevel, levelFunction)
		this.levels = leveller.take(maxLevel).map(x => x.value);
	}
}

export default CharacterClass;
export { Level };