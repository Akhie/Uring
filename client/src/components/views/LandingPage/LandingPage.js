import React from 'react'
import { FaCode } from "react-icons/fa";
import Top from "./Subsections/top.js";
import SubSec3 from "./Subsections/subsection3.js"
import Bottom from "./Subsections/Bottom.js";

function LandingPage() {
    return (
        <>
           <Top></Top>
           {/* another subsec - dyundi ka */}
           <SubSec3></SubSec3>
           <Bottom></Bottom>
        </>
    )
}

export default LandingPage
