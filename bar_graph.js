/* var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];
      
        d3.select("body").selectAll("div").data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d)
          {
            return d*5 + "px"; 
          });*/

        var w = 1100;
        var h = 200;
        var barPadding = 2;
        //var dataset = [];
        
        var dataset = $.getJSON('data/arsenal.json', function(arsenal)
        {
         var d = [];

         for (var i in arsenal.players)
         {
            d.push(arsenal.players[i].G);

            console.log(arsenal.players[i].Name)

            
         }

         console.log(d)

         return d;
        });
 
        console.log(dataset)
        //var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
          //      11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];


        var svg = d3.select("body").append("svg")
                  .attr("width", w)
                  .attr("height", h);

        svg.selectAll("rect")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("x", function(d, i)
           {
              return i * (w/dataset.length); 
           })
           .attr("y", function(d)
           {
               return h - (d*4);
           })
           .attr("width", w/dataset.length - 1)
           .attr("height", function(d)
            {
              return d * 4;
            })
           .attr("fill", "teal");

        svg.selectAll("text").data(dataset)
           .enter().append("text")
           .text(function(d)
           {
              return d;
           })
           .attr("text-anchor", "middle")
           .attr("x", function(d, i)
           {
              return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
           })
           .attr("y", function(d)
           {
              if (d > 0)  // only display non zero values
              {
                return h - (d * 4) + 15; 
              }
               
           })
           .attr("font-family", "sans-serif")
           .attr("font-size", "11px")
           .attr("fill", "white");




        /*var circles = svg.selectAll("circle").data(dataset)
                      .enter().append("circle");

        //below code creates a cx (positiioning) attribute that is a function of i
        //radius == d
        circles.attr("cx", function(d, i)
        {
          return (i*50) + 25;
        })
        .attr("fill", yellow)
        .attr("stroke", orange)
        .attr("stroke-width", function(d)
        {
          return d/2;
        })
        .attr("cy", h/2)
        .attr("r", function(d)
        {
          return d;
        });*/
