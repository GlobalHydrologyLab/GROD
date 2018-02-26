var GRWL = ee.FeatureCollection("users/eeProject/GRWL_summaryStats"),
    Dams = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-89.088134765625, 37.1716584426597]),
            {
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.1046142578125, 37.12349487509991]),
            {
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.17877197265625, 37.04899995838756]),
            {
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.2697391496913, 37.01288048476236]),
            {
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.26467514038086, 37.016123397296596]),
            {
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-176.429443359375, 65.79376869134228]),
            {
              "system:index": "5"
            })]),
    Roads = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-88.99200439453125, 37.21541688120513]),
            {
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.2913818359375, 37.08296995692341]),
            {
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.2803955078125, 37.00624190400652]),
            {
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.12384033203125, 36.982111359165096]),
            {
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.21794033050537, 37.0601212441229]),
            {
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.26544761657715, 37.00447191169369]),
            {
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([99.15161669254303, 27.039924511329023]),
            {
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([99.17334794998169, 27.07772671958613]),
            {
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([99.17221069335938, 27.10417542917989]),
            {
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([99.15342450141907, 27.165492514085116]),
            {
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([99.15249109268188, 27.172909008046997]),
            {
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([99.10666555166245, 27.195186547095055]),
            {
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([99.08611178398132, 27.215179336103517]),
            {
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([99.10621762275696, 27.29681645435164]),
            {
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([99.09392237663269, 27.339034959165094]),
            {
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([99.08707201480865, 27.359309187293466]),
            {
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([99.0753561258316, 27.39304051431743]),
            {
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([99.06176805496216, 27.422538058781164]),
            {
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([99.04776692390442, 27.453017878334876]),
            {
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([99.01779055595398, 27.511697076815445]),
            {
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([99.03436660766602, 27.55968319917805]),
            {
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([99.01353120803833, 27.603408032165994]),
            {
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([99.0419089794159, 27.701691866145598]),
            {
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([99.03105139732361, 27.78908649528091]),
            {
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([99.03419494628906, 27.824085426468258]),
            {
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([99.00015503168106, 27.875486250874708]),
            {
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([98.99678885936737, 27.88113378016131]),
            {
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([98.97989630699158, 27.88895495588475]),
            {
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([98.97983193397522, 27.889213360354923]),
            {
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([98.955297768116, 27.90890718113793]),
            {
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([98.95275235176086, 27.908966437346603]),
            {
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([98.93077433109283, 27.935235071836242]),
            {
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([98.93026739358902, 27.93542701508598]),
            {
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([98.9163601398468, 27.946360108367323]),
            {
              "system:index": "33"
            })]),
    Others = /* color: #1382f5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-89.03045654296875, 37.20666722245494]),
            {
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88076782226562, 37.209948463385366]),
            {
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72146606445312, 37.14867511161931]),
            {
              "system:index": "2"
            })]),
    GRanD = ee.FeatureCollection("users/eeProject/GRanD_reservoirs_v1_1"),
    hydroLakes = ee.FeatureCollection("users/eeProject/HydroLAKES_polys_v10"),
    gRoadsNA = ee.FeatureCollection("users/eeProject/gROADS-v1-americas"),
    hydroBasinNA = ee.FeatureCollection("users/eeProject/hybas_na_lev00_v1c"),
    fd = ee.FeatureCollection("ft:1ck8tnlEJKzdrtarlcxypr6vXnFt8jloCaSOA0wIA"),
    gridFiltered = ee.FeatureCollection("users/eeProject/fixed_grid"),
    uncertain = /* color: #a42ad6 */ee.FeatureCollection([]),
    partial_dam = /* color: #1122ff */ee.FeatureCollection([]);


//Ted Langhorst testing 11/6/17

// var sedams = ee.FeatureCollection('ft:1J6DaPZwwdLro5jsi61cJ8VCOVKLoGoWLkCzZqzVP');

// FUNCTION IMPORT


// DEFINE FUNCTION
// 1. DATA FUNCTION
var addLatLon = function(f) {
  // add the coordinates of a feature as its properties
  var xy = f.geometry().coordinates();
  return f.set({lon: xy.get(0), lat: xy.get(1)}).setGeometry(null);
};
var mergeCollection = function() {
  // assign point class as property to each feature and return the merged featurecollection
  // assign classes
  Dams = Dams.map(function(f) {
    return f.set({class: 'Dam'});
  });

  Roads = Roads.map(function(f) {
    return f.set({class: 'Roads'});
  });

  Others = Others.map(function(f) {
    return f.set({class: 'Others'});
  });

  uncertain = uncertain.map(function(f) {
    return f.set({class: 'uncertain'});
  });

  partial_dam = partial_dam.map(function(f) {
    return f.set({class: 'partial_dam'});
  });

  return Dams.merge(Roads).merge(Others).merge(uncertain).merge(partial_dam).map(addLatLon);
};

// 2. UI FUNCTION
exports.GenerateGrid = function(dim, overlap) {
  var lonr = [-180, 180];
  var latr = [-90, 90];

  var int_lon = (lonr[1] - lonr[0]) / (dim[0] - (dim[0] - 1) * overlap);
  var int_lat = (latr[1] - latr[0]) / (dim[1] - (dim[1] - 1) * overlap);

  var ints_lon = (1 - overlap) * int_lon;
  var ints_lat = (1 - overlap) * int_lat;

  var corners = [];
  var ind;

  for (var i = 0; i < dim[0]; i++) {
    for (var j = 0; j < dim[1]; j++) {
      ind = i * dim[0] + j;
      corners[ind] = [
        lonr[0] + i * ints_lon,
        latr[0] + j * ints_lat,
        lonr[0] + i * ints_lon + int_lon,
        latr[0] + j * ints_lat + int_lat,
        ind
        ];
    }
  }

  // print(ee.List(corners))
  var grids = ee.List(corners).map(function(f) {
    f = ee.List(f);
    return ee.Feature(ee.Geometry.Rectangle(f.slice(0, 4), null, false), {index: f.get(4)});
  });

  return(ee.FeatureCollection(grids));

};
exports.GenerateGridByTileSize = function(npixels, latr) {

  var pixelsPerDegreeLon = function(lat, scale, R) {
    return (Math.cos(lat / 180.0 * Math.PI) * R) * Math.PI / 180 / scale;
  };

  var degreesPerPixelLon = function(lat, scale, R) {
    return 1 / pixelsPerDegreeLon(lat, scale, R);
  };

  var pixelsPerDegreeLat = function(scale, R) {
    return (Math.PI * R) / 180 / scale;
  };

  var degreesPerPixelLat = function(scale, R) {
    return 1 / pixelsPerDegreeLat(scale, R);
  };

  var R = 6371000;
  // var npixels = Math.pow(2, 31);
  // var latr = [-80, 80];
  var lonr = [-180, 180];


  var nside = Math.floor(Math.sqrt(npixels));
  var interval_lat = nside * degreesPerPixelLat(30, R);
  // var interval_lon = Math.floor(nside * degreesPerPixelLon(80, 30, R));


  var latRange = latr[1] - latr[0];
  var lonRange = lonr[1] - lonr[0];
  var nlat = Math.ceil(latRange / interval_lat);
  var interval_latNew = latRange / nlat;

  var index = 0;
  var list = [];

  for (var i = 0; i < nlat; i++) {

    var latSouth = latr[0] + i * interval_latNew;
    var latNorth = latSouth + interval_latNew;
    var interval_lonSouth = nside * degreesPerPixelLon(latSouth, 30, R);
    var interval_lonNorth = nside * degreesPerPixelLon(latNorth, 30, R);
    var interval_lon = interval_lonSouth;
    if (interval_lonNorth < interval_lonSouth) {interval_lon = interval_lonNorth}
    var nlon = Math.ceil(lonRange / interval_lon);
    var interval_lonNew = lonRange / nlon;

    for (var j = 0; j < nlon; j++) {
      var lon1 = lonr[0] + j * interval_lonNew;
      var lon2 = lon1 + interval_lonNew;
      list[index] = [lon1, latSouth, lon2, latNorth, index];
      index = index + 1;
    }
  }

  var eelist = ee.List(list).map(function(a) {
    a = ee.List(a);
    return ee.Feature(ee.Geometry.Rectangle(a.slice(0, 4), null, false), {index: a.get(4)});
  });

  var grid = ee.FeatureCollection(eelist);

  return grid;
};
var filterByGrwl = function(grid, GRWL) {
  var spatialFilter = ee.Filter.intersects({
    leftField: '.geo',
    rightField: '.geo',
    maxError: 10
  });

  var saveFirstJoin = ee.Join.saveFirst({
    matchKey: 'First'
  });

  var intersectJoined = saveFirstJoin.apply(grid, GRWL, spatialFilter);

  return intersectJoined.map(function(f) {
    return f.set({First: null});
  });
};
var getCellByIndex = function(index, grid) {
  var cell = ee.Feature(grid.filterMetadata('fxd_ndx', 'equals', index).first());
  return cell;
};
var updateMapOnClick = function(i, gridFiltered, GRWL) {

  // use evaluate when obtain the tile index dynamically
  // indexFiltered.evaluate(function(indexes) {
  //   var currentCell = getCellByIndex(ee.List(indexes).get(i), gridFiltered);
  //   // Map.centerObject(currentCell);
  //   layers.set(2, ui.Map.Layer(currentCell, {color: 'blue'}, 'currentCell', true, 0.7));
  // });

  var currentCell = getCellByIndex(i, gridFiltered);

  Map.centerObject(currentCell, 7);
  layers.set(6, ui.Map.Layer(ee.Image(1).mask(ee.Image(1).toByte().paint(ee.FeatureCollection(currentCell), 0)), {palette: 'black'}, 'bg', true, 0.5));
  // layers.set(2, ui.Map.Layer(currentCell, {color: 'blue'}, 'currentCell', false, 0.5));
  layers.set(7, ui.Map.Layer(GRWL.filterBounds(currentCell.geometry()), {color: 'yellow'}, 'grwl', true, 0.7));
};



// DATA IMPORT
// pre-calculate the index and load it as fusion table
// need to re-calculate when grid changes
// var indexFiltered = ee.List(ee.FeatureCollection('ft:1ZsLC9C3rXnUHF0eSOE-V6I_d-S9_0uISpqvNnxTy').aggregate_array('index'));
// print(indexFiltered)

// DATA PRE-PROCESSING
// var grid = exports.GenerateGrid([60, 60], 0);
// var gridFiltered = filterByGrwl(grid, GRWL);

// print(gridFiltered.toList(3).get(2))

// var gridFiltered1 = gridFiltered.map(function(f) {
//   f = f.set({filteredIndex: indexFiltered.indexOf(f.get('index'))});
//   return f;
// });

// Export.table.toDrive({
//   collection: gridFiltered1,
//   description: 'filteredGrid',
//   folder: "",
//   fileNamePrefix: "filtered_grid",
//   fileFormat: "KML"});

// gridFiltered was exported and index modified in R,
// created new index named fxd_ndx

var i = -1; // default i value
// obtain the list of tile index on the fly
// var indexFiltered = ee.List(gridFiltered.aggregate_array('index'));
// Export.table.toDrive(ee.FeatureCollection(indexFiltered.map(function(l) {
// return ee.Feature(null, {index: l})})), 'indexFiltered', '', 'indexFiltered', 'csv')

var merged = mergeCollection();
Export.table.toDrive({
  collection: merged,
  description: 'export_data',
  folder: '',
  fileNamePrefix: 'Dataset',
  fileFormat: 'csv'});

// DEFINE UI WIDGETS
var layers = Map.layers();
var label_gridId = ui.Label('', {
  padding: '4px',
  color: 'blue',
  fontWeight: 'bold'});
var jumpToId = ui.Textbox({
  placeholder: 'Enter grid ID here...',
  onChange: function(ID) {
    i = parseInt(ID);
    updateMapOnClick(i, gridFiltered, GRWL);
    label_gridId.setValue('Current grid ID: ' + i);
  }
});
var button_next = ui.Button({
  label: 'Next cell',
  onClick: function() {
    i = i + 1;
    updateMapOnClick(i, gridFiltered, GRWL);
    label_gridId.setValue('Current grid ID: ' + i);
  }
});
var button_prev = ui.Button({
  label: 'Previous cell',
  onClick: function() {
    i = i - 1;
    updateMapOnClick(i, gridFiltered, GRWL);
    label_gridId.setValue('Current grid ID: ' + i);
  }
});

// Make a little map.
var bounds = ee.Geometry.Rectangle(Map.getBounds());
var cp = Map.getCenter().coordinates().getInfo();
var inset = ui.Map({lon: cp[0], lat: cp[1], zoom: 4});
inset.clear();
inset.addLayer(bounds);
inset.setControlVisibility({all: false});
inset.setLocked(true);
Map.onChangeBounds(function(cp, MapObject) {
  bounds = ee.Geometry.Rectangle(MapObject.getBounds());
  inset.centerObject(bounds, 4);
  inset.clear();
  inset.addLayer(bounds);
});

// ui.Map.Linker([Map, inset], 'change-bounds');

var panel1 = ui.Panel([button_prev, label_gridId, button_next, jumpToId], ui.Panel.Layout.flow('horizontal'));
panel1.style().set({
  padding: '0px',
  position: 'bottom-center'
});
var panel2 = ui.Panel([inset], ui.Panel.Layout.flow('horizontal'));
panel2.style().set({
  padding: '0px',
  position: 'bottom-right'
});



// DRAW UI
Map.setOptions('satellite');

Map.addLayer(gridFiltered, {color: 'red'}, 'grid', false, 0.3);
Map.add(panel1);
Map.add(panel2);

Map.addLayer(hydroBasinNA, {color: 'grey'}, 'hydroBasinNA', false);
Map.addLayer(GRanD, {color: 'green'}, 'GRanD', false);
Map.addLayer(hydroLakes, {color: 'cyan'}, 'hydroLakes', false);
Map.addLayer(gRoadsNA, {color: 'orange'},'gRoadsNA', false);
// Map.addLayer(fdams, {color: 'red'},'france.dams', false);
// Map.addLayer(fd, {color: 'lightgreen'},'reprojectedFranceData', false);
// Map.addLayer(sedams,{color: 'red'}, 'Southeast US Dams',false);
