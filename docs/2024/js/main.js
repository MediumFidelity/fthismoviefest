// Data is loaded from js/data.js into:
//     motherOfAllData 

var chartOptions = {
  responsive: false,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      title: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(255, 255, 255, 1)',
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
      grid: {
        color: 'rgba(255, 255, 255, 0.2)',
        tickColor: 'rgba(255, 255, 255, 1)'
      },
      ticks: {
        color: 'rgba(255, 255, 255, 1)',
      },
      suggestedMin: 0,
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
        label: "Posts",
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
  document.getElementById('movie' + movie.id + 'tweets').innerHTML = movie.count + ' posts'
  document.getElementById('movie' + movie.id + 'likes').innerHTML = movie.likes + ' likes'

  var baseImgPath = 'img/art/'
  var imgElement = document.getElementById('movie' + movie.id + 'image');
  imgElement.setAttribute('src', baseImgPath + movie.image);
  imgElement.setAttribute('alt', movie.name);

  var thumbImg = document.getElementById('movie' + movie.id + 'thumb');
  thumbImg.setAttribute('src', baseImgPath + movie.image);
  thumbImg.setAttribute('alt', "Jump to " + movie.name);
}
