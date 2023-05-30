function addinput() {
  if ($('input[name="ethnicity"]:checked').val() == "hispanic") {
    document.getElementById("hispanic_options").innerHTML = '<p><div id = "heritage_country_div">*Heritage Countries (ex. Cuba): <input type="text" id="heritage_country"></p></div><p><div id = "english_acquisition_age_div">*Age You Learned English: <input type="text" id="english_acquisition_age"></p>  </div>';
    document.getElementById("non_hispanic_options").innerHTML = '';
  // document.getElementById("heritage_country_div").show();
  // document.getElementById("english_acquisition_age_div").show();
  

  }

  if ($('input[name="ethnicity"]:checked').val() == "not_hispanic") {
  document.getElementById("non_hispanic_options").innerHTML = '<p><div id = "exposure_div">*Exposure to Hispanic/ Latina/o Population: <select id="exposure"><option value=""></option><option value="Daily">On a daily basis</option><option value="Weekly">On a weekly basis</option><option value="Monthly">On a monthly basis</option><option value="Yearly">On a yearly basis</option><option value="Prefer not to say">Prefer not to say</option></select></p>  </div>';
  document.getElementById("hispanic_options").innerHTML = '';
  // document.getElementById("exposure_div").show();


  }
}


function add_years() {
  if ($('input[name="miami"]:checked').val() == "yes") {
    document.getElementById("miami_options").innerHTML = '<p>*Years you have lived in Miami: <input type="text" id="years_miami"></p>';
}
 if ($('input[name="miami"]:checked').val() == "no") {
    document.getElementById("miami_options").innerHTML = ''

  }
}

var heritage_country_value = null;
var english_acquisition_age_value = null;
var exposure_value = null;
var years_in_miami_value = null;

function getconditionalinputs(){
  if ($('input[name="ethnicity"]:checked').val() == "hispanic") {
    heritage_country_value = $("#heritage_country").val();
    english_acquisition_age_value = $("#english_acquisition_age").val();
    exposure_value = "NA";
  }
  if ($('input[name="ethnicity"]:checked').val() == "not_hispanic") {
    exposure_value = $("#exposure").val();
    heritage_country_value = "NA";
    english_acquisition_age_value = "NA";
  }

if ($('input[name="miami"]:checked').val() == "yes") {
years_in_miami_value = $("#years_miami").val();
  }
  if ($('input[name="miami"]:checked').val() == "no") {
    years_in_miami_value = "NA";
  }

}

