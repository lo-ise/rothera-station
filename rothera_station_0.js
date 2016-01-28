// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:32719",wgs84Center:{lat:-67.568522432,lon:-68.1233921729},proj:"+proj=utm +zone=19 +south +datum=WGS84 +units=m +no_defs",title:"rothera_station",baseExtent:[536333.887109,2504391.57562,538319.57973,2505561.20202],rotation:0,zShift:0.0,width:300.0,zExaggeration:1.5});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"rothera_dem_aoi"}));
