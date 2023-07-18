import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup',
  port: 3307,
});

const db1 = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mylist',
  port: 3307,
});

db.connect((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('Помилка підключення до бази даних:', err);

    return;
  }

  // eslint-disable-next-line no-console
  console.log('Підключення до бази даних успішне');
});

app.post('/register', (req, res) => {
  const sql = 'INSERT INTO login (`name`, `email`, `password`) VALUES (?)';
  const values = [
    req.body.name,
    req.body.emailSecond,
    req.body.passwordSecond,
  ];

  db.query(sql, [values], (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('Помилка виконання запиту до бази даних:', err);

      return res.json('Error');
    }

    // eslint-disable-next-line no-console
    console.log('Користувач успішно створений');

    return res.json(result);
  });
});

app.post('/sign', (req, res) => {
  const sql = 'SELECT * FROM login WHERE `email` = ? AND `password` = ?';

  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('Помилка виконання запиту до бази даних:', err);

      return res.json('Error');
    }

    if (result.length > 0) {
      return res.json('Success');
    }

    return res.json('Faile');
  });
});

app.post('/add-to-my-list', (req, res) => {
  const { item } = req.body;

  const sql = 'INSERT INTO list (drinkName, category, area, tags, glass, thumbnail) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [
    item.strDrink,
    item.strCategory,
    item.strArea,
    item.strTags,
    item.strGlass,
    item.strDrinkThumb,
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  db1.query(sql, values, (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('Помилка виконання запиту до бази даних:', err);

      return res.status(500).json('Error');
    }

    // eslint-disable-next-line no-console
    console.log('Елемент успішно додано до My List');

    return res.json('Success');
  });
});

app.post('/remove-from-my-list', (req, res) => {
  const { item } = req.body;

  const sql = 'DELETE FROM list WHERE drinkName = ?';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  db1.query(sql, [item.strDrink], (err, result) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('Помилка виконання запиту до бази даних:', err);

      return res.status(500).json('Error');
    }

    // eslint-disable-next-line no-console
    console.log('Елемент успішно видалено з My List');

    return res.json('Success');
  });
});

app.listen(8081, () => {
  // eslint-disable-next-line no-console
  console.log('Сервер працює на порту 8081');
});
