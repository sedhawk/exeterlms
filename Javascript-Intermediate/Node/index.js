const express = require("express");

const app = express();
const handlebars = require("express-handlebars").create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set("port", process.env.PORT || 3000);

app.get('/', (request, response) => {
    response.render('home');
});

app.get('about', (request, response) => {
    response.render('about');
});

app.use((request, response) => {
    response.status(404);
    response.render('404');
});

app.listen(app.get("port"), () => {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
