export const getPositions = (x1,x2,y1,y2,z1,z2,n,baseR,cb) => {
    const positions = [];
    for(let i=0; i<=n; i++) {
        for(let j=0; j<=n; j++) {
            const red = Math.floor((Math.cos(i)+1) * 95 + 50);
            const green = Math.floor((Math.sin(i)+1) * 70 + 50);
            const blue = Math.floor((Math.tan(i)+1) * 50 + 35);
            const stepX = (x2-x1)/n;
            const stepY = (y2-y1)/n;
            const stepZ = (z2-z1)/n;

            const innerP1 = {
                x: x1+i*stepX,
                y: y1+j*stepY,
                z: z1,
                red:255,green:0,blue:0
            }
            const innerP2 = {
                x: x1+i*stepX,
                y: y1,
                z: z1+j*stepZ,
                red:255,green:100,blue:0
            }
            const innerP3 = {
                x: x1,
                y: y1+i*stepY,
                z: z1+j*stepZ,
                red:255,green:255,blue:0
            }
            const innerP4 = {
                x: x2-i*stepX,
                y: y2-j*stepY,
                z: z2,
                red:0,green:255,blue:0
            }
            const innerP5 = {
                x: x2-i*stepX,
                y: y2,
                z: z2-j*stepZ,
                red:0,green:0,blue:255
            }
            const innerP6 = {
                x: x2,
                y: y2-i*stepY,
                z: z2-j*stepZ,
                red:255,green:0,blue:255
            }

            const outerP1 = {
                x: (baseR * baseR * innerP1.x) / (innerP1.x * innerP1.x + innerP1.y * innerP1.y + innerP1.z * innerP1.z),
                y: (baseR * baseR * innerP1.y) / (innerP1.x * innerP1.x + innerP1.y * innerP1.y + innerP1.z * innerP1.z),
                z: (baseR * baseR * innerP1.z) / (innerP1.x * innerP1.x + innerP1.y * innerP1.y + innerP1.z * innerP1.z),
                red, green, blue
            }
            const outerP2 = {
                x: (baseR * baseR * innerP2.x) / (innerP2.x * innerP2.x + innerP2.y * innerP2.y + innerP2.z * innerP2.z),
                y: (baseR * baseR * innerP2.y) / (innerP2.x * innerP2.x + innerP2.y * innerP2.y + innerP2.z * innerP2.z),
                z: (baseR * baseR * innerP2.z) / (innerP2.x * innerP2.x + innerP2.y * innerP2.y + innerP2.z * innerP2.z),
                red, green, blue
            }
            const outerP3 = {
                x: (baseR * baseR * innerP3.x) / (innerP3.x * innerP3.x + innerP3.y * innerP3.y + innerP3.z * innerP3.z),
                y: (baseR * baseR * innerP3.y) / (innerP3.x * innerP3.x + innerP3.y * innerP3.y + innerP3.z * innerP3.z),
                z: (baseR * baseR * innerP3.z) / (innerP3.x * innerP3.x + innerP3.y * innerP3.y + innerP3.z * innerP3.z),
                red, green, blue
            }
            const outerP4 = {
                x: (baseR * baseR * innerP4.x) / (innerP4.x * innerP4.x + innerP4.y * innerP4.y + innerP4.z * innerP4.z),
                y: (baseR * baseR * innerP4.y) / (innerP4.x * innerP4.x + innerP4.y * innerP4.y + innerP4.z * innerP4.z),
                z: (baseR * baseR * innerP4.z) / (innerP4.x * innerP4.x + innerP4.y * innerP4.y + innerP4.z * innerP4.z),
                red, green, blue
            }
            const outerP5 = {
                x: (baseR * baseR * innerP5.x) / (innerP5.x * innerP5.x + innerP5.y * innerP5.y + innerP5.z * innerP5.z),
                y: (baseR * baseR * innerP5.y) / (innerP5.x * innerP5.x + innerP5.y * innerP5.y + innerP5.z * innerP5.z),
                z: (baseR * baseR * innerP5.z) / (innerP5.x * innerP5.x + innerP5.y * innerP5.y + innerP5.z * innerP5.z),
                red, green, blue
            }
            const outerP6 = {
                x: (baseR * baseR * innerP6.x) / (innerP6.x * innerP6.x + innerP6.y * innerP6.y + innerP6.z * innerP6.z),
                y: (baseR * baseR * innerP6.y) / (innerP6.x * innerP6.x + innerP6.y * innerP6.y + innerP6.z * innerP6.z),
                z: (baseR * baseR * innerP6.z) / (innerP6.x * innerP6.x + innerP6.y * innerP6.y + innerP6.z * innerP6.z),
                red, green, blue
            }

            const R1 = Math.sqrt(innerP1.x * innerP1.x + innerP1.y * innerP1.y + innerP1.z * innerP1.z);
            const R2 = Math.sqrt(innerP2.x * innerP2.x + innerP2.y * innerP2.y + innerP2.z * innerP2.z);
            const R3 = Math.sqrt(innerP3.x * innerP3.x + innerP3.y * innerP3.y + innerP3.z * innerP3.z);
            const R4 = Math.sqrt(innerP4.x * innerP4.x + innerP4.y * innerP4.y + innerP4.z * innerP4.z);
            const R5 = Math.sqrt(innerP5.x * innerP5.x + innerP5.y * innerP5.y + innerP5.z * innerP5.z);
            const R6 = Math.sqrt(innerP6.x * innerP6.x + innerP6.y * innerP6.y + innerP6.z * innerP6.z);

            const surfaceP1 = {
                x: (R1 / baseR) * outerP1.x,
                y: (R1 / baseR) * outerP1.y,
                z: (R1 / baseR) * outerP1.z,
                red,green,blue
            }
            const surfaceP2 = {
                x: (R2 / baseR) * outerP2.x,
                y: (R2 / baseR) * outerP2.y,
                z: (R2 / baseR) * outerP2.z,
                red,green,blue
            }
            const surfaceP3 = {
                x: (R3 / baseR) * outerP3.x,
                y: (R3 / baseR) * outerP3.y,
                z: (R3 / baseR) * outerP3.z,
                red,green,blue
            }
            const surfaceP4 = {
                x: (R4 / baseR) * outerP4.x,
                y: (R4 / baseR) * outerP4.y,
                z: (R4 / baseR) * outerP4.z,
                red,green,blue
            }
            const surfaceP5 = {
                x: (R5 / baseR) * outerP5.x,
                y: (R5 / baseR) * outerP5.y,
                z: (R5 / baseR) * outerP5.z,
                red,green,blue
            }
            const surfaceP6 = {
                x: (R6 / baseR) * outerP6.x,
                y: (R6 / baseR) * outerP6.y,
                z: (R6 / baseR) * outerP6.z,
                red,green,blue
            }

            positions.push({
                p1: { inner:innerP1, surface:surfaceP1, outer:outerP1 },
                p2: { inner:innerP2, surface:surfaceP2, outer:outerP2 },
                p3: { inner:innerP3, surface:surfaceP3, outer:outerP3 },
                p4: { inner:innerP4, surface:surfaceP4, outer:outerP4 },
                p5: { inner:innerP5, surface:surfaceP5, outer:outerP5 },
                p6: { inner:innerP6, surface:surfaceP6, outer:outerP6 }
            });
        }

    }
    cb(positions);
}