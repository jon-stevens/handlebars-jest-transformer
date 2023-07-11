export default {
	process(source) {
		return {
			code: `
			  import Handlebars from 'handlebars';
			  export default Handlebars.compile(\`${source}\`);
		`};
	}
};
