// src/api/dashboardAPI.js

export async function fetchAuthorizedAccess() {
  const response = await fetch("http://localhost:5000/api/authorized-access");
  if (!response.ok) throw new Error("Failed to fetch authorized access");
  return await response.json();
}

export async function fetchDeniedAttempts() {
  const response = await fetch("http://localhost:5000/api/denied-attempts");
  if (!response.ok) throw new Error("Failed to fetch denied attempts");
  return await response.json();
}

export async function fetchPeakHour() {
  const response = await fetch("http://localhost:5000/api/peak-hour");
  if (!response.ok) throw new Error("Failed to fetch peak hour");
  return await response.json();
}

export async function fetchMostAccessedDoor() {
  const response = await fetch("http://localhost:5000/api/most-accessed-door");
  if (!response.ok) throw new Error("Failed to fetch most accessed door");
  return await response.json();
}

export async function fetchHourlyAccess() {
  const response = await fetch("http://localhost:5000/api/hourly-access");
  if (!response.ok) throw new Error("Failed to fetch hourly access");
  return await response.json();
}

export async function fetchWeeklyEvolution() {
  const response = await fetch("http://localhost:5000/api/weekly-evolution");
  if (!response.ok) throw new Error("Failed to fetch weekly evolution");
  return await response.json();
}

export async function fetchRecentRecords() {
  const response = await fetch("http://localhost:5000/api/recent-records");
  if (!response.ok) throw new Error("Failed to fetch recent records");
  return await response.json();
}

