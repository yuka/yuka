interface Options {
	override ?: boolean;
}

const copyTo = (target : Object, source : Object, options : Options = {}) : Object => {
	const keys = [ ...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source) ];
	keys.forEach((key : string | symbol) : void => {
		if(!target[key] || options.override) target[key] = source[key];
	});
	return target;
}

export default copyTo;