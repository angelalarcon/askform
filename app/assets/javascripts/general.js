$(document).ready(function(){
  $('#my_scrollspy').scrollspy({offset: $('header').innerHeight() + $('section').innerHeight() + 50});   
  $("header a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - $('header').innerHeight()
    }, 800, function(){
      window.location.hash = hash;
    });
  });

  function elementActive (element){
    $(element).addClass('active');   
  }

  function allInactive (element){
    $(element).removeClass('active');   
  }

  $('#my_scrollspy').on('activate.bs.scrollspy', function (el) {
    var currentStep;
    var index;
    var nextStep;

    currentStep = $(el.target).attr('data-ref');
    nextStep = currentStep.split('_');
    index = parseInt(nextStep[1],10);
    //index = index == 0 ? 0 : index + 1;

    nextStep = nextStep[0] + '_' + index;
    console.log(nextStep);

    allInactive('section');
    
    elementActive(nextStep);
  })
});