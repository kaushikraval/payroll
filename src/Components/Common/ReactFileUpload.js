import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function FileUploadImg({
  onUpload,
  onSelect,
  onError,
  onClear,
  headerTemplate,
  itemTemplate,
  emptyTemplate,
  chooseOptions,
  uploadOptions,
  cancelOptions,
}) {
  return (
    <FileUpload
      name="demo[]"
      url="https://primefaces.org/primereact/showcase/upload.php"
      multiple
      accept="image/*"
      maxFileSize={1000000}
      onUpload={onUpload}
      onSelect={onSelect}
      onError={onError}
      onClear={onClear}
      headerTemplate={headerTemplate}
      itemTemplate={itemTemplate}
      emptyTemplate={emptyTemplate}
      chooseOptions={chooseOptions}
      uploadOptions={uploadOptions}
      cancelOptions={cancelOptions}
    />
  );
}
