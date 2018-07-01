import CharacterClass from '../class/core'

const validator = (obj : Object) : boolean => {
	return obj instanceof CharacterClass;
}

export default validator;