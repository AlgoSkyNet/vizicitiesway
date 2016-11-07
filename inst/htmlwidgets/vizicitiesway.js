HTMLWidgets.widget({

  name: 'vizicitiesway',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        //el.innerText = x.message;

        // Manhattan
        console.log(el.id);
        var vizicities = document.getElementById(el.id);
        vizicities.className = "vizicities";
        console.log(vizicities);


				var coords = [40.739940, -73.988801];
				//var world = VIZI.world('vizicities').setView(coords);
				var world = VIZI.world(vizicities).setView(coords);
				VIZI.Controls.orbit().addTo(world);

				VIZI.imageTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(world);

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