// set up experiment logic for each slide
function make_slides(f) {
  var slides = {};

  // set up initial slide
  slides.i0 = slide({
    name: "i0",
      start: function() {
      exp.startT = Date.now();
      },
      button: function() {
        exp.go(); //use exp.go() if and only if there is no "present" data.
      },
  });


// SOUND CHECK

  slides.sound_test = slide({
     name: "sound_test",
	  start: function(){
	  	$('.err').hide();
	  },
     soundtest_OK : function(e){
       exp.trial_no = 0;

	   var sound_test = $(".sound_test").val();
	   sound_test = sound_test.toLowerCase();

	   if (sound_test == "ready") {
	   	 exp.go();
	   } else {
	   	$('.err').show();
	   }
     }
   });

  // INSTRUCTIONS FOR PRACTICE TRIALS

  slides.practice_instructions = slide({
    name: "practice_instructions",
    start: function() {
    },
    button: function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    },
  });

   // PRACTICE TRIAL 1

  slides.practice_trial_1 = slide({
    name: "practice_trial_1",

    // To rotate through stimulus list
    start : function()
	 {
    // $('#practice_trial_1').hide();
		$('.err').hide();
		$('.correct').hide();
		exp.allow_key_press = 0;
		exp.response = "";

// this connects to html file
var practice1_aud = document.getElementById("happy");

// this indexes to the prime file name
practice1_aud.src = "audio/happy.wav";
practice1_aud.load();
practice1_aud.play();

practice1_aud.onended = function() {
	console.log("audio ended");
  // $('#practice_trial_1').show();
      exp.allow_key_press = 1;
	// setTimeout(function(){
	//  }, 500);

	 document.onkeydown = checkKey;
	 function checkKey(e) {
		 e = e || window.event;
		 if (e.keyCode == 76 && exp.allow_key_press == 1) {
		 	 console.log("L pressed");
        exp.allow_key_press = 0;
			 exp.response = "happy";
			 $('.err').hide();
			 $('.correct').show();
		 	setTimeout(function(){
				// WHEN I ADD NEW PRACTICE THIS TURNS INTO EXP.GO()
				 exp.go();
		 	 }, 2000);
		 } if (e.keyCode == 83 && exp.allow_key_press == 1) {
		 	console.log("S pressed");
       // exp.allow_key_press = 0;
			exp.response = "sad";
			$('.err').show();
		 }
	 }

 };
     },

     // handle click on "Continue" button
     button: function() {
         this.log_responses();
     },
   });

    // PRACTICE TRIAL 2

   slides.practice_trial_2 = slide({
     name: "practice_trial_2",

     // To rotate through stimulus list
     start : function()
 	 {
		// $('#practice_trial_2').hide();
		$('.err').hide();
 		$('.correct').hide();
 		exp.allow_key_press = 0;
 		exp.response = "";

 // this connects to html file
 var practice2_aud = document.getElementById("sad");

 // this indexes to the prime file name
 practice2_aud.src = "audio/sad.wav";
 practice2_aud.load();
 practice2_aud.play();

 practice2_aud.onended = function() {
 	console.log("audio ended");
  // $('#practice_trial_2').show();
      exp.allow_key_press = 1;
 	// setTimeout(function(){
 	//  }, 500);

 	 document.onkeydown = checkKey;
 	 function checkKey(e) {
 		 e = e || window.event;
 		 if (e.keyCode == 76 && exp.allow_key_press == 1) {
 		 	 console.log("L pressed");
        exp.allow_key_press = 0;
 			 exp.response = "sad";
 			 $('.correct').show();
$('.err').hide();
              setTimeout(function(){
        exp.go();
       }, 2000);


 		 } if (e.keyCode == 83 && exp.allow_key_press == 1) {
 		 	console.log("S pressed");
       // exp.allow_key_press = 0;
 			exp.response = "happy";
 			$('.err').show();
			$('.correct').hide();
 		 	// setTimeout(function(){
			// 	exp.go();
 		 	//  }, 2000);
 		 }
 	 }
  };
      },

      // handle click on "Continue" button
      button: function() {
          this.log_responses();
          // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      },
    });

// ATTENTION SLIDE 1

   slides.attention1 = slide({
     name: "attention1",

     // To rotate through stimulus list
     start : function()
   {
    $('#attention1').show();
    exp.allow_key_press = 0;
    exp.response = "";

 // this connects to html file
 var attention_aud = document.getElementById("attention_aud");

 // this indexes to the prime file name
attention_aud.src = "audio/one_one_two.wav";
attention_aud.load();
attention_aud.play();

attention_aud.onended = function() {
  console.log("audio ended");
  // $('#attention1').show();
      exp.allow_key_press = 1;

   document.onkeydown = checkKey;
   function checkKey(e) {
     e = e || window.event;
     if (e.keyCode == 76 && exp.allow_key_press == 1) {
       console.log("L pressed");
       exp.response = "yes";
       console.log(exp.response);
                 exp.allow_key_press = 0;
                 $('#attention1').hide();
              setTimeout(function(){
         _s.button();
        exp.go();
exp.allow_key_press = 0;
       }, 2000);


     } if (e.keyCode == 83 && exp.allow_key_press == 1) {
      console.log("S pressed");
      exp.response = "no";
      console.log(exp.response);
                exp.allow_key_press = 0;
                $('#attention1').hide();
      setTimeout(function(){
         _s.button();
       exp.go();
exp.allow_key_press = 0;
       }, 2000);
     }
   }
  };
      },

      // handle click on "Continue" button
      button: function() {
          this.log_responses();
          // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({
      
      "block": "attention1",
      "choices": "no-yes",
      "response_time": "",
      "response": exp.response,
      "response_type": "",
      "slide_number_in_experiment": exp.phase-6,
      stim_num: "",
      participant: "",
      phrase: "one_one_two",
      gender: "",
      start_time: "",
      end_time: "",
      duration: "",
      accentedness: ""

        });
      },
    });


 // ATTENTION SLIDE 2

   slides.attention2 = slide({
     name: "attention2",

     // To rotate through stimulus list
     start : function()
   {
    $('#attention2').show();
    exp.allow_key_press = 0;
    exp.response = "";

 // this connects to html file
 var attention_aud = document.getElementById("attention_aud");

 // this indexes to the prime file name
attention_aud.src = "audio/one_one_four.wav";
attention_aud.load();
attention_aud.play();

attention_aud.onended = function() {
  console.log("audio ended");
  // $('#attention2').show();
      exp.allow_key_press = 1;
  // setTimeout(function(){
  //  }, 500);

   document.onkeydown = checkKey;
   function checkKey(e) {
     e = e || window.event;
     if (e.keyCode == 76 && exp.allow_key_press == 1) {
       console.log("L pressed");
       exp.response = "yes";
                 exp.allow_key_press = 0;
                 $('#attention2').hide();
              setTimeout(function(){
                _s.button();
        exp.go();
        exp.allow_key_press = 0;
       }, 2000);


     } if (e.keyCode == 83 && exp.allow_key_press == 1) {
      console.log("S pressed");
      exp.response = "no";
                exp.allow_key_press = 0;
                $('#attention2').hide();
      setTimeout(function(){
        _s.button();
       exp.go();
       exp.allow_key_press = 0;
       }, 2000);
     }
   }
  };
      },

      // handle click on "Continue" button
      button: function() {
          this.log_responses();
          // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({
      
      "block": "attention2",
      "choices": "no-yes",
      "response_time": "",
      "response": exp.response,
      "response_type": "",
      "slide_number_in_experiment": exp.phase-6,
      stim_num: "",
      participant: "",
      phrase: "one_one_four",
      gender: "",
      start_time: "",
      end_time: "",
      duration: "",
      accentedness: ""

        });
      },
    });

  // ATTENTION SLIDE 3

   slides.attention3 = slide({
     name: "attention3",

     // To rotate through stimulus list
     start : function()
   {
    $('#attention3').show();
    // $('.err').hide();
    // $('.correct').hide();
    exp.allow_key_press = 0;
    exp.response = "";

 // this connects to html file
 var attention_aud = document.getElementById("attention_aud");

 // this indexes to the prime file name
attention_aud.src = "audio/one_two_three.wav";
attention_aud.load();
attention_aud.play();

attention_aud.onended = function() {
  console.log("audio ended");
  // $('#attention3').show();
      exp.allow_key_press = 1;
  // setTimeout(function(){
  //  }, 500);

   document.onkeydown = checkKey;
   function checkKey(e) {
     e = e || window.event;
     if (e.keyCode == 76 && exp.allow_key_press == 1) {
       console.log("L pressed");
       exp.response = "yes";
                 exp.allow_key_press = 0;
                 $('#attention3').hide();
              setTimeout(function(){
                _s.button();
        exp.go();
        exp.allow_key_press = 0;
       }, 2000);


     } if (e.keyCode == 83 && exp.allow_key_press == 1) {
      console.log("S pressed");
      exp.response = "no";
                exp.allow_key_press = 0;
                $('#attention3').hide();
      setTimeout(function(){
        _s.button();
       exp.go();
       exp.allow_key_press = 0;
       }, 2000);
     }
   }
  };
      },

      // handle click on "Continue" button
      button: function() {
          this.log_responses();
          // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({
      
      "block": "attention3",
      "choices": "no-yes",
      "response_time": "",
      "response": exp.response,
      "response_type": "",
      "slide_number_in_experiment": exp.phase-6,
      stim_num: "",
      participant: "",
      phrase: "one_two_three",
      gender: "",
      start_time: "",
      end_time: "",
      duration: "",
      accentedness: ""

        });
      },
    });

     // ATTENTION SLIDE 4

   slides.attention4 = slide({
     name: "attention4",

     // To rotate through stimulus list
     start : function()
   {
    $('#attention4').show();
    // $('.err').hide();
    // $('.correct').hide();
    exp.allow_key_press = 0;
    exp.response = "";

 // this connects to html file
 var attention_aud = document.getElementById("attention_aud");

 // this indexes to the prime file name
attention_aud.src = "audio/one_two_five.wav";
attention_aud.load();
attention_aud.play();

attention_aud.onended = function() {
  console.log("audio ended");
  // $('#attention4').show();
      exp.allow_key_press = 1;
  // setTimeout(function(){
  //  }, 500);

   document.onkeydown = checkKey;
   function checkKey(e) {
     e = e || window.event;
     if (e.keyCode == 76 && exp.allow_key_press == 1) {
       console.log("L pressed");
       exp.response = "no";
                 exp.allow_key_press = 0;
                 $('#attention4').hide();
              setTimeout(function(){
                _s.button();
        exp.go();
        exp.allow_key_press = 0;
       }, 2000);


     } if (e.keyCode == 83 && exp.allow_key_press == 1) {
      console.log("S pressed");
      exp.response = "yes";
                exp.allow_key_press = 0;
                $('#attention4').hide();
      setTimeout(function(){
        _s.button();
       exp.go();
       exp.allow_key_press = 0;
       }, 2000);
     }
   }
  };
      },

      // handle click on "Continue" button
      button: function() {
          this.log_responses();
          // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({
      
      "block": "attention4",
      "choices": "yes-no",
      "response_time": "",
      "response": exp.response,
      "response_type": "",
      "slide_number_in_experiment": exp.phase-6,
      stim_num: "",
      participant: "",
      phrase: "one_two_five",
      gender: "",
      start_time: "",
      end_time: "",
      duration: "",
      accentedness: ""

        });
      },
    });

  // ATTENTION SLIDE 5

   slides.attention5 = slide({
     name: "attention5",

     // To rotate through stimulus list
     start : function()
   {
    $('#attention5').show();
    // $('.err').hide();
    // $('.correct').hide();
    exp.allow_key_press = 0;
    exp.response = "";

 // this connects to html file
 var attention_aud = document.getElementById("attention_aud");

 // this indexes to the prime file name
attention_aud.src = "audio/three_two_one.wav";
attention_aud.load();
attention_aud.play();

attention_aud.onended = function() {
  console.log("audio ended");
  // $('#attention5').show();
      exp.allow_key_press = 1;
  // setTimeout(function(){
  //  }, 500);

   document.onkeydown = checkKey;
   function checkKey(e) {
     e = e || window.event;
     if (e.keyCode == 76 && exp.allow_key_press == 1) {
       console.log("L pressed");
       exp.response = "no";
                 exp.allow_key_press = 0;
                 $('#attention5').hide();
              setTimeout(function(){
                _s.button();
        exp.go();
        exp.allow_key_press = 0;
       }, 2000);


     } if (e.keyCode == 83 && exp.allow_key_press == 1) {
      console.log("S pressed");
      exp.response = "yes";
                exp.allow_key_press = 0;
                $('#attention5').hide();
      setTimeout(function(){
        _s.button();
       exp.go();
       exp.allow_key_press = 0;
       }, 2000);
     }
   }
  };
      },

      // handle click on "Continue" button
      button: function() {
          this.log_responses();
          // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({
      
      "block": "attention5",
      "choices": "yes-no",
      "response_time": "",
      "response": exp.response,
      "response_type": "",
      "slide_number_in_experiment": exp.phase-6,
      stim_num: "",
      participant: "",
      phrase: "three_two_one",
      gender: "",
      start_time: "",
      end_time: "",
      duration: "",
      accentedness: ""

        });
      },
    });

   // INSTRUCTIONS FOR MAIN EXPERIMENT

   slides.startExp = slide({
     name: "startExp",
     start: function() {
     },
     button: function() {
      exp.allow_key_press = 0;
       exp.go(); //use exp.go() if and only if there is no "present" data.
     },
   });

