angular.module('fateHelper', [])
  .controller('CardController', function() {
    var $card = this;
    
    $card.name = 'Name';
    $card.highConcept = 'High concept';
    $card.trouble = 'Trouble';
    $card.aspects = [
      {type: '', name: 'Name'}
    ];
    $card.skills = [
      {level: '', text: ''}
    ];
    $card.stunts = [
      {name: 'Name', description: 'Description'}
    ];
    $card.pStress = [1, 2, 3];
    $card.mStress = [1, 2, 3];
    $card.consequences = [
      {level: 2, text: ''}, 
      {level: 4, text: ''}, 
      {level: 6, text: ''}
    ];

    $card.hide = {
      aspects: false,
      skills: false,
      stunts: false,
      extras: false,
      stress: false,
      consequences: false,
    }

    $card.arrow = {
      aspects: '9660',
      skills: '9660',
      stunts: '9660',
      extras: '9660',
      stress: '9660',
      consequences: '9660',
    }

    $card.toggle = function(category) {
      $card.hide[category] = !$card.hide[category];
      if ($card.arrow[category] == 9950) {
        $card.arrow[category] = 9960;
      } else {
        $card.arrow[category] = 9950;
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

    $card.edit = function() {
      
    };
  });
