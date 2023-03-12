import { UrlTemplateImageryProvider } from "cesium";
import appStatus from "./status";


const init = () => {
    const viewer = appStatus.viewer;

    const layer = new UrlTemplateImageryProvider({
        url: 'https://p2.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=229',
        customTags: {
            sx: function (imageryProvider, x, y, level) {
                return x >> 4;
            },
            sy: function (imageryProvider, x, y, level) {
                return ((1 << level) - y) >> 4;
            }
        }

    })
    viewer.imageryLayers.addImageryProvider(layer);
}

export default {
    init
}