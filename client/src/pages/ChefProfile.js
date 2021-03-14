import React, { useState } from "react";
import defaultUserImage from "../assets/defaultUserImage.png";
import DialogControl from "../components/Dialogs/DialogControl";

const ChefProfile = () => {
  const [open, setOpen] = useState(false);
  const [control, setControl] = useState(null);

  const handleClickOpen = (e) => {
    setOpen(true);
    setControl(e.target.name);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div>
      <img
        src={defaultUserImage}
        onClick={handleClickOpen}
        name="image"
        alt="profile"
        style={{ height: "100px", width: "100px", cursor: "pointer" }}
      />
      <input
        style={{ cursor: "pointer" }}
        onClick={handleClickOpen}
        name="location"
        value="mexico"
        readOnly
      />
      <DialogControl open={open} onClose={handleClose} control={control} />
    </div>
  );
};

export default ChefProfile;
