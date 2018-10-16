const createErrors = (obj: Object, validatorList: any[]): string[] => {
	return validatorList.reduce(
		(errors: string[], current: [string, Function]) => {
			const [text, predicate] = current;
			if (!predicate(obj)) return [...errors, text];
			return [...errors];
		},
		[]
	);
};

export default createErrors;
