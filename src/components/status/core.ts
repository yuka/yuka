import Character from '../character/core';

import copyTo from '../../util/copyTo';

interface Initialiser {
	name : string;
	repeatable ?: boolean;
	duration ?: number;
	effect (obj : Character) : Character;
}

class Status {
	name : string;
	repeatable : boolean;
	duration : number;
	effect : Function;

	constructor (obj : Initialiser) {
		copyTo(this, obj);
	}
}

export default Status;