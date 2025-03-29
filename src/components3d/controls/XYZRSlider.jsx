import { Box, Slider, Stack, Typography } from "@mui/material";

export const XYZRSlider = ({ x, y, z, setX, setY, setZ, r, continuous }) => {

    return (
        <Stack
            spacing={2}
            direction="column"
            // sx={{
            //     width: "30vw",
            //     height: "20vh",
            //     margin: "5vh 0"
            // }}
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
                    onChange={(ex) => setX(continuous ? ex.target.value / 200 : ex.target.value)}
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
                    onChange={ey => setY(continuous ? ey.target.value / 200 : ey.target.value)}
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
                    onChange={ez => setZ(continuous ? ez.target.value / 200  : ez.target.value)}
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

export default XYZRSlider;