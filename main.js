noseX = 0;
noseY = 0;

difference = 0;
rightWristX = 0;
leftWristX = 0;


function  setup() {
    video =  createCapture(VIDEO);
    video.size(550, 500);

    canvas =  createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('#808080');
    fill('#F90093');
    stroke('#F90093')
    square(noseX, noseY, difference);
    document.getElementById("size_label").innerHTML = "Width and height of square will be " + difference + "px";
}

function modelLoaded() {
    console.log('PoseNet is initialized')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + "nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}



