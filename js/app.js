$("button").click(function() {
  $.ajax({
    url: "http://localhost/flood/BS3/charts/fusion_chart_demo.php",
    type: "GET",
    success: function(data) {
      console.log(data);
      chartData = JSON.parse(data);
      var chartProperties = {
        caption: "Top 10 wicket takes ODI Cricket in 2015",
        xAxisName: "Player",
        yAxisName: "Wickets Taken",
        rotatevalues: "1",
        theme: "zune"
      };
      apiChart = new FusionCharts({
        type: "column2d",
        renderAt: "chart-container",
        width: "550",
        height: "350",
        dataFormat: "json",
        dataSource: {
          chart: chartProperties,
          data: chartData
        }
      });
      apiChart.render();
    } // success end
  }); // ajax end

}); // click end