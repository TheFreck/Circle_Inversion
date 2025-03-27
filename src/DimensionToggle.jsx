import { Button } from "@mui/material"

export const DimensionToggle = ({dimensions,setDimensions}) => {
    return (
        <Button
            sx={{
                background: "green"
            }}
            variant="contained"
            onClick={() => setDimensions(!dimensions)}
        >
            {dimensions ? "2D" : "3D"}
        </Button>
    )
}