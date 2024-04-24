var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                popuplayertitle: "World Map",
                interactive: true,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BelgaviBoundary_2 = new ol.format.GeoJSON();
var features_BelgaviBoundary_2 = format_BelgaviBoundary_2.readFeatures(json_BelgaviBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundary_2.addFeatures(features_BelgaviBoundary_2);
var lyr_BelgaviBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundary_2, 
                style: style_BelgaviBoundary_2,
                popuplayertitle: "Belgavi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundary_2.png" /> Belgavi Boundary'
            });
var format_BelgaviBoundaryMtrs_3 = new ol.format.GeoJSON();
var features_BelgaviBoundaryMtrs_3 = format_BelgaviBoundaryMtrs_3.readFeatures(json_BelgaviBoundaryMtrs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundaryMtrs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundaryMtrs_3.addFeatures(features_BelgaviBoundaryMtrs_3);
var lyr_BelgaviBoundaryMtrs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundaryMtrs_3, 
                style: style_BelgaviBoundaryMtrs_3,
                popuplayertitle: "Belgavi Boundary Mtrs",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundaryMtrs_3.png" /> Belgavi Boundary Mtrs'
            });
var format_BelgaviStops_4 = new ol.format.GeoJSON();
var features_BelgaviStops_4 = format_BelgaviStops_4.readFeatures(json_BelgaviStops_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStops_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStops_4.addFeatures(features_BelgaviStops_4);
var lyr_BelgaviStops_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStops_4, 
                style: style_BelgaviStops_4,
                popuplayertitle: "Belgavi Stops",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStops_4.png" /> Belgavi Stops'
            });
var format_BelgaviStopsShp_5 = new ol.format.GeoJSON();
var features_BelgaviStopsShp_5 = format_BelgaviStopsShp_5.readFeatures(json_BelgaviStopsShp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopsShp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopsShp_5.addFeatures(features_BelgaviStopsShp_5);
var lyr_BelgaviStopsShp_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopsShp_5, 
                style: style_BelgaviStopsShp_5,
                popuplayertitle: "Belgavi Stops Shp",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopsShp_5.png" /> Belgavi Stops Shp'
            });
var format_BelgaviStopPopCoverage_6 = new ol.format.GeoJSON();
var features_BelgaviStopPopCoverage_6 = format_BelgaviStopPopCoverage_6.readFeatures(json_BelgaviStopPopCoverage_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPopCoverage_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPopCoverage_6.addFeatures(features_BelgaviStopPopCoverage_6);
var lyr_BelgaviStopPopCoverage_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPopCoverage_6, 
                style: style_BelgaviStopPopCoverage_6,
                popuplayertitle: "Belgavi Stop Pop Coverage",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPopCoverage_6.png" /> Belgavi Stop Pop Coverage'
            });
var format_BelgaviStopPopDissolved_7 = new ol.format.GeoJSON();
var features_BelgaviStopPopDissolved_7 = format_BelgaviStopPopDissolved_7.readFeatures(json_BelgaviStopPopDissolved_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPopDissolved_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPopDissolved_7.addFeatures(features_BelgaviStopPopDissolved_7);
var lyr_BelgaviStopPopDissolved_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPopDissolved_7, 
                style: style_BelgaviStopPopDissolved_7,
                popuplayertitle: "Belgavi Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPopDissolved_7.png" /> Belgavi Stop Pop Dissolved'
            });
var format_BelgaviStopPop_8 = new ol.format.GeoJSON();
var features_BelgaviStopPop_8 = format_BelgaviStopPop_8.readFeatures(json_BelgaviStopPop_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPop_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPop_8.addFeatures(features_BelgaviStopPop_8);
var lyr_BelgaviStopPop_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPop_8, 
                style: style_BelgaviStopPop_8,
                popuplayertitle: "Belgavi Stop Pop",
                interactive: true,
    title: 'Belgavi Stop Pop<br />\
    <img src="styles/legend/BelgaviStopPop_8_0.png" /> 5 min<br />'
        });
var format_Temple_9 = new ol.format.GeoJSON();
var features_Temple_9 = format_Temple_9.readFeatures(json_Temple_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_9.addFeatures(features_Temple_9);
var lyr_Temple_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_9, 
                style: style_Temple_9,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_9.png" /> Temple'
            });
var format_Education_10 = new ol.format.GeoJSON();
var features_Education_10 = format_Education_10.readFeatures(json_Education_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_10.addFeatures(features_Education_10);
var lyr_Education_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_10, 
                style: style_Education_10,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_10.png" /> Education'
            });
var format_BelgaviPSU_11 = new ol.format.GeoJSON();
var features_BelgaviPSU_11 = format_BelgaviPSU_11.readFeatures(json_BelgaviPSU_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviPSU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviPSU_11.addFeatures(features_BelgaviPSU_11);
var lyr_BelgaviPSU_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviPSU_11, 
                style: style_BelgaviPSU_11,
                popuplayertitle: "Belgavi PSU",
                interactive: true,
                title: '<img src="styles/legend/BelgaviPSU_11.png" /> Belgavi PSU'
            });
var format_BelgaviOffice_12 = new ol.format.GeoJSON();
var features_BelgaviOffice_12 = format_BelgaviOffice_12.readFeatures(json_BelgaviOffice_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOffice_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOffice_12.addFeatures(features_BelgaviOffice_12);
var lyr_BelgaviOffice_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOffice_12, 
                style: style_BelgaviOffice_12,
                popuplayertitle: "Belgavi Office",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOffice_12.png" /> Belgavi Office'
            });
var format_BelgaviIndustries_13 = new ol.format.GeoJSON();
var features_BelgaviIndustries_13 = format_BelgaviIndustries_13.readFeatures(json_BelgaviIndustries_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviIndustries_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviIndustries_13.addFeatures(features_BelgaviIndustries_13);
var lyr_BelgaviIndustries_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviIndustries_13, 
                style: style_BelgaviIndustries_13,
                popuplayertitle: "Belgavi Industries",
                interactive: true,
                title: '<img src="styles/legend/BelgaviIndustries_13.png" /> Belgavi Industries'
            });
var format_BelgaviRailwayStn_14 = new ol.format.GeoJSON();
var features_BelgaviRailwayStn_14 = format_BelgaviRailwayStn_14.readFeatures(json_BelgaviRailwayStn_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRailwayStn_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRailwayStn_14.addFeatures(features_BelgaviRailwayStn_14);
var lyr_BelgaviRailwayStn_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRailwayStn_14, 
                style: style_BelgaviRailwayStn_14,
                popuplayertitle: "Belgavi Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/BelgaviRailwayStn_14.png" /> Belgavi Railway Stn'
            });
