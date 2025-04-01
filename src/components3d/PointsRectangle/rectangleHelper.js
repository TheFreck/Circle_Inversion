export const getPositions = (x1, x2, y1, y2, z, n, baseR, cb) => {
    const positions = [];
    for (let i = 0; i <= n; i++) {
        const stepX = (x2 - x1) / n;
        const stepY = (y2 - y1) / n;
        const red = Math.floor((Math.cos(i) + 1) * 95 + 50);
        const green = Math.floor((Math.sin(i) + 1) * 70 + 50);
        const blue = Math.floor((Math.tan(i) + 1) * 50 + 35);

        const innerP1 = { x: x1 + i * stepX, y: y1, z: z, red, green, blue };
        const innerP2 = { x: x1, y: y1 + i * stepY, z: z, red, green, blue };
        const innerP3 = { x: x2 - i * stepX, y: y2, z: z, red, green, blue };
        const innerP4 = { x: x2, y: y2 - i * stepY, z: z, red, green, blue };

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

        const R = Math.sqrt(innerP1.x * innerP1.x + innerP1.y * innerP1.y + innerP1.z * innerP1.z);

        const surfaceP1 = {
            x: (R / baseR) * outerP1.x,
            y: (R / baseR) * outerP1.y,
            z: (R / baseR) * outerP1.z
        }
        const surfaceP2 = {
            x: (R / baseR) * outerP2.x,
            y: (R / baseR) * outerP2.y,
            z: (R / baseR) * outerP2.z
        }
        const surfaceP3 = {
            x: (R / baseR) * outerP3.x,
            y: (R / baseR) * outerP3.y,
            z: (R / baseR) * outerP3.z
        }
        const surfaceP4 = {
            x: (R / baseR) * outerP4.x,
            y: (R / baseR) * outerP4.y,
            z: (R / baseR) * outerP4.z
        }

        positions.push({
            p1: { innerP1, surfaceP1, outerP1 },
            p2: { innerP2, surfaceP2, outerP2 },
            p3: { innerP3, surfaceP3, outerP3 },
            p4: { innerP4, surfaceP4, outerP4 }
        });
    }
    cb(positions);
}

export default {
    getPositions
};