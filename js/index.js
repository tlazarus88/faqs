// Tip: You can either hide the answer on page load with js or use display:none in css

$('#answer1').hide();
$('#answer2').hide();
$('#answer3').hide();

$('#question1').on('click', function (){$('#answer1').slideToggle();});
$('#question2').on('click', function (){$('#answer2').slideToggle();});
$('#question3').on('click', function (){$('#answer3').slideToggle();});
