const  altura  =  documento . cuerpo _ scrollHeight  -  ventana . alturainterna ;
const  fondo  =  documento . getElementById ( 'fondo' ) ;

ventana _ en desplazamiento  =  ( )  =>  {
	const  anchoFondo  =  ( ventana.paginaYDesplazamiento / altura ) * 700 ; _ _    
	if ( anchoFondo  <=  100 ) {
		fondos _ estilo _ ancho  =  anchoFondo  +  '%' ;
	}
}