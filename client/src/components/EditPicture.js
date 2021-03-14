import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import useUploadImage from "../hooks/useUplaodImage";
import useGetSrcData from "../hooks/useGetSrcData";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Snackbar,
} from "@material-ui/core";
import defaultUserImage from "../assets/defaultUserImage.png";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      height: "200px",
      width: "200px",
      margin: "auto",
      borderRadius: "50%",
    },
    uploadSection: {
      height: theme.spacing(10),
      width: theme.spacing(50),
      outline: "none",
      border: "3px dotted #ccc",
      "& p": {
        color: "#999",
        textAlign: "center",
      },
    },
  })
);

const EditPicture = ({ open, onClose, selectedValue }) => {
  const classes = useStyles();

  const [src, setSrc] = useState(null);
  const [err, setErr] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const uploadImage = useUploadImage();
  const getSrcData = useGetSrcData();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };

  const onDrop = useCallback(
    async (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        setErr("Invalid file type.");
        setSnackBarOpen(true);
        return;
      }
      // Do something with the files
      const res = await uploadImage(acceptedFiles[0]);
      if (res.key) {
        const response = await getSrcData(res.key);
        if (response.srcData) setSrc(response.srcData);
        else setErr(response);
      } else {
        setErr(res);
        setSnackBarOpen(true);
      }
    },
    [uploadImage, getSrcData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Edit Profile Picture</DialogTitle>
      <List>
        <ListItem>
          <img
            src={src ? src : defaultUserImage}
            alt="profileImage"
            className={classes.img}
          />
        </ListItem>
        <ListItem button autoFocus>
          <div className={classes.uploadSection} {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <>
                <p>Drag 'n' drop some files here.., or click to select files</p>
              </>
            )}
          </div>
        </ListItem>
        <ListItem>
          <Snackbar
            open={snackBarOpen}
            onClose={handleSnackBarClose}
            message={err}
            autoHideDuration={4000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default EditPicture;