var format_BelgaviRWI_15 = new ol.format.GeoJSON();
var features_BelgaviRWI_15 = format_BelgaviRWI_15.readFeatures(json_BelgaviRWI_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRWI_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRWI_15.addFeatures(features_BelgaviRWI_15);
var lyr_BelgaviRWI_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRWI_15, 
                style: style_BelgaviRWI_15,
                popuplayertitle: "Belgavi RWI",
                interactive: true,
    title: 'Belgavi RWI<br />\
    <img src="styles/legend/BelgaviRWI_15_0.png" /> -0.18 - 0.175<br />\
    <img src="styles/legend/BelgaviRWI_15_1.png" /> 0.175 - 0.225<br />\
    <img src="styles/legend/BelgaviRWI_15_2.png" /> 0.225 - 0.251<br />\
    <img src="styles/legend/BelgaviRWI_15_3.png" /> 0.251 - 0.367<br />\
    <img src="styles/legend/BelgaviRWI_15_4.png" /> 0.367 - 0.519<br />\
    <img src="styles/legend/BelgaviRWI_15_5.png" /> 0.519 - 0.582<br />\
    <img src="styles/legend/BelgaviRWI_15_6.png" /> 0.582 - 0.671<br />\
    <img src="styles/legend/BelgaviRWI_15_7.png" /> 0.671 - 0.774<br />\
    <img src="styles/legend/BelgaviRWI_15_8.png" /> 0.774 - 0.837<br />\
    <img src="styles/legend/BelgaviRWI_15_9.png" /> 0.837 - 0.89<br />\
    <img src="styles/legend/BelgaviRWI_15_10.png" /> 0.89 - 0.972<br />\
    <img src="styles/legend/BelgaviRWI_15_11.png" /> 0.972 - 1.354<br />\
    <img src="styles/legend/BelgaviRWI_15_12.png" /> 1.354 - 1.399<br />\
    <img src="styles/legend/BelgaviRWI_15_13.png" /> 1.399 - 1.478<br />\
    <img src="styles/legend/BelgaviRWI_15_14.png" /> 1.478 - 1.593<br />'
        });
var format_Belgavistats_16 = new ol.format.GeoJSON();
var features_Belgavistats_16 = format_Belgavistats_16.readFeatures(json_Belgavistats_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belgavistats_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belgavistats_16.addFeatures(features_Belgavistats_16);
var lyr_Belgavistats_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Belgavistats_16, 
                style: style_Belgavistats_16,
                popuplayertitle: "Belgavi stats",
                interactive: true,
                title: '<img src="styles/legend/Belgavistats_16.png" /> Belgavi stats'
            });
var format_BelgaviOverallPOI_17 = new ol.format.GeoJSON();
var features_BelgaviOverallPOI_17 = format_BelgaviOverallPOI_17.readFeatures(json_BelgaviOverallPOI_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOverallPOI_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOverallPOI_17.addFeatures(features_BelgaviOverallPOI_17);
var lyr_BelgaviOverallPOI_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOverallPOI_17, 
                style: style_BelgaviOverallPOI_17,
                popuplayertitle: "Belgavi Overall POI",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOverallPOI_17.png" /> Belgavi Overall POI'
            });
var format_BelgaviStopPOI_18 = new ol.format.GeoJSON();
var features_BelgaviStopPOI_18 = format_BelgaviStopPOI_18.readFeatures(json_BelgaviStopPOI_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPOI_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPOI_18.addFeatures(features_BelgaviStopPOI_18);
var lyr_BelgaviStopPOI_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPOI_18, 
                style: style_BelgaviStopPOI_18,
                popuplayertitle: "Belgavi Stop POI",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPOI_18.png" /> Belgavi Stop POI'
            });
var format_StopsinsideBelgavi_19 = new ol.format.GeoJSON();
var features_StopsinsideBelgavi_19 = format_StopsinsideBelgavi_19.readFeatures(json_StopsinsideBelgavi_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideBelgavi_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideBelgavi_19.addFeatures(features_StopsinsideBelgavi_19);
var lyr_StopsinsideBelgavi_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsinsideBelgavi_19, 
                style: style_StopsinsideBelgavi_19,
                popuplayertitle: "Stops inside Belgavi",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideBelgavi_19.png" /> Stops inside Belgavi'
            });
var format_RouteGPCCBTMtrs_20 = new ol.format.GeoJSON();
var features_RouteGPCCBTMtrs_20 = format_RouteGPCCBTMtrs_20.readFeatures(json_RouteGPCCBTMtrs_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteGPCCBTMtrs_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteGPCCBTMtrs_20.addFeatures(features_RouteGPCCBTMtrs_20);
var lyr_RouteGPCCBTMtrs_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteGPCCBTMtrs_20, 
                style: style_RouteGPCCBTMtrs_20,
                popuplayertitle: "Route GPC-CBT Mtrs",
                interactive: true,
                title: '<img src="styles/legend/RouteGPCCBTMtrs_20.png" /> Route GPC-CBT Mtrs'
            });
var format_StopsGPCCBT_21 = new ol.format.GeoJSON();
var features_StopsGPCCBT_21 = format_StopsGPCCBT_21.readFeatures(json_StopsGPCCBT_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsGPCCBT_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsGPCCBT_21.addFeatures(features_StopsGPCCBT_21);
var lyr_StopsGPCCBT_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsGPCCBT_21, 
                style: style_StopsGPCCBT_21,
                popuplayertitle: "Stops GPC-CBT",
                interactive: true,
    title: 'Stops GPC-CBT<br />\
    <img src="styles/legend/StopsGPCCBT_21_0.png" /> 2nd GATE<br />\
    <img src="styles/legend/StopsGPCCBT_21_1.png" /> ASHOKA PLANT 2<br />\
    <img src="styles/legend/StopsGPCCBT_21_2.png" /> CBT<br />\
    <img src="styles/legend/StopsGPCCBT_21_3.png" /> COLLEGE ROAD<br />\
    <img src="styles/legend/StopsGPCCBT_21_4.png" /> COURT<br />\
    <img src="styles/legend/StopsGPCCBT_21_5.png" /> DSC<br />\
    <img src="styles/legend/StopsGPCCBT_21_6.png" /> FISH MARKET<br />\
    <img src="styles/legend/StopsGPCCBT_21_7.png" /> GP COLONY<br />\
    <img src="styles/legend/StopsGPCCBT_21_8.png" /> RAILWAY STATION<br />\
    <img src="styles/legend/StopsGPCCBT_21_9.png" /> RCN 2 STAGE<br />\
    <img src="styles/legend/StopsGPCCBT_21_10.png" /> RTO<br />\
    <img src="styles/legend/StopsGPCCBT_21_11.png" /> Sardar Ground b/s<br />\
    <img src="styles/legend/StopsGPCCBT_21_12.png" /> <br />'
        });
var format_CBTGPCRtPop1000Mtrs_22 = new ol.format.GeoJSON();
var features_CBTGPCRtPop1000Mtrs_22 = format_CBTGPCRtPop1000Mtrs_22.readFeatures(json_CBTGPCRtPop1000Mtrs_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop1000Mtrs_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop1000Mtrs_22.addFeatures(features_CBTGPCRtPop1000Mtrs_22);
var lyr_CBTGPCRtPop1000Mtrs_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop1000Mtrs_22, 
                style: style_CBTGPCRtPop1000Mtrs_22,
                popuplayertitle: "CBT-GPC Rt Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop1000Mtrs_22.png" /> CBT-GPC Rt Pop 1000 Mtrs'
            });
var format_CBTGPCRtPop500Mtrs_23 = new ol.format.GeoJSON();
var features_CBTGPCRtPop500Mtrs_23 = format_CBTGPCRtPop500Mtrs_23.readFeatures(json_CBTGPCRtPop500Mtrs_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop500Mtrs_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop500Mtrs_23.addFeatures(features_CBTGPCRtPop500Mtrs_23);
var lyr_CBTGPCRtPop500Mtrs_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop500Mtrs_23, 
                style: style_CBTGPCRtPop500Mtrs_23,
                popuplayertitle: "CBT-GPC Rt Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop500Mtrs_23.png" /> CBT-GPC Rt Pop 500 Mtrs'
            });
