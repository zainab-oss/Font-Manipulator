function setup() 
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,400);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose',gotPoses)

}

function modelLoaded()
{
    console.log("poseNet has been initialized");
}

function draw()
{
    background("#E37383");
}

function gotPoses()
{
    if (results > 0)
    {
        console.log(results);
    }
}