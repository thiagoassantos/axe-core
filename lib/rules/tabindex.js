const tabindexMetadata = {
	id: 'tabindex',
	selector: '[tabindex]',
	tags: ['cat.keyboard', 'best-practice'],
	metadata: {
		description: 'Ensures tabindex attribute values are not greater than 0',
		help: 'Elements should not have tabindex greater than zero'
	},
	all: [],
	any: ['tabindex'],
	none: []
};

export default tabindexMetadata;