<img src="thumbnail.png" width="366px" height="240px"/>

# Vizflow

[vizflow.js](https://github.com/vizflow/vizflow) - a render-loop library written using EcmaScript.6 (ES6) with no other external dependencies. 

Vizflow is a relatively small library for adding transition effects and interactive visualizations to HTML5 documents with a simpler design compared to other popular interactive visualization libraries like [D3js](http://d3js.org). 

Instead of focusing on specific applications such as data visualization, it only provides an engine for running animations, transition effects, simulations, games, etc., depending on the application. 

Vizflow uses the symbol `$Z` (read as "bling Z" or "dollar Z") for defining its namespace.

Following the DRY and KISS guidelines, keeping the library simple-to-use, small, and efficient in terms of performance, especially on mobile devices, are the main goals of this project.

# Examples

The file `index.html` included in this repository contains a demo, used for our [homepage](http://vizflow.org). Modify the `index.html` file to create your own interactive visualizations, simulations, and games with maximal flexibility and minimal overhead.

Load the `index.html` file locally to test the code in a development environment (requires a local web server such as [live-server](https://github.com/tapio/live-server) to be running). 

The "examples" subdirectory contains the source code to the examples presented on the homepage. 

### Three Circles

The "three circles" examples showing an interactive stochastic dynamics simulation with three particles in a rectangular domain rendered as colored circles, using both Canvas and SVG. Clicking on a circle will randomly change its 2D `(x, y)` position and radius by sampling from appropriate uniform distributions for each of these variables.

### pH Visualization/Game

The [pH visualization](http://vizflow.org/examples/ph_game/) is a learning game idea that is described [here](https://www.linkedin.com/pulse/ph-visualization-i-daniel-korenblum).

### Election Fighter

[Election Fighter](http://vizflow.org/examples/electionfighter) is a game described [here](https://www.linkedin.com/pulse/vizflow-testing-via-games-part-i-election-fighter-daniel-korenblum).

### Prime Fruit

[Prime Fruit](http://vizflow.org/examples/primefruit/) is an idea for an educational game teaching the player about prime numbers and prime factorizations, and is described [here](https://www.linkedin.com/pulse/vizflow-testing-via-games-ii-prime-fruit-daniel-korenblum?trk=mp-author-card).

### Ball

This is a very basic example of sprite based animation showing a ball bounding inside a Canvas. It needs to be expanded to be used for performance testing by running with different numbers of balls and analyzing framerate degradation.

# Deployment

Compile `vizflow.js` using `browserify src/vizflow.js -t babelify | uglifyjs -o vizflow.js --source-map` for running in a production environment.
Similarly, run `browserify src/module/vizflow-helper.js -t babelify | uglifyjs -o vizflow-helper.js --source-map` to build the production-ready versions of the helper modules.

# References

* [ES6](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts)
* [Promise](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise)
* [Babel](http://babeljs.io/)
* [browserify + babelify](https://waelyasmina.com/browserify-tutorial-for-total-beginners/)
* [uglify-js](https://www.npmjs.com/package/uglify-js)
* [npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)
* [2D Picking in Canvas](https://bocoup.com/weblog/2d-picking-in-canvas/)

<!---
  
For example, when using `d3` we might want to visualize one dataset representing intervals  as lines and another representing points as circles, and then have them both fade-in. 

Using `d3`, this would normally lead to code snippets like:

```javascript
d3.selectAll('.blue_circle')
  .data(myData1)
  .enter()
  .append('circle')
  .attr('class', 'blue_circle')
  .style('opacity', 0)
  .attr('cx', function (d) { d.x })
  .attr('cy', function (d) { d.y })
  .attr('r', function (d) { d.r })
  .transition()
  .duration(1000)
  .ease('linear')
  .style('opacity', 1);

d3.selectAll('.red_circle')
  .data(myData2)
  .enter()
  .append('class', 'red_circle')
  .append('path')
  .style('opacity', 0)
  .attr('d', function (d) { d3.svg.line(d) })
  .transition()
  .duration(1000)
  .ease('linear')
  .style('opacity', 1);
```

which works, but has some repeated code arising from both the chaining syntax for defining transitions and also the presence of slight variations in the processing (e.g. lines vs. circles).

--> 
