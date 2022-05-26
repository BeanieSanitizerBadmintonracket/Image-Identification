Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML = "<img src = "+data_URI+" id = 'captureImage'>";
    });

}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dt2EfENeB/model.json", modelLoaded)

function modelLoaded(){
    console.log("modelLoaded");
}

function identify(){
    img = document.getElementById("captureImage");
    classifier.classify(img, gotResult);

}

function gotResult(error, result){
    if (error) {
            console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
        
    }


}