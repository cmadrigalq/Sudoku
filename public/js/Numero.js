class Numero{
	constructor(valor,fila,columna,visible=true,correcto=true){
		this.valor = visible ? valor : 0;
		this.fila = fila;
		this.columna = columna;
		this.visible = visible;
		this.correcto = correcto;
	}
	static from(objJson){
		//objJson resultado de restaurar el texto json 
		//De la respuesta del cliente a un objeto
		return new Numero(
			objJson.valor,
			objJson.fila,
			objJson.columna,
			objJson.visible,
			objJson.correcto
		);
	}
	static to(numero){
		return{
			_class  : "Numero",
			valor   : numero.valor,
			columna : numero.columna,
			fila    : numero.fila,
			visible : numero.visible,
			correcto: nuevo.correcto
		}
	}
}

module.exports = {
	Numero
}