// BLOCK 1

  slides.block_1 = slide({
    name: "block_1",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present: exp.stimuli_block1,
    present_handle : function(stim)
	 {
    $('#stimuli_block1').show();
exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_1_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var allow_key_press_200ms;
audio.onplay = function(){
  exp.startTime = Date.now();
  console.log("Starting Audio")
  // console.log("Pretest: ",exp.allow_key_press)

    document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
          exp.allow_key_press = 0;
console.log("clicking disabled");
         exp.response_time = Date.now() - exp.startTime
         exp.response = "blue_collar";
         exp.response_type = "stereotype";
         $('#stimuli_block1').hide();
         audio.pause();
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
           exp.allow_key_press = 0;
console.log("clicking disabled");
        exp.response_time = Date.now() - exp.startTime
        exp.response = "white_collar";
        exp.response_type = "non_stereotype";
        $('#stimuli_block1').hide();
        audio.pause();
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

  allow_key_press_200ms = setTimeout(function(){
    exp.allow_key_press = 1;
    // console.log("PostTest: ", exp.allow_key_press)
  }, 200);
};

var my_time;

   audio.onended = function() {

  console.log("audio ended");
      // exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();

        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_1",
      "choices": "white_collar-blue_collar",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration,
      accentedness: this.stim.accentedness

      });
    },
  });
  
