import { Slider, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ControlsContext from "../ControlsContext";

export const CuboidControls = () => {
    const {
        cuboidX, setCuboidX,
        cuboidY, setCuboidY,
        cuboidZ, setCuboidZ,
        cuboidW, setCuboidW,
        cuboidH, setCuboidH,
        cuboidD, setCuboidD,
        cuboidN, setCuboidN,
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
                value={cuboidX}
                onChange={x => setCuboidX(x.target.value)}
                onDoubleClick={() => setCuboidX(0)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <Typography>
                Center Y
            </Typography>
            <Slider
                label="Center Y"
                value={cuboidY}
                onChange={y => setCuboidY(y.target.value)}
                onDoubleClick={() => setCuboidY(0)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <Typography>
                Center Z
            </Typography>
            <Slider
                label="Center Z"
                value={cuboidZ}
                onChange={z => setCuboidZ(z.target.value)}
                onDoubleClick={() => setCuboidZ(0)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <Typography>
                Width
            </Typography>
            <Slider
                label="Width"
                value={cuboidW}
                onChange={w => setCuboidW(w.target.value)}
                valueLabelDisplay="on"
                min={1}
                max={baseR}
            />
            <Typography>
                Height
            </Typography>
            <Slider
                label="Height"
                value={cuboidH}
                onChange={h => setCuboidH(h.target.value)}
                valueLabelDisplay="on"
                min={1}
                max={baseR}
            />
            <Typography>
                Depth
            </Typography>
            <Slider
                label="Depth"
                value={cuboidD}
                onChange={d => setCuboidD(d.target.value)}
                valueLabelDisplay="on"
                min={1}
                max={baseR}
            />
            <TextField
                label="N Points"
                value={cuboidN}
                onChange={n => setCuboidN(n.target.value)}
            />
        </Stack>
    )
}

export default CuboidControls;