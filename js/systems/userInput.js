/* =========================================================================
 *
 * userInput.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - UserInput
// --------------------------------------
ECS.systems.userInput = function( paddle ) {
    paddle.components.position.vector.setX(
                                        Math.max(
                                                Math.min(
                                                        window.mousePos.x / renderer.getSize().width * 80,
                                                        80 - paddle.components.appearance.width / 2),
                                                paddle.components.appearance.width / 2
                                        ));
};