// BLOCK 2

  slides.block_2 = slide({
    name: "block_2",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block2,
    present_handle : function(stim)
	 {
    $('#stimuli_block2').show();
exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_2_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var allow_key_press_200ms;
audio.onplay = function(){
  console.log("Starting Audio")
exp.startTime = Date.now();


     document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
           exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "white_collar";
         exp.response_type = "non_stereotype";
         $('#stimuli_block2').hide();
         audio.pause();
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "blue_collar";
        exp.response_type = "stereotype";
        $('#stimuli_block2').hide();
        audio.pause();
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

  allow_key_press_200ms = setTimeout(function(){
    exp.allow_key_press = 1;
  }, 200);
};

var my_time;
   audio.onended = function() {
    // $('#block_2').show();
   // exp.allow_key_press = 1;
  console.log("audio ended");
       // exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_2",
      "choices": "blue_collar-white_collar",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration,
      accentedness: this.stim.accentedness

      });
    },
  });
  
// BLOCK 3

  slides.block_3 = slide({
    name: "block_3",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block3,
    present_handle : function(stim)
	 {
    $('#stimuli_block3').show();
exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_3_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var allow_key_press_200ms;
audio.onplay = function(){
  console.log("Starting Audio")
exp.startTime = Date.now();


  document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
         exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "born_outside_US";
         exp.response_type = "stereotype";
         $('#stimuli_block3').hide();
         audio.pause();
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "born_in_US";
        exp.response_type = "non_stereotype";
        $('#stimuli_block3').hide();
        audio.pause();
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

  allow_key_press_200ms = setTimeout(function(){
    exp.allow_key_press = 1;
  }, 200);
};

var my_time;
   audio.onended = function() {
   //  $('#block_3').show();
   // exp.allow_key_press = 1;
  console.log("audio ended");
       // exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_3",
      "choices": "born_in_US-born_outside_US",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration,
      accentedness: this.stim.accentedness

      });
    },
  });

