var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_CDMX_LIMITE_1 = new ol.format.GeoJSON();
var features_CDMX_LIMITE_1 = format_CDMX_LIMITE_1.readFeatures(json_CDMX_LIMITE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDMX_LIMITE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDMX_LIMITE_1.addFeatures(features_CDMX_LIMITE_1);
var lyr_CDMX_LIMITE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CDMX_LIMITE_1, 
                style: style_CDMX_LIMITE_1,
                popuplayertitle: 'CDMX_LIMITE',
                interactive: true,
                title: '<img src="styles/legend/CDMX_LIMITE_1.png" /> CDMX_LIMITE'
            });
var format_EDOMEX_LIMITE_2 = new ol.format.GeoJSON();
var features_EDOMEX_LIMITE_2 = format_EDOMEX_LIMITE_2.readFeatures(json_EDOMEX_LIMITE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDOMEX_LIMITE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDOMEX_LIMITE_2.addFeatures(features_EDOMEX_LIMITE_2);
var lyr_EDOMEX_LIMITE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDOMEX_LIMITE_2, 
                style: style_EDOMEX_LIMITE_2,
                popuplayertitle: 'EDOMEX_LIMITE',
                interactive: true,
                title: '<img src="styles/legend/EDOMEX_LIMITE_2.png" /> EDOMEX_LIMITE'
            });
var format_ECATEPEC_LIMITE_3 = new ol.format.GeoJSON();
var features_ECATEPEC_LIMITE_3 = format_ECATEPEC_LIMITE_3.readFeatures(json_ECATEPEC_LIMITE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ECATEPEC_LIMITE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ECATEPEC_LIMITE_3.addFeatures(features_ECATEPEC_LIMITE_3);
var lyr_ECATEPEC_LIMITE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ECATEPEC_LIMITE_3, 
                style: style_ECATEPEC_LIMITE_3,
                popuplayertitle: 'ECATEPEC_LIMITE',
                interactive: true,
                title: '<img src="styles/legend/ECATEPEC_LIMITE_3.png" /> ECATEPEC_LIMITE'
            });
var format_LIM_Z1_4 = new ol.format.GeoJSON();
var features_LIM_Z1_4 = format_LIM_Z1_4.readFeatures(json_LIM_Z1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIM_Z1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIM_Z1_4.addFeatures(features_LIM_Z1_4);
var lyr_LIM_Z1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIM_Z1_4, 
                style: style_LIM_Z1_4,
                popuplayertitle: 'LIM_Z1',
                interactive: true,
                title: '<img src="styles/legend/LIM_Z1_4.png" /> LIM_Z1'
            });
var format_TANDEOS_Z1_5 = new ol.format.GeoJSON();
var features_TANDEOS_Z1_5 = format_TANDEOS_Z1_5.readFeatures(json_TANDEOS_Z1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANDEOS_Z1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANDEOS_Z1_5.addFeatures(features_TANDEOS_Z1_5);
var lyr_TANDEOS_Z1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANDEOS_Z1_5, 
                style: style_TANDEOS_Z1_5,
                popuplayertitle: 'TANDEOS_Z1',
                interactive: true,
    title: 'TANDEOS_Z1<br />\
    <img src="styles/legend/TANDEOS_Z1_5_0.png" /> CADA 24 HORAS<br />\
    <img src="styles/legend/TANDEOS_Z1_5_1.png" /> CADA 35 DIAS<br />\
    <img src="styles/legend/TANDEOS_Z1_5_2.png" /> CADA 6 DIAS<br />\
    <img src="styles/legend/TANDEOS_Z1_5_3.png" /> CADA TERCER DIA<br />\
    <img src="styles/legend/TANDEOS_Z1_5_4.png" /> DIARIO<br />\
    <img src="styles/legend/TANDEOS_Z1_5_5.png" /> INDEPENDIENTE<br />\
    <img src="styles/legend/TANDEOS_Z1_5_6.png" /> JUEVES A LUNES<br />\
    <img src="styles/legend/TANDEOS_Z1_5_7.png" /> JUEVES A MARTES<br />\
    <img src="styles/legend/TANDEOS_Z1_5_8.png" /> LUNES A JUEVES<br />\
    <img src="styles/legend/TANDEOS_Z1_5_9.png" /> LUNES A VIERNES<br />\
    <img src="styles/legend/TANDEOS_Z1_5_10.png" /> LUNES, MIERCOLES Y VIERNES<br />\
    <img src="styles/legend/TANDEOS_Z1_5_11.png" /> MARTES A JUEVES<br />\
    <img src="styles/legend/TANDEOS_Z1_5_12.png" /> MARTES, JUEVES Y DOMINGO<br />\
    <img src="styles/legend/TANDEOS_Z1_5_13.png" /> MARTES, JUEVES Y SABADO<br />\
    <img src="styles/legend/TANDEOS_Z1_5_14.png" /> MARTES, JUEVES, SABADO Y DOMINGO<br />\
    <img src="styles/legend/TANDEOS_Z1_5_15.png" /> SIN INFORMACIÓN<br />\
    <img src="styles/legend/TANDEOS_Z1_5_16.png" /> VIERNES A DOMINGO<br />\
    <img src="styles/legend/TANDEOS_Z1_5_17.png" /> <br />' });
