// GUI
// --------------------------------------
ECS.Components.GUI = function( huds ){
    huds = huds || {};

    if( huds.score ) {
        this.score = document.getElementById('score');
        this.score = this.score.getElementsByTagName('span')[0];
    }

    if( huds.lives ) {
        this.lives = document.getElementById('lives');
        this.lives = this.lives.getElementsByTagName('span')[0];
    }

    return this;
};
ECS.Components.GUI.prototype.name = 'gui';
