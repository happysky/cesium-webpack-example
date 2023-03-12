import { UrlTemplateImageryProvider } from "cesium";
import appStatus from "./status";


const init = ()=>{
    const viewer = appStatus.viewer;
    
    const layer = new UrlTemplateImageryProvider({
        url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
        minimumLevel: 4,
        maximumLevel: 18
    
    })
    viewer.imageryLayers.addImageryProvider(layer);
    
    //2.Cesium加载高德影像
    const imgLayer = new UrlTemplateImageryProvider({
        url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
        minimumLevel: 3,
        maximumLevel: 18
    })
    viewer.imageryLayers.addImageryProvider(imgLayer);
    
    //3.Cesium加载注记要素
    const annLayer = new UrlTemplateImageryProvider({
        url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
        minimumLevel: 3,
        maximumLevel: 18
    })
    viewer.imageryLayers.addImageryProvider(annLayer);
}

export default {
    init
}