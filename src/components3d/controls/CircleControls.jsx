import { Slider, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ControlsContext from "../ControlsContext";
import { Label } from "@mui/icons-material";


export const CircleControls = () => {
    const {
        circleX, setCircleX, 
        circleY, setCircleY, 
        circleZ, setCircleZ, 
        circleR, setCircleR,
        rotateCX, setRotateCX,
        rotateCY, setRotateCY,
        rotateCZ, setRotateCZ,
        baseR
    } = useContext(ControlsContext);

    return (
        <Stack
            spacing={1}
            sx={{
                padding: "1vh 1vw 0 0"
            }}
        >
            <Typography>
                Center X
            </Typography>
            <Slider
                id="center-X"
                value={circleX}
                onChange={x => setCircleX(x.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            {/* <Typography>
                Rotate X
            </Typography>
            <Slider
                label="rotate X"
                value={rotateCX}
                onChange={(rx) => setRotateCX(rx.target.value)}
                valueLabelDisplay="on"
                min={0}
                max={100}
            /> */}
            <Typography>
                Center Y
            </Typography>
            <Slider
                label="center Y"
                value={circleY}
                onChange={y => setCircleY(y.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            {/* <Typography>
                Rotate Y
            </Typography>
            <Slider
                label="rotate Y"
                value={rotateCY}
                onChange={(ry) => setRotateCY(ry.target.value)}
                valueLabelDisplay="on"
                min={0}
                max={100}
            /> */}
            <Typography>
                Center Z
            </Typography>
            <Slider
                label="center Z"
                value={circleZ}
                onChange={z => setCircleZ(z.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            {/* <Typography>
                Rotate Z
            </Typography>
            <Slider
                label="rotate Z"
                value={rotateCZ}
                onChange={(rz) => setRotateCZ(rz.target.value)}
                valueLabelDisplay="on"
                min={0}
                max={100}
            /> */}
            <Typography>
                Radius
            </Typography>
            <Slider
                label="radius"
                value={circleR}
                onChange={r => setCircleR(r.target.value)}
                valueLabelDisplay="on"
                min={1}
                max={baseR}
            />
        </Stack>
    )
}

export default CircleControls;