const canvas = d3.select(".canva");

// Add an svg element
const svg = canvas.append("svg")
            .attr("width", 600)
            .attr("height", 600 );


const margin = {
        top: 20,
        right: 20,
        bottom: 70,
        left: 70
}

// this is the standard way to set your graph height and width
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append("g")
                .attr("width", graphWidth) // Creating a group
                .attr("height", graphHeight)
                .attr("transform", `translate(${margin.left},
                    ${margin.top})`);

const rect = graph.selectAll("rect");

// create Json

d3.json('text.json')
    .then(data => {
        console.log(data);

        const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.height)])
        .range([0, 250]);


        const x = d3.scaleBand()
                    .domain(data.map(item => item.fill))
                    .range([0, 500])
                    .paddingInner(0.1)
                    .paddingOuter(0.2);


        rect.data(data)
            .enter().append("rect")
            .attr("width", x.bandwidth)
            .attr("height", (d, i) => y(d.height))
            .attr("fill", (d) => d.fill)
            .attr("x", (d,i) => x(d.fill))





    })