var format_CBTGPCRtPop250Mtrs_24 = new ol.format.GeoJSON();
var features_CBTGPCRtPop250Mtrs_24 = format_CBTGPCRtPop250Mtrs_24.readFeatures(json_CBTGPCRtPop250Mtrs_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop250Mtrs_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop250Mtrs_24.addFeatures(features_CBTGPCRtPop250Mtrs_24);
var lyr_CBTGPCRtPop250Mtrs_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop250Mtrs_24, 
                style: style_CBTGPCRtPop250Mtrs_24,
                popuplayertitle: "CBT-GPC Rt Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop250Mtrs_24.png" /> CBT-GPC Rt Pop 250 Mtrs'
            });
var format_CBTGPCRtPop100Mtrs_25 = new ol.format.GeoJSON();
var features_CBTGPCRtPop100Mtrs_25 = format_CBTGPCRtPop100Mtrs_25.readFeatures(json_CBTGPCRtPop100Mtrs_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop100Mtrs_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop100Mtrs_25.addFeatures(features_CBTGPCRtPop100Mtrs_25);
var lyr_CBTGPCRtPop100Mtrs_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop100Mtrs_25, 
                style: style_CBTGPCRtPop100Mtrs_25,
                popuplayertitle: "CBT-GPC Rt Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop100Mtrs_25.png" /> CBT-GPC Rt Pop 100 Mtrs'
            });
var format_CBTGPCStopPopDissolved_26 = new ol.format.GeoJSON();
var features_CBTGPCStopPopDissolved_26 = format_CBTGPCStopPopDissolved_26.readFeatures(json_CBTGPCStopPopDissolved_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCStopPopDissolved_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCStopPopDissolved_26.addFeatures(features_CBTGPCStopPopDissolved_26);
var lyr_CBTGPCStopPopDissolved_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCStopPopDissolved_26, 
                style: style_CBTGPCStopPopDissolved_26,
                popuplayertitle: "CBT-GPC Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCStopPopDissolved_26.png" /> CBT-GPC Stop Pop Dissolved'
            });
var format_CBTGPCStopPop_27 = new ol.format.GeoJSON();
var features_CBTGPCStopPop_27 = format_CBTGPCStopPop_27.readFeatures(json_CBTGPCStopPop_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCStopPop_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCStopPop_27.addFeatures(features_CBTGPCStopPop_27);
var lyr_CBTGPCStopPop_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCStopPop_27, 
                style: style_CBTGPCStopPop_27,
                popuplayertitle: "CBT-GPC Stop Pop",
                interactive: true,
    title: 'CBT-GPC Stop Pop<br />\
    <img src="styles/legend/CBTGPCStopPop_27_0.png" /> 5 min<br />\
    <img src="styles/legend/CBTGPCStopPop_27_1.png" /> 10 min<br />'
        });
var format_BelgaviPOIMerged_28 = new ol.format.GeoJSON();
var features_BelgaviPOIMerged_28 = format_BelgaviPOIMerged_28.readFeatures(json_BelgaviPOIMerged_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviPOIMerged_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviPOIMerged_28.addFeatures(features_BelgaviPOIMerged_28);
var lyr_BelgaviPOIMerged_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviPOIMerged_28, 
                style: style_BelgaviPOIMerged_28,
                popuplayertitle: "Belgavi POI Merged",
                interactive: true,
                title: '<img src="styles/legend/BelgaviPOIMerged_28.png" /> Belgavi POI Merged'
            });
var format_CBTGPCRtPOI_29 = new ol.format.GeoJSON();
var features_CBTGPCRtPOI_29 = format_CBTGPCRtPOI_29.readFeatures(json_CBTGPCRtPOI_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPOI_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPOI_29.addFeatures(features_CBTGPCRtPOI_29);
var lyr_CBTGPCRtPOI_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPOI_29, 
                style: style_CBTGPCRtPOI_29,
                popuplayertitle: "CBT-GPC Rt POI",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPOI_29.png" /> CBT-GPC Rt POI'
            });
var format_CBTGPCRtPopMerged_30 = new ol.format.GeoJSON();
var features_CBTGPCRtPopMerged_30 = format_CBTGPCRtPopMerged_30.readFeatures(json_CBTGPCRtPopMerged_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPopMerged_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPopMerged_30.addFeatures(features_CBTGPCRtPopMerged_30);
var lyr_CBTGPCRtPopMerged_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPopMerged_30, 
                style: style_CBTGPCRtPopMerged_30,
                popuplayertitle: "CBT-GPC Rt Pop Merged",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPopMerged_30.png" /> CBT-GPC Rt Pop Merged'
            });
var format_CBTGPCSuggestedStops_31 = new ol.format.GeoJSON();
var features_CBTGPCSuggestedStops_31 = format_CBTGPCSuggestedStops_31.readFeatures(json_CBTGPCSuggestedStops_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCSuggestedStops_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCSuggestedStops_31.addFeatures(features_CBTGPCSuggestedStops_31);
var lyr_CBTGPCSuggestedStops_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCSuggestedStops_31, 
                style: style_CBTGPCSuggestedStops_31,
                popuplayertitle: "CBT-GPC Suggested Stops",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCSuggestedStops_31.png" /> CBT-GPC Suggested Stops'
            });
var format_CBTGPCSuggestedStopPop_32 = new ol.format.GeoJSON();
var features_CBTGPCSuggestedStopPop_32 = format_CBTGPCSuggestedStopPop_32.readFeatures(json_CBTGPCSuggestedStopPop_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCSuggestedStopPop_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCSuggestedStopPop_32.addFeatures(features_CBTGPCSuggestedStopPop_32);
var lyr_CBTGPCSuggestedStopPop_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCSuggestedStopPop_32, 
                style: style_CBTGPCSuggestedStopPop_32,
                popuplayertitle: "CBT-GPC Suggested Stop Pop",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCSuggestedStopPop_32.png" /> CBT-GPC Suggested Stop Pop'
            });
var format_CBTGBCStopPop10Min_33 = new ol.format.GeoJSON();
var features_CBTGBCStopPop10Min_33 = format_CBTGBCStopPop10Min_33.readFeatures(json_CBTGBCStopPop10Min_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGBCStopPop10Min_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGBCStopPop10Min_33.addFeatures(features_CBTGBCStopPop10Min_33);
var lyr_CBTGBCStopPop10Min_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGBCStopPop10Min_33, 
                style: style_CBTGBCStopPop10Min_33,
                popuplayertitle: "CBT GBC Stop Pop 10 Min",
                interactive: true,
                title: '<img src="styles/legend/CBTGBCStopPop10Min_33.png" /> CBT GBC Stop Pop 10 Min'
            });
var format_Changedstopscsv_34 = new ol.format.GeoJSON();
var features_Changedstopscsv_34 = format_Changedstopscsv_34.readFeatures(json_Changedstopscsv_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Changedstopscsv_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Changedstopscsv_34.addFeatures(features_Changedstopscsv_34);
var lyr_Changedstopscsv_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Changedstopscsv_34, 
                style: style_Changedstopscsv_34,
                popuplayertitle: "Changed stops.csv",
                interactive: true,
    title: 'Changed stops.csv<br />\
    <img src="styles/legend/Changedstopscsv_34_0.png" /> 14348.0<br />\
    <img src="styles/legend/Changedstopscsv_34_1.png" /> 15677.0<br />\
    <img src="styles/legend/Changedstopscsv_34_2.png" /> 16599.0<br />\
    <img src="styles/legend/Changedstopscsv_34_3.png" /> 17890.0<br />\
    <img src="styles/legend/Changedstopscsv_34_4.png" /> 27064.0<br />\
    <img src="styles/legend/Changedstopscsv_34_5.png" /> 33753.0<br />\
    <img src="styles/legend/Changedstopscsv_34_6.png" /> <br />'
        });
