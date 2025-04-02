import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import ControlsContext from "../ControlsContext";
import XYZRSlider from "./XYZRSlider";
import CircleControls from "./CircleControls";
import SphereControls from "./SphereControls";
import { LineControls } from "./LineControls";
import RectangleControls from "./RectangleControls";
import CuboidControls from "./CuboidControls";
import ProjectionControls from "./ProjectionControls";

export const ShapeControls = () => {
    const {
        isPoint, setIsPoint, 
        isCircle, setIsCircle,
        baseR,setBaseR,
        pointX,setPointX,
        pointY,setPointY,
        pointZ,setPointZ,
        isSphere,setIsSphere,
        isRectangle,setIsRectangle,
        isCuboid, setIsCuboid,
        innerLine,setInnerLine,
        surfaceLine,setSurfaceLine,
        outerLine,setOuterLine,
        cuboidX, setCuboidX,
        cuboidY, setCuboidY,
        cuboidZ, setCuboidZ,
        cuboidW, setCuboidW,
        cuboidH, setCuboidH,
        cuboidD, setCuboidD,
        cuboidN, setCuboidN,
    } = useContext(ControlsContext);

    return (
        <Stack
            sx={{
                width: "15vw",
                height: "98vh",
                overflowY: "scroll"
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
            <Accordion
                expanded={isRectangle}
                onChange={() => setIsRectangle(!isRectangle)}
            >
                <AccordionSummary>
                    Rectangle
                </AccordionSummary>
                <AccordionDetails>
                    <RectangleControls />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={isCuboid}
                onChange={() => setIsCuboid(!isCuboid)}
            >
                <AccordionSummary>
                    Cuboid
                </AccordionSummary>
                <AccordionDetails>
                    <CuboidControls />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    Line Controls
                </AccordionSummary>
                <AccordionDetails>
                    <LineControls />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    Shape Controls
                </AccordionSummary>
                <AccordionDetails>
                    <ProjectionControls />
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
}

export default ShapeControls;