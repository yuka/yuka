const $in = (value : any, array : any[]) : boolean => {
	return array.indexOf(value) !== -1;
}

const $nin = (value : any, array : any[]) : boolean => {
	return !$in(value, array);
}

export { $in, $nin };