var format_StopswithLimitedCoverage_35 = new ol.format.GeoJSON();
var features_StopswithLimitedCoverage_35 = format_StopswithLimitedCoverage_35.readFeatures(json_StopswithLimitedCoverage_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopswithLimitedCoverage_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopswithLimitedCoverage_35.addFeatures(features_StopswithLimitedCoverage_35);
var lyr_StopswithLimitedCoverage_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopswithLimitedCoverage_35, 
                style: style_StopswithLimitedCoverage_35,
                popuplayertitle: "Stops with Limited Coverage",
                interactive: true,
    title: 'Stops with Limited Coverage<br />\
    <img src="styles/legend/StopswithLimitedCoverage_35_0.png" /> GP COLONY<br />\
    <img src="styles/legend/StopswithLimitedCoverage_35_1.png" /> HP STOP<br />\
    <img src="styles/legend/StopswithLimitedCoverage_35_2.png" /> Millitry Mahadev Mandir<br />\
    <img src="styles/legend/StopswithLimitedCoverage_35_3.png" /> RCN 2 STAGE<br />\
    <img src="styles/legend/StopswithLimitedCoverage_35_4.png" /> RLS COLLEGE<br />\
    <img src="styles/legend/StopswithLimitedCoverage_35_5.png" /> Rst 1<br />\
    <img src="styles/legend/StopswithLimitedCoverage_35_6.png" /> <br />'
        });
var format_CBTGBCProposedStopPop_36 = new ol.format.GeoJSON();
var features_CBTGBCProposedStopPop_36 = format_CBTGBCProposedStopPop_36.readFeatures(json_CBTGBCProposedStopPop_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGBCProposedStopPop_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGBCProposedStopPop_36.addFeatures(features_CBTGBCProposedStopPop_36);
var lyr_CBTGBCProposedStopPop_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGBCProposedStopPop_36, 
                style: style_CBTGBCProposedStopPop_36,
                popuplayertitle: "CBT GBC Proposed Stop Pop",
                interactive: true,
                title: '<img src="styles/legend/CBTGBCProposedStopPop_36.png" /> CBT GBC Proposed Stop Pop'
            });
var format_CBTGBCProposedStopPopDissolved_37 = new ol.format.GeoJSON();
var features_CBTGBCProposedStopPopDissolved_37 = format_CBTGBCProposedStopPopDissolved_37.readFeatures(json_CBTGBCProposedStopPopDissolved_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGBCProposedStopPopDissolved_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGBCProposedStopPopDissolved_37.addFeatures(features_CBTGBCProposedStopPopDissolved_37);
var lyr_CBTGBCProposedStopPopDissolved_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGBCProposedStopPopDissolved_37, 
                style: style_CBTGBCProposedStopPopDissolved_37,
                popuplayertitle: "CBT GBC Proposed Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/CBTGBCProposedStopPopDissolved_37.png" /> CBT GBC Proposed Stop Pop Dissolved'
            });
var format_CBTGPCRtRecom_38 = new ol.format.GeoJSON();
var features_CBTGPCRtRecom_38 = format_CBTGPCRtRecom_38.readFeatures(json_CBTGPCRtRecom_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtRecom_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtRecom_38.addFeatures(features_CBTGPCRtRecom_38);
var lyr_CBTGPCRtRecom_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtRecom_38, 
                style: style_CBTGPCRtRecom_38,
                popuplayertitle: "CBT-GPC Rt Recom",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtRecom_38.png" /> CBT-GPC Rt Recom'
            });
var format_CBTGBTProposedStops_39 = new ol.format.GeoJSON();
var features_CBTGBTProposedStops_39 = format_CBTGBTProposedStops_39.readFeatures(json_CBTGBTProposedStops_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGBTProposedStops_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGBTProposedStops_39.addFeatures(features_CBTGBTProposedStops_39);
var lyr_CBTGBTProposedStops_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGBTProposedStops_39, 
                style: style_CBTGBTProposedStops_39,
                popuplayertitle: "CBT GBT Proposed Stops",
                interactive: true,
                title: '<img src="styles/legend/CBTGBTProposedStops_39.png" /> CBT GBT Proposed Stops'
            });
var format_RouteCBTGPCMtrs_40 = new ol.format.GeoJSON();
var features_RouteCBTGPCMtrs_40 = format_RouteCBTGPCMtrs_40.readFeatures(json_RouteCBTGPCMtrs_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteCBTGPCMtrs_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteCBTGPCMtrs_40.addFeatures(features_RouteCBTGPCMtrs_40);
var lyr_RouteCBTGPCMtrs_40 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteCBTGPCMtrs_40, 
                style: style_RouteCBTGPCMtrs_40,
                popuplayertitle: "Route CBT-GPC Mtrs",
                interactive: true,
                title: '<img src="styles/legend/RouteCBTGPCMtrs_40.png" /> Route CBT-GPC Mtrs'
            });
var format_StopsCBTGPC_41 = new ol.format.GeoJSON();
var features_StopsCBTGPC_41 = format_StopsCBTGPC_41.readFeatures(json_StopsCBTGPC_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsCBTGPC_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsCBTGPC_41.addFeatures(features_StopsCBTGPC_41);
var lyr_StopsCBTGPC_41 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsCBTGPC_41, 
                style: style_StopsCBTGPC_41,
                popuplayertitle: "Stops CBT - GPC",
                interactive: true,
    title: 'Stops CBT - GPC<br />\
    <img src="styles/legend/StopsCBTGPC_41_0.png" /> 2nd gate 1<br />\
    <img src="styles/legend/StopsCBTGPC_41_1.png" /> ARUN TALKIES<br />\
    <img src="styles/legend/StopsCBTGPC_41_2.png" /> CBT<br />\
    <img src="styles/legend/StopsCBTGPC_41_3.png" /> Court 1<br />\
    <img src="styles/legend/StopsCBTGPC_41_4.png" /> Dsc 1<br />\
    <img src="styles/legend/StopsCBTGPC_41_5.png" /> GP COLONY<br />\
    <img src="styles/legend/StopsCBTGPC_41_6.png" /> HP STOP<br />\
    <img src="styles/legend/StopsCBTGPC_41_7.png" /> Millitry Mahadev Mandir<br />\
    <img src="styles/legend/StopsCBTGPC_41_8.png" /> RAILWAY 1ST GATE<br />\
    <img src="styles/legend/StopsCBTGPC_41_9.png" /> RCN 2 STAGE<br />\
    <img src="styles/legend/StopsCBTGPC_41_10.png" /> RLS COLLEGE<br />\
    <img src="styles/legend/StopsCBTGPC_41_11.png" /> Rst 1<br />\
    <img src="styles/legend/StopsCBTGPC_41_12.png" /> SBI STOP<br />\
    <img src="styles/legend/StopsCBTGPC_41_13.png" /> <br />'
        });
