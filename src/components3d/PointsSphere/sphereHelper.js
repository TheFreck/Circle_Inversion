export const getPositions = (sphereX,sphereY,sphereZ,sphereR,baseR,n,cb) => {
    const positions = [];
    for(let i=-Math.PI; i<Math.PI; i+= Math.PI*2/n) {
        for(let j=-Math.PI; j<=Math.PI; j+=2*Math.PI/n) {
            const red = Math.floor((Math.cos(i)+1) * 95 + 50);
            const green = Math.floor((Math.sin(i)+1) * 70 + 50);
            const blue = Math.floor((Math.tan(i)+1) * 50 + 35);
            const innerPoint = {
                x : sphereR * Math.sin(i) * Math.cos(j) + sphereX,
                y : sphereR * Math.sin(i) * Math.sin(j) + sphereY,
                z : sphereR * Math.cos(i) + sphereZ,
                red,green,blue
            };
        
            const outerPoint = {
                x: (baseR*baseR*innerPoint.x)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                y: (baseR*baseR*innerPoint.y)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                z: (baseR*baseR*innerPoint.z)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                red, green, blue
            };
            const R = Math.sqrt(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z);

            const surfacePoint = {
                x: (R/baseR) * outerPoint.x,
                y: (R/baseR) * outerPoint.y,
                z: (R/baseR) * outerPoint.z,
                red,green,blue
            }
            positions.push({
                inner: innerPoint,
                surface: surfacePoint,
                outer: outerPoint
            });
        }
    }
    cb(positions);
}

export default {
    getPositions
}