import copyTo from '../../util/copyTo';
import maxMin from '../../util/maxMin';
import CharacterClass from '../class/core';
import Status from '../status/core';
import { validator, assignDefaults } from './util';

interface Initialiser {
	name: string;
	class: CharacterClass;
	hp?: { current: number };
	mp?: { current: number };
	xp?: { current: number };
	level?: number;
}

class Character {
	name: string;
	level: number;
	class: CharacterClass;
	statuses: Status[];

	protected hp: { current: number };
	protected mp: { current: number };
	protected xp: { current: number };
	protected position: {
		location: string;
		position: { x: number; y: number; z?: number };
	};
	protected abilities: Object[];
	protected magic: Object[];
	protected inventory: Object[];

	constructor(obj: Initialiser) {
		validator(obj, (err: string) => {
			if (err) throw new Error(err);
		});
		copyTo(this, obj);
		assignDefaults(this);
	}

	levelProp(name: string): any {
		return this.class.levels[this.level][name];
	}

	protected drainer(type: string, points: number) {
		return (this[type].current = maxMin(
			(this[type].current -= points)
		));
	}

	protected gainer(type: string, points: number) {
		return (this[type].current = maxMin(
			(this[type].current += points), {
				max: this.levelProp(type).max
		}));
	}

	drainHp(points: number) {
		return this.drainer('hp', points);
	}

	drainMp(points: number) {
		return this.drainer('mp', points);
	}

	gainHp(points: number) {
		return this.gainer('hp', points);
	}

	gainMp(points: number) {
		return this.gainer('mp', points);
	}

	gainXp(points: number) {
		return this.gainer('xp', points);
	}
}

export default Character;
