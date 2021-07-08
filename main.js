function setup() 
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";    
}

function draw() 
{
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(580, 90, 20, 460);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 450, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(85, 445, 465, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 445, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(40, 90, 20, 315);
}