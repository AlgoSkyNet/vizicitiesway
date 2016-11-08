HTMLWidgets.widget({

  name: 'vizicitiesway',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
       //el.innerText = x.message;
       //var mapDiv = document.getElementById(el.id);
       //mapDiv.className = "vizicities";

       // London
			var coords = [51.5052, -0.0308];

			var world = VIZI.world(el.id, {
			  skybox: false,
			  postProcessing: false
			}).setView(coords);

			// Add controls
			VIZI.Controls.orbit().addTo(world);

			// CartoDB basemap
			VIZI.imageTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
			  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
			}).addTo(world);

			// Buildings from Mapzen
			VIZI.topoJSONTileLayer('https://vector.mapzen.com/osm/buildings/{z}/{x}/{y}.topojson?api_key=vector-tiles-NT5Emiw', {
			  interactive: false,
			  style: function(feature) {
			    var height;

			    if (feature.properties.height) {
			      height = feature.properties.height;
			    } else {
			      height = 10 + Math.random() * 10;
			    }

			    return {
			      height: height
			    };
			  },
			  filter: function(feature) {
			    // Don't show points
			    return feature.geometry.type !== 'Point';
			  },
			  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
			}).addTo(world);


      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size
      }

    };
  }
});
