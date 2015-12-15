angular.module('fateHelper', [])
  .controller('CardController', function() {
    var $card = this;
    
    $card.name = 'Name';
    $card.highConcept = '';
    $card.trouble = '';
    $card.aspects = [];
    $card.skills = [];
    $card.stunts = [];
    $card.extras = 'List of extras';
    $card.pStress = [1, 2, 3];
    $card.mStress = [1, 2, 3];
    $card.consequences = [
      {level: 2, text: ''}, 
      {level: 4, text: ''}, 
      {level: 6, text: ''}
    ];
    $card.result = '';

    $card.hide = { 
      aspects: {hide: true, arrow: "\u25b2"},
      skills: {hide: true, arrow: "\u25b2"},
      stunts: {hide: true, arrow: "\u25b2"},
      extras: {hide: true, arrow: "\u25b2"},
      stress: {hide: true, arrow: "\u25b2"},
      consequences: {hide: true, arrow: "\u25b2"}
    };


     /////////////////////
    //    FUNCTIONS    //
   /////////////////////

    function sleep(milliseconds) {
      var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
        };
      };
    };

    $card.rollDice = function() {
      var ladder = {
        '4': "Great",
        '3': "Good",
        '2': "Fair",
        '1': "Average",
        '0': "Medioc.",
        '-1': "Poor",
        '-2': "Terrible",
        '-3': "Horrible",
        '-4': "Disastr."
      };

      var options = [-1, 0, 1];
      var counter = 0;
      var outcome = 0;
      while (counter < 4) {
        outcome += options[Math.floor(Math.random()*options.length)];
        counter += 1;
      };
      if (outcome > -1) {
        $card.result = "+" + outcome;
      } else {
        $card.result = outcome;
      };

      $card.result += " " + ladder[outcome];
      console.log($card.result);
      return;
    };

    $card.toggle = function(category) {
      $card.hide[category]['hide'] = !$card.hide[category]['hide'];
      if ($card.hide[category]['arrow'] == "\u25b2") {
        $card.hide[category]['arrow'] = "\u25bc";
      } else {
        $card.hide[category]['arrow'] = "\u25b2";
      }
      console.log(category);
      console.log($card.hide[category]);
      return;
    };

    $card.addAspect = function() {
      if ($card.aspectName.length) {
        $card.aspects.push({type: $card.aspectType, name: $card.aspectName});
        $card.aspectName = '';
        $card.aspectType = '';
      };
    };

    $card.removeAspect = function(index) {
      $card.aspects.splice(index, 1);
    };

    $card.addSkill = function() {
      if ($card.skillName.length && $card.skillLevel.length) {
        $card.skills.push({level: $card.skillLevel, name: $card.skillName});
        $card.skillName = '';
        $card.skillLevel = '';
      };
    };

    $card.removeSkill = function(index) {
      $card.skills.splice(index, 1);
    };

    $card.addStunt = function() {
      if ($card.stuntDescription.length && $card.stuntName.length) {
        $card.stunts.push({name: $card.stuntName, description: $card.stuntDescription});
        $card.stuntName = '';
        $card.stuntDescription = '';
      };
    };

    $card.removeStunt = function(index) {
      $card.stunts.splice(index, 1);
    };

    $card.edit = function(index) {
      

      
    };

  });
