const copyTo = (target : Object, source : Object) : Object => {
	const keys = [ ...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source) ];
	keys.forEach((key : string | symbol) : void => {
		target[key] = source[key];
	});
	return target;
}

export default copyTo;