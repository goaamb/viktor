G.viktor = (!G.viktor ? {} : G.viktor);
G.viktor.seleccionados={
	producto : {},
	vendedores : {}
};
G.viktor.productos = [];
G.viktor.vendedores=[];


$(document).on("ready",function(){
	$("#nuevoProducto").dialog({
		autoOpen: false,
		resizable: false,
    	height:250,
    	modal: true,
    	buttons: {
        "Guardar": function() {
        	var n=this.nombre.value,a=this.abreviatura.value,p=this.precio.value;
        	if(G.util.trim(n) && G.util.trim(p)){
	    	    var producto={
    	    		nombre:this.nombre.value,
        			abreviatura:this.abreviatura.value,
        			precio:this.precio.value,
        			estado:true
	        	};
	        	G.viktor.productos.push(producto);
	        	$( this ).dialog( "close" );
	        	actualizarListaProductos();
	    	}
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
	});
});
function seleccionarProducto(){
	if(this.producto){
		G.viktor.seleccionados.producto=this.producto;
		actualizarListaProductos();
	}
}
function actualizarListaProductos(){
	var ul=$("#listaProductos .contenido ul");
	var p=
	ul.empty();
	var p=G.viktor.productos;
	for (var i = 0; i < p.length; i++) {
		var li=G.dom.create("li");
		li.innerHTML=p[i].nombre+" - "+p[i].precio;
		li.producto=p[i];
		li.onclick=seleccionarProducto;
		if(G.viktor.seleccionados.producto==p[i]){
			li.className="seleccionado";
		}
		ul[0].appendChild(li);
	}; 
}

function nuevoProducto(){
	$("#nuevoProducto").dialog("open");
	return false;
}

function modificarProducto(){
	return false;
}

function habilitarProducto(){
	return false;
}
function deshabilitarProducto(){
	return false;
}