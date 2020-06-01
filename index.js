const express = require('express');
const hbs = require('hbs');
const app= express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.get('/inicio', (req, res)=>{
    res.render('index', {
        autor:"Derek Yadir Franco Martinez",
        año:new Date().getFullYear(),
        title:"Inicio"
    });
});
app.get('/davinci', (req, res)=>{
    res.render('davinci', {
        autor:"Derek Yadir Franco Martinez",
        año:new Date().getFullYear(),
        title:"Leonardo Da Vinci"
    });
});
app.get('/salvador', (req, res)=>{
    res.render('dali', {
        autor:"Derek Yadir Franco Martinez",
        año:new Date().getFullYear(),
        title:"Salvador Dali"
    });
});
app.get('/miguel', (req, res)=>{
    res.render('miguel', {
        autor:"Derek Yadir Franco Martinez",
        año:new Date().getFullYear(),
        title:"Miguel Angel"
    });
});
app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        autor:"Derek Yadir Franco Martinez",
        año:new Date().getFullYear(),
        title:"Picasso"
    });
});
app.listen(3000, ()=>{
    console.log("Escuchando");
});