// BLOCK 4

  slides.block_4 = slide({
    name: "block_4",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block4,
    present_handle : function(stim)
	 {
    $('#stimuli_block4').show();
exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_4_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var allow_key_press_200ms;
audio.onplay = function(){
  console.log("Starting Audio")
exp.startTime = Date.now();


     document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
         exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "born_in_US";
         exp.response_type = "non_stereotype";
         $('#stimuli_block4').hide();
         audio.pause();
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "born_outside_US";
        exp.response_type = "stereotype";
        $('#stimuli_block4').hide();
        audio.pause();
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

  allow_key_press_200ms = setTimeout(function(){
    exp.allow_key_press = 1;
  }, 200);
};

var my_time;
   audio.onended = function() {
   //  $('#block_4').show();
   // exp.allow_key_press = 1;
  console.log("audio ended");
       // exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
		// exp.audio_source = "";
		// exp.target_source = "";
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_4",
      "choices": "born_outside_US-born_in_US",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration,
      accentedness: this.stim.accentedness

      });
    },
  });
  
// BLOCK 5

  slides.block_5 = slide({
    name: "block_5",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block5,
    present_handle : function(stim)
	 {
    $('#stimuli_block5').show();
exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_5_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var allow_key_press_200ms;
audio.onplay = function(){
  console.log("Starting Audio")
exp.startTime = Date.now();

  document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
         exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "texas_border";
         exp.response_type =  "stereotype";
           $('#stimuli_block5').hide();
           audio.pause();
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "south_florida";
        exp.response_type = "non_stereotype";
          $('#stimuli_block5').hide();
          audio.pause();
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

  allow_key_press_200ms = setTimeout(function(){
    exp.allow_key_press = 1;
  }, 200);
};

var my_time;
   audio.onended = function() {
  console.log("audio ended");
       // exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_5",
      "choices": "south_florida-texas_border",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration,
      accentedness: this.stim.accentedness

      });
    },
  });
  
