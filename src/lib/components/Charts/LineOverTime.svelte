<script>
    import Chart from './Chart.svelte';
  
    let data = {
      labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
      datasets: [
        {
          values: [10, 12, 3, 9, 8, 15, 9]
        }
      ]
    };
  </script>
  
  <Chart data={data} type="line" />