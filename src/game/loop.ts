'use strict';
import Game from './core';

const start = (game : Game) : Function => () : void => {
	if (game.loop.running) return;
	game.loop.running = true;
	game.loop.timeout = setInterval(
		() => {
			game.loop.cycles();
		}, 16);
}

const stop = (game : Game) : Function => () : void => {
	if (!game.loop.running) return;
	game.loop.running = false
	if (game.loop.timeout) {
		clearInterval(game.loop.timeout);
	}
}

export { start, stop };
