const express = require('express');
const app = express();


app.set("view engine", "ejs")

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações/servicos de forma facil"
        },
        {
            title: "E",
            message: "JS usa JS para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "gilidade e performance"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS"
    res.render("./pages/index", {
        qualitys: items,
        subtitle: subtitle        
    });
})

app.get("/sobre", function(req, res){
    res.render("./pages/about");
})

app.listen(8080);
console.log("roodando");