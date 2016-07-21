// Score
// --------------------------------------
ECS.Components.Score = function( initial ){
    this.current = (typeof initial === 'undefined') ? 0 : initial;

    return this;
};
ECS.Components.Score.prototype.name = 'score';
