angular.module('fateHelper', [])
  .controller('CardController', function() {
    var $card = this;
    
    $card.name = 'Name';
    $card.highConcept = 'High concept';
    $card.trouble = 'Trouble';
    $card.aspects = [];
    $card.skills = [];
    $card.stunts = [
      {name: 'Name', description: 'Description'}
    ];
    $card.extras = 'List of extras';
    $card.pStress = [1, 2, 3];
    $card.mStress = [1, 2, 3];
    $card.consequences = [
      {level: 2, text: ''}, 
      {level: 4, text: ''}, 
      {level: 6, text: ''}
    ];

    $card.hide = {
      aspects: true,
      skills: true,
      stunts: true,
      extras: true,
      stress: true,
      consequences: true,
    }

    $card.arrow = {
      aspects: "\u25bc",
      skills: "\u25bc",
      stunts: "\u25bc",
      extras: "\u25bc",
      stress: "\u25bc",
      consequences: "\u25bc"
    }


     /////////////////////
    //    FUNCTIONS    //
   /////////////////////

    $card.toggle = function(category) {
      $card.hide[category] = !$card.hide[category];
      if ($card.arrow[category] == "\u25b2") {
        $card.arrow[category] = "\u25bc";
      } else {
        $card.arrow[category] = "\u25b2";
      }
    };

    /*$card.hide = { 
      aspects: {hide: false, arrow: "&#9660;"},
      skills: {hide: false, arrow: "&#9660;"},
      stunts: {hide: false, arrow: "&#9660;"},
      stress: {hide: false, arrow: "&#9660;"},
      consequences: {hide: false, arrow: "&#9660;"}
    };

    $card.toggle = function($category) {
      $card.hide[$category]['hide'] = !$card.hide[$category]['hide'];
      if ($card.hide[$category]['arrow'] == "&#9660;") {
        $card.hide[$category]['arrow'] = "&#9650;";
      } else {
        $card.hide[$category]['arrow'] = "&#9660;";
      }
      console.log($category);
      console.log(card.hide[$category]);
      return;
    };*/

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

    $card.edit = function() {
      
    };
  });
