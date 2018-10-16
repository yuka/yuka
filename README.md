# yuka 🌸

_A super simple game development backend framework._

Yuka is an experimental backend for rapid role playing game development, written in TypeScript. In active development.

## Idea and Preface

`yuka` is the outcome of the thought experiment -- what if game development was like web development, with a clear separation of concerns between backend and frontend. `yuka` exposes APIs to help developers quickly build the backend of a game.

What do I mean by this? I think game development should be as fun as playing the game. Everything should be assemblable, in a put-it-together format. And with `yuka` running the engine, you can focus on steering the wheel.

The frontend can be plugged in with a simple text format (messenger games, like those on Telegram), or an actual desktop game with graphics. Actions will be dispatched to `yuka`.

All this is not perfect. I think it's an interesting idea, and worth exploring. If you're interested in the idea, come talk to me on [Telegram/yukajs](https://t.me/yukajs).

## Concepts and Progress

`yuka` operates with the idea of `"owner"` and `"ownables"`. Required ownables for an owner class (`CharacterClass`, for example) are created ahead of its owner (`Character`, in this case), but can be reassigned later. Other ownables are assigned to the owner dynamically. Multiple owners may be compatible with the same ownables (`Location` may own `Items`, just like `Character` does). Currently I'm working on Character and its ownables.

- [ ] Character
- [ ] CharacterClass
- [ ] Item
- [ ] Skill

## Requirements and recommendations

- [nodejs 10.x](https://nodejs.org/)
- [TypeScript v 2.9.2+](https://www.typescriptlang.org/)
- [pnpm v 2.10.1+ (Optional, but recommended)](https://pnpm.js.org/)