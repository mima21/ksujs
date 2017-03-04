var dataset = [
	{name: "Mima", score: 93},
	{name: "Grant", score: 88},
	{name: "Eli", score: 91},
	{name: "Dani", score: 82},
	{name: "Chris", score: 63},
]; 


var bar = d3.select('.chart') 
	.append('svg')
		.attr('width', 225)
		.attr('height', 300)
	.selectAll('g')
	.data(dataset)
	.enter()
		.append('g')
		.attr('transform', (d, i) => 'translate(0,' + i * 33 + ')');

bar.append('rect')
	.style('width', d => d.score)
	.text(function(d) {
		return d.name;
	})
	.attr('class', 'bar');

	bar.append('text')
		.attr('y', 20)
		.attr('x', 5)
		.text(function(d){
			return d.name;
	})
	.attr('class', 'name');	