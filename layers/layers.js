var wms_layers = [];


        var lyr_CartoPositron_0 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Violacionesalcaldiasmarzo2022_1 = new ol.format.GeoJSON();
var features_Violacionesalcaldiasmarzo2022_1 = format_Violacionesalcaldiasmarzo2022_1.readFeatures(json_Violacionesalcaldiasmarzo2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Violacionesalcaldiasmarzo2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Violacionesalcaldiasmarzo2022_1.addFeatures(features_Violacionesalcaldiasmarzo2022_1);
var lyr_Violacionesalcaldiasmarzo2022_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Violacionesalcaldiasmarzo2022_1, 
                style: style_Violacionesalcaldiasmarzo2022_1,
                interactive: true,
    title: 'Violaciones alcaldias marzo 2022<br />\
    <img src="styles/legend/Violacionesalcaldiasmarzo2022_1_0.png" /> 1 - 3<br />\
    <img src="styles/legend/Violacionesalcaldiasmarzo2022_1_1.png" /> 3 - 4<br />\
    <img src="styles/legend/Violacionesalcaldiasmarzo2022_1_2.png" /> 4 - 5<br />\
    <img src="styles/legend/Violacionesalcaldiasmarzo2022_1_3.png" /> 5 - 8<br />\
    <img src="styles/legend/Violacionesalcaldiasmarzo2022_1_4.png" /> 8 - 17<br />'
        });
var format_alcaldias_cdmx_2 = new ol.format.GeoJSON();
var features_alcaldias_cdmx_2 = format_alcaldias_cdmx_2.readFeatures(json_alcaldias_cdmx_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alcaldias_cdmx_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alcaldias_cdmx_2.addFeatures(features_alcaldias_cdmx_2);
var lyr_alcaldias_cdmx_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alcaldias_cdmx_2, 
                style: style_alcaldias_cdmx_2,
                interactive: true,
                title: '<img src="styles/legend/alcaldias_cdmx_2.png" /> alcaldias_cdmx'
            });
var format_09ent_3 = new ol.format.GeoJSON();
var features_09ent_3 = format_09ent_3.readFeatures(json_09ent_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_09ent_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_09ent_3.addFeatures(features_09ent_3);
var lyr_09ent_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_09ent_3, 
                style: style_09ent_3,
                interactive: true,
                title: '<img src="styles/legend/09ent_3.png" /> 09ent'
            });
var format_colonias_cdmx_4 = new ol.format.GeoJSON();
var features_colonias_cdmx_4 = format_colonias_cdmx_4.readFeatures(json_colonias_cdmx_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_cdmx_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_cdmx_4.addFeatures(features_colonias_cdmx_4);
var lyr_colonias_cdmx_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colonias_cdmx_4, 
                style: style_colonias_cdmx_4,
                interactive: true,
                title: '<img src="styles/legend/colonias_cdmx_4.png" /> colonias_cdmx'
            });
var format_sectores_5 = new ol.format.GeoJSON();
var features_sectores_5 = format_sectores_5.readFeatures(json_sectores_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sectores_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sectores_5.addFeatures(features_sectores_5);
var lyr_sectores_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sectores_5, 
                style: style_sectores_5,
                interactive: true,
                title: '<img src="styles/legend/sectores_5.png" /> sectores'
            });

