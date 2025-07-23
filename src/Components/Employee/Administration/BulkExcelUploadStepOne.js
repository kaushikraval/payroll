import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import ReactGroupSelect from '../../Common/ReactGroupSelect';
import { Tag } from 'primereact/tag';
import FileUploadImg from '../../Common/ReactFileUpload';
import UploadImg from '../../../Assets/images/Upload-icon.svg';
import DownloadIcon from '../../../Assets/images/downloadicon-blue.svg';
import DownArrowBtn from '../../../Assets/images/down-arrow-btn.svg';
import Right from '../../../Assets/images/right.svg';

export default function BulkExcelUploadStepOne() {
  const fileUploadRef = useRef();
  const toast = useRef(null);
  const [totalSize, setTotalSize] = useState(0);
  const [showFieldInfo, setShowFieldInfo] = useState(false);
  const headerTemplate = options => {
    const { className, chooseButton, cancelButton } = options;
    return (
      <div
        className={className}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };
  const onTemplateSelect = e => {
    let _totalSize = totalSize;
    e?.files.FileList?.map(file => (_totalSize += file.size));
    setTotalSize(_totalSize);
  };

  const onTemplateUpload = e => {
    let _totalSize = 0;
    e.files.forEach(file => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: '40%' }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="outer_img_border" for="img_upload">
        <div className="d-flex align-items-center flex-column">
          <img src={UploadImg} className="me-2" alt="FilterImage" />
          <h6
            style={{ fontWeight: '500', color: '#000' }}
            className="mt-3 mb-2"
          >
            Drag & drop files or Browse
          </h6>
          <p className="mb-0">
            Supported formates: Only XLS, XLSX files are accepted.
          </p>
        </div>
      </div>
    );
  };

  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className:
      'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  };
  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className:
      'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };
  const [excelType, setexcelType] = useState([]);
  const excelTypeOption = [
    {
      label: 'Employee Info',
      code: 'EI',
      items: [
        { label: 'Add Employee Import', value: 'Add Employee Import' },
        {
          label: 'Emergency Contact Details',
          value: 'Emergency Contact Details',
        },
        { label: 'Family Details', value: 'Family Details' },
        { label: 'Employee Bank Details', value: 'Employee Bank Details' },
        { label: 'Education Details', value: 'Education Details' },
      ],
    },
    {
      label: 'Address',
      code: 'Addr',
      items: [
        { label: 'Present Address', value: 'Present Address' },
        { label: 'Permenent Address', value: 'Permenent Address' },
      ],
    },
  ];
  const excelTypeHandleChange = e => {
    setexcelType(e.value);
  };
  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Employees</b>
          </li>
          <li>
            <b>Administration</b>
          </li>
          <li>
            <b>
              <Link to="/employees/administration/bulk-excel-upload">
                Import Excel
              </Link>
            </b>
          </li>
          <li>Import Process</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="current">
            <div className="icon"></div>
            <span>Excel Import</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Excel Field Mapping</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Excel Data Preview</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Summary</span>
          </li>
        </ul>
      </div>
      <div className="bg_white_box import_excel_inner">
        <div className="p-4 pb-0">
          <div className="inner_heading ">
            <h6 className="mb-4">Step 1 : Excel Import</h6>
          </div>
          <form>
            <div className="row  pt-0 pb-0">
              <div className="col-md-4">
                <div className="form_group">
                  <label>Select Excel Type</label>
                  <ReactGroupSelect
                    value={excelType}
                    options={excelTypeOption}
                    onChange={e => {
                      excelTypeHandleChange(e);
                    }}
                    placeholder="Please Select Excel Type"
                  />
                </div>
              </div>
            </div>
            <div className="info_line  p-4 mt-0 mb-3">
              <p className="mb-0">
                Please select excel type from the drop down to upload data from
                excel sheet. You can also search for the excel type by typing
                few characters in the drop down.
              </p>
            </div>
          </form>
        </div>
        {excelType === 'Family Details' && (
          <div className="upload_img p-4 pt-0">
            <h6 className="mb-4">Family Details</h6>
            <div>
              <div className="d-flex flex-wrap justify-content-between pb-4">
                <div className="download_img pt-0">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 text-light">
                      Click this link to download a sample Excel File.
                    </p>
                    <button className="btn-primary ms-3">
                      <img
                        src={DownloadIcon}
                        className="me-2"
                        alt="FilterImage"
                      />
                      Sample File
                    </button>
                  </div>
                </div>
                <div className="show_field_info">
                  <button
                    className="btn-tranfarent"
                    onClick={() => {
                      setShowFieldInfo(!showFieldInfo);
                    }}
                  >
                    Show Field Info
                    <img
                      src={DownArrowBtn}
                      className="ms-2"
                      alt="FilterImage"
                    />
                  </button>
                </div>
              </div>

              {showFieldInfo && (
                <div className="data_table_one family_detail_table">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-List"
                      role="tabpanel"
                      aria-labelledby="pills-List-tab"
                    >
                      <div className="list_tab_wrap">
                        <div className="family_detail_table_inner">
                          <div className="table-responsive">
                            <table
                              id="example"
                              className="display border_table"
                            >
                              <thead>
                                <tr>
                                  <th scope="col">
                                    <span>Field</span>
                                  </th>
                                  <th scope="col">
                                    <span>Description</span>
                                  </th>
                                  <th scope="col">
                                    <span>Sample Data</span>
                                  </th>
                                  <th scope="col">
                                    <span>Mandatory Field</span>
                                  </th>
                                  <th scope="col">
                                    <span>Type</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Employee Code</td>
                                  <td>Employee's Code</td>
                                  <td>1001</td>
                                  <td>
                                    <img
                                      src={Right}
                                      className="me-0"
                                      alt="Right"
                                    />
                                  </td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td>Name</td>
                                  <td>Name of the Family Member.</td>
                                  <td>Dhaval Patel</td>
                                  <td>
                                    <img
                                      src={Right}
                                      className="me-0"
                                      alt="Right"
                                    />
                                  </td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td>DOB</td>
                                  <td>Family Member's date of birth.</td>
                                  <td>01 Oct 1994</td>
                                  <td></td>
                                  <td>Date</td>
                                </tr>
                                <tr>
                                  <td>Gender</td>
                                  <td>Gender of the family member.</td>
                                  <td>Male</td>
                                  <td></td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td>Blood Group</td>
                                  <td>Family Member's bloodgroup.</td>
                                  <td>Father</td>
                                  <td>
                                    <img
                                      src={Right}
                                      className="me-0"
                                      alt="Right"
                                    />
                                  </td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td>Profession</td>
                                  <td>Family Member's Profession.</td>
                                  <td>Tailor</td>
                                  <td></td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td>Nationality</td>
                                  <td>Family Memeber's nationality.</td>
                                  <td>Indian</td>
                                  <td> </td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td>Address</td>
                                  <td>Family Memeber's Address.</td>
                                  <td>Surat</td>
                                  <td></td>
                                  <td>Text</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="upload_wrapper">
              <FileUploadImg
                ref={fileUploadRef}
                name="demo[]"
                url="https://primefaces.org/primereact/showcase/upload.php"
                multiple
                accept="image/*"
                maxFileSize={1000000}
                onUpload={onTemplateUpload}
                onSelect={onTemplateSelect}
                onError={onTemplateClear}
                onClear={onTemplateClear}
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                uploadOptions={uploadOptions}
                cancelOptions={cancelOptions}
              />
            </div>
          </div>
        )}
        <div className="btn_group d-flex justify-content-end p-4">
          <Link
            className="btn-secondary me-3"
            to="/employees/administration/bulk-excel-upload"
          >
            Cancel
          </Link>
          <Link
            className="btn-primary"
            to="/employees/administration/bulk-excel-upload-step-two"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
