import { Character, Class, Game } from '../src/Yuka';

const KnightBaseLevel = {
	level: 1,
	Drainable: {
		hp: 100,
		mp: 0,
		xp: Infinity,
	},
	Skills: [],
	Traits: [],
};

const map = [
	[ "grass", "tree", "grass", "grass" ],
	[ "grass", "grass", "tree", "grass" ],
	[ "grass", "tree", "grass", "grass" ],
	[ "grass", "grass", "grass", "grass" ],
];

const game = Game.create({ map });

const Knight = Class.create(KnightBaseLevel);
const player = Character.create(Knight, "Jaime Lannister");

game.add(player, [ 2, 2 ]);
game.loop.start();

game.controls.on("move", (e: any) => {
	game.move(player, e);
});

// --

game.client.emit("move", [ 1, 1 ]);
