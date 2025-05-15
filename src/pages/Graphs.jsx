import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

// Registrar los componentes de Chart.js necesarios para el gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graphs = () => {
  const [data, setData] = useState({
    labels: [], // Los títulos de los servicios
    datasets: [
      {
        label: 'Promedio de Calificación por Servicio',
        data: [], // Las calificaciones promedio de los servicios
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color de las barras
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener los datos de la API para las reseñas
        const response = await axios.get('http://localhost:5000/api/review');
        const { labels, dataValues } = response.data;

        // Actualizar el estado con los datos para el gráfico
        setData({
          labels: labels,
          datasets: [
            {
              label: 'Promedio de Calificación por Servicio',
              data: dataValues,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        });
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez cuando se monte el componente

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          autoSkip: false, // Evita que los títulos de los servicios se corten si son muchos
        },
      },
      y: {
        beginAtZero: true,
        max: 5, // Establece un máximo de 5 para la calificación
      },
    },
  };

  return (
    <div style={{ width: '80%', maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Promedio de Calificación por Servicio</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graphs;
