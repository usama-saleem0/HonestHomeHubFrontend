import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import { user_color } from "../../utils/color";

import './progress.css'

export const Progress_Bar = ({progressValue}) => {
    return <ProgressBar
        className="wrapper_class"
        customLabelStyles={{ backgroundColor: user_color,fontSize:10 }} completed={progressValue} 
        bgColor={user_color}
        height="13px"
        
        />;
        
};