// BLOCK 6

  slides.block_6 = slide({
    name: "block_6",

    // To rotate through stimulus list, comment out the above 7 lines and  uncomment the following 2:
    present:  exp.stimuli_block6,
    present_handle : function(stim)
	 {
    $('#stimuli_block6').show();
exp.allow_key_press = 0;
		exp.response = null;

      // store stimulus data
      this.stim = stim;

// this connects to html file
var audio = document.getElementById("block_6_audio");

// this indexes to the prime file name
var audio_source = stim.participant + "_" + stim.phrase
console.log(audio_source);
audio.src = "audio/" + audio_source + ".wav";
audio.load();
audio.play();

var allow_key_press_200ms;
audio.onplay = function(){
  console.log("Starting Audio")
 exp.startTime = Date.now();


   document.onkeydown = checkKey;
     function checkKey(e) {
       e = e || window.event;
       if (e.keyCode == 76 && exp.allow_key_press == 1) {
         console.log("L pressed");
         exp.allow_key_press = 0;
         exp.response_time = Date.now() - exp.startTime
         exp.response = "south_florida";
         exp.response_type = "non_stereotype";
         $('#stimuli_block6').hide();
         audio.pause();
         setTimeout(function(){
            clearTimeout(my_time);
          _s.button();
        }, 1000);
       } if (e.keyCode == 83 && exp.allow_key_press == 1) {
        console.log("S pressed");
        exp.allow_key_press = 0;
        exp.response_time = Date.now() - exp.startTime
        exp.response = "texas_border";
        exp.response_type = "stereotype"
        $('#stimuli_block6').hide();
        audio.pause();
        setTimeout(function(){
           clearTimeout(my_time);
          _s.button();
         }, 1000);
       }
     }

  allow_key_press_200ms = setTimeout(function(){
    exp.allow_key_press = 1;
  }, 200);
};

var my_time;
	 audio.onended = function() {
   //  $('#block_6').show();
   // exp.allow_key_press = 1;
  console.log("audio ended");
       // exp.startTime = Date.now();
  my_time = setTimeout(function(){
    // exp.startTime = Date.now();
if (exp.response == null) {
               console.log("No response");
              exp.response_time = Date.now() - exp.startTime
              exp.response = "skip";
              exp.response_type = "skip";
              _s.button();
              console.log("should skip to next trial")
          }
   }, 3000);

};
      $(".err").hide();
    },

    // handle click on "Continue" button
    button: function() {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
        // exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({

      "block": "block_6",
      "choices": "texas_border-south_florida",
      "response_time": exp.response_time,
      "response": exp.response,
      "response_type": exp.response_type,
      "slide_number_in_experiment": exp.phase-6,
      stim_num: this.stim.stim_num,
      participant: this.stim.participant,
      phrase: this.stim.phrase,
      gender: this.stim.gender,
      start_time: this.stim.start_time,
      end_time: this.stim.end_time,
      duration: this.stim.duration,
      accentedness: this.stim.accentedness

      });
    },
  });

  slides.follow_up = slide({
      name: "follow_up",
      start: function() {
      exp.allow_key_press = 0;
      console.log("exp.allow_key_press", exp.allow_key_press)
      },

      // handle click on "Continue" button
      button_follow_up: function() {

      // $('#block_1').hide();
      // $('#block_2').hide();
      // $('#block_3').hide();
      // $('#block_4').hide();
      // $('#block_5').hide();
      // $('#block_6').hide();
      // $('#attention1').hide();
      // $('#attention2').hide();
      // $('#attention3').hide();
      // $('#attention4').hide();
      // $('#attention5').hide();

      if  (!$("#white_collar_1").val() |
        !$("#white_collar_2").val() |
        !$("#white_collar_3").val() |
          !$("#blue_collar_1").val() |
        !$("#blue_collar_2").val() |
        !$("#blue_collar_3").val() |
        !$("#born_in_us_1").val() |
        !$("#born_in_us_2").val() |
          !$("#born_in_us_3").val() |
       !$("#born_outside_us_1").val() |
        !$("#born_outside_us_2").val() |
          !$("#born_outside_us_3").val() |
    !$("#florida_1").val() |
        !$("#florida_2").val() |
          !$("#florida_3").val() |
 !$("#texas_1").val() |
          !$("#texas_2").val() |
        !$("#texas_3").val()) {

        $(".err").show();
    }
      else {
              this.log_responses();
              exp.go(); //use exp.go() if and only if there is no "present"ed data, ie no list of stimuli.
      }
      },

      // save response
      log_responses: function() {
        exp.data_trials.push({
            "white_collar_1":$("#white_collar_1").val(),
      "white_collar_2":$("#white_collar_2").val(),
      "white_collar_3":$("#white_collar_3").val(),
      "blue_collar_1":$("#blue_collar_1").val(),
      "blue_collar_2":$("#blue_collar_2").val(),
      "blue_collar_3":$("#blue_collar_3").val(),
      "born_in_us_1":$("#born_in_us_1").val(),
        "born_in_us_2":$("#born_in_us_2").val(),
      "born_in_us_3":$("#born_in_us_3").val(),
      "born_outside_us_1":$("#born_outside_us_1").val(),
      "born_outside_us_2":$("#born_outside_us_2").val(),
      "born_outside_us_3":$("#born_outside_us_3").val(),
          "florida_1":$("#florida_1").val(),
      "florida_2":$("#florida_2").val(),
      "florida_3":$("#florida_3").val(),
            "texas_1":$("#texas_1").val(),
      "texas_2":$("#texas_2").val(),
      "texas_3":$("#texas_3").val(),
        });
      }
  });


  // slide to collect subject information
  slides.subj_info = slide({
    name: "subj_info",
    submit: function(e) {
// document.getElementById("heritage_country_div").hide();
// document.getElementById("english_acquisition_age_div").hide();
// document.getElementById("exposure_div").hide();


  var check_race = document.querySelectorAll('[name="race"]:checked');

	  if  (
       !heritage_country_value |
       !english_acquisition_age_value |
		  !$("#current_region").val() |
		  !$("#first_language").val() |
		  !$("#parent_languages").val() |
      check_race.length < 1 |
      // !$('input[name="miami"]:checked').val() |
      !years_in_miami_value |
      // !$("#referral").val() |
      !exposure_value) {

	  	$(".err").show();
	}
	else {

		var races = document.querySelectorAll('[name="race"]:checked');
		console.log("race:", races.length);

		var race_list = [];

		for (var i = 0; i < races.length; i++) {

			if (races[i].type=="checkbox" && races[i].checked == true){
				race_list += races[i].value+", \n";
			}
		}

		console.log("list:", race_list);

      exp.subj_data = {
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        comments: $("#comments").val(),
         ethnicity: $('input[name="ethnicity"]:checked').val(),
// heritage_country: $("#heritage_country").val(),
         heritage_country: heritage_country_value,
         english_acquisition_age: english_acquisition_age_value,
    // english_acquisition_age: $("#english_acquisition_age").val(),

		race: race_list,
		current_region: $("#current_region").val(),
		other_regions: $("#other_regions").val(),
		first_language: $("#first_language").val(),
		other_languages: $("#other_languages").val(),
		parent_languages: $("#parent_languages").val(),
    lived_in_miami: $('input[name="miami"]:checked').val(),
    years_in_miami : years_in_miami_value,
		// exposure: $("#exposure").val(),
    exposure: exposure_value
      };


      exp.go();

}
    }
  });

  //
  slides.thanks = slide({
    name: "thanks",
    start: function() {
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "system": exp.system,
        // "condition": exp.condition,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      
	  setTimeout(function (){
	  	turk.submit(exp.data);
	  }, 1000);
    }
  });

  return slides;
}

