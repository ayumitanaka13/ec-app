import React, { useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import { AddPhotoAlternate } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { storage } from "../../firebase/index";
import ImagePreview from "./ImagePreview";

const useStyles = makeStyles({
  icon: {
    height: 48,
    width: 48,
  },
});

const ImageArea = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteImage = useCallback(
    async (id) => {
      const ret = window.confirm("Do you want to delete this image?");
      if (!ret) {
        return false;
      } else {
        const newImages = props.images.filter((image) => image.id !== id);
        props.setImages(newImages);
        return storage.ref("images").child(id).delete();
      }
    },
    [props.images]
  );

  const uploadImage = useCallback(
    (e) => {
      // dispatch(showLoadingAction("uploading..."));
      const file = e.target.files;
      let blob = new Blob(file, { type: "image/jpeg" });

      // Generate random 16 digits strings
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");

      const uploadRef = storage.ref("images").child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL };
          props.setImages((prevState) => [...prevState, newImage]);
          // dispatch(hideLoadingAction());
        });
      });
      // .catch(() => {
      //   dispatch(hideLoadingAction());
      // });
    },
    [props.setImages]
  );

  return (
    <div>
      <div className="p-grid__list-images">
        {props.images.length > 0 &&
          props.images.map((image) => (
            <ImagePreview
              id={image.id}
              path={image.path}
              key={image.id}
              delete={deleteImage}
            />
          ))}
      </div>
      <div className="u-text-right">
        <span>Upload item photo</span>
        <IconButton className={classes.icon}>
          <AddPhotoAlternate />
          <input
            className="u-display-none"
            type="file"
            id="image"
            onChange={(e) => uploadImage(e)}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageArea;
