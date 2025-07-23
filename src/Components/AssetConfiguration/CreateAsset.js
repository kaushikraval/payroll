import React, { useState, useRef } from 'react';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactCelender from '../Common/ReactCelender';
import TextArea from '../Common/TextArea';
import HomeIcon from '../../Assets/images/home-blue.svg';
import Input from '../Common/Input';
import { Link } from 'react-router-dom';
import ReactRadioButton from '../Common/ReactRadioButton';
import { Button } from 'primereact/button';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import { FileUpload } from 'primereact/fileupload';
import { useTranslation } from 'react-i18next';

export default function CreateAsset() {
  const { t } = useTranslation();
  const uploadOptions = { label: 'Uplaod', icon: 'pi pi-paperclip' };
  const [department, setdepartment] = useState([]);
  const [rehire, setrehire] = useState(false);
  const [applicablestatus, setapplicablestatus] = useState([]);
  const applicablestatusoption = [
    { label: 'Good', value: 'Good' },
    { label: 'Poor', value: 'Poor' },
    { label: 'Damaged', value: 'Damaged' },
    { label: 'Lost', value: 'Lost' },
    { label: 'Sold', value: 'Sold' },
  ];
  const toast = useRef(null);
  const onBasicUpload = () => {
    toast.current.show({
      icon: 'pi pi-upload',
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  };
  const departmentHandleChange = e => {
    setdepartment(e.value);
  };
  const applicablestatusoptionTwo = [
    { label: 'Surat', value: 'Surat' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Navsari', value: 'Navsari' },
    { label: 'Vadodara', value: 'Vadodara' },
    { label: 'Pune', value: 'Pune' },
  ];
  const applicablestatusoptionAddasset = [
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Furniture', value: 'Furniture' },
    { label: 'Vehical', value: 'Vehical' },
    { label: 'Machine Equipment', value: 'Machine Equipment' },
    { label: 'Inventory', value: 'Inventory' },
  ];
  const applicablestatusHandleChange = e => {
    setapplicablestatus(e.value);
  };
  const departmentOptions = [
    { label: 'Laptop', value: 'Laptop' },
    { label: 'Pendrive', value: 'Pendrive' },
    { label: 'Card reader', value: 'Card reader' },
  ];
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
            <b>Assets</b>
          </li>
          <li>
            <Link to="/assets/assigned-list">
              <b>Add & Assign Asset</b>
            </Link>
          </li>
          <li>Add Asset</li>
        </ul>
      </div>
      <div className="bg_white_box p-md-4 p-3">
        <h5 className="mb-md-4 mb-3">Add Asset</h5>
        <div className="CreateAsset_asset">
          <div className="row justify-content-end">
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Asset ID</label>
                <Input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Asset Category</label>
                <ReactSelectSingle
                  value={applicablestatus}
                  options={applicablestatusoptionAddasset}
                  onChange={e => {
                    applicablestatusHandleChange(e);
                  }}
                  placeholder="Asset Category"
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Asset Name</label>
                <Input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Asset Type</label>
                <ReactSelectMultiple
                  value={department}
                  options={departmentOptions}
                  onChange={e => {
                    departmentHandleChange(e);
                  }}
                  placeholder="Asset Type"
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Location</label>
                <ReactSelectSingle
                  value={applicablestatus}
                  options={applicablestatusoptionTwo}
                  onChange={e => {
                    applicablestatusHandleChange(e);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Model</label>
                <Input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Serial No</label>
                <Input type="text" placeholder="Placeholder Text" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Purchase Date</label>
                <ReactCelender value="date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Amount</label>
                <Input type="number" placeholder="Enter Amount" />
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label className="mb-3">Warranty Status</label>
                <div className="radio_button_wrapper d-flex">
                  <div className="radio_button">
                    <ReactRadioButton
                      inputId="rehireInput"
                      name="rehire"
                      value={true}
                      onChange={e => {
                        setrehire(e.target.value);
                      }}
                      checked={rehire === true}
                    />
                    <label className="m-0" htmlFor="rehireInput">
                      Yes
                    </label>
                  </div>
                  <div className="radio_button">
                    <ReactRadioButton
                      inputId="rehireInput1"
                      name="rehire"
                      value={false}
                      onChange={e => {
                        setrehire(e.target.value);
                      }}
                      checked={rehire === false}
                    />
                    <label className="m-0" htmlFor="rehireInput1">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Condition Of Asset</label>
                <ReactSelectSingle
                  value={applicablestatus}
                  options={applicablestatusoption}
                  onChange={e => {
                    applicablestatusHandleChange(e);
                  }}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group custom_attach">
                <label>Add Attachment</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  accept="image/*"
                  maxFileSize={1000000}
                  chooseOptions={uploadOptions}
                  onUpload={onBasicUpload}
                  chooseLabel={t('task.add_attachment')}
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              {rehire === true && (
                <div className="form_group">
                  <label>Warranty End Date</label>
                  <ReactCelender value="date" placeholder="DD/MM/YYYY" />
                </div>
              )}
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="form_group">
                <label>Date</label>
                <ReactCelender value="date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <div className="col-12">
              <div className="form_group">
                <label>Description</label>
                <TextArea placeholder="Write Description" rows={5} cols={10} />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <Link className="btn-secondary me-3" to="/assets/assigned-list">
            Cancel
          </Link>
          <Link className="btn-primary" to="/assets/assigned-list">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
