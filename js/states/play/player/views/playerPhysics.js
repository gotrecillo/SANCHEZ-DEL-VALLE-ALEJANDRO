
function addPhysicsPlayer(player){
  game.physics.p2.enable(player, false);
  player.body.setCircle(68,0,5);
  player.body.fixedRotation=true;
}