var format_CBTGPCRWI_42 = new ol.format.GeoJSON();
var features_CBTGPCRWI_42 = format_CBTGPCRWI_42.readFeatures(json_CBTGPCRWI_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRWI_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRWI_42.addFeatures(features_CBTGPCRWI_42);
var lyr_CBTGPCRWI_42 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRWI_42, 
                style: style_CBTGPCRWI_42,
                popuplayertitle: "CBT-GPC RWI",
                interactive: true,
    title: 'CBT-GPC RWI<br />\
    <img src="styles/legend/CBTGPCRWI_42_0.png" /> 0.875 - 0.8998<br />\
    <img src="styles/legend/CBTGPCRWI_42_1.png" /> 0.8998 - 0.9246<br />\
    <img src="styles/legend/CBTGPCRWI_42_2.png" /> 0.9246 - 0.9494<br />\
    <img src="styles/legend/CBTGPCRWI_42_3.png" /> 0.9494 - 0.9742<br />\
    <img src="styles/legend/CBTGPCRWI_42_4.png" /> 0.9742 - 0.999<br />\
    <img src="styles/legend/CBTGPCRWI_42_5.png" /> 0.999 - 1.092<br />\
    <img src="styles/legend/CBTGPCRWI_42_6.png" /> 1.092 - 1.185<br />\
    <img src="styles/legend/CBTGPCRWI_42_7.png" /> 1.185 - 1.278<br />\
    <img src="styles/legend/CBTGPCRWI_42_8.png" /> 1.278 - 1.371<br />\
    <img src="styles/legend/CBTGPCRWI_42_9.png" /> 1.371 - 1.464<br />\
    <img src="styles/legend/CBTGPCRWI_42_10.png" /> 1.464 - 1.4682<br />\
    <img src="styles/legend/CBTGPCRWI_42_11.png" /> 1.4682 - 1.4724<br />\
    <img src="styles/legend/CBTGPCRWI_42_12.png" /> 1.4724 - 1.4766<br />\
    <img src="styles/legend/CBTGPCRWI_42_13.png" /> 1.4766 - 1.4808<br />\
    <img src="styles/legend/CBTGPCRWI_42_14.png" /> 1.4808 - 1.485<br />'
        });
var format_ProposedrouteRWI_43 = new ol.format.GeoJSON();
var features_ProposedrouteRWI_43 = format_ProposedrouteRWI_43.readFeatures(json_ProposedrouteRWI_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedrouteRWI_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedrouteRWI_43.addFeatures(features_ProposedrouteRWI_43);
var lyr_ProposedrouteRWI_43 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProposedrouteRWI_43, 
                style: style_ProposedrouteRWI_43,
                popuplayertitle: "Proposed route RWI",
                interactive: true,
    title: 'Proposed route RWI<br />\
    <img src="styles/legend/ProposedrouteRWI_43_0.png" /> 0.875 - 0.892<br />\
    <img src="styles/legend/ProposedrouteRWI_43_1.png" /> 0.892 - 0.908<br />\
    <img src="styles/legend/ProposedrouteRWI_43_2.png" /> 0.908 - 0.925<br />\
    <img src="styles/legend/ProposedrouteRWI_43_3.png" /> 0.925 - 0.941<br />\
    <img src="styles/legend/ProposedrouteRWI_43_4.png" /> 0.941 - 0.958<br />\
    <img src="styles/legend/ProposedrouteRWI_43_5.png" /> 0.958 - 0.974<br />\
    <img src="styles/legend/ProposedrouteRWI_43_6.png" /> 0.974 - 0.991<br />\
    <img src="styles/legend/ProposedrouteRWI_43_7.png" /> 0.991 - 1.03<br />\
    <img src="styles/legend/ProposedrouteRWI_43_8.png" /> 1.03 - 1.092<br />\
    <img src="styles/legend/ProposedrouteRWI_43_9.png" /> 1.092 - 1.154<br />\
    <img src="styles/legend/ProposedrouteRWI_43_10.png" /> 1.154 - 1.216<br />\
    <img src="styles/legend/ProposedrouteRWI_43_11.png" /> 1.216 - 1.278<br />\
    <img src="styles/legend/ProposedrouteRWI_43_12.png" /> 1.278 - 1.34<br />\
    <img src="styles/legend/ProposedrouteRWI_43_13.png" /> 1.34 - 1.402<br />\
    <img src="styles/legend/ProposedrouteRWI_43_14.png" /> 1.402 - 1.464<br />'
        });

