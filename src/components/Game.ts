import Character from "./Character";
import Item from "./Item";

import { sleep } from "../util";

type Position = [ number, number ];

interface Square {
	terrain: string;
	items: Item[];
	feature: Item|null;
	character: Character|null;
}

export const create = ({ map }: { map: string[][] }) => {

	let loop = false;
	let tickCount = 0n;

	const board = map.map(row => {
		return row.map(square => ({
			terrain: square,
			items: [],
			feature: null,
			character: null,
		}) as Square);
	});

	const subscribers: {
		move: Function[],
	} = {
		move: [],
	};

	const game = {
		add: (entity: Character|Item, [ x, y ]: Position) => {
			if (entity.type === "character") {
				board[x][y].character = entity;
				entity.position = { x, y };
			}
			if (entity.type === "item") {
				board[x][y].items.push(entity);
			}
			return game;
		},

		move: (entity: Character|Item, [ x, y ]: Position) => {
			if (entity.type === "character") {
				console.log(entity)
				if (entity.position == null) {
					throw new Error("Entity has to be placed on map");
				}
				console.log(entity.position.x);
				entity.position = {
					x: entity.position.x + x,
					y: entity.position.y + y,
				};
				console.log(x);
				console.log(entity.position.x);
				board[entity.position.x][entity.position.y].character = entity;
			}
			if (entity.type === "item") {
				board[x][y].items.push(entity);
			}
			return game;
		},

		destroy: (entity: Character|Item) => {
			if (entity.type === "character") {
				if (entity.position == null) {
					throw new Error("Entity has to be placed on map");
				}
				board[entity.position.x][entity.position.y].character = null;
			}
			return game;
		},

		controls: {
			on: (name: "move", callback: Function) => {
				subscribers[name].push(callback);
				return game.controls;
			},
		},

		loop: {
			tick: (): Promise<any> => {
				if (!loop) {
					console.log("Game loop stopped");
					return Promise.resolve();
				};
				console.log("Game tick ", ++tickCount);
				return sleep(160)
					.then(game.loop.tick);
			},
			start: async () => {
				loop = true;
				return game.loop.tick();
			},
		},

		client: {
			get: (resource: "map") => {
				switch (resource) {
					case "map":
						return map;
					default:
						throw new Error("Client requested unknown resource");
				}
			},
			emit: (name: "move", event: any) => {
				return Boolean(
					subscribers[name]
						.map(f => f(event))
						.map(Boolean)
						.find(Boolean));
			}
		},
	};

	return game;

};
