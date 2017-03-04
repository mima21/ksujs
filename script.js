var dataset = [
	{name: "Mima", score: 93},
	{name: "Grant", score: 88},
	{name: "Eli", score: 91},
	{name: "Dani", score: 82},
	{name: "Chris", score: 63},
]; 


d3.select('.chart') 

	.append('svg')
		.attr('width', 225)
		.attr('height', 300)

	.selectAll('rect')
	.data(dataset)
	.enter()
		.append('rect')
		.attr('y', (d, i) => i * 33)
		.style('width', d => d.score)
		.text(function(d){
			return d.name
		})
		.attr('class', 'bar');	
	