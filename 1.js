const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Привіт Bombardiro Krocodilo!');
});

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.get('/json', (req, res) => {
    res.json({"message": "Hello from golobino!"});
});

app.get('/user/:id', (req, res) => {
    res.send(`Користувач з ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    res.send(`Пошук за запитом: ${req.query.q} ${req.query.pepa}`);
});


app.listen(3000, () => {
    console.log('Сервер працює на ')
});

app.get('/ryzen/55600G', (req, res) => {
    res.json( {
      model: '5 5600G',
      'Об`єм пам`яті': 'вбудована',
      'Тип пам`яті': 'DDR3'
   });
});

app.get('/lego/:model', (req, res) => {
    const model = req.params.model;

    res.json({
        model,
        'Кількість деталей': 52525242,
        'Для дітей': 'Від 9 до 14 років',
 });
});

app.get('/search', (req, res) => {
    const queryParams = req.query;
    res.json(queryParams);
});