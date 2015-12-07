angular.module('fateHelper', [])
  .controller('CardController', function() {
    var card = this;
    card.name = 'Name';
    card.highConcept = 'High concept';
    card.trouble = 'Trouble';
    card.aspects = [
      {type: '', text: ''}];
    card.skills = [
      {text: '', level: ''}];
    card.stunts = [];
    card.stress = [
      {level: 1, type: 'physical'},
      {level: 2, type: 'physical'},
      {level: 3, type: 'physical'},
      {level: 1, type: 'mental'},
      {level: 2, type: 'mental'},
      {level: 3, type: 'mental'}];
    card.consequences = [
      {level: 2, text: ''}, 
      {level: 4, text: ''}, 
      {level: 6, text: ''}];
  });
