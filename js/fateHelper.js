angular.module('fateHelper', [])
  .controller('FateController', function() {
    var $fate = this;
    
    $fate.cards = [];

    $fate.ladder = {
      '8': "Legendary",
      '7': "Epic",
      '6': "Fantastic",
      '5': "Superb",
      '4': "Great",
      '3': "Good",
      '2': "Fair",
      '1': "Average",
      '0': "Mediocre",
      '-1': "Poor",
      '-2': "Terrible",
      '-3': "Horrible",
      '-4': "Disastrous"
    };

    $fate.dice = [];

    $fate.page = {
      PCs: {hide: false},
      GM: {hide: true},
      Tools: {hide: true},
      Help: {hide: true}
    };

     /////////////////////
    //    FUNCTIONS    //
   /////////////////////

//////  SLEEP  //////

    function sleep(milliseconds) {
      var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
        };
      };
    };

//////  ADD CARD  //////

    $fate.addCard = function() {
      $fate.cards.push({
        name: '',
        highConcept: '',
        trouble: '',
        aspects: [],
        image: '',
        skills: [],
        stunts: [],
        extras: 'List of extras',
        pStress: 3,
        mStress: 3,
        consequences: [
          {level: 2, text: ''}, 
          {level: 4, text: ''}, 
          {level: 6, text: ''}
        ],
        hide:  { 
          name: {content: true},
          image: {content: false},
          highConcept: {content: true},
          trouble: {content: true},
          aspects: {tab: true, arrow: "\u25b2"},
          skills: {tab: true, arrow: "\u25b2"},
          stunts: {tab: true, arrow: "\u25b2"},
          extras: {content: true, tab: true, arrow: "\u25b2"},
          stress: {tab: true, arrow: "\u25b2"},
          consequences: {tab: true, arrow: "\u25b2"}
        }
      });
    };

//////  REMOVE CARD  //////

    $fate.removeCard = function(index) {
      $fate.cards.splice(index, 1);
    };

//////  ROLL DICE  //////

    $fate.rollDice = function() {
      var options = [-1, 0, 1];
      var counter = 0;
      var outcome = 0;
      $fate.dice = [];
      while (counter < 4) {
        var roll = options[Math.floor(Math.random()*options.length)];
        outcome += roll;
        counter += 1;
        if (roll == '-1') {
          $fate.dice.push('&#8120;');
        } else if (roll == '0') {
          $fate.dice.push('&nbsp;');
        } else {
          $fate.dice.push('+');
        };
      };

      console.log($fate.dice);

      if (outcome > -1) {
        $fate.result = "+" + outcome;
      } else {
        $fate.result = outcome;
      };

      $fate.result += " " + $fate.ladder[outcome];
      console.log($fate.result);
      return;
    };

//////  EDIT  //////

    $fate.edit = function(card, item) {
      card.hide[item]['content'] = !card.hide[item]['content'];
    };

//////  TOGGLE HEADINGS  //////

    $fate.toggle = function(card, category) {
      card.hide[category]['tab'] = !card.hide[category]['tab'];
      if (card.hide[category]['arrow'] == "\u25b2") {
        card.hide[category]['arrow'] = "\u25bc";
      } else {
        card.hide[category]['arrow'] = "\u25b2";
      }
      console.log(category);
      console.log(card.hide[category]);
      return;
    };

//////  ADD IMAGE  //////

    $fate.addImage = function(card) {
      card.image = card.cardImage;
      $fate.edit(card, 'image');
      console.log(card.image);
    };

//////  ADD ASPECCT  //////

    $fate.addAttribute = function(card, attribute) {
      switch (attribute) {
        case 'aspects': case 'consequences':
          card.aspects.push({
            type: '', 
            name: '',
            notes: ''
          });
          break;
        case 'skills':
          card.skills.push({
            name: '',
            level: ''
          });
          break;
        case 'stunts':
          card.stunts.push({
            name: '',
            description: ''
          });
          break;
        case 'pstress':
          card.pstress.push({
            level: card.pstress.length + 1
          });
          break;
        case 'mstress':
          card.mstress.push({
            level: card.mstress.length + 1
          });
          break;
        case 'consequences':
          card.consequences.push({
            type: '', 
            name: '',
            notes: ''
          });
          break;
      }; 
    };


//////  REMOVE ASPECT  //////

    $fate.removeAttribute = function(card, index, attribute) {
      card[attribute].splice(index, 1);
    };

//////  ADD SKILL  //////

    $fate.addSkill = function(card) {
      if (card.skillName.length && card.skillLevel.length) {
        card.skills.push({level: card.skillLevel, name: card.skillName});
        card.skillName = '';
        card.skillLevel = '';
      };
    };

//////  REMOVE SKILL  //////

    $fate.removeSkill = function(card, index) {
      card.skills.splice(index, 1);
    };

//////  ADD STUNT  //////

    $fate.addStunt = function(card) {
      if (card.stuntDescription.length && card.stuntName.length) {
        card.stunts.push({name: card.stuntName, description: card.stuntDescription});
        card.stuntName = '';
        card.stuntDescription = '';
      };
    };

//////  REMOVE STUNT  //////

    $fate.removeStunt = function(card, index) {
      card.stunts.splice(index, 1);
    };

    $fate.addCard();

  });
