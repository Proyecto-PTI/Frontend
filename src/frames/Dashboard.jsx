import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { fetchAuthorizedAccess, fetchDeniedAttempts, fetchPeakHour, fetchMostAccessedDoor, fetchHourlyAccess, fetchWeeklyEvolution, fetchRecentRecords } from "../api/dashboardAPI";
import NavBar from "../components/NavBar";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import WebHeader from "../components/WebHeader"; 

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
  const [authorized, setAuthorized] = useState(null);
  const [denied, setDenied] = useState(null);
  const [peakHour, setPeakHour] = useState(null);
  const [mostAccessedDoor, setMostAccessedDoor] = useState(null);
  const [recentRecords, setRecentRecords] = useState([]);
  const [hourlyAccess, setHourlyAccess] = useState(null);
  const [weeklyEvolution, setWeeklyEvolution] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
         const authorizedData = await fetchAuthorizedAccess();
         const deniedData = await fetchDeniedAttempts();
         const peakHourData = await fetchPeakHour();
         const doorData = await fetchMostAccessedDoor();
         const recordsData = await fetchRecentRecords();
         const hourlyData = await fetchHourlyAccess();
         const weeklyData = await fetchWeeklyEvolution();

         setAuthorized(authorizedData);
         setDenied(deniedData);
         setPeakHour(peakHourData);
         setMostAccessedDoor(doorData);
         setRecentRecords(recordsData);
         setHourlyAccess(hourlyData);
         setWeeklyEvolution(weeklyData);

         setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className={styles.loading}>Cargando...</div>;

  return (
    <div className={styles.dashboardContainer}>
          
      <div className={styles.background}>
        <div className={`${styles.elipse} ${styles.elipse1}`} />
        <div className={`${styles.elipse} ${styles.elipse2}`} />
        <div className={`${styles.elipse} ${styles.elipse3}`} />
        <div className={`${styles.elipse} ${styles.elipse4}`} />
        <div className={`${styles.elipse} ${styles.elipse5}`} />
      </div>
    
    
      <WebHeader subtitle="Access Control Dashboard" />

      <div className={styles.metrics}>
        <div className={styles.metricCard}>
          <strong>Authorized access</strong>
          <div className={styles.result}>
            <span>{authorized}</span>
          </div>  
        </div>
        <div className={styles.metricCard}>
          <strong>Denied attempts</strong>
          <div className={styles.result}>
            <span>{denied}</span>
          </div>
        </div>
        <div className={styles.metricCard}>
          <strong>Peak access hour</strong>
          <div className={styles.result}>
            <span>{peakHour}</span>
          </div>
        </div>
        <div className={styles.metricCard}>
          <strong>Most accessed door</strong>
          <div className={styles.result}>
            <span>{mostAccessedDoor}</span>
          </div>
        </div>
      </div>

      <div className={styles.charts}>
        <div className={styles.chartCard}>
          <h4>Accesses per hour</h4>
          <Bar
            data={{
              labels: hourlyAccess.labels,
              datasets: [
                {
                  label: "Accesses",
                  data: hourlyAccess.data,
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
                  data: weeklyEvolution,
                  backgroundColor: ["#00c8c8", "#ff9800"],
                },
              ],
            }}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>

      <div className={styles.records}>
        <h4>Latest 5 Access Records</h4>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Hour</th>
              <th>Result</th>
              <th>Door</th>
            </tr>
          </thead>
          <tbody>
            {recentRecords.map((record, idx) => (
              <tr key={idx}>
                <td>{record.user}</td>
                <td>{record.hour}</td>
                <td>
                  <span
                    className={
                      record.result === "Authorized"
                        ? styles.authorized
                        : styles.denied
                    }
                  >
                    {record.result === "Authorized"
                      ? "Authorized Access"
                      : "Denied Access"}
                  </span>
                </td>
                <td>{record.door}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;


  
