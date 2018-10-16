const clone = (obj : Object) : Object => {
	const copy = obj.constructor();
	const keys = [ ...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj) ];
	for(const key in keys) {
		copy[key] = obj[key];
	}
	return copy;
};

export default clone;