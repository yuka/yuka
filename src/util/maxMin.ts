interface maxMin {
	max ?: number;
	min ?: number;
}

const maxMin = (value : number, maxMin ?: maxMin) : number => {
	if(!maxMin) return value;
	if(!maxMin.max) maxMin.max = Infinity;
	if(!maxMin.min) maxMin.min = 0;
	const { max, min } = maxMin;
	return ((value > max)
		? max
		: value < min
			? min
			: value);
}

export default maxMin;