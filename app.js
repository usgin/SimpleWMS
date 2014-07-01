(function () {

  var map = L.map('map', {}).fitBounds(
    [[51.580255, -128.513427], [22.170404, -66.814210]]);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  	{detectRetina: true}).addTo(map);

  var oneGeoVA = 'http://kgs.uky.edu/arcgis/services/OneGeology/KYGS_VADMME_Geology/MapServer/WmsServer?';
  var oneGeoMD = 'http://kgs.uky.edu/arcgis/services/OneGeology/KYGS_MDGS_Geology/MapServer/WmsServer?';
  var oneGeoGA = 'http://kgs.uky.edu/arcgis/rest/services/OneGeology/KYGS_GAGS_Geology/MapServer/WMSServer';
  var oneGeoFL = 'http://kgs.uky.edu/arcgis/services/OneGeology/KYGS_FLGS_Geology/MapServer/WMSServer';
  var oneGeoNY = 'http://geothermal.isgs.illinois.edu/arcgis/services/OneGeology/ILGS_NYGS_Geology/MapServer/WMSServer';

  var vaLith500k = L.tileLayer.wms(oneGeoVA, {
  	layers: 'US-VA_VADMME_500K_Lithology',
  	format: 'image/png',
  	transparent: true,
  });

  var vaGeoAge500k = L.tileLayer.wms(oneGeoVA, {
  	layers: 'US-VA_VADMME_500K_Geologic_Age',
  	format: 'image/png',
  	transparent: true,
  });

  var mdLith250k = L.tileLayer.wms(oneGeoMD, {
  	layers: 'US-MD_MDGS_250k_Lithology',
  	format: 'image/png',
  	transparent: true,
  });

  var mdGeoAge250k = L.tileLayer.wms(oneGeoMD, {
  	layers: 'US-MD_MDGS_250k_Geologic_Age',
  	format: 'image/png',
  	transparent: true,
  });

  var gaLith500k = L.tileLayer.wms(oneGeoGA, {
  	layers: 'USA-GA_GAGS_500k_Lithology',
  	format: 'image/png',
  	transparent: true,
  });

  var gaGeoAge500k = L.tileLayer.wms(oneGeoGA, {
  	layers: 'USA-GA_GAGS_500k_Geologic_Age',
  	format: 'image/png',
  	transparent: true,
  });

  var flLith500k = L.tileLayer.wms(oneGeoFL, {
  	layers: 'US-FL_FLGS_500k_Geology',
  	format: 'image/png',
  	transparent: true,
  });

  var flGeoAge500k = L.tileLayer.wms(oneGeoFL, {
  	layers: 'UUSA-FL_FLGS_500k_Geologic Age',
  	format: 'image/png',
  	transparent: true,
  });

  var nyLith250k = L.tileLayer.wms(oneGeoNY, {
    layers: 'USA-NY_NYGS_250k_Lithology',
    format: 'image/png',
    transparent: true,
  });

  var nyGeoAge250k = L.tileLayer.wms(oneGeoNY, {
    layers: 'USA-NY_NYGS_250k_Gelogic_Age',
    format: 'image/png',
    transparent: true,
  });


  var wmsLayers = {
  	'Virginia Lithology 500k': vaLith500k,
  	'Virginia Geologic Age 500k': vaGeoAge500k,
  	'Maryland Lithology 250k': mdLith250k,
  	'Maryland Geologic Age 250k': mdGeoAge250k,
   	'Georgia Lithology 500k': gaLith500k,
  	'Georgia Geologic Age 500k': gaGeoAge500k,
   	'Florida Lithology 500k': flLith500k,
  	'Florida Geologic Age 500k': flGeoAge500k,
    'New York Lithology 250k': nyLith250k,
    'New York Geologic Age 250k': nyGeoAge250k,
  };

  L.control.layers(null, wmsLayers).addTo(map);

}).call(this);
