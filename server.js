/***********************valores*********************/
const errConectClientM= -1;
const errTrans        = -2;
const success         =  0;
const schema          = "sudoku";
const url = 'reemplazar con link de conexión a base de datos';
/**************************************************/

/*********************importaciones****************/
const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express(),
      morgan     = require('morgan'),
      fs         = require('fs'),
      mongodb    = require('mongodb'),
      sudoku     = require("./public/js/Sudoku");
      
console.log("require's: ok");
/*************************************************/


/****************configuración de app*************/
app.use(express.static('public'));///acceso a los archivos
app.use(morgan('dev'));///logger
app.use(bodyParser.urlencoded({
                                    limit: "50mb",
                                    extended: true 
                            }));
app.use(bodyParser.json({limit: "50mb"}));
console.log("app configurada");
/**************************************************/

/******************ruteo con express******************/
const port   = process.env.PORT || 8080;
const router = express.Router();
router.use((req, res, next)=>{
	console.log('entrada.');
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.set('port', port)

app.get('/', function(req, res){
  res.json({ mensaje: 'Respuesta JSON'});
});
/******************************************************/

/***************************acciones****************/
const objectText = result => result.text();

router.get('/', (req, res)=> {	
	res.json( { message: 'SUDOKU'} );	
});


/****************************iniciando el servidor*/
app.use('/api', router);
app.listen(port);
console.log("server listo");