lyr_WorldMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BelgaviBoundary_2.setVisible(true);lyr_BelgaviBoundaryMtrs_3.setVisible(true);lyr_BelgaviStops_4.setVisible(true);lyr_BelgaviStopsShp_5.setVisible(true);lyr_BelgaviStopPopCoverage_6.setVisible(true);lyr_BelgaviStopPopDissolved_7.setVisible(true);lyr_BelgaviStopPop_8.setVisible(true);lyr_Temple_9.setVisible(true);lyr_Education_10.setVisible(true);lyr_BelgaviPSU_11.setVisible(true);lyr_BelgaviOffice_12.setVisible(true);lyr_BelgaviIndustries_13.setVisible(true);lyr_BelgaviRailwayStn_14.setVisible(true);lyr_BelgaviRWI_15.setVisible(true);lyr_Belgavistats_16.setVisible(true);lyr_BelgaviOverallPOI_17.setVisible(true);lyr_BelgaviStopPOI_18.setVisible(true);lyr_StopsinsideBelgavi_19.setVisible(true);lyr_RouteGPCCBTMtrs_20.setVisible(true);lyr_StopsGPCCBT_21.setVisible(true);lyr_CBTGPCRtPop1000Mtrs_22.setVisible(true);lyr_CBTGPCRtPop500Mtrs_23.setVisible(true);lyr_CBTGPCRtPop250Mtrs_24.setVisible(true);lyr_CBTGPCRtPop100Mtrs_25.setVisible(true);lyr_CBTGPCStopPopDissolved_26.setVisible(true);lyr_CBTGPCStopPop_27.setVisible(true);lyr_BelgaviPOIMerged_28.setVisible(true);lyr_CBTGPCRtPOI_29.setVisible(true);lyr_CBTGPCRtPopMerged_30.setVisible(true);lyr_CBTGPCSuggestedStops_31.setVisible(true);lyr_CBTGPCSuggestedStopPop_32.setVisible(true);lyr_CBTGBCStopPop10Min_33.setVisible(true);lyr_Changedstopscsv_34.setVisible(true);lyr_StopswithLimitedCoverage_35.setVisible(true);lyr_CBTGBCProposedStopPop_36.setVisible(true);lyr_CBTGBCProposedStopPopDissolved_37.setVisible(true);lyr_CBTGPCRtRecom_38.setVisible(true);lyr_CBTGBTProposedStops_39.setVisible(true);lyr_RouteCBTGPCMtrs_40.setVisible(true);lyr_StopsCBTGPC_41.setVisible(true);lyr_CBTGPCRWI_42.setVisible(true);lyr_ProposedrouteRWI_43.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_OpenStreetMap_1,lyr_BelgaviBoundary_2,lyr_BelgaviBoundaryMtrs_3,lyr_BelgaviStops_4,lyr_BelgaviStopsShp_5,lyr_BelgaviStopPopCoverage_6,lyr_BelgaviStopPopDissolved_7,lyr_BelgaviStopPop_8,lyr_Temple_9,lyr_Education_10,lyr_BelgaviPSU_11,lyr_BelgaviOffice_12,lyr_BelgaviIndustries_13,lyr_BelgaviRailwayStn_14,lyr_BelgaviRWI_15,lyr_Belgavistats_16,lyr_BelgaviOverallPOI_17,lyr_BelgaviStopPOI_18,lyr_StopsinsideBelgavi_19,lyr_RouteGPCCBTMtrs_20,lyr_StopsGPCCBT_21,lyr_CBTGPCRtPop1000Mtrs_22,lyr_CBTGPCRtPop500Mtrs_23,lyr_CBTGPCRtPop250Mtrs_24,lyr_CBTGPCRtPop100Mtrs_25,lyr_CBTGPCStopPopDissolved_26,lyr_CBTGPCStopPop_27,lyr_BelgaviPOIMerged_28,lyr_CBTGPCRtPOI_29,lyr_CBTGPCRtPopMerged_30,lyr_CBTGPCSuggestedStops_31,lyr_CBTGPCSuggestedStopPop_32,lyr_CBTGBCStopPop10Min_33,lyr_Changedstopscsv_34,lyr_StopswithLimitedCoverage_35,lyr_CBTGBCProposedStopPop_36,lyr_CBTGBCProposedStopPopDissolved_37,lyr_CBTGPCRtRecom_38,lyr_CBTGBTProposedStops_39,lyr_RouteCBTGPCMtrs_40,lyr_StopsCBTGPC_41,lyr_CBTGPCRWI_42,lyr_ProposedrouteRWI_43];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_BelgaviBoundary_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviBoundaryMtrs_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviStops_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'StopId': 'StopId', 'Lat': 'Lat', 'Lng': 'Lng', });
lyr_BelgaviStopsShp_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'StopId': 'StopId', 'Lat': 'Lat', 'Lng': 'Lng', });
lyr_BelgaviStopPopCoverage_6.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', });
lyr_BelgaviStopPopDissolved_7.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', });
lyr_BelgaviStopPop_8.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Temple_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'check_date': 'check_date', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'historic': 'historic', 'building': 'building', 'landuse': 'landuse', 'layer': 'layer', 'path': 'path', });
lyr_Education_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'phone': 'phone', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'barrier': 'barrier', 'name_etymo': 'name_etymo', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'name_ta': 'name_ta', 'name_hi': 'name_hi', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'email': 'email', 'alt_name': 'alt_name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviPSU_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'phone': 'phone', 'name_kn': 'name_kn', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'police': 'police', 'operator_w': 'operator_w', 'operator': 'operator', 'addr_distr': 'addr_distr', 'type': 'type', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviOffice_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'level': 'level', 'wikidata': 'wikidata', 'name_kn': 'name_kn', 'name': 'name', 'landuse': 'landuse', 'government': 'government', 'wheelchair': 'wheelchair', 'website': 'website', 'smoking': 'smoking', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviIndustries_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_BelgaviRailwayStn_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'shop': 'shop', 'aeroway': 'aeroway', 'railway': 'railway', 'self_servi': 'self_servi', 'operator': 'operator', 'fuel_diese': 'fuel_diese', 'fuel_Petro': 'fuel_Petro', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'building': 'building', 'name_kn': 'name_kn', 'name': 'name', 'public_tra': 'public_tra', 'highway': 'highway', 'taxi': 'taxi', 'traffic_si': 'traffic_si', 'official_n': 'official_n', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'shelter': 'shelter', 'bench': 'bench', 'check_date': 'check_date', 'supervised': 'supervised', 'opening_ho': 'opening_ho', 'voltage': 'voltage', 'frequency': 'frequency', 'electrifie': 'electrifie', 'maxheight': 'maxheight', 'brand_wi_1': 'brand_wi_1', 'wheelchair': 'wheelchair', 'flood_pron': 'flood_pron', 'access': 'access', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'name_en': 'name_en', 'local_ref': 'local_ref', 'surface': 'surface', 'crossing_m': 'crossing_m', 'bus': 'bus', 'crossing_b': 'crossing_b', 'wikidata': 'wikidata', 'network': 'network', 'internet_a': 'internet_a', 'website': 'website', 'phone': 'phone', 'designatio': 'designatio', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'exit_to': 'exit_to', 'ref': 'ref', 'payment_fa': 'payment_fa', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'junction': 'junction', 'traffic__1': 'traffic__1', 'button_ope': 'button_ope', 'traffic__2': 'traffic__2', 'loc_name': 'loc_name', 'crossing': 'crossing', 'traffic_ca': 'traffic_ca', 'barrier': 'barrier', 'name_mr': 'name_mr', 'traffic__3': 'traffic__3', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRWI_15.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Belgavistats_16.set('fieldAliases', {'shapeName': 'shapeName', 'area': 'area', 'perimeter': 'perimeter', 'Area SqKm': 'Area SqKm', 'Peri KM': 'Peri KM', });
lyr_BelgaviOverallPOI_17.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'OverallPOI': 'OverallPOI', });
lyr_BelgaviStopPOI_18.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', 'Stop POI': 'Stop POI', });
lyr_StopsinsideBelgavi_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'StopId': 'StopId', 'Lat': 'Lat', 'Lng': 'Lng', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_RouteGPCCBTMtrs_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Bus Travel': 'Bus Travel', });
lyr_StopsGPCCBT_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CBTGPCRtPop1000Mtrs_22.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCRtPop500Mtrs_23.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCRtPop250Mtrs_24.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCRtPop100Mtrs_25.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCStopPopDissolved_26.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_CBTGPCStopPop_27.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_BelgaviPOIMerged_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'office': 'office', 'level': 'level', 'wikidata': 'wikidata', 'name_kn': 'name_kn', 'landuse': 'landuse', 'government': 'government', 'wheelchair': 'wheelchair', 'website': 'website', 'smoking': 'smoking', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', 'amenity': 'amenity', 'police': 'police', 'operator_w': 'operator_w', 'addr_distr': 'addr_distr', 'type': 'type', 'shop': 'shop', 'aeroway': 'aeroway', 'railway': 'railway', 'self_servi': 'self_servi', 'fuel_diese': 'fuel_diese', 'fuel_Petro': 'fuel_Petro', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'public_tra': 'public_tra', 'highway': 'highway', 'taxi': 'taxi', 'traffic_si': 'traffic_si', 'official_n': 'official_n', 'alt_name': 'alt_name', 'shelter': 'shelter', 'bench': 'bench', 'check_date': 'check_date', 'supervised': 'supervised', 'voltage': 'voltage', 'frequency': 'frequency', 'electrifie': 'electrifie', 'maxheight': 'maxheight', 'brand_wi_1': 'brand_wi_1', 'flood_pron': 'flood_pron', 'access': 'access', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'name_en': 'name_en', 'local_ref': 'local_ref', 'surface': 'surface', 'crossing_m': 'crossing_m', 'bus': 'bus', 'crossing_b': 'crossing_b', 'network': 'network', 'internet_a': 'internet_a', 'designatio': 'designatio', 'descriptio': 'descriptio', 'exit_to': 'exit_to', 'ref': 'ref', 'payment_fa': 'payment_fa', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'junction': 'junction', 'traffic__1': 'traffic__1', 'button_ope': 'button_ope', 'traffic__2': 'traffic__2', 'loc_name': 'loc_name', 'crossing': 'crossing', 'traffic_ca': 'traffic_ca', 'barrier': 'barrier', 'name_mr': 'name_mr', 'traffic__3': 'traffic__3', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'name_etymo': 'name_etymo', 'start_date': 'start_date', 'name_ta': 'name_ta', 'name_hi': 'name_hi', 'wikipedia': 'wikipedia', 'email': 'email', 'religion': 'religion', 'historic': 'historic', });
lyr_CBTGPCRtPOI_29.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', 'CBT-GPC Rt': 'CBT-GPC Rt', });
lyr_CBTGPCRtPopMerged_30.set('fieldAliases', {'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_CBTGPCSuggestedStops_31.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_CBTGPCSuggestedStopPop_32.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTGBCStopPop10Min_33.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Changedstopscsv_34.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', 'Diff': 'Diff', '__Diff': '__Diff', });
lyr_StopswithLimitedCoverage_35.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTGBCProposedStopPop_36.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTGBCProposedStopPopDissolved_37.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTGPCRtRecom_38.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_CBTGBTProposedStops_39.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_RouteCBTGPCMtrs_40.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_StopsCBTGPC_41.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CBTGPCRWI_42.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_ProposedrouteRWI_43.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'POI': 'POI', });
lyr_WorldMap_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_BelgaviBoundary_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BelgaviBoundaryMtrs_3.set('fieldImages', {'shapeName': '', 'shapeISO': '', 'shapeID': '', 'shapeGroup': '', 'shapeType': '', });
lyr_BelgaviStops_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'StopId': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', });
lyr_BelgaviStopsShp_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'StopId': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', });
lyr_BelgaviStopPopCoverage_6.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'TextEdit', 'Coverage': 'TextEdit', });
lyr_BelgaviStopPopDissolved_7.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'Range', 'Coverage': 'TextEdit', });
lyr_BelgaviStopPop_8.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Temple_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'check_date': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'historic': 'TextEdit', 'building': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Education_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'barrier': 'TextEdit', 'name_etymo': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'name_ta': 'TextEdit', 'name_hi': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'alt_name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviPSU_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'phone': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'police': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'addr_distr': 'TextEdit', 'type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviOffice_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'level': 'TextEdit', 'wikidata': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'landuse': 'TextEdit', 'government': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviIndustries_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', });
lyr_BelgaviRailwayStn_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'self_servi': 'TextEdit', 'operator': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_Petro': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'building': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'taxi': 'TextEdit', 'traffic_si': 'TextEdit', 'official_n': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'check_date': 'TextEdit', 'supervised': 'TextEdit', 'opening_ho': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': 'TextEdit', 'maxheight': 'TextEdit', 'brand_wi_1': 'TextEdit', 'wheelchair': 'TextEdit', 'flood_pron': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'name_en': 'TextEdit', 'local_ref': 'TextEdit', 'surface': 'TextEdit', 'crossing_m': 'TextEdit', 'bus': 'TextEdit', 'crossing_b': 'TextEdit', 'wikidata': 'TextEdit', 'network': 'TextEdit', 'internet_a': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'exit_to': 'TextEdit', 'ref': 'TextEdit', 'payment_fa': 'TextEdit', 'payment_ca': 'TextEdit', 'currency_I': 'TextEdit', 'junction': 'TextEdit', 'traffic__1': 'TextEdit', 'button_ope': 'TextEdit', 'traffic__2': 'TextEdit', 'loc_name': 'TextEdit', 'crossing': 'TextEdit', 'traffic_ca': 'TextEdit', 'barrier': 'TextEdit', 'name_mr': 'TextEdit', 'traffic__3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRWI_15.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Belgavistats_16.set('fieldImages', {'shapeName': '', 'area': '', 'perimeter': '', 'Area SqKm': '', 'Peri KM': '', });
lyr_BelgaviOverallPOI_17.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'OverallPOI': 'Range', });
lyr_BelgaviStopPOI_18.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'TextEdit', 'Coverage': 'TextEdit', 'Stop POI': 'TextEdit', });
lyr_StopsinsideBelgavi_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'StopId': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_RouteGPCCBTMtrs_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'Range', 'Bus Travel': 'Range', });
lyr_StopsGPCCBT_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CBTGPCRtPop1000Mtrs_22.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCRtPop500Mtrs_23.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCRtPop250Mtrs_24.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCRtPop100Mtrs_25.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCStopPopDissolved_26.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Pax': 'Range', 'Ridership%': 'Range', });
lyr_CBTGPCStopPop_27.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_BelgaviPOIMerged_28.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'office': 'TextEdit', 'level': 'TextEdit', 'wikidata': 'TextEdit', 'name_kn': 'TextEdit', 'landuse': 'TextEdit', 'government': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'amenity': 'TextEdit', 'police': 'TextEdit', 'operator_w': 'TextEdit', 'addr_distr': 'TextEdit', 'type': 'TextEdit', 'shop': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'self_servi': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_Petro': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'taxi': 'TextEdit', 'traffic_si': 'TextEdit', 'official_n': 'TextEdit', 'alt_name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'check_date': 'TextEdit', 'supervised': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': 'TextEdit', 'maxheight': 'TextEdit', 'brand_wi_1': 'TextEdit', 'flood_pron': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'name_en': 'TextEdit', 'local_ref': 'TextEdit', 'surface': 'TextEdit', 'crossing_m': 'TextEdit', 'bus': 'TextEdit', 'crossing_b': 'TextEdit', 'network': 'TextEdit', 'internet_a': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'exit_to': 'TextEdit', 'ref': 'TextEdit', 'payment_fa': 'TextEdit', 'payment_ca': 'TextEdit', 'currency_I': 'TextEdit', 'junction': 'TextEdit', 'traffic__1': 'TextEdit', 'button_ope': 'TextEdit', 'traffic__2': 'TextEdit', 'loc_name': 'TextEdit', 'crossing': 'TextEdit', 'traffic_ca': 'TextEdit', 'barrier': 'TextEdit', 'name_mr': 'TextEdit', 'traffic__3': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'name_etymo': 'TextEdit', 'start_date': 'TextEdit', 'name_ta': 'TextEdit', 'name_hi': 'TextEdit', 'wikipedia': 'TextEdit', 'email': 'TextEdit', 'religion': 'TextEdit', 'historic': 'TextEdit', });
lyr_CBTGPCRtPOI_29.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'TextEdit', 'CBT-GPC Rt': 'TextEdit', });
lyr_CBTGPCRtPopMerged_30.set('fieldImages', {'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'TextEdit', 'Ridership%': 'TextEdit', });
lyr_CBTGPCSuggestedStops_31.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_CBTGPCSuggestedStopPop_32.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTGBCStopPop10Min_33.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Changedstopscsv_34.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Diff': 'TextEdit', '__Diff': 'TextEdit', });
lyr_StopswithLimitedCoverage_35.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTGBCProposedStopPop_36.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTGBCProposedStopPopDissolved_37.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTGPCRtRecom_38.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'Range', });
lyr_CBTGBTProposedStops_39.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_RouteCBTGPCMtrs_40.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': '', 'Bus Time': '', });
lyr_StopsCBTGPC_41.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CBTGPCRWI_42.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'TextEdit', });
lyr_ProposedrouteRWI_43.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'POI': 'TextEdit', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'hidden field', 'iso_a2': 'hidden field', 'NAME': 'hidden field', 'FIPS_10_': 'hidden field', 'ISO_A3': 'hidden field', 'WB_A2': 'hidden field', 'WB_A3': 'hidden field', });
lyr_BelgaviBoundary_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviBoundaryMtrs_3.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviStops_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'StopId': 'no label', 'Lat': 'no label', 'Lng': 'no label', });
lyr_BelgaviStopsShp_5.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'StopId': 'hidden field', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', });
lyr_BelgaviStopPopCoverage_6.set('fieldLabels', {'AA_MINS': 'header label - visible with data', 'AA_MODE': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'BelgaviPop': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', });
lyr_BelgaviStopPopDissolved_7.set('fieldLabels', {'AA_MINS': 'no label', 'AA_MODE': 'no label', 'Pop': 'no label', 'BelgaviPop': 'no label', 'Coverage': 'no label', });
lyr_BelgaviStopPop_8.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'header label - visible with data', 'AA_MODE': 'header label - visible with data', 'TOTAL_POP': 'inline label - visible with data', });
lyr_Temple_9.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'check_date': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'historic': 'hidden field', 'building': 'hidden field', 'landuse': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Education_10.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'phone': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'barrier': 'hidden field', 'name_etymo': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'name_ta': 'hidden field', 'name_hi': 'hidden field', 'wikipedia': 'hidden field', 'wikidata': 'hidden field', 'website': 'hidden field', 'email': 'hidden field', 'alt_name': 'hidden field', 'type': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviPSU_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'phone': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'police': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'addr_distr': 'hidden field', 'type': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviOffice_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'level': 'hidden field', 'wikidata': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'landuse': 'hidden field', 'government': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviIndustries_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_BelgaviRailwayStn_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'shop': 'hidden field', 'aeroway': 'hidden field', 'railway': 'hidden field', 'self_servi': 'hidden field', 'operator': 'hidden field', 'fuel_diese': 'hidden field', 'fuel_Petro': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'building': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'public_tra': 'hidden field', 'highway': 'hidden field', 'taxi': 'hidden field', 'traffic_si': 'hidden field', 'official_n': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'shelter': 'hidden field', 'bench': 'hidden field', 'check_date': 'hidden field', 'supervised': 'hidden field', 'opening_ho': 'hidden field', 'voltage': 'hidden field', 'frequency': 'hidden field', 'electrifie': 'hidden field', 'maxheight': 'hidden field', 'brand_wi_1': 'hidden field', 'wheelchair': 'hidden field', 'flood_pron': 'hidden field', 'access': 'hidden field', 'motor_vehi': 'hidden field', 'horse': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'name_en': 'hidden field', 'local_ref': 'hidden field', 'surface': 'hidden field', 'crossing_m': 'hidden field', 'bus': 'hidden field', 'crossing_b': 'hidden field', 'wikidata': 'hidden field', 'network': 'hidden field', 'internet_a': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'designatio': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'exit_to': 'hidden field', 'ref': 'hidden field', 'payment_fa': 'hidden field', 'payment_ca': 'hidden field', 'currency_I': 'hidden field', 'junction': 'hidden field', 'traffic__1': 'hidden field', 'button_ope': 'hidden field', 'traffic__2': 'hidden field', 'loc_name': 'hidden field', 'crossing': 'hidden field', 'traffic_ca': 'hidden field', 'barrier': 'hidden field', 'name_mr': 'hidden field', 'traffic__3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviRWI_15.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Belgavistats_16.set('fieldLabels', {'shapeName': 'header label - visible with data', 'area': 'inline label - visible with data', 'perimeter': 'inline label - visible with data', 'Area SqKm': 'inline label - visible with data', 'Peri KM': 'inline label - visible with data', });
lyr_BelgaviOverallPOI_17.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'OverallPOI': 'header label - visible with data', });
lyr_BelgaviStopPOI_18.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'BelgaviPop': 'inline label - visible with data', 'Coverage': 'inline label - visible with data', 'Stop POI': 'header label - visible with data', });
lyr_StopsinsideBelgavi_19.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'descript_1': 'hidden field', 'altitude_1': 'hidden field', 'StopId': 'hidden field', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'shapeName': 'inline label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_RouteGPCCBTMtrs_20.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Bus Travel': 'inline label - visible with data', });
lyr_StopsGPCCBT_21.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CBTGPCRtPop1000Mtrs_22.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCRtPop500Mtrs_23.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCRtPop250Mtrs_24.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCRtPop100Mtrs_25.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCStopPopDissolved_26.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'header label - visible with data', });
lyr_CBTGPCStopPop_27.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_BelgaviPOIMerged_28.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'hidden field', 'office': 'hidden field', 'level': 'hidden field', 'wikidata': 'hidden field', 'name_kn': 'hidden field', 'landuse': 'hidden field', 'government': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'amenity': 'hidden field', 'police': 'hidden field', 'operator_w': 'hidden field', 'addr_distr': 'hidden field', 'type': 'hidden field', 'shop': 'hidden field', 'aeroway': 'hidden field', 'railway': 'hidden field', 'self_servi': 'hidden field', 'fuel_diese': 'hidden field', 'fuel_Petro': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'public_tra': 'hidden field', 'highway': 'hidden field', 'taxi': 'hidden field', 'traffic_si': 'hidden field', 'official_n': 'hidden field', 'alt_name': 'hidden field', 'shelter': 'hidden field', 'bench': 'hidden field', 'check_date': 'hidden field', 'supervised': 'hidden field', 'voltage': 'hidden field', 'frequency': 'hidden field', 'electrifie': 'hidden field', 'maxheight': 'hidden field', 'brand_wi_1': 'hidden field', 'flood_pron': 'hidden field', 'access': 'hidden field', 'motor_vehi': 'hidden field', 'horse': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'name_en': 'hidden field', 'local_ref': 'hidden field', 'surface': 'hidden field', 'crossing_m': 'hidden field', 'bus': 'hidden field', 'crossing_b': 'hidden field', 'network': 'hidden field', 'internet_a': 'hidden field', 'designatio': 'hidden field', 'descriptio': 'hidden field', 'exit_to': 'hidden field', 'ref': 'hidden field', 'payment_fa': 'hidden field', 'payment_ca': 'hidden field', 'currency_I': 'hidden field', 'junction': 'hidden field', 'traffic__1': 'hidden field', 'button_ope': 'hidden field', 'traffic__2': 'hidden field', 'loc_name': 'hidden field', 'crossing': 'hidden field', 'traffic_ca': 'hidden field', 'barrier': 'hidden field', 'name_mr': 'hidden field', 'traffic__3': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'name_etymo': 'hidden field', 'start_date': 'hidden field', 'name_ta': 'hidden field', 'name_hi': 'hidden field', 'wikipedia': 'hidden field', 'email': 'hidden field', 'religion': 'hidden field', 'historic': 'hidden field', });
lyr_CBTGPCRtPOI_29.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'CBT-GPC Rt': 'hidden field', });
lyr_CBTGPCRtPopMerged_30.set('fieldLabels', {'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'header label - visible with data', });
lyr_CBTGPCSuggestedStops_31.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'header label - visible with data', 'distance': 'inline label - always visible', 'angle': 'no label', });
lyr_CBTGPCSuggestedStopPop_32.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_CBTGBCStopPop10Min_33.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Changedstopscsv_34.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', 'Diff': 'inline label - always visible', '__Diff': 'header label - always visible', });
lyr_StopswithLimitedCoverage_35.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', });
lyr_CBTGBCProposedStopPop_36.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_CBTGBCProposedStopPopDissolved_37.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_CBTGPCRtRecom_38.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', 'Drive Time': 'no label', 'Bus Time': 'no label', });
lyr_CBTGBTProposedStops_39.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', 'Drive Time': 'no label', 'Bus Time': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_RouteCBTGPCMtrs_40.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'header label - visible with data', });
lyr_StopsCBTGPC_41.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_CBTGPCRWI_42.set('fieldLabels', {'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Pop': 'inline label - always visible', });
lyr_ProposedrouteRWI_43.set('fieldLabels', {'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'POI': 'inline label - always visible', });
lyr_ProposedrouteRWI_43.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});