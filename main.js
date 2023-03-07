var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object="";

var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {

          player_object = Img;

          player_object.scaleTowidth(150);
          player_object.scaleToHeight(140) ;
          player_object.set({
            top:player_y,
            left:player_x


    });

    canvas.add(player_object);
});
}




function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {

          block_image_object = Img;

          block_image_object.scaleTowidth(block_image_width);
          block_image_object.scaleToHeight(block_image_height) ;
          block_image_object.set({
            top:player_y,
            left:player_x


    });

    canvas.add(block_image_object);
});
}



window.addEventListener("keydown",mi_TeclaPausada);

function mi_TeclaPausada(e)

{
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey == true && keyPressed == "80")
  { 

    console.log("P y Shift presionadas juntas");
    block_image_width = block_image_width +10;
    block_image_height = block_image_height + 10;
    document.getElementById("anchura_actual").innerHTML = block_image_width;
    document.getElementById("altura_actual").innerHTML = block_image_height;

  }
  if (e.shiftKey && keyPressed == "70")
  {
    console.log("M y Shift presionadas juntas");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("anchura_actual").innerHTML = block_image_width;
    document.getElementById("altura_actual").innerHTML = block_image_height;

  }

  if (keyPressed == "38")
  {
    up();
    console.log("arriba");
  }

  if (keyPressed == "40")
  {
    down();
    console.log("abajo");
  }

  if (keyPressed == "37")
  {
    left();
    console.log("izquierda");
  }
  if (keyPressed == "39")
  {
    right();
    console.log("derecha");
  }
  if (keyPressed == "87")
  {
    nueva_imagen("wall.jpg");
    console.log("w");
  }
  if (keyPressed == "71")
  {
    nueva_imagen("ground.png");
    console.log("g");
  }
  if (keyPressed == "76")
  {
    nueva_imagen("light_green.png");
    console.log("1");
  }
  if (keyPressed == "84")
  {
    nueva_imagen("trunk.jpg");
    console.log("t");
  }
  if (keyPressed == "82")
  {
    nueva_imagen("roof.jpg");
    console.log("r");
  }
  if (keyPressed == "89")
  {
    nueva_imagen("yellow_wall.png");
    console.log("y");
  }
  if (keyPressed == "71")
  {
    nueva_imagen("dark_green.png");
    console.log("d");
  }
  if (keyPressed == "85")
  {
    nueva_imagen("unique.png");
    console.log("u");
  }
  if (keyPressed == "67")
  {
    nueva_imagen("cloud.jpg");
    console.log("c");
  }
 

}

function up()
{
  if (player_y >=0) 
  {
    player_y = player_y - block_image_height;
    console.log("altura del bloque de la imagen =" + block_image_height);
    console.log("Cuando se presione la tecla hacia arriba, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function down()
{
  if (player_y <=500) 
  {
    player_y = player_y - block_image_height;
    console.log("altura del bloque de la imagen =" + block_image_height);
    console.log("Cuando se presione la tecla hacia abajo, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
  }
}



function left()
{
  if (player_x >=0) 
  {
    player_x = player_x - block_image_width;
    console.log("ancho del bloque de la imagen =" + block_image_width);
    console.log("Cuando se presione la tecla izquierda, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function right()
{
  if (player_x <=850) 
  {
    player_x = player_x - block_image_width;
    console.log("ancho del bloque de la imagen =" + block_image_width);
    console.log("Cuando se presione la tecla hacia la derecha, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
  }
}


