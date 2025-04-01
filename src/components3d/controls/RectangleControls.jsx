import { Slider, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ControlsContext from "../ControlsContext";

export const RectangleControls = () => {
    const {
        rectangleX, setRectangleX,
        rectangleY, setRectangleY,
        rectangleZ, setRectangleZ,
        rectangleW, setRectangleW,
        rectangleH, setRectangleH,
        rectangleN, setRectangleN,
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
                id="Center-X"
                value={rectangleX}
                onChange={x => setRectangleX(x.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <Typography>
                Center Y
            </Typography>
            <Slider
                label="Center Y"
                value={rectangleY}
                onChange={y => setRectangleY(y.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <Typography>
                Center Z
            </Typography>
            <Slider
                label="Center Z"
                value={rectangleZ}
                onChange={z => setRectangleZ(z.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <Typography>
                Width
            </Typography>
            <Slider
                label="Width"
                value={rectangleW}
                onChange={w => setRectangleW(w.target.value)}
                valueLabelDisplay="on"
                min={1}
                max={baseR}
            />
            <Typography>
                Height
            </Typography>
            <Slider
                label="Height"
                value={rectangleH}
                onChange={h => setRectangleH(h.target.value)}
                valueLabelDisplay="on"
                min={1}
                max={baseR}
            />
            <TextField
                label="N Points"
                value={rectangleN}
                onChange={n => setRectangleN(n.target.value)}
            />
        </Stack>
    )
}

export default RectangleControls;