angular.module('fateHelper', [])
  .controller('CardController', function() {
    var card = this;
    card.name = 'Name';
    card.highConcept = 'High concept';
    card.trouble = 'Trouble';
    card.aspects = [
      {type: '', name: 'Name'}];
    card.skills = [
      {level: '', text: ''}];
    card.stunts = [
      {name: 'Name', description: 'Description'}];
    card.pStress = [ 1, 2, 3];
    card.mStress = [ 1, 2, 3];
    card.consequences = [
      {level: 2, text: ''}, 
      {level: 4, text: ''}, 
      {level: 6, text: ''}];
    card.hide = { 
      aspects: false,
      skills: false,
      stunts: false,
      stress: false,
      consequences: false};
    card.toggle = function(category) {
      card.hide[category] = !card.hide[category];
    };
    card.edit = function() {
      
    };
  });
