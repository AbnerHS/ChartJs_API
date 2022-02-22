axios.get('http://localhost:3000/status')
  .then(response => {
    let dataset = response.data;
    let labels = dataset.map((label) => {
      return label.STATUSPROCESSO;
    });
    let data = dataset.map((data) => {
      return data.COUNT;
    })
    const graph = {
      labels: labels,
      datasets: [{
        label: 'Gráfico de Pizza',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(100, 12, 0)',
          'rgb(52, 255, 99)',
          'rgb(0, 0, 255)',
        ],
        data: data,
        hoverOffset: 10,
      }]
    };
    const config = {
      type: 'pie',
      data: graph,
      options: {}
    };
    const chartPizza = new Chart(
      document.getElementById('chartPizza'),
      config
    );
  })
  .catch(error => console.log(error));

