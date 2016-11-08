HTMLWidgets.widget({

  name: 'vizicitiesway',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
       el.innerText = x.message;

       // London
			var coords = [51.5052, -0.0308];
			console.log(coords);
			console.log(el.id);




/*
			var world = VIZI.world('world', {
			  skybox: false,
			  postProcessing: false
			}).setView(coords);
*/

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size
      }

    };
  }
});
