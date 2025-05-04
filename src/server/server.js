import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors()); // Permitir solicitudes desde tu frontend
app.use(express.json());

const logs = [
  {
    username: 'Pepe Admin.',
    code: 'A5103',
    time: '08:23:45',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Yolanda Romero',
    code: 'C6E01',
    time: '09:15:30',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Mar Puigmartí',
    code: 'L1E02',
    time: '10:45:12',
    date: '2025-03-23',
    status: 'Access Denied'
  },
  {
    username: 'Carlos López',
    code: 'S2G03',
    time: '11:30:00',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Lucía Fernández',
    code: 'A3H04',
    time: '12:15:20',
    date: '2025-03-23',
    status: 'Access Denied'
  },
  {
    username: 'Albert Gómez',
    code: 'P4J05',
    time: '13:45:10',
    date: '2025-03-23',
    status: 'Authorized Access'
  },
  {
    username: 'Pepe Admin.',
    code: 'A5103',
    time: '14:00:00',
    date: '2025-03-24',
    status: 'Authorized Access'
  },
  {
    username: 'Yolanda Romero',
    code: 'C6E01',
    time: '15:30:00',
    date: '2025-03-24',
    status: 'Authorized Access'
  },
  {
    username: 'Mar Puigmartí',
    code: 'L1E02',
    time: '16:45:00',
    date: '2025-03-24',
    status: 'Access Denied'
  },
  {
    username: 'Carlos López',
    code: 'S2G03',
    time: '17:30:00',
    date: '2025-03-24',
    status: 'Authorized Access'
  },
  {
    username: 'Lucía Fernández',
    code: 'A3H04',
    time: '18:15:00',
    date: '2025-03-24',
    status: 'Access Denied'
  },
  {
    username: 'Albert Gómez',
    code: 'P4J05',
    time: '19:45:00',
    date: '2025-03-24',
    status: 'Authorized Access'
  }
];

const entrypoints = [
  {
    aula: "A5103",
    entryLocation: "Campus Nord",
    labels: ["ESLAMIA", "FIB"],
    AccessCameraId: "89-12-LD",
    AccessLockId: "457898765D",
    AccessAdministrator: "pepe.admin@gmail.com"
  },
  {
    aula: "C6E01",
    entryLocation: "Main Hall",
    labels: ["Main", "Admin"],
    AccessCameraId: "90-34-MH",
    AccessLockId: "123456789A",
    AccessAdministrator: "admin.main@gmail.com"
  },
  {
    aula: "L1E02",
    entryLocation: "Library Entrance",
    labels: ["Library", "Study"],
    AccessCameraId: "78-56-LE",
    AccessLockId: "987654321B",
    AccessAdministrator: "library.admin@gmail.com"
  },
  {
    aula: "S2G03",
    entryLocation: "Sports Center",
    labels: ["Sports", "Gym"],
    AccessCameraId: "65-43-SC",
    AccessLockId: "456789123C",
    AccessAdministrator: "sports.admin@gmail.com"
  },
  {
    aula: "A3H04",
    entryLocation: "Auditorium",
    labels: ["Events"],
    AccessCameraId: "12-34-AU",
    AccessLockId: "789123456D",
    AccessAdministrator: "auditorium.admin@gmail.com"
  },
  {
    aula: "P4J05",
    entryLocation: "Parking Lot",
    labels: ["Parking", "Vehicles"],
    AccessCameraId: "34-56-PL",
    AccessLockId: "321654987E",
    AccessAdministrator: "parking.admin@gmail.com"
  }
];

// Endpoint que devuelve los logs
app.get('/api/access-logs', (req, res) => {
  res.json(logs);
});

// Endpoint para devolver las puertas
app.get('/api/doors', (req, res) => {
  res.json(entrypoints);
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

let current_user = {
  name: 'Pepe Admin.',
  role: 'admin',
  email: 'pepe.admin@gmail.com',
  phoneNumber: '+34 666 66 66 66',
};

// Endpoint que devuelve el usuario actual
app.get('/api/current-user', (req, res) => {
  res.json(current_user); 
});




// Endpoint PUT para actualizar los datos del usuario
app.put('/api/update-user', (req, res) => {
  const { name, role, email, phoneNumber } = req.body;

  if (!name || !role || !email || !phoneNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }

  current_user = {
    name,
    role,
    email,
    phoneNumber,
  };

  res.status(200).json({ message: "OK" });
});





//usuarios

const users = [ 
    {
      id: 1,
      name: "Pepe Admin.",
      email: "pepe.admin@gmail.com",
      role: "admin",
      phoneNumber: "123456789",
      labels: [{ "text": "Admin Access" }]
    },
    {
      id: 2,
      name: "Maria Garcia",
      email: "maria.garcia@gmail.com",
      role: "user",
      phoneNumber: "987654321",
      labels: [{ "text": "Editor" }]
    }
]

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Endpoint que devuelve el usuario con id 
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Endpoint para actualizar un usuario por ID
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    const { name, email, role, phoneNumber, labels } = req.body;

    users[userIndex] = {
      ...users[userIndex],
      name,
      email,
      role,
      phoneNumber,
      labels
    };

    res.json({ message: "User updated successfully", user: users[userIndex] });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Estado inicial de las configuraciones de alertas
let alertSettings = {
  dashboardAlerts: true,
  muteDashboardAlerts: false,
  emailAlerts: true,
  muteEmailAlerts: false,
};

// Endpoint para obtener las configuraciones de alertas
app.get('/api/alert-settings', (req, res) => {
  res.json(alertSettings);
});

// Endpoint para actualizar las configuraciones de alertas
app.put('/api/alert-settings', (req, res) => {
  const { dashboardAlerts, muteDashboardAlerts, emailAlerts, muteEmailAlerts } = req.body;

  // Actualiza los valores en el backend
  alertSettings = {
    dashboardAlerts: dashboardAlerts ?? alertSettings.dashboardAlerts,
    muteDashboardAlerts: muteDashboardAlerts ?? alertSettings.muteDashboardAlerts,
    emailAlerts: emailAlerts ?? alertSettings.emailAlerts,
    muteEmailAlerts: muteEmailAlerts ?? alertSettings.muteEmailAlerts,
  };

  res.json({ message: 'Alert settings updated successfully', alertSettings });
});

app.put('/api/access-logs/:code', (req, res) => {
  const { code } = req.params;
  const updatedLog = req.body;

  const logIndex = logs.findIndex((log) => log.code === code);
  if (logIndex !== -1) {
    logs[logIndex] = { ...logs[logIndex], ...updatedLog };
    res.json({ message: 'Log updated successfully', log: logs[logIndex] });
  } else {
    res.status(404).json({ message: 'Log not found' });
  }
});

// Endpoint para actualizar un punto de entrada
app.put('/api/doors/:aula', (req, res) => {
    const { aula } = req.params;
    const updatedEntry = req.body;

    // Encuentra el índice del punto de entrada
    const index = entrypoints.findIndex((entry) => entry.aula === aula);

    if (index !== -1) {
        // Actualiza los datos en memoria
        entrypoints[index] = { ...entrypoints[index], ...updatedEntry };
        res.json({ message: 'Entry updated successfully', entry: entrypoints[index] });
    } else {
        res.status(404).json({ message: 'Entry not found' });
    }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

