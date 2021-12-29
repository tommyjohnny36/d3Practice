const canvas = d3.select(".canva");

var width = "100%";
var height = "100%";
const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

const svg = canvas.append("svg")
                    .attr('width', width)
                    .attr('height', height);

// parse Json

d3.json(api_url)
    .then(data => {
        // Here we have our data and start putting all together


        const circle = svg.selectAll("circle")
            .data(data.features);

        circle.attr("cx", (d, i) => Math.floor(Math.random() * 200) + d.properties.mag*i)
                .attr("cy", (d, i) => Math.floor(Math.random() * 100) + d.properties.mag)
                .attr("r", (d, i) => (d.properties.mag) * 2)
                .attr("fill", (d, i) => d.properties.alert);

        // append enter selection to add new circle
        circle.enter()
                .append("circle")
                .attr("cx", (d, i) => Math.floor(Math.random() * 200) + d.properties.mag*i)
                .attr("cy", (d, i) => Math.floor(Math.random() * 100) + d.properties.mag)
                    .attr("r", (d, i) => (d.properties.mag) * 2) 
                    .attr("fill", (d, i) => d.properties.alert);

    });



