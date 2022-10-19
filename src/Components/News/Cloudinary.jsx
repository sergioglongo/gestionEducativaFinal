import React from "react";
import { useState } from "react"
import axios from "axios";
import { Button } from "@mui/material";

function Cloudinary() {

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "mjaskrct")
    axios.post("https://api.cloudinary.com/v1_1/do9ddo9my/image/upload", formData
    ).then((res) => res.data.url)
  };

  return (
    <div className="App">
     <input type="file" onChange={(e) => {
      setImageSelected(e.target.files[0]);
      }}
      />
      <Button variant="outlined" onClick={uploadImage}>cargar imagen</Button>

    </div>
  );
}

export default App;

   