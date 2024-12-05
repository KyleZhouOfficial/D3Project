// Import D3.js
import * as d3 from 'd3';

console.log("Using npm+JS", d3.select);

const svg = select('svg');

const circle = svg.append('circle');

circle.attr('r', 200);