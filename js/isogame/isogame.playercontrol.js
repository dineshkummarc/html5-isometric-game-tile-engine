if (! ('isogame' in this)) {
    this.isogame = {};
}

isogame._keydirs =[];
isogame._keydirs[37] = [ false, isogame.dirs.LEFT ];
isogame._keydirs[38] = [ false, isogame.dirs.UP ];
isogame._keydirs[39] = [ false, isogame.dirs.RIGHT ];
isogame._keydirs[40] = [ false, isogame.dirs.DOWN ];


dojo.declare( 'isogame.KeyControl', null, {
	constructor:function()
	{
		$(document).keydown( this._keypress );
		$(document).keyup( this._keyup );
	},
	_keyup:function(e)
	{
		// console.log( "_keyup: e.which="+e.which );
		if( isogame._keydirs[e.keyCode] )
		{
			isogame._keydirs[e.keyCode][0] = false;
		}
	},
	_keypress:function(e)
	{
		// console.log( "_keypress: e.which="+e.which );
		if( isogame._keydirs[e.keyCode] )
		{
			isogame._keydirs[e.keyCode][0] = true;
		}
	},
	getDirection:function() {
        
        //left
		if( isogame._keydirs[37][0] ) {
            //up
            if(isogame._keydirs[38][0]) return isogame.dirs.LEFT_UP;
            //down
            if(isogame._keydirs[40][0]) return isogame.dirs.LEFT_DOWN;
            //left
            return isogame._keydirs[37][1];
        }
        
        
        //up
		if( isogame._keydirs[38][0] ) {
            //left
             if(isogame._keydirs[37][0]) return isogame.dirs.LEFT_UP;
            //right
             if(isogame._keydirs[39][0]) return isogame.dirs.RIGHT_UP;
            //up
            return isogame._keydirs[38][1];
         }
        
        
        
		//right
        if( isogame._keydirs[39][0] ) {   
            //up
             if(isogame._keydirs[38][0]) return isogame.dirs.RIGHT_UP;
            //down
             if(isogame._keydirs[40][0]) return isogame.dirs.RIGHT_DOWN;
            //right
            return isogame._keydirs[39][1];
            
         }
        
        
        
		//down
        if( isogame._keydirs[40][0] ) {
            //left
              if(isogame._keydirs[37][0]) return isogame.dirs.LEFT_DOWN;
            //right
              if(isogame._keydirs[39][0]) return isogame.dirs.RIGHT_DOWN;            
            //down
             return isogame._keydirs[40][1];
         }
		return 8;
	}
});