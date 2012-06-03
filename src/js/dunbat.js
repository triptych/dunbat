/** DunBat javascript v 0.01 **/
/** created by Andrew Wooldridge **/
/** started on 06/02/2012 for #NaGaDeMo **/
var version = "0.01";


YUI().use("app","db-game", function(Y){
    Y.on("domready", function(e){
        Y.log("DunBat version "+ version +" starting");
        
        Y.Game.startup();
        });
    });