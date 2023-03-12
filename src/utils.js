import { Cartesian2, Ellipsoid } from 'cesium'
// 获取当前地图中心的经纬度
export function getCenterPosition(viewer) {
    let centerResult = viewer.camera.pickEllipsoid(
        new Cartesian2(
            viewer.canvas.clientWidth / 2,
            viewer.canvas.clientHeight / 2,
        ),
    )
    let curPosition = Ellipsoid.WGS84.cartesianToCartographic(centerResult);
    let curLongitude = (curPosition.longitude * 180) / Math.PI;
    let curLatitude = (curPosition.latitude * 180) / Math.PI;

    const center = {
        lon: curLongitude,
        lat: curLatitude,
    }
    console.log(center);
    
    return center
}