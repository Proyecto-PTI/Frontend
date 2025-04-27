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

// Endpoint que devuelve los logs
app.get('/api/access-logs', (req, res) => {
  res.json(logs);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

