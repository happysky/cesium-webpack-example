import { Ion, Viewer, createWorldTerrain, createOsmBuildings, Cartesian3, Math, UrlTemplateImageryProvider } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import appStatus from "./status";
import amap from "./amap";
import "../src/css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
  // terrainProvider: createWorldTerrain()
});
appStatus.viewer = viewer;

// Add Cesium OSM Buildings, a global 3D buildings layer.
// viewer.scene.primitives.add(createOsmBuildings());   

// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination : Cartesian3.fromDegrees(116.397945, 39.90817, 400),
  orientation : {
    heading : Math.toRadians(0.0),
    pitch : Math.toRadians(-90.0),
  }
});


amap.init();

  