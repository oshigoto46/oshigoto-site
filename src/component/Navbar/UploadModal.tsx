import { useState, useContext, useEffect } from "react";
import Modal from "@material-ui/core/Modal";

export  const UploadModal = ({ open, handleClose }) => {

    return (
        <Modal open={open} onClose={handleClose}>
            <div className="modal__container">
                <div className="modal__body">
                
                        Open !! Open !　! Open !! Open !!
                        Open !! Open !　! Open !! Open !!　
                        Open !! Open !　! Open !! Open !!
                </div>
            </div>
        </Modal>

    );

}