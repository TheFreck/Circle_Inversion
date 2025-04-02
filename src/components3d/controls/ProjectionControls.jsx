import { Checkbox, FormControlLabel, Slider, Stack, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ControlsContext from "../ControlsContext";

export const ProjectionControls = () => {
    const {
        isInner, setIsInner,
        isSurface, setIsSurface,
        isOuter, setIsOuter
    } = useContext(ControlsContext);


    return (
        <Stack
            spacing={1}
        >
            <FormControlLabel
                label="Inner Shape"
                control={
                    <Checkbox
                        checked={isInner}    
                        onChange={() => setIsInner(!isInner)}
                    />
                }
            />
            <FormControlLabel
                label="Surface Shape"
                control={
                    <Checkbox
                        checked={isSurface}    
                        onChange={() => setIsSurface(!isSurface)}
                    />
                }
            />
            <FormControlLabel
                label="Outer Shape"
                control={
                    <Checkbox
                        checked={isOuter}    
                        onChange={() => setIsOuter(!isOuter)}
                    />
                }
            />
        </Stack>
    )
}

export default ProjectionControls;