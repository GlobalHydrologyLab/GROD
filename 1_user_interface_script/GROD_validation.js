// Created by Xiao Yang (yangxiao@live.unc.edu)
// Last modified 06//01/2018

var Dams = /* color: #0b4a8b */ee.FeatureCollection([]),
    Locks = /* color: #d61915 */ee.FeatureCollection([]),
    Channel_Dams = /* color: #ffc60f */ee.FeatureCollection([]),
    Partial_Dams_gte50 = /* color: #1bc7cc */ee.FeatureCollection([]),
    Partial_Dams_lt50 = /* color: #16a6ab */ee.FeatureCollection([]),
    Low_Permeable_Dams = /* color: #60ff5a */ee.FeatureCollection([]),
    Natural_riffles = /* color: #d790ff */ee.FeatureCollection([]),
    Uncertain = /* color: #a9a9a9 */ee.FeatureCollection([]);

// Import related datasets
var GRWL = ee.FeatureCollection("ft:1ziLqbyNShCVvOpUYT6tfOzg9TmNNW6EM2Sj6Awle");

// Define functions
var addLatLon = function(f) {
  // add the coordinates of a feature as its properties
  var xy = f.geometry().coordinates();
  return f.set({lon: xy.get(0), lat: xy.get(1)}).setGeometry(null);
};
var mergeCollection = function() {
  // assign point class as property to each feature and return the merged featurecollection
  Dams = Dams.map(function(f) {
    return f.set({class: 'Dam'});
  });

  Locks = Locks.map(function(f) {
    return f.set({class: 'Locks'});
  });

  Channel_Dams = Channel_Dams.map(function(f) {
    return f.set({class: 'Channel_Dams'});
  });

  Partial_Dams_gte50 = Partial_Dams_gte50.map(function(f) {
    return f.set({class: 'Partial_Dams_gte50'});
  });

  Partial_Dams_lt50 = Partial_Dams_lt50.map(function(f) {
    return f.set({class: 'Partial_Dams_lt50'});
  });
  
  Low_Permeable_Dams = Low_Permeable_Dams.map(function(f) {
    return f.set({class: 'Low_Permeable_Dams'});
  });

  Natural_riffles = Natural_riffles.map(function(f) {
    return f.set({class: 'Natural_riffles'});
  });

  Uncertain = Uncertain.map(function(f) {
    return f.set({class: 'Uncertain'});
  });

  return (Dams
  .merge(Locks)
  .merge(Channel_Dams)
  .merge(Partial_Dams_gte50)
  .merge(Partial_Dams_lt50)
  .merge(Low_Permeable_Dams)
  .merge(Natural_riffles)
  .merge(Uncertain)
  .map(addLatLon));
};

Map.setOptions('satellite');
var lat = [47.41, 48];
var lon = [-3.55, 0];
var currentCell = ee.Geometry.Rectangle([lon[0], lat[0], lon[1], lat[1]], null, false);
Map.centerObject(currentCell);
Map.addLayer(ee.Image(1).mask(ee.Image(1).toByte().paint(ee.FeatureCollection(ee.Feature(currentCell, {})), 0)), {palette: 'black'}, 'GRID_background', true, 0.5);
Map.addLayer(GRWL.map(function(f) {return(f.intersection(currentCell))}), {color: 'yellow'}, 'GRWL', true, 0.7);

// Program starts
var merged = mergeCollection();
Export.table.toDrive({
  collection: merged,
  description: 'export_data',
  folder: '',
  fileNamePrefix: 'Dataset',
  fileFormat: 'csv'});
