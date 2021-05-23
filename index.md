<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Stone Paper Scissors 2</title>
</head>
<body style="background-color: rgb(234, 215, 241);">
    <BR>
        <BR>
    <div class="container-3",id="flex-box">
        <h1 style="color: rgb(0, 0, 0); font-style: normal; font-weight: bolder;"> STONE, PAPER, SCISSORS </h1>
        <div class="flex-box-rps"id="flex-box-rps-div">
            <img src="https://storage.needpix.com/rsynced_images/rock-576669_1280.png" height=150 width=150 alt="stone"id="rock"onclick="rpsGame(this)">
            <img src="http://clipart-library.com/img/1788589.png"alt="paper" height=150 width=150 id="paper"onclick="rpsGame(this)">
            <img src="https://www.seekpng.com/png/detail/414-4146875_quizs-tambin-le-interese-animated-scissors-cutting-png.png" alt="scissors" height=200 width=200 id="scissors"onclick="rpsGame(this)">
        </div>
        <div>       <button class="btn btn-success" onclick= "reset()">Play Again</button>
        </div>
        
        <div ><h3 style="text-align: left;color: rgb(240, 32, 32);font-weight: bold;">Score:</h5></div>
        <div id="score"></div>
    
    </div> 
        
    
    <script src="script.js">

    </script>
</body>
</html>