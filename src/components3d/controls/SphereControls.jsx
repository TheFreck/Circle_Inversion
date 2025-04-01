import { Slider, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ControlsContext from "../ControlsContext";

export const SphereControls = () => {
    const {
        sphereX, setSphereX,
        sphereY, setSphereY,
        sphereZ, setSphereZ,
        sphereR, setSphereR,
        sphereN, setSphereN,
        baseR
    } = useContext(ControlsContext);

    return (
        <Stack
            spacing={1}
            sx={{
                padding: "1vh 1vw 0 0"
            }}
        >
            <TextField
                label="Center X"
                value={sphereX}
                onChange={(x) => setSphereX(x.target.value)}
            />
            <Slider
                id="center-X"
                value={sphereX}
                onChange={x => setSphereX(x.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <TextField
                label="Center Y"
                value={sphereY}
                onChange={y => setSphereY(y.target.value)}
            />
            <Slider
                label="center Y"
                value={sphereY}
                onChange={y => setSphereY(y.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <TextField
                label="Center Z"
                value={sphereZ}
                onChange={z => setSphereZ(z.target.value)}
            />
            <Slider
                label="center Z"
                value={sphereZ}
                onChange={z => setSphereZ(z.target.value)}
                valueLabelDisplay="on"
                min={-baseR}
                max={baseR}
            />
            <TextField
                label="Radius"
                value={sphereR}
                onChange={r => setSphereR(r.target.value)}
            />  
            <Slider
                label="radius"
                value={sphereR}
                onChange={r => setSphereR(r.target.value)}
                valueLabelDisplay="on"
                min={1}
                max={baseR}
            />
            <TextField
                label="N Points"
                value={sphereN}
                onChange={n => setSphereN(n.target.value)}
            />
        </Stack>
    )
}

export default SphereControls;