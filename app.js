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
    
        <style>
        body{
            display: flex;
            text-align: center;
            width: 80%;
            justify-content: center;
            background-color: 	#d6f6b3;
            color: #366c6c;
        }
        
        form { 
            border: 3px solid #42a680;
            background-color: 	#a8e999;
        } 
            
        input[type=text]{ 
            width: 100%; 
            padding: 12px 20px; 
            margin: 8px 0; 
            display: inline-block; 
            border: 1px solid #ccc; 
            box-sizing: border-box; 
        }  
            
        button { 
            background-color: #457d7e; 
            color: white; 
            padding: 14px 20px; 
            margin: 8px 0; 
            border: none; 
            cursor: pointer; 
            width: 100%; 
        }
            
        .container { 
            padding: 16px; 
        }
        
        img{
            width: 500px;
            height: 500px;
            display: flex;
        }
        </style>
        </head>
    <body>
        <article id="container">
            <h3>${Name}</h3><br>
            <img class="image" src="https://source.unsplash.com/featured/400x300/?{${Name}},{${Name}}" alt="${Name} image"/><br>
            <p>${Description}</p><br><br>
            <p>£${Value}</p>
            <button onclick=" window.location.href = 'http://localhost:808/create' +'#'+ '${Name}_${Description}_${Value}';" id="home">Home</button>
        </article>
    </body>`);
  });

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})