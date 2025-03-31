import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import ControlsContext from "../ControlsContext";
import XYZRSlider from "./XYZRSlider";
import CircleControls from "./CircleControls";
import SphereControls from "./SphereControls";

export const ShapeControls = () => {
    const {
        isPoint, 
        setIsPoint, 
        isCircle, 
        setIsCircle,
        baseR,
        setBaseR,
        pointX,
        setPointX,
        pointY,
        setPointY,
        pointZ,
        setPointZ,
        isSphere,
        setIsSphere,
    } = useContext(ControlsContext);

    return (
        <Stack
            sx={{
                width: "15vw"
            }}
        >
            <Accordion
                expanded={isPoint}
                onChange={() => setIsPoint(!isPoint)}
            >
                <AccordionSummary>
                    Point
                </AccordionSummary>
                <AccordionDetails>
                    <XYZRSlider
                        x={pointX}
                        y={pointY}
                        z={pointZ}
                        r={baseR}
                        setX={setPointX}
                        setY={setPointY}
                        setZ={setPointZ}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={isCircle}
                onChange={() => setIsCircle(!isCircle)}
            >
                <AccordionSummary>
                    Circle
                </AccordionSummary>
                <AccordionDetails>
                    <CircleControls />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={isSphere}
                onChange={() => setIsSphere(!isSphere)}
            >
                <AccordionSummary>
                    Sphere
                </AccordionSummary>
                <AccordionDetails>
                    <SphereControls />
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
}

export default ShapeControls;