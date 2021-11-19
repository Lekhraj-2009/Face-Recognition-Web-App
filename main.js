//Teachable Machine Model: https://teachablemachine.withgoogle.com/models/pUteDwlVB/
//Link: https://teachablemachine.withgoogle.com/models/pUteDwlVB/model.json

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result_img").innerHTML = '<img id="capture_img" style="border:3px solid darkblue;" src="'+data_uri+'"/>';
    });
}

console.log('Your ml5 Version : ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pUteDwlVB/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded initiated');
}

function check(){
    img = document.getElementById("capture_img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}