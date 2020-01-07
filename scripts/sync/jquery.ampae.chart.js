jQuery(document).ready(function($) {
$.ajax({
  type: "GET",
  async: true,
  url: "feeds/feed-chart.json",
  data: false,
  mimeType: "application/json",
  cache: false,
  dataType: "JSON",
  success: function (json) {
    var plotarea = $("#usr_chart");
    var dataLine=json.dataLine;
    $.plot(plotarea , [{data: dataLine, color: "#024355", points: { show: true }, lines: { show: true, steps: false }}], {xaxis: { mode: "time", timeformat: "%d %b", tickSize: [1, "day"] }, yaxis: { minTickSize: 1, tickDecimals: 0  }, legend:{position:"nw"} });
  }
});
});
