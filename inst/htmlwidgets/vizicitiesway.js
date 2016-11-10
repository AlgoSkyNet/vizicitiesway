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
			var coords = [x.lat, x.lng];

			var world = VIZI.world(el.id, {
			  skybox: false,
			  postProcessing: false
			}).setView(coords);

			// Set position of sun in sky
			//world._environment._skybox.setInclination(0.3);

			// Add controls
			//VIZI.Controls.orbit().addTo(world);
			if(x.mapControls){
				add_controls(world);
			}

			// CartoDB basemap
			VIZI.imageTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
			  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
			}).addTo(world);

			if(x.addBuildings){
				add_buildings(world);
			}

/*
			// London Underground lines
			VIZI.geoJSONLayer('https://rawgit.com/robhawkes/4acb9d6a6a5f00a377e2/raw/30ae704a44e10f2e13fb7e956e80c3b22e8e7e81/tfl_lines.json', {
			  output: true,
			  interactive: true,
			  style: function(feature) {
			    var colour = feature.properties.lines[0].colour || '#ffffff';

			    return {
			      lineColor: colour,
			      lineHeight: 20,
			      lineWidth: 3,
			      lineTransparent: true,
			      lineOpacity: 0.5,
			      lineBlending: THREE.AdditiveBlending,
			      lineRenderOrder: 2
			    };
			  },
			  onEachFeature: function(feature, layer) {
			    layer.on('click', function(layer, point2d, point3d, intersects) {
			      console.log(layer, point2d, point3d, intersects);
			    });
			  },
			  attribution: '&copy; Transport for London.'
			}).addTo(world);

*/

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size
      }

    };
  }
});

function add_controls( world ){
	VIZI.Controls.orbit().addTo(world);
}

function add_buildings( world ){
	// Buildings and roads from Mapzen (polygons and linestrings)
			var topoJSONTileLayer = VIZI.topoJSONTileLayer('https://vector.mapzen.com/osm/buildings,roads/{z}/{x}/{y}.topojson?api_key=vector-tiles-NT5Emiw', {
			  interactive: false,
			  style: function(feature) {
			    var height;

			    if (feature.properties.height) {
			      height = feature.properties.height;
			    } else {
			      height = 10 + Math.random() * 10;
			    }

			    return {
			      height: height,
			      lineColor: '#f7c616',
			      lineWidth: 1,
			      lineTransparent: true,
			      lineOpacity: 0.2,
			      lineBlending: THREE.AdditiveBlending,
			      lineRenderOrder: 2
			    };
			  },
			  filter: function(feature) {
			    // Don't show points
			    return feature.geometry.type !== 'Point';
			  },
			  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
			}).addTo(world);
}

function add_provider( world ){

}


function add_topojson( world ){

}


function add_geojson( world ){

}




