canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
mars_img_array = ["mars.jpg", "mars 1.jpg", "mars2.jpg", "mars 3.jpg", "mars 4.jpg", "mars 5.jpg", "mars 6.jpg"];
random_number = Math.floor(Math.random() * 7);
bg_image = mars_img_array[random_number];
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    bg_tag = new Image();
    bg_tag.onload = uploadBackground;
    bg_tag.src = bg_image;
    rover_tag = new Image();
    rover_tag.onload = uploadRover;
    rover_tag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(bg_tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38'){
        up();
        console.log("up arrow key");
    }

    if (keypressed == '40'){
        down();
        console.log("down arrow key");
    }

    if (keypressed == '37'){
        left();
        console.log("left arrow key");
    }

    if (keypressed == '39'){
        right();
        console.log("right arrow key");
    }
}

function up(){
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (rover_y <= 500){
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (rover_x <= 700){
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}