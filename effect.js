$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function(){
        var vw;
        $(window).resize(function(){
             vw = $(window).width()/2;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
            $('#b11').animate({top:240, left: vw-350},500);
            $('#b22').animate({top:240, left: vw-250},500);
            $('#b33').animate({top:240, left: vw-150},500);
            $('#b44').animate({top:240, left: vw-50},500);
            $('#b55').animate({top:240, left: vw+50},500);
            $('#b66').animate({top:240, left: vw+150},500);
            $('#b77').animate({top:240, left: vw+250},500);
        });

    $('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#play').fadeIn('slow');
        });
    });
    $('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        // --- ADDED THIS LINE TO SHOW THE GIRL'S IMAGE ---
        $('#girl_image').removeClass('hide').addClass('show');
        // -------------------------------------------------
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop},10000,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},10000,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},10000,function(){
            loopSeven();
        });
    }

    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        // $('#b3').addClass('balloons-rotate-behaviour-two');
        // $('#b4').addClass('balloons-rotate-behaviour-one');
        // $('#b5').addClass('balloons-rotate-behaviour-one');
        // $('#b6').addClass('balloons-rotate-behaviour-two');
        // $('#b7').addClass('balloons-rotate-behaviour-one');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function () {
        $(this).fadeOut('slow'); // hide this button
    
        $('.fuego').fadeIn('slow'); // start showing flames
    
        // In 1.2 seconds, show the Cut the Cake button no matter what
        setTimeout(function () {
            $('#cut_the_cake').removeClass('hide').fadeIn('slow');
        }, 1200);
    });
    
    
    $('#cut_the_cake').click(function () {
        $(this).fadeOut('slow');
      
        const video = document.getElementById('cakeCutVideo');
        video.playbackRate = 0.75;
      
        // ✅ ADD BLUR by adding class to <body>
        $('body').addClass('video-playing');
      
        $('#cakeCutVideo').removeClass('hide').fadeIn('slow');
        video.classList.add('zoomed');
        video.play();
      });
      
      document.getElementById('cakeCutVideo').addEventListener('ended', function () {
        $('#cakeCutVideo').fadeOut('slow');
      
        // ✅ REMOVE BLUR
        $('body').removeClass('video-playing');
      
        $('#wish_message').removeClass('hide').fadeIn('slow');
      });
      
    
      $('#wish_message').click(function () {
        $(this).fadeOut('slow');
      
        // Hide the cake
        $('.cake-cover').fadeOut('slow');
      
        // Reuse existing blur logic
        $('body').addClass('video-playing');
      
        // Show birthday text
        setTimeout(function () {
          $('#birthday-text-wrapper').fadeIn('slow');
          $('#gift_button').fadeIn('slow'); 
        }, 600);
      });
      
      // GIFT BUTTON CLICK HANDLER
$('#gift_button').click(function(){
    // Hide everything else
    $('.container').hide();
    $('.navbar').hide();
    $('.balloons').hide();
    $('#birthday-text-wrapper').hide();
    
    // Show gift question
    $('#gift_container').fadeIn('slow');
  });
  
  // Universal Yes button click logic (moves every click until 11th)
let yesTapCount = 0;


const yesColors = [
  "#e74c3c",
  "#f39c12",
  "#f1c40f",
  "#2ecc71",
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#e67e22",
  "#d35400",
  "#c0392b"
];

$('#yes_btn').on('click', function(){
  yesTapCount++;

  if (yesTapCount < 11) {
    // Shrink progressively
    const scaleValue = 1 - (yesTapCount * 0.07);

    // Change background color
    const newColor = yesColors[yesTapCount - 1] || "#555";

    $(this).css({
      transform: `scale(${scaleValue})`,
      backgroundColor: newColor,
      color: "white"
    });

    // Random position
    const containerWidth = $(window).width() - $(this).outerWidth();
    const containerHeight = $(window).height() - $(this).outerHeight();
    const randX = Math.floor(Math.random() * containerWidth);
    const randY = Math.floor(Math.random() * containerHeight);

    $(this).css({
      position: 'absolute',
      left: randX + 'px',
      top: randY + 'px'
    });
  }
  else if (yesTapCount === 11) {
    // Grow big and final color
    $(this).css({
      position: 'static',
      transform: 'scale(2)',
      fontSize: '3em',
      backgroundColor: '#00c853',
      color: 'white',
      left: '',
      top: ''
    });

    // Remove old click handler
    $(this).off('click');

    // Bind final click to show gifts
    $(this).on('click', function(){
      $('#gift_container').hide();
      $('#gift_boxes').fadeIn('slow');
    });
  }
});


$('#no_btn').click(function(){
    $('#gift_container').html(`
      <div id="no_response">
        <p>Ok 😆</p>
        <button id="exit_button" class="btn btn-danger">Exit</button>
      </div>
    `);
  
    // Optional: fade it in
    $('#no_response').hide().fadeIn(500);
  });
  // Delegate click to the dynamically created Exit button
$(document).on('click', '#exit_button', function(){
    location.reload();
  });
  

// Click on gift box
$('.gift-box').click(function(){
  const gifts = {
    car: '🚗 Brand New Car!',
    house: '🏠 Beautiful House!',
    iphone: '📱 iPhone 15 Pro!',
    macbook: '💻 MacBook Pro!',
    samsung: '📱 Samsung S25 Ultra!',
    audi: '🚘 Audi Car!',
    laptop: '💻 Laptop!',
    burj: '🏙️ Burj Khalifa!',
    taj: '🕌 Taj Mahal!'
  };
  const selectedGift = $(this).data('gift');
  $('#gift_boxes').hide();
  $('#gift_name').text(gifts[selectedGift]);
  $('#gift_reveal').fadeIn('slow');
});

// Claim button click
// Claim button click
$('#claim_gift').click(function(){
  // Hide the claim button
  $('#claim_gift').hide();

  // Show the progress bar
  $('#progress_container').fadeIn('fast');

  let progress = 0;

  function updateProgress() {
    progress += 10;
    $('#progress_bar_inner').css('width', progress + '%');
    $('#progress_text').text('Loading... ' + progress + '%');

    if (progress < 100) {
      setTimeout(updateProgress, 1500);
    } else {
      // When complete, hide progress and show fool message
      $('#progress_container').fadeOut('slow', function(){
        $('#gift_reveal').fadeOut('fast', function(){
          $('#fool_message').fadeIn('slow');
        });
      });
    }
  }

  updateProgress();
});

// Exit button click
$('#exit_button').click(function(){
  location.reload(); // Reload the page
});

    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });

        var i;

        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
            i=i+1;
            $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
            if(i==50){
                $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                    $('.cake').fadeIn('fast');
                });

            }
            else{
                msgLoop(i);
            }

        });
            // body...
        }

        msgLoop(0);

    });
});
