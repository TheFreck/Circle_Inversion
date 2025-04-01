import { useContext } from "react"
import ControlsContext from "../ControlsContext"
import { Checkbox, FormControlLabel, Stack } from "@mui/material";

export const LineControls = () => {
    const {
        innerLines, setInnerLines,
        surfaceLines, setSurfaceLines,
        outerLines, setOuterLines
    } = useContext(ControlsContext);

    return (
        <Stack
            spacing={1}
            sx={{
                padding: "1vh 1vw 0 0"
            }}
        >
            <FormControlLabel
                label="Inner Line"
                control={<Checkbox 
                    checked={innerLines}
                    onChange={() => setInnerLines(!innerLines)}
                />}
            />
            <FormControlLabel
                label="Surface Line"
                control={<Checkbox
                    checked={surfaceLines}
                    onChange={() => setSurfaceLines(!surfaceLines)}
                />}
            />
            <FormControlLabel
                label="Outer Line"
                control={<Checkbox
                    checked={outerLines}
                    onChange={() => setOuterLines(!outerLines)}
                />}
            />
        </Stack>
    );
}

export default LineControls;