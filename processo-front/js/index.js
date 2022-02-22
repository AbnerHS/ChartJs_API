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

axios.get('http://localhost:3000/solicitante')
  .then(response => {
    let dataset = response.data;
    let labels = dataset.map((label) => {
      return label.SOLICITANTEDEPARTAMENTO;
    });
    let data = dataset.map((data) => {
      return data.COUNT;
    })
    const graph = {
      labels: labels,
      datasets: [{
        label: 'Quantidade por Local',
        backgroundColor: 'rgb(0, 100, 255)',
        data: data,
      }]
    };
    const config = {
      type: 'bar',
      data: graph,
      options: {}
    };
    const chartBarras = new Chart(
      document.getElementById('chartBarras'),
      config
    );
  })
  .catch(error => console.log(error));

axios.get('http://localhost:3000/data')
  .then(response => {
    let dataset = response.data;
    let labels = dataset.map((label) => {
      return label.DATA;
    });
    let data = dataset.map((data) => {
      return data.COUNT;
    })
    const graph = {
      labels: labels,
      datasets: [{
        label: 'Quantidade por Data',
        borderColor: 'rgb(0, 255, 100)',
        data: data,
      }]
    };
    const config = {
      type: 'line',
      data: graph,
      options: {}
    };
    const chartLinhas = new Chart(
      document.getElementById('chartLinhas'),
      config
    );
  })
  .catch(error => console.log(error));