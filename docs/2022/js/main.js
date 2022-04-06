// +/-5 min, 3 min groups
const motherOfAllData = JSON.parse('[{"id": 1, "name": "Mars Attacks!", "director": "Tim Burton", "start": "2022-03-05 16:00:00+00:00", "runtime": 106, "count": 1577, "likes": 8196, "intervals": [], "timestamps": [1646495820000.0, 1646496000000.0, 1646496180000.0, 1646496360000.0, 1646496540000.0, 1646496720000.0, 1646496900000.0, 1646497080000.0, 1646497260000.0, 1646497440000.0, 1646497620000.0, 1646497800000.0, 1646497980000.0, 1646498160000.0, 1646498340000.0, 1646498520000.0, 1646498700000.0, 1646498880000.0, 1646499060000.0, 1646499240000.0, 1646499420000.0, 1646499600000.0, 1646499780000.0, 1646499960000.0, 1646500140000.0, 1646500320000.0, 1646500500000.0, 1646500680000.0, 1646500860000.0, 1646501040000.0, 1646501220000.0, 1646501400000.0, 1646501580000.0, 1646501760000.0, 1646501940000.0, 1646502120000.0, 1646502300000.0], "counts": [18, 67, 57, 45, 62, 43, 59, 42, 43, 36, 36, 46, 46, 44, 58, 63, 39, 39, 39, 45, 40, 40, 43, 34, 35, 49, 51, 31, 48, 41, 32, 33, 36, 46, 55, 17, 11], "chartLineColor": "rgba(239, 207, 157, 1)", "chartFillColor": "rgba(239, 207, 157, 0.2)"}, {"id": 2, "name": "The Rock", "director": "Michael Bay", "start": "2022-03-05 18:15:00+00:00", "runtime": 136, "count": 1948, "likes": 9834, "intervals": [], "timestamps": [1646503920000.0, 1646504100000.0, 1646504280000.0, 1646504460000.0, 1646504640000.0, 1646504820000.0, 1646505000000.0, 1646505180000.0, 1646505360000.0, 1646505540000.0, 1646505720000.0, 1646505900000.0, 1646506080000.0, 1646506260000.0, 1646506440000.0, 1646506620000.0, 1646506800000.0, 1646506980000.0, 1646507160000.0, 1646507340000.0, 1646507520000.0, 1646507700000.0, 1646507880000.0, 1646508060000.0, 1646508240000.0, 1646508420000.0, 1646508600000.0, 1646508780000.0, 1646508960000.0, 1646509140000.0, 1646509320000.0, 1646509500000.0, 1646509680000.0, 1646509860000.0, 1646510040000.0, 1646510220000.0, 1646510400000.0, 1646510580000.0, 1646510760000.0, 1646510940000.0, 1646511120000.0, 1646511300000.0, 1646511480000.0, 1646511660000.0, 1646511840000.0, 1646512020000.0, 1646512200000.0], "counts": [18, 63, 61, 50, 76, 60, 58, 42, 59, 48, 54, 49, 37, 47, 46, 54, 52, 50, 36, 40, 36, 31, 36, 45, 34, 40, 32, 33, 30, 41, 41, 58, 40, 33, 38, 36, 28, 21, 24, 32, 55, 33, 39, 36, 39, 33, 12], "chartLineColor": "rgba(255, 159, 64, 1)", "chartFillColor": "rgba(255, 159, 64, 0.2)"}, {"id": 3, "name": "That Thing You Do!", "director": "Tom Hanks", "start": "2022-03-05 20:45:00+00:00", "runtime": 108, "count": 1133, "likes": 6566, "intervals": [], "timestamps": [1646512920000.0, 1646513100000.0, 1646513280000.0, 1646513460000.0, 1646513640000.0, 1646513820000.0, 1646514000000.0, 1646514180000.0, 1646514360000.0, 1646514540000.0, 1646514720000.0, 1646514900000.0, 1646515080000.0, 1646515260000.0, 1646515440000.0, 1646515620000.0, 1646515800000.0, 1646515980000.0, 1646516160000.0, 1646516340000.0, 1646516520000.0, 1646516700000.0, 1646516880000.0, 1646517060000.0, 1646517240000.0, 1646517420000.0, 1646517600000.0, 1646517780000.0, 1646517960000.0, 1646518140000.0, 1646518320000.0, 1646518500000.0, 1646518680000.0, 1646518860000.0, 1646519040000.0, 1646519220000.0, 1646519400000.0, 1646519580000.0], "counts": [10, 51, 46, 32, 35, 38, 37, 37, 37, 32, 29, 50, 47, 29, 24, 22, 29, 35, 22, 18, 33, 35, 31, 28, 16, 28, 27, 30, 29, 29, 32, 26, 22, 17, 30, 35, 16, 12], "chartLineColor": "rgba(234, 92, 36, 1)", "chartFillColor": "rgba(234, 92, 36, 0.2)"}, {"id": 4, "name": "The Phantom", "director": "Simon Wincer", "start": "2022-03-05 22:45:00+00:00", "runtime": 100, "count": 1196, "likes": 6024, "intervals": [], "timestamps": [1646520120000.0, 1646520300000.0, 1646520480000.0, 1646520660000.0, 1646520840000.0, 1646521020000.0, 1646521200000.0, 1646521380000.0, 1646521560000.0, 1646521740000.0, 1646521920000.0, 1646522100000.0, 1646522280000.0, 1646522460000.0, 1646522640000.0, 1646522820000.0, 1646523000000.0, 1646523180000.0, 1646523360000.0, 1646523540000.0, 1646523720000.0, 1646523900000.0, 1646524080000.0, 1646524260000.0, 1646524440000.0, 1646524620000.0, 1646524800000.0, 1646524980000.0, 1646525160000.0, 1646525340000.0, 1646525520000.0, 1646525700000.0, 1646525880000.0, 1646526060000.0, 1646526240000.0], "counts": [10, 51, 54, 35, 46, 44, 30, 36, 32, 38, 33, 35, 43, 35, 37, 41, 32, 34, 40, 37, 42, 37, 29, 28, 36, 32, 40, 32, 31, 22, 47, 28, 25, 19, 5], "chartLineColor": "rgba(219, 170, 183, 1)", "chartFillColor": "rgba(219, 170, 183, 0.2)"}, {"id": 5, "name": "From Dusk Till Dawn", "director": "Robert Rodriguez", "start": "2022-03-06 01:00:00+00:00", "runtime": 108, "count": 1486, "likes": 7976, "intervals": [], "timestamps": [1646528220000.0, 1646528400000.0, 1646528580000.0, 1646528760000.0, 1646528940000.0, 1646529120000.0, 1646529300000.0, 1646529480000.0, 1646529660000.0, 1646529840000.0, 1646530020000.0, 1646530200000.0, 1646530380000.0, 1646530560000.0, 1646530740000.0, 1646530920000.0, 1646531100000.0, 1646531280000.0, 1646531460000.0, 1646531640000.0, 1646531820000.0, 1646532000000.0, 1646532180000.0, 1646532360000.0, 1646532540000.0, 1646532720000.0, 1646532900000.0, 1646533080000.0, 1646533260000.0, 1646533440000.0, 1646533620000.0, 1646533800000.0, 1646533980000.0, 1646534160000.0, 1646534340000.0, 1646534520000.0, 1646534700000.0, 1646534880000.0], "counts": [17, 52, 36, 37, 44, 35, 39, 31, 69, 44, 29, 27, 24, 30, 43, 37, 61, 53, 66, 60, 49, 55, 59, 52, 37, 29, 42, 27, 27, 31, 31, 25, 55, 39, 38, 34, 14, 9], "chartLineColor": "rgba(225, 136, 84, 1)", "chartFillColor": "rgba(225, 136, 84, 0.2)"}, {"id": 6, "name": "Independence Day", "director": "Roland Emmerich", "start": "2022-03-06 03:00:00+00:00", "runtime": 145, "count": 1636, "likes": 9262, "intervals": [], "timestamps": [1646535420000.0, 1646535600000.0, 1646535780000.0, 1646535960000.0, 1646536140000.0, 1646536320000.0, 1646536500000.0, 1646536680000.0, 1646536860000.0, 1646537040000.0, 1646537220000.0, 1646537400000.0, 1646537580000.0, 1646537760000.0, 1646537940000.0, 1646538120000.0, 1646538300000.0, 1646538480000.0, 1646538660000.0, 1646538840000.0, 1646539020000.0, 1646539200000.0, 1646539380000.0, 1646539560000.0, 1646539740000.0, 1646539920000.0, 1646540100000.0, 1646540280000.0, 1646540460000.0, 1646540640000.0, 1646540820000.0, 1646541000000.0, 1646541180000.0, 1646541360000.0, 1646541540000.0, 1646541720000.0, 1646541900000.0, 1646542080000.0, 1646542260000.0, 1646542440000.0, 1646542620000.0, 1646542800000.0, 1646542980000.0, 1646543160000.0, 1646543340000.0, 1646543520000.0, 1646543700000.0, 1646543880000.0, 1646544060000.0, 1646544240000.0], "counts": [14, 49, 47, 61, 57, 42, 30, 43, 31, 41, 32, 35, 29, 32, 26, 28, 38, 55, 34, 34, 41, 35, 31, 30, 50, 28, 30, 26, 26, 40, 24, 24, 29, 29, 28, 23, 29, 47, 24, 19, 22, 21, 20, 35, 35, 24, 43, 28, 21, 14], "chartLineColor": "rgba(246, 118, 95, 1)", "chartFillColor": "rgba(246, 118, 95, 0.2)"}]')

