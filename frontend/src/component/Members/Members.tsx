import React, { FunctionComponent } from "react";
import {Button,Paper} from "@material-ui/core";
import {UploadModal} from "../Photos/UploadModal";
import { useState } from "react";

export const  Members: React.FunctionComponent = () => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);


    let buttonStyle = {
        minWidth: 64, // 数値は"64px"のように、pxとして扱われます
        lineHeight: "32px",
        borderRadius: 4,
        border: "none",
        padding: "0 40px",
        color: "#fff",
        background: "#639"
   };
 
  
    return (
        // <div className="App-header"> Members
        <div > Members
        <Paper
            style={buttonStyle}
            //css={styles.card}
            elevation={3}
        ></Paper>
        {open && <UploadModal open2={open} handleClose={handleClose} />}
        <Button style={{ color: "#FFFFFF" }} />{' '}
        </div>
    )
   

}