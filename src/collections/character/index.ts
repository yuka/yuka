import copyTo from '../../util/copyTo';
import maxMin from '../../util/maxMin';

class Character {
	protected name : string;
	protected hp : { current : number };
	protected mp : { current : number };
	protected xp : { current : number };
	protected position : { x : number, y : number, z ?: number };
	protected abilities : Object[];
	protected magic : Object[];
	protected inventory : Object[];
	protected level : number;
	protected class : Object;

	constructor (obj) {
		copyTo(obj, this);
	}

	levelProp (name : string) : any {
		return this.class[this.level][name];
	}

	protected drainer (type : string, points : number) {
		return this[type].current = maxMin(
			this[type].current -= points
		);
	}

	protected gainer (type, points) {
		return this[type].current = maxMin(
			this[type].current += points,
			{ max: this.levelProp(type).max }
		);
	}

	drainHp (points) {
		return this.drainer('hp', points);
	}

	drainMp (points) {
		return this.drainer('mp', points);
	}

	gainHp (points) {
		return this.gainer('hp', points);
	}

	gainMp (points) {
		return this.gainer('mp', points);
	}

	gainXp (points) {
		return this.gainer('xp', points);
	}
}

export default Character;