lyr_CartoPositron_0.setVisible(true);lyr_Violacionesalcaldiasmarzo2022_1.setVisible(true);lyr_alcaldias_cdmx_2.setVisible(true);lyr_09ent_3.setVisible(true);lyr_colonias_cdmx_4.setVisible(true);lyr_sectores_5.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_Violacionesalcaldiasmarzo2022_1,lyr_alcaldias_cdmx_2,lyr_09ent_3,lyr_colonias_cdmx_4,lyr_sectores_5];
lyr_Violacionesalcaldiasmarzo2022_1.set('fieldAliases', {'gid': 'gid', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'cve_mun': 'cve_mun', 'nomgeo': 'nomgeo', 'geo_alcald': 'geo_alcald', 'nombre_upp': 'nombre_upp', 'zona': 'zona', 'NUMPOINTS': 'NUMPOINTS', });
lyr_alcaldias_cdmx_2.set('fieldAliases', {'gid': 'gid', 'cvegeo': 'cvegeo', 'cve_ent': 'cve_ent', 'cve_mun': 'cve_mun', 'nomgeo': 'nomgeo', 'geo_alcald': 'geo_alcald', 'nombre_upp': 'nombre_upp', 'zona': 'zona', });
lyr_09ent_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_colonias_cdmx_4.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'entidad': 'entidad', 'municipio': 'municipio', 'nombre': 'nombre', 'clasificac': 'clasificac', 'cp': 'cp', 'otros_cp': 'otros_cp', 'control': 'control', 'geometry1_': 'geometry1_', '__oid': '__oid', 'geo_coloni': 'geo_coloni', });
lyr_sectores_5.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'delegcn': 'delegcn', 'zona': 'zona', 'cve_zon': 'cve_zon', 'cnsc_rg': 'cnsc_rg', 'cnsc_sc': 'cnsc_sc', 'nmbr_sc': 'nmbr_sc', 'ct': 'ct', 'x': 'x', 'y': 'y', 'id_lcld': 'id_lcld', });
lyr_Violacionesalcaldiasmarzo2022_1.set('fieldImages', {'gid': 'TextEdit', 'cvegeo': 'TextEdit', 'cve_ent': 'TextEdit', 'cve_mun': 'TextEdit', 'nomgeo': 'TextEdit', 'geo_alcald': 'TextEdit', 'nombre_upp': 'TextEdit', 'zona': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_alcaldias_cdmx_2.set('fieldImages', {'gid': 'TextEdit', 'cvegeo': 'TextEdit', 'cve_ent': 'TextEdit', 'cve_mun': 'TextEdit', 'nomgeo': 'TextEdit', 'geo_alcald': 'TextEdit', 'nombre_upp': 'TextEdit', 'zona': 'TextEdit', });
lyr_09ent_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_colonias_cdmx_4.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'entidad': 'TextEdit', 'municipio': 'TextEdit', 'nombre': 'TextEdit', 'clasificac': 'TextEdit', 'cp': 'TextEdit', 'otros_cp': 'TextEdit', 'control': 'TextEdit', 'geometry1_': 'TextEdit', '__oid': 'TextEdit', 'geo_coloni': 'TextEdit', });
lyr_sectores_5.set('fieldImages', {'gid': 'Range', 'id': 'TextEdit', 'delegcn': 'TextEdit', 'zona': 'TextEdit', 'cve_zon': 'TextEdit', 'cnsc_rg': 'TextEdit', 'cnsc_sc': 'TextEdit', 'nmbr_sc': 'TextEdit', 'ct': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'id_lcld': 'Range', });
lyr_Violacionesalcaldiasmarzo2022_1.set('fieldLabels', {'gid': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'cve_mun': 'no label', 'nomgeo': 'no label', 'geo_alcald': 'no label', 'nombre_upp': 'no label', 'zona': 'no label', 'NUMPOINTS': 'inline label', });
lyr_alcaldias_cdmx_2.set('fieldLabels', {'gid': 'no label', 'cvegeo': 'no label', 'cve_ent': 'no label', 'cve_mun': 'no label', 'nomgeo': 'no label', 'geo_alcald': 'inline label', 'nombre_upp': 'no label', 'zona': 'no label', });
lyr_09ent_3.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_colonias_cdmx_4.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'entidad': 'no label', 'municipio': 'no label', 'nombre': 'no label', 'clasificac': 'no label', 'cp': 'no label', 'otros_cp': 'no label', 'control': 'no label', 'geometry1_': 'no label', '__oid': 'no label', 'geo_coloni': 'no label', });
lyr_sectores_5.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'delegcn': 'no label', 'zona': 'no label', 'cve_zon': 'no label', 'cnsc_rg': 'no label', 'cnsc_sc': 'no label', 'nmbr_sc': 'no label', 'ct': 'no label', 'x': 'no label', 'y': 'no label', 'id_lcld': 'no label', });
lyr_sectores_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});