
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 0;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_objet= "";

function player_update(get_image){
    fabric.Image.fromURL("Cat_skin.png",function(Img) {
        
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(player_object);
    });
}



function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        block_image_object = Img;
        
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);   
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });

}
new_image()

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;

    	if(keyPressed == "40"){
		down();
		console.log("down")
	}

    
    	if(keyPressed == "38"){
		up();
		console.log("up")
	}

        
    	if(keyPressed == "39"){
		right();
		console.log("right")
	}

            
    	if(keyPressed == "37"){
		left();
		console.log("left")
	}

    if(keyPressed == '87'){
        new_image('cloud.jpg');
        console.log("Piedrita_"+ "W")
    }

    if(keyPressed == '65'){
        new_image('wall.jpg');
        console.log("ladrillo"+ "a")
    }

    if(keyPressed == '74'){
        new_image('ground.png');
        console.log("Pasto" + " J")
    }

    if(keyPressed == '78'){
        new_image('cloud.jpg');
        console.log("Pasto_osc"+ " N")
    }

    if(keyPressed == '69'){
        new_image('light_green.png');
        console.log("Arriba_pasto"+ "e")
    }

    if(keyPressed == '79'){
        new_image('roof.jpg');
        console.log("Roquita_hirviente"+ "o")
    }

    if(keyPressed == '77'){
        new_image('trunk.jpg');
        console.log("madera"+ "M")
    }
    if(keyPressed == '76'){
        new_image('unique.png');
        console.log("Luz"+ "L")
    }

    if(keyPressed == '71'){
        new_image('wall.jpg');
        console.log("ladrillo"+ "g")
    }
    if(keyPressed == '75'){
        new_image('th (1).png');
        console.log(""+ " k")
    }

    if(keyPressed == '86'){
        new_image('Beacon.webp');
        console.log("beacon"+ " V")
    }

        if(keyPressed == '66'){
        new_image('Blanco.png');
        console.log("borrar"+ " B")
    }

            if(keyPressed == '81'){
        new_image('Borrar.png');
        console.log("borrar"+ " B")
    }

                if(keyPressed == '81'){
        new_image('Borrar.png');
        console.log("borrar"+ " B")
    }

                if(keyPressed == '49'){
        player_update('Cat_skin.png');
        console.log("skin_cat"+ " 1")
    }

    if(e.shiftKey == true && keyPressed == '80'){   
    console.log("se presiona la tecla p y shift al mismo timpo");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

    if(e.shiftKey == true && keyPressed == '77'){   
    console.log("se presiona la tecla m y shift al mismo timpo");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}
}

function down(){
    if(player_y <=500){
        player_y = player_y + block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function up(){
    if(player_y >=-10){
        player_y = player_y - block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()
    }
}

function right(){
    if(player_x <= 900){
        player_x = player_x + block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha la derecha arriba, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()

    }
}

function left(){
    if(player_x >= -10){
        player_x = player_x - block_image_height;
        console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha la derecha arriba, X =  " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update()
    }
}