var chartOptions = {
  responsive: false,
  scales: {
    x: {
      display: true,
      title: {
        display: false
      },
      grid: {
        display: false
      },
      type: 'time',
      time: {
        // Luxon format string
        //   localized date with full month
        //   localized time
        tooltipFormat: 'DDD t'
      },
      adapters: {
        date: {
        },
      },
    },
    y: {
      display: true,
      title: {
        display: false,
      },
      suggestedMin: 0
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}


for (var i = 0; i < motherOfAllData.length; i++) {
  let movie = motherOfAllData[i]
  let movieData = {
    labels: movie.timestamps,
    datasets: [
      {
        label: "Tweets",
        data: movie.counts,
        borderColor: movie.chartLineColor,
        backgroundColor: movie.chartFillColor,
        fill: true,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
      }
    ]
  };

  var moviectx = document.getElementById('movie' + movie.id + 'chart').getContext('2d');
  var movieChart = new Chart(moviectx, {
    type: 'line',
    data: movieData,
    options: chartOptions,
  });

  document.getElementById('movie' + movie.id + 'title').innerHTML = movie.name
  document.getElementById('movie' + movie.id + 'director').innerHTML = 'Directed by ' + movie.director
  document.getElementById('movie' + movie.id + 'tweets').innerHTML = movie.count + ' tweets'
  document.getElementById('movie' + movie.id + 'likes').innerHTML = movie.likes + ' likes'
}
