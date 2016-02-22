var scoreHelper = {

  setup: function score_helper_load(scoreConfig, viz) {

    if( viz === undefined ) {
      viz = this ;
    }

    if (scoreConfig === undefined) {
      scoreConfig = {
        x: 2,
        y: 10,
        inert: true,
      } ;
    }
      
    viz.player.score          = itemHelper.setup(scoreConfig, viz) ;
    viz.player.score.value    = 0 ;
    viz.player.score.enemyResponse = 200 ;
    viz.player.score.counter  = 100 ;

    var rowName = [
      '0', 
      '1', 
      '2', 
      '3', 
      '4', 
      '5', 
      '6', 
      '7', 
      '8', 
      '9'
    ] ;
    var canvas    = imageHelper.image2canvas('./image/0-9.png') ;
    var tileWidth = [
      29, 
      29, 
      29, 
      29, 
      29, 
      29, 
      29, 
      29, 
      29, 
      29,
    ] ;
    var rowHeight = [
      32, 
      32, 
      32, 
      32, 
      32, 
      32, 
      32, 
      32, 
      32, 
      32,
    ] ;

    viz.player.score.config = {

      color: 'rgba(200, 200, 0, 0.8)',
      text: viz.player.score.value,
      image: imageHelper.text2image,
      sprite: spriteHelper.get(canvas, rowName, tileWidth, rowHeight),

    } ;

    viz.player.score.set = function() {

      this.config.text = this.value ;
      this.image = this.config.image() ; // imageHelper.word(this.config) ;

    } ;

    viz.player.score.increase = function(type) {

      this.value += this[type] ;
      this.set() ;

    } ;

    viz.player.score.set() ;

    // imageHelper.view(viz.player.score.image) ;
  
  },
	
} ;