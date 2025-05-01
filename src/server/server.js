import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors()); // Permitir solicitudes desde tu frontend
app.use(express.json());

const logs = [
  {
    username: 'Pepe Admin.',
    code: 'A5S1O3',
    time: '17:08:35',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Yolanda Romero',
    code: 'C6S1O2',
    time: '14:08:25',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Mar Puigmartí',
    code: 'A5S1O3',
    time: '13:09:02',
    date: '2025-03-23',
    status: 'Access Denied'
  },
  {
    username: 'Pepe Admin.',
    code: 'B6E001',
    time: '11:12:41',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Pepe Admin.',
    code: 'A5S1O3',
    time: '23:00:41',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Albert Gómez',
    code: 'A5S1O3',
    time: '22:03:55',
    date: '2025-03-22',
    status: 'Access Denied'
  },
  {
    username: 'Yolanda Romero',
    code: 'C6S1O2',
    time: '13:55:36',
    date: '2025-03-22',
    status: 'Authorized Access'
  },
  {
    username: 'Mar Puigmartí',
    code: 'A5S1O3',
    time: '13:09:02',
    date: '2025-03-22',
    status: 'Authorized Access'
  },
  {
    username: 'Carlos López',
    code: 'D7H8I9',
    time: '10:05:00',
    date: '2025-04-27',
    status: 'Authorized Access'
  },
  {
    username: 'Lucía Fernández',
    code: 'J9K1L2',
    time: '12:45:30',
    date: '2025-04-27',
    status: 'Access Denied'
  },
  {
    username: 'Pepe Admin.',
    code: 'F4G5H6',
    time: '15:30:15',
    date: '2025-04-27',
    status: 'Authorized Access'
  }
];

// Datos de puertas
const doors = [
  {
    entryLocation: "Campus Nord",
    accessCameraId: "89-12-LD",
    accessLockId: "45789765D",
    accessAdministrator: "pepe.admin@gmail.com",
    aula: "A5103",
    labels: ["ESLAMIA", "FIB"],
    authorizedAccess: true, // Cambiado a booleano
    name: "Pepe Admin.",
    hora: "08:23:45", // Nuevo campo
    día: "23/03/2025", // Nuevo campo
  },
  {
    entryLocation: "Main Hall",
    accessCameraId: "12-34-AB",
    accessLockId: "12345678A",
    accessAdministrator: "admin.mainhall@gmail.com",
    aula: "C6E01",
    labels: ["Main", "Admin"],
    authorizedAccess: true, // Cambiado a booleano
    name: "Yolanda Romero",
    hora: "09:15:30", // Nuevo campo
    día: "23/03/2025", // Nuevo campo
  },
  {
    entryLocation: "Library Entrance",
    accessCameraId: "56-78-CD",
    accessLockId: "98765432B",
    accessAdministrator: "library.admin@gmail.com",
    aula: "L1E02",
    labels: ["Library", "Study"],
    authorizedAccess: false, // Cambiado a booleano
    name: "Mar Puigmartí",
    hora: "10:45:12", // Nuevo campo
    día: "23/03/2025", // Nuevo campo
  },
  {
    entryLocation: "Sports Center",
    accessCameraId: "34-56-EF",
    accessLockId: "45678901C",
    accessAdministrator: "sports.admin@gmail.com",
    aula: "S2G03",
    labels: ["Sports", "Gym"],
    authorizedAccess: true, // Cambiado a booleano
    name: "Carlos López",
    hora: "11:30:00", // Nuevo campo
    día: "23/03/2025", // Nuevo campo
  },
  {
    entryLocation: "Auditorium",
    accessCameraId: "78-90-GH",
    accessLockId: "11223344D",
    accessAdministrator: "auditorium.admin@gmail.com",
    aula: "A3H04",
    labels: ["Events"],
    authorizedAccess: false, // Cambiado a booleano
    name: "Lucía Fernández",
    hora: "12:15:20", // Nuevo campo
    día: "23/03/2025", // Nuevo campo
  },
  {
    entryLocation: "Parking Lot",
    accessCameraId: "90-12-IJ",
    accessLockId: "22334455E",
    accessAdministrator: "parking.admin@gmail.com",
    aula: "P4J05",
    labels: ["Parking", "Vehicles"],
    authorizedAccess: true, // Cambiado a booleano
    name: "Albert Gómez",
    hora: "13:45:10", // Nuevo campo
    día: "23/03/2025", // Nuevo campo
  },
];

// Endpoint que devuelve los logs
app.get('/api/access-logs', (req, res) => {
  res.json(logs);
});

// Endpoint para devolver las puertas
app.get('/api/doors', (req, res) => {
  res.json(doors);
});

//endpoints para el DashBoard 

app.get("/api/authorized-access", (req, res) => {
  res.json(82);
});

app.get("/api/denied-attempts", (req, res) => {
  res.json(5);
});

app.get("/api/peak-hour", (req, res) => {
  res.json("12:00-13:00");
});

app.get("/api/most-accessed-door", (req, res) => {
  res.json("A5S103");
});

app.get("/api/hourly-access", (req, res) => {
  res.json({
    labels: [
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
      "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
      "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
      "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    data: [
      2, 1, 0, 0, 0, 3,
      5, 12, 18, 20, 32, 28,
      37, 25, 22, 15, 10, 8,
      5, 3, 1, 1, 0, 0
    ]
  });
});

app.get("/api/weekly-evolution", (req, res) => {
  res.json([92, 8]);
});

app.get("/api/recent-records", (req, res) => {
  res.json([
    { user: "Albert Gómez", hour: "08:23", result: "Authorized", door: "A5S103" },
    { user: "Yolanda Romero", hour: "08:51", result: "Authorized", door: "A5S103" },
    { user: "Albert Gómez", hour: "09:48", result: "Denied", door: "C6S108" },
    { user: "Lola Constantin", hour: "11:35", result: "Authorized", door: "B6E001" },
    { user: "Piotr Pomykalsk", hour: "12:12", result: "Authorized", door: "A5201" }
  ]);
});



//endpoint para la session iniciada 

const current_user = {
  name: 'Pepe Admin.',
  role: 'System Administrator User',
  email: 'pepe.admin@gmail.com',
  number: '+34 666 66 66 66',
};

// Endpoint que devuelve el usuario actual
app.get('/api/current-user', (req, res) => {
  res.json(current_user); 
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

