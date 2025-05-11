import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import WebHeader from "../components/WebHeader"; 
import Background from "../components/Background";
import NavBar from "../components/NavBar";
import LogCard from "../components/LogCard.jsx"; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Dashboard() {
  const [metrics, setMetrics] = useState({
    authorized: null,
    denied: null,
    peakHour: null,
    mostAccessedDoor: null,
    hourlyAccess: null,
    weeklyEvolution: null
  });
  const [recentRecords, setRecentRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Primero, obtenemos las métricas
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://localhost:8000/metrics"); // Endpoint de métricas
        const data = await response.json();
        setMetrics({
          authorized: data.authorized,
          denied: data.denied,
          peakHour: data.peakHour,
          mostAccessedDoor: data.mostAccessedDoor,
          hourlyAccess: data.hourlyAccess,
          weeklyEvolution: data.weeklyEvolution
        });
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    // Luego, obtenemos los últimos 5 accesos
    const fetchRecentRecords = async () => {
      try {
        const response = await fetch("http://localhost:8000/last5logs"); // Endpoint de últimos 5 accesos
        const data = await response.json();
        setRecentRecords(data);
      } catch (error) {
        console.error("Error fetching recent access logs:", error);
      }
    };

    // Llamar ambas funciones
    const fetchData = async () => {
      setLoading(true);
      await fetchMetrics();
      await fetchRecentRecords();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className={styles.loading}>Cargando...</div>;

  return (
    <div className={styles.frameContainer}>
      <NavBar />
      <div className={styles.dashboardContainer}>
        <Background />
        <WebHeader subtitle="Access Control Dashboard" />

        {/* Display the Metrics */}
        <div className={styles.metrics}>
          <div className={styles.metricCard}>
            <strong>Authorized access</strong>
            <div className={styles.result}>
              <span>{metrics.authorized}</span>
            </div>
          </div>
          <div className={styles.metricCard}>
            <strong>Denied attempts</strong>
            <div className={styles.result}>
              <span>{metrics.denied}</span>
            </div>
          </div>
          <div className={styles.metricCard}>
            <strong>Peak access hour</strong>
            <div className={styles.result}>
              <span>{metrics.peakHour}</span>
            </div>
          </div>
          <div className={styles.metricCard}>
            <strong>Most accessed door</strong>
            <div className={styles.result}>
              <span>{metrics.mostAccessedDoor}</span>
            </div>
          </div>
        </div>

        {/* Display the Charts */}
        <div className={styles.charts}>
          <div className={styles.chartCard}>
            <h4>Accesses per hour</h4>
            <Bar
              data={{
                labels: metrics.hourlyAccess.labels,
                datasets: [
                  {
                    label: "Accesses",
                    data: metrics.hourlyAccess.data,
                    backgroundColor: "#00c8c8",
                  },
                ],
              }}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>

          <div className={styles.chartCard}>
            <h4>Weekly evolution</h4>
            <Doughnut
              data={{
                labels: ["Authorized", "Denied"],
                datasets: [
                  {
                    data: metrics.weeklyEvolution,
                    backgroundColor: ["#00c8c8", "#ff9800"],
                  },
                ],
              }}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* Display Recent Access Records */}
        <div className={styles.records}>
          <h4>Latest 5 Access Records</h4>
          <div className={styles.frameContainer}>
            <div className={styles.logsWrapper}>
              <div className={styles.logList}>
                {recentRecords.map((log, index) => (
  <LogCard key={index} log={log} />
))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
