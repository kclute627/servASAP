import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const FileDropForm = () => {
  const [serviceFiles, setServiceFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [docsServed, setDocsServed] = useState("");

  const commonDocuments = [
    "Summons",
    "Complaint",
    "Subpoena",
    "Subpoena to Testify",
    "Subpoena for Deposition",
    "Subpoena to Produce Documents",
    "Exhibits",
  ];

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "1rem .5rem",
        "& > *": {
          margin: theme.spacing(0.5),
        },
      },

      previewChip: {
        minWidth: 260,
        maxWidth: 410,
        backgroundColor: "#ededed",
      },
    })
  );

  const classes = useStyles();

  const handleChip = (text) => {
    if (docsServed.length === 0) {
      return setDocsServed(text);
    }

    setDocsServed(`${docsServed}; ${text}`);
  };

  return (
    <>
      <h3>Documents to Be Served</h3>
      <div className='form-group-span'></div>
      <div className='form-item' style={{ margin: 0 }}>
        <div style={{ width: "100%", marginTop: "1.25rem" }}>
          {/* //Make Clickable Chips With common Documents // then make field where you can add new Chips */}
          <h4>
            Common Documents - Click All That Apply or Start Typing Below{" "}
          </h4>
          <h5></h5>
          <Paper component='ul' className={classes.root}>
            {commonDocuments.map((doc, i) => (
              <Chip
                label={doc}
                color='primary'
                key={i}
                clickable
                onClick={() => handleChip(doc)}
              />
            ))}
          </Paper>
          <textarea
            style={{ width: "97%", height: "5rem", margin: "1rem 0" }}
            name=''
            id=''
            value={docsServed}
            placeholder='Documents To Be Served (As You Want Them To Appear on the Affidavit)'
            className='form-textarea'
            value={docsServed}
            onChange={(text) => setDocsServed(text.target.value)}
          ></textarea>
          <DropzoneArea
            className='dropZone'
            onChange={(files) => setServiceFiles(files)}
            dropzoneText='Drag or Click To Add All Service Documents'
            showPreviews={true}
            showPreviewsInDropzone={false}
            filesLimit={14}
            maxFileSize={5000000}
            useChipsForPreview
            previewGridProps={{ container: { spacing: 1, direction: "row" } }}
            previewChipProps={{ classes: { root: classes.previewChip } }}
            previewText='Documents For Service'
          />
          {/* {create TextForm Where I Can Name the Docuemt}  Also make user friendly for people who do not load documents   */}
        </div>
      </div>
      <h3 style={{ marginTop: "2rem" }}>
        Other Docs - Pictures, Signed Proofs, etc.
      </h3>
      <div className='form-group-span' style={{ marginBottom: "2rem" }}></div>
      <div className='form-item' style={{ margin: 0 }}>
        <DropzoneArea
          className='dropZone'
          onChange={(files) => setServiceFiles(files)}
          dropzoneText='Drag or Click To Add Other Docs'
          showPreviews={true}
          showPreviewsInDropzone={false}
          filesLimit={3}
          maxFileSize={5000000}
          useChipsForPreview
          previewGridProps={{ container: { spacing: 1, direction: "row" } }}
          previewChipProps={{ classes: { root: classes.previewChip } }}
          previewText='Other Documents'
        />
      </div>
    </>
  );
};

export default FileDropForm;
