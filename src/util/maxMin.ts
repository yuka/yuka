interface maxMin {
	max ?: number;
	min ?: number;
}

const maxMin = (value : number, maxMin ?: maxMin) : number => {
	if(!maxMin) return value;
	let { max, min } = maxMin;
	if(!min) min = 0;
	if(!max) max = Infinity;
	return (
		value > max ? max :
		value < min ? min
			: value
	);
}

export default maxMin;