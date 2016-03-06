var inputEvent = {
  
  down: function input_event_down (event) {

    // console.log ('event down', 'this', this, 'this.viz', this.viz, 'event', event) ;    

    var inputHandler ;
    var eventList ;

    switch (event.type) {

      case 'keydown': 
        inputHandler = 'keyboard_handler' ;
        eventList = [event] ;
        break;
      case 'mousedown': 
        inputHandler = 'screen_handler' ;
        eventList = [event] ;
        break;
      case 'touchstart':
        inputHandler = 'screen_handler' ;

        eventList = new Array(event.touches.length) ;

        for(var ktouch = 0 ; ktouch < event.touches.length ; ktouch++) {

          eventList[ktouch] = {
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
          } ;
        
        }

        break;

    }     
  
    function run_click () {
      // console.log('run click 27', 'inputHandler', inputHandler) ;
      for(var kEvent = 0 ; kEvent < eventList.length ; kEvent++) {
        this.viz.buttonpress[inputHandler].call (this.viz, eventList[kEvent]) ;        
      }
    }

    var runClick = { 
      prep: run_click, 
      viz: this.viz 
    } ;
   
    $Z.prep ([this.viz, runClick]) ;
    //console.log ('mousedown: holding', holding, 'event', event) ;
  },

  up: function input_event_up (event) {
    // console.log('input event up', 'this', this) ;
    this.viz.ui.button.walkLeft.image  = this.viz.ui.buttonSprite.left[0] ;
    this.viz.ui.button.walkRight.image = this.viz.ui.buttonSprite.right[0] ;
    this.viz.ui.button.attack.image    = this.viz.ui.buttonSprite.attack[0] ;
    this.viz.ui.button.jump.image      = this.viz.ui.buttonSprite.jump[0] ;

    // console.log ('event up start', 'event', event) ;

    var vol = this.viz.audio.menu.volume ;
    this.viz.audio.menu.volume = 0.01 ;
    this.viz.audio.menu.play() ; // in case audio hasn't been triggered yet (e.g. on iOS)
    this.viz.audio.menu.volume = vol ;

    $Z.prep ([this.viz]) ; // stop calling click every frame

    // console.log('this.viz.player.item.transition', this.viz.player.item.transition) ;

    var transition = this.viz.player.item.transition ;
    var yNew = this.viz.player.config.y ; // - this.viz.player.item.image.height ;
    var minJumpAttackHeight = this.viz.player.yMove * 0.4 ;
    var yDist = Math.abs(yNew - this.viz.player.item.y) ;
    // console.log('yDist', yDist) ;
    if (yDist > minJumpAttackHeight) {
      // console.log('input event64') ;
      if(this.viz.player.fire_bullet !== undefined) {
        this.viz.player.fire_bullet('jumpBullet') ;
      }
    }
    // } else {
    //   this.viz.player.item.remove_transition('image') ;
    //   this.viz.player.item.add_transition(step_transition_func('image', viz.dur)(this.viz.player.sprite.rest[0])) ;
    // }
    var checkObject = transitionHelper.check_end_value.call(this.viz.player.item, 'y', yNew) ;
    var yIndex = checkObject.index ;
    // console.log('input event', 'checkObject', checkObject) ;
    if (checkObject.check !== undefined && !checkObject.check) { // never cancel downward transition

      transition[yIndex] = this.viz.player.transitionSet.y(yNew) ;
      transition[yIndex].end = { 
        
        viz: this.viz,

        run: function() {

          // console.log('end this', this, 'player', player, 'player.item.transition', player.item.transition) ;
          for(var ktrans = 0 ; ktrans < transition.length ; ktrans++) {
            if(transition[ktrans].varName === 'image') {
              this.viz.player.item.transition[ktrans] = this.viz.player.transitionSet.image(this.viz.player.sprite.rest[0]) ;
            }
            if(this.viz.player.config.restoreRest) {            
              this.viz.player.restoreRest = true ;
            }  

          }
        
        },

      } ;
    }
      
    if (this.viz.player.restoreRest) {
      if (this.viz.player.state === 'r' || this.viz.player.state === 'l') {
        transitionHelper.add_child.call(this.viz.player.item, 'image', this.viz.player.transitionSet.image(this.viz.player.sprite.rest[0])) ;
      }
      if (this.viz.player.state === 'a') {
        transitionHelper.add_child.call(this.viz.player.item, 'image', this.viz.player.transitionSet.attack(this.viz.player.sprite.rest[0])) ;
      }
      if (this.viz.player.state === 'j') {
        // transitionHelper.add_child.call(this.viz.player.item, 'image', this.viz.player.transitionSet.jump(this.viz.player.sprite.rest[0])) ;
      }
        //.call(this.viz.player.item, this.viz.image_transition(this.viz.player.sprite.rest[0]), replacementSwitch) ;
    }
    
    // buttonpress.reset () ;
    // console.log ('event up end', 'event', event) ;

  },

  buttonpress: {
    
    busy: false,
    
    reset: function buttonpress_reset () {
      $Z.prep ([document.viz]) ;
      this.busy = false ;
    },

    keyboard_handler: function buttonpress_keyboard_handler (event) {

      if (inputEvent.buttonpress.busy) {
        return ;  
      }

      inputEvent.buttonpress.busy = true ;
      this.keyboard_callback(event) ;
      // this.player.callback(state) ;

    },

    screen_handler: function buttonpress_screen_handler (e, viz) {

      if(viz === undefined) {
        viz = this ;
      }

      // console.log('screen handler', 'this', this, 'this.buttonpress', this.buttonpress) ;
    
      if (inputEvent.buttonpress.busy) {
        return ;
      }

      inputEvent.buttonpress.busy = true ;

      //this.canvas.removeEventListener ('click', click, false) ;
      var position = set_canvas_position( viz.canvas ) ;

      var clickedX = Math.round( (e.clientX - position.left) / position.scale ) ;
      var clickedY = Math.round( (e.clientY - position.top)  / position.scale ) ;
      // console.log('screenhandler', 'clickedX', clickedX, 'clickedY', clickedY, 'this', this) ;
      viz.screen_callback(clickedX, clickedY) ;

    },

	},

} ;