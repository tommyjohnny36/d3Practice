const canvas = d3.select(".canva");


const svg = canvas.append("svg")
            .attr("width", 600)
            .attr("height", 600);
const rect = svg.selectAll("rect")

d3.json('text.json')
    .then(data => {
        console.log(data);

rect.data(data)
    .enter().append("rect")
    .attr("width", 24)
    .attr("fill", (d, i) => d.fill)
    .attr("height", function(d) {
        return d.height*2;
    })

    .attr("x", function(d, i) {
        console.log(d);
        return i*25;
    })

    .attr("y", function(d, i) {
        return 300 - (d.height*2)
    })

    })
