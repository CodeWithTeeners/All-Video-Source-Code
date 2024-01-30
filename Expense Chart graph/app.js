fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    generateChart(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

function generateChart(data) {
  const info = {
    labels: data.map((chart) => chart.day),
    datasets: [
      {
        data: data.map((chart) => chart.amount),
        backgroundColor: ["hsl(10, 79%, 65%)"],
        borderRadius: 5,
        hoverBackgroundColor: "hsl(10, 79%, 75%)",
      },
    ],
  };
  const titleTooltip = (e) => `$${e[0].formattedValue}`;
  const labelTooltip = (e) => "";
  const options = {
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
        },
      },
    },
  };
  const config = {
    type: "bar",
    data: info,
    options,
  };
  new Chart(document.getElementById("myChart"), config);
}