/// initialize experiment
function init() {

  var unaccented_stimuli = unaccented_stims;
  var accented_stimuli = accented_stims;

exp.unaccented_stimuli = _.shuffle(unaccented_stims);
exp.accented_stimuli = _.shuffle(accented_stims);

exp.unaccented_stimuli = exp.unaccented_stimuli.slice(0, 20);
exp.accented_stimuli = exp.accented_stimuli.slice(0, 20);

 var stimuli = exp.unaccented_stimuli.concat(exp.accented_stimuli);

  exp.stimuli_block1 = _.shuffle(stimuli);
  exp.stimuli_block2 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block3 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block4 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block5 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  exp.stimuli_block6 = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;

  exp.system = {
    Browser: BrowserDetect.browser,
    OS: BrowserDetect.OS,
    screenH: screen.height,
    screenUH: exp.height,
    screenW: screen.width,
    screenUW: exp.width
  };

var blocks = ["block_1","block_2","block_3","block_4","block_5","block_6"];
blocks = _.shuffle(blocks);
exp.structure = [
    "i0",
	"sound_test",
	"practice_instructions",
	"practice_trial_1",
	"practice_trial_2",
	"startExp"];

exp.structure =  exp.structure.concat(blocks[0], "attention1", blocks[1], "attention4", blocks[2], "attention2", blocks[3], "attention5", blocks[4], "attention3", blocks[5]);
exp.structure = exp.structure.concat(["follow_up","subj_info","thanks"]);

  exp.data_trials = [];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length();
  //this does not work if there are stacks of stims (but does work for an experiment with this structure)
  //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

// this is for prolific
  $("#start_button").click(function() {
    exp.go();
  });

  exp.go(); //show first slide
}
