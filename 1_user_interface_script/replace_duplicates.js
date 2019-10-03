var Dams = /* color: #0b4a8b */ee.FeatureCollection([]),
    Locks = /* color: #d61915 */ee.FeatureCollection([]),
    Channel_Dams = /* color: #ffc60f */ee.FeatureCollection([]),
    Partial_Dams_gte50 = /* color: #1bc7cc */ee.FeatureCollection([]),
    Partial_Dams_lt50 = /* color: #16a6ab */ee.FeatureCollection([]),
    Low_Permeable_Dams = /* color: #60ff5a */ee.FeatureCollection([]),
    Uncertain = /* color: #a9a9a9 */ee.FeatureCollection([]);


var NAME = "";

// Import related datasets

var dat = ee.FeatureCollection("users/eeProject/GROD/duplicates_groups"),
    grwl = ee.FeatureCollection("users/eeProject/GRWL_summaryStats");
    
    
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

  Uncertain = Uncertain.map(function(f) {
    return f.set({class: 'Uncertain'});
  });

  return (Dams
  .merge(Locks)
  .merge(Channel_Dams)
  .merge(Partial_Dams_gte50)
  .merge(Partial_Dams_lt50)
  .merge(Low_Permeable_Dams)
  .merge(Uncertain)
  .map(addLatLon));
};




// set up UI
 
Map.setOptions('satellite');

Map.addLayer(dat, {color: 'yellow'}, 'all duplicate pairs');

var groupId = dat.aggregate_array('group_id').getInfo();

var N = groupId.length;
var instructions = 'Index range: [' + 1 + ', ' + N + ']';

var layers = Map.layers();

var mapPointByIndex = function(i) {
  var thisGroup = dat.filterMetadata('group_id', 'equals', i);
  
  Map.centerObject(thisGroup.geometry().buffer(100));
  layers.set(1, ui.Map.Layer(grwl, {color: 'yellow'}, 'grwl', false, 0.9));
  layers.set(2, ui.Map.Layer(thisGroup, {color: 'red'}, 'current group'));
};

// ui
var b1 = ui.Button('Next');
var b2 = ui.Button('Previous');
var input = ui.Textbox('jump to index', null);
var thisIndex = ui.Label('Current index');

var i = 0;

b1.onClick(function() {
  i = i + 1;
  mapPointByIndex(i);
  thisIndex.setValue(i);
});

b2.onClick(function() {
  i = i - 1;
  mapPointByIndex(i);
  thisIndex.setValue(i);
});

input.onChange(function(text) {
  i = parseInt(text);
  mapPointByIndex(i);
  thisIndex.setValue(i);
});

var controls = ui.Panel([b2, thisIndex, b1, input], ui.Panel.Layout.flow('horizontal'), {position: 'bottom-center'});

print(instructions);

// Program starts
var merged = mergeCollection();
Export.table.toDrive({
  collection: merged,
  description: NAME + '_replace_duplicates',
  folder: '',
  fileNamePrefix: NAME + '_replace_duplicates',
  fileFormat: 'csv'});
Map.add(controls);
