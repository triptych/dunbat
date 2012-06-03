/** game.js for dunbat **/

YUI().add("db-game", function(Y){
    Y.Game = {
      startup : function(){
          Y.log("game startup called!");
          }  
    };
    
    }, 
    "0.01",
    { requires: ['node', 'event']}
    );