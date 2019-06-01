class Input {
	
	//static x = 400;
	//static y = 400;
	
	static updateMousePos(evt) {
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;

		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;

	}

	// NÃO COMPLETADO

	// static action(object,e, delta){
	// 	switch (e.keyCode) {
	// 	  case 65:
	// 	    object.x -= 1/delta;
	// 	    break;
	// 	  case 68:
	// 	  	object.x += 1/delta;
	// 	  	break;
	// 	  case 87:
	// 	    object.y -= 1/delta;
	// 	    break;
	// 	  case 83:
	// 	  	object.y += 1/delta;
	// 	  	break;
	// 	  default:
	// 	    console.log('There was an error.:/');
	// 	}

	// }



}	