var group_ECATEPEC = new ol.layer.Group({
                                layers: [lyr_Positron_0,lyr_CDMX_LIMITE_1,lyr_EDOMEX_LIMITE_2,lyr_ECATEPEC_LIMITE_3,lyr_LIM_Z1_4,lyr_TANDEOS_Z1_5,],
                                fold: 'open',
                                title: 'ECATEPEC'});

lyr_Positron_0.setVisible(true);lyr_CDMX_LIMITE_1.setVisible(true);lyr_EDOMEX_LIMITE_2.setVisible(true);lyr_ECATEPEC_LIMITE_3.setVisible(true);lyr_LIM_Z1_4.setVisible(true);lyr_TANDEOS_Z1_5.setVisible(true);
var layersList = [group_ECATEPEC];
lyr_CDMX_LIMITE_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENTIDAD': 'ENTIDAD', 'CAPITAL': 'CAPITAL', 'RASGO_GEOG': 'RASGO_GEOG', 'NUM_EDO': 'NUM_EDO', });
lyr_EDOMEX_LIMITE_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'ENTIDAD': 'ENTIDAD', 'CAPITAL': 'CAPITAL', 'RASGO_GEOG': 'RASGO_GEOG', 'NUM_EDO': 'NUM_EDO', });
lyr_ECATEPEC_LIMITE_3.set('fieldAliases', {'cveigecem': 'cveigecem', 'nom_mun': 'nom_mun', 'cveinegi': 'cveinegi', 'delegacion': 'delegacion', 'nom_reg': 'nom_reg', 'num_reg': 'num_reg', 'lon': 'lon', 'lat': 'lat', 'area': 'area', });
lyr_LIM_Z1_4.set('fieldAliases', {'id': 'id', 'NOMBRE': 'NOMBRE', });
lyr_TANDEOS_Z1_5.set('fieldAliases', {'id': 'id', 'ZONA': 'ZONA', 'TANDEO': 'TANDEO', 'NO. DIAS': 'NO. DIAS', 'ABAST.': 'ABAST.', });
lyr_CDMX_LIMITE_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'CAPITAL': 'TextEdit', 'RASGO_GEOG': 'TextEdit', 'NUM_EDO': 'TextEdit', });
lyr_EDOMEX_LIMITE_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'ENTIDAD': 'TextEdit', 'CAPITAL': 'TextEdit', 'RASGO_GEOG': 'TextEdit', 'NUM_EDO': 'TextEdit', });
lyr_ECATEPEC_LIMITE_3.set('fieldImages', {'cveigecem': 'TextEdit', 'nom_mun': 'TextEdit', 'cveinegi': 'TextEdit', 'delegacion': 'TextEdit', 'nom_reg': 'TextEdit', 'num_reg': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'area': 'TextEdit', });
lyr_LIM_Z1_4.set('fieldImages', {'id': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_TANDEOS_Z1_5.set('fieldImages', {'id': 'TextEdit', 'ZONA': 'TextEdit', 'TANDEO': 'TextEdit', 'NO. DIAS': 'TextEdit', 'ABAST.': 'TextEdit', });
lyr_CDMX_LIMITE_1.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'COV_': 'hidden field', 'COV_ID': 'hidden field', 'ENTIDAD': 'hidden field', 'CAPITAL': 'hidden field', 'RASGO_GEOG': 'hidden field', 'NUM_EDO': 'hidden field', });
lyr_EDOMEX_LIMITE_2.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'COV_': 'hidden field', 'COV_ID': 'hidden field', 'ENTIDAD': 'hidden field', 'CAPITAL': 'hidden field', 'RASGO_GEOG': 'hidden field', 'NUM_EDO': 'hidden field', });
lyr_ECATEPEC_LIMITE_3.set('fieldLabels', {'cveigecem': 'hidden field', 'nom_mun': 'hidden field', 'cveinegi': 'hidden field', 'delegacion': 'hidden field', 'nom_reg': 'hidden field', 'num_reg': 'hidden field', 'lon': 'hidden field', 'lat': 'hidden field', 'area': 'hidden field', });
lyr_LIM_Z1_4.set('fieldLabels', {'id': 'hidden field', 'NOMBRE': 'inline label - always visible', });
lyr_TANDEOS_Z1_5.set('fieldLabels', {'id': 'hidden field', 'ZONA': 'hidden field', 'TANDEO': 'inline label - always visible', 'NO. DIAS': 'hidden field', 'ABAST.': 'hidden field', });
lyr_TANDEOS_Z1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});