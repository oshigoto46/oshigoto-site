import { useState, useContext, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export  const UploadModal = ({ open2, handleClose }) => {
    const [open, setOpen] = useState(false);
    //const handleStateChange = ():void => setOpen(true);
    return (
      <div>
                <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                    Add Image
                </Button>
                <DropzoneDialog
                    acceptedFiles={['image/*']}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                    maxFileSize={5000000}
                    open={open}
                    onClose={() => setOpen(false)}
                    onSave={(files) => {
                    console.log('Files:', files);
                    setOpen(false);
                    }}
                    showPreviews={true}
                    showFileNamesInPreview={true}
                />

                {/* <Modal open={open2} onClose={handleClose}>
                    <div className="modal__container">
                        <div className="modal__body">
                                Open !! Open !　! Open !! Open !!
                                Open !! Open !　! Open !! Open !!　
                                Open !! Open !　! Open !! Open !!
                        </div>
                    </div>
                </Modal> */}
        </div>

    );

}