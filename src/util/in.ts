const isIn = (value : any, array : any[]) : boolean => {
	return array.indexOf(value) !== -1;
}

const isNin = (value : any, array : any[]) : boolean => {
	return !isIn(value, array);
}

export { isIn, isNin };