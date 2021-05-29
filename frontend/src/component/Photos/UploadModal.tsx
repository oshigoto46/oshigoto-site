import { useState, useContext, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import axios from 'axios';




export  const UploadModal = ({ open2, handleClose }) => {

    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState([]as any);

    const [state, setState] = useState(false);
    //https://github.com/oshigoto46/oshigoto-site/issues/14
    //もうすこしステートを細かくする　ステータスコード

    let formData = new FormData();

    useEffect(() => {
        if (files.length > 0) {
            for (var i in files) {
                formData.append('images[]', files[i]);
            }
            uploadPesonetFile(formData);
        }
      }, [files]);

    const  uploadPesonetFile = async (files: FormData)  => {
        return axios.post('http://localhost:3030/api/v1/photos',
              files, 
              {  headers: { 'Content-Type': 'multipart/form-data' }
              }
        )
        .then(
            // https://github.com/oshigoto46/oshigoto-site/issues/14
            // state管理とか書く、エラー画面表示
         ).catch(
            //https://github.com/oshigoto46/oshigoto-site/issues/14
            // state管理とか書く、エラー画面表示
         )
    }

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
                        setFiles(files);
                    //   axios.get(`http://localhost:3030/api/v1/photos`)
                    //     .then(res => {
                    //      console.log(res.data);
                    //     })
                    // console.log('Files:', files);

                    setOpen(false);
                    }}
                    showPreviews={true}
                    showFileNamesInPreview={true}
                />
        </div>

    );

}