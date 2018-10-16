import { start, stop } from './loop';
import cycles from './cycles';
import copyTo from '../util/copyTo';

interface Initialiser {
	name : string;
}

interface Gameloop {
	running : boolean;
	timeout ?: any;
	start : Function;
	stop : Function;
	cycles : Function;
}

class Game {
	name : string;
	loop : Gameloop;

	constructor (obj : Initialiser) {
		const self = this;
		copyTo(this, obj);
		this.loop = {
			running: false,
			start: start(self),
			stop: stop(self),
			cycles: cycles(self),
		};
	}
}

export default Game;