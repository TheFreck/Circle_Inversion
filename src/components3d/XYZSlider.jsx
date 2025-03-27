import { Box, Slider, Stack, Typography } from "@mui/material";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

export const XYZSlider = ({ x, y, z, setX, setY, setZ, r }) => {

    return (
        <Stack
            spacing={2}
            direction="column"
            sx={{
                border: "solid",
                width: "30vw",
                height: "20vh",
                margin: "5vh 0"
            }}
        >
            <Stack
                spacing={2}
                direction="row"
            >
                <Typography
                >
                    <b>X</b>
                </Typography>
                <Slider
                    value={x}
                    onChange={(ex) => setX(ex.target.value)}
                    valueLabelDisplay="on"
                    min={-r}
                    max={r}
                />
                <Typography
                    variant="h4"
                >
                    <b>X</b>
                </Typography>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
            >
                <Typography
                >
                    <b>Y</b>
                </Typography>
                <Slider
                    value={y}
                    onChange={ey => setY(ey.target.value)}
                    valueLabelDisplay="on"
                    min={-r}
                    max={r}
                />
                <Typography
                    variant="h4"
                >
                    <b>Y</b>
                </Typography>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
            >
                <Typography>
                    <b>Z</b>
                </Typography>
                <Slider
                    value={z}
                    onChange={ez => setZ(ez.target.value)}
                    valueLabelDisplay="on"
                    min={-r}
                    max={r}
                />
                <Typography
                    variant="h4"
                >
                    <b>Z</b>
                </Typography>
            </Stack>
        </Stack>
    )
}

export default XYZSlider;