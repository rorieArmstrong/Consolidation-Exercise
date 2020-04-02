const express = require("express");
const app = express();
const PORT = process.env.PORT || 808;

app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(express.static('views'));

var sessionVariable;

app.get('/create', (req, res) => {
    res.sendfile("public\\index.html");
});

app.post("/item", (req, res, next) => {
    console.log(req.body);
    let Name = req.body.name;
    let Description = req.body.description;
    let Value = req.body.value;
    let querry = "" + Name + "_" + Description + "_" + Value;
    res.redirect("/item/" + querry)
    
    
});

app.get("/item/:string", (req, res) => {
    let arr = req.params.string.split("_");
    let Name = arr[0];
    let Description = arr[1];
    let Value = arr[2];
    res.send(`<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Listings</title>
    
        <link rel="stylesheet"  href="./style.css">
    
        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha384-mlceH9HlqLp7GMKHrj5Ara1+LvdTZVMx4S1U43/NxCvAkzIo8WJ0FE7duLel3wVo" crossorigin="anonymous"></script>
        <script type="text/javascript" src="./redirect.js"></script></head><body>
        <article id="container">
            <h3>${Name}</h3><br>
            <img class="image" src="https://source.unsplash.com/featured/400x300/?{${Name}},{${Name}}" alt="${Name} image"/><br>
            <p>${Description}</p><br><br>
            <p>£${Value}</p>
            <button onclick=" window.location.href = 'http://localhost:808/create' +'#'+ '${Name}_${Description}_${Value}';" id="home">Home</button>
        </article></body>`);
  });

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})