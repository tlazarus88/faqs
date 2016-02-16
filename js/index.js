// Tip: You can either hide the answer on page load with js or use display:none in css

$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();

$('#question1').on('click', function (){$('#answer1').slideDown();});
$('#question2').on('click', function (){$('#answer2').slideDown();});
$('#question3').on('click', function (){$('#answer3').slideDown();});
