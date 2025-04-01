import { Slider, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ControlsContext from "../ControlsContext";

export const CircleControls = () => {
    const {
        circleX, setCircleX, 
        circleY, setCircleY, 
        circleZ, setCircleZ, 
        circleR, setCircleR,
        circleN, setCircleN,
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
            <TextField
                label="N Points"
                value={circleN}
                onChange={n => setCircleN(n.target.value)}
            />
        </Stack>
    )
}

export default CircleControls;