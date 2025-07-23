import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { TabView, TabPanel } from 'primereact/tabview';
import FileUploadImg from '../../../../Common/ReactFileUpload';
import ReactCelender from '../../../../Common/ReactCelender';
import Input from '../../../../Common/Input';
import ReactSelectSingle from '../../../../Common/ReactSelectSingle';
import ReactTreeSelect from '../../../../Common/ReactTreeSelect';
import UploadImg from '../../../../../Assets/images/Upload-icon.svg';
import DeleteButtonIcon from '../../../../../Assets/images/DeleteBtn.svg';
import EditButtonIcon from '../../../../../Assets/images/edit.svg';
import DowanloadIcon from '../../../../../Assets/images/download-icon.svg';
import DowanloadBlue from '../../../../../Assets/images/downloadicon-blue.svg';
import Eyes from '../../../../../Assets/images/eyes.svg';
import Download from '../../../../../Assets/images/download.svg';
import { useTranslation } from 'react-i18next';

export default function EmployeeDocuments() {
  const { t } = useTranslation();
  const [salarySlip, setSalarySlip] = useState([]);
  const [addNewCode, setAddNewCode] = useState(false);
  const [editDocument, setEditDocument] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const fileUploadRef = useRef();
  const toast = useRef(null);

  const dialogFuncMap = {
    addNewCode: setAddNewCode,
    editDocument: setEditDocument,
    deleteDetail: setDeleteDetail,
  };

  const salarySlipOption = [
    { label: 'July 2022', value: 'July' },
    { label: 'June 2022', value: 'June' },
    { label: 'May 2022', value: 'May' },
    { label: 'April 2022', value: 'April' },
    { label: 'March 2022', value: 'March' },
    { label: 'Feb 2022', value: 'Feb' },
  ];

  const salarySlipHandleChange = e => {
    setSalarySlip(e.value);
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
  const document = [
    {
      name: 'Identity Docs',
      code: 'AU',
      states: [
        {
          cname: 'Driving License',
          code: 'NSW',
        },
        {
          cname: 'Aadhar Card',
          code: 'QS',
        },
        {
          cname: 'Pan Card',
          code: 'QS',
        },
        {
          cname: 'Voter Id',
          code: 'QS',
        },
        {
          cname: 'Passport',
          code: 'QS',
        },
      ],
    },
    {
      cname: 'Bank Docs',
      code: 'CA',
    },
    {
      cname: 'Previous Experience',
      code: 'US',
    },
    {
      cname: 'Address',
      code: 'US',
    },
    {
      cname: 'Degree & Certificate',
      code: 'US',
    },
  ];

  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-end mt-2">
        <Button
          label={t('buttonTitle.cancel')}
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label={t('buttonTitle.save')}
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  const countryOptionTemplate = option => {
    return (
      <div className="country-item">
        <span>{option.cname || option.name}</span>
      </div>
    );
  };

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

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
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
          <img src={UploadImg} className="me-2" alt="UploadImage" />
          <h6
            style={{ fontWeight: '500', color: '#000' }}
            className="mt-3 mb-2"
          >
            {t('employee_document.dragdrop_file_label')}
          </h6>
          <p className="mb-0">{t('employee_document.doc_file_text')}</p>
        </div>
      </div>
    );
  };

  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label={t('buttonTitle.cancel')}
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label={t('buttonTitle.delete')}
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  return (
    <div className="employeedocuments_wrap">
      <div className="employeedocument_top p-3 bg_white_box">
        <div className="row align-items-center">
          <div className="col-6">
            <h6 className="m-0">{t('title.employeeDocuments')}</h6>
          </div>
          {activeIndex === 0 && (
            <div className="col-6">
              <div className="text-end">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => onClick('addNewCode')}
                >
                  {t('employee_document.add_document')}
                </button>
                <Dialog
                  header={t('employee_document.add_document')}
                  visible={addNewCode}
                  draggable={false}
                  resizable={false}
                  className="medium_popup"
                  footer={renderFooter('addNewCode')}
                  onHide={() => onHide('addNewCode')}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('employee_document.select_document')}</label>
                        <ReactTreeSelect
                          value={selectedDocument}
                          options={document}
                          optionLabel={'cname'}
                          optionGroupLabel={'name'}
                          optionGroupChildren={['states', 'cities']}
                          placeholder={t('employee_document.select_document')}
                          onChange={event => setSelectedDocument(event.value)}
                          itemTemplate={countryOptionTemplate}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('employee_document.name_as_per_doc')}</label>
                        <Input
                          type="text"
                          placeholder={t(
                            'employee_document.name_as_doc_placeholder',
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('employee_document.doc_no')}</label>
                        <Input
                          type="number"
                          placeholder={t(
                            'employee_document.doc_no_placeholder',
                          )}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.dateOfBirth')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('title.dateFormat')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
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
                  </div>
                </Dialog>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="employeedocument_tab_wrap">
        <TabView
          activeIndex={activeIndex}
          onTabChange={e => setActiveIndex(e.index)}
        >
          <TabPanel header={t('employee_document.document')}>
            <div className="data_table_one employeedocument_table">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th>
                        <span>{t('employee_document.document_type')}</span>
                      </th>
                      <th>
                        <span>{t('employee_document.doc_no')}</span>
                      </th>
                      <th>
                        <span>{t('employee_document.upload_date')}</span>
                      </th>
                      <th>
                        <span>{t('employee_document.name_as_per_doc')}</span>
                      </th>
                      <th>
                        <span>{t('title.action')}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {t('employee_document.adhar')}
                        <img
                          src={DowanloadIcon}
                          data-inject-svg
                          className="ms-3"
                          alt="dowanload_btn"
                        />
                      </td>
                      <td>{t('bank_statutory.bank_account_no_value')}</td>
                      <td>{t('myProfile.birthday')}</td>
                      <td>{t('userDetail.firstName')}</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => onClick('editDocument')}>
                            <img src={EditButtonIcon} alt="edit_btn_icon" />
                          </li>
                          <li onClick={() => onClick('deleteDetail')}>
                            <img src={DeleteButtonIcon} alt="delate icon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {t('employee_document.driving_licence')}
                        <img
                          src={DowanloadIcon}
                          data-inject-svg
                          className="ms-3"
                          alt="dowanload_btn"
                        />
                      </td>
                      <td>{t('compensation.pan_no')}</td>
                      <td>{t('myProfile.birthday')}</td>
                      <td>{t('userDetail.firstName')}</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => onClick('editDocument')}>
                            <img src={EditButtonIcon} alt="edit_btn_icon" />
                          </li>
                          <li onClick={() => onClick('deleteDetail')}>
                            <img src={DeleteButtonIcon} alt="delate icon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {t('employee_document.voter_id')}
                        <img
                          src={DowanloadIcon}
                          data-inject-svg
                          className="ms-3"
                          alt="dowanload_btn"
                        />
                      </td>
                      <td>{t('compensation.pan_no')}</td>
                      <td>{t('myProfile.birthday')}</td>
                      <td>{t('userDetail.firstName')}</td>
                      <td>
                        <ul className="edit_wrap d-flex">
                          <li onClick={() => onClick('editDocument')}>
                            <img src={EditButtonIcon} alt="edit_btn_icon" />
                          </li>
                          <li onClick={() => onClick('deleteDetail')}>
                            <img src={DeleteButtonIcon} alt="delate icon" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Dialog
                  header={t('title.confirm')}
                  visible={deleteDetail}
                  draggable={false}
                  resizable={false}
                  className="small_popup confirm_popup"
                  footer={renderFooterConfirm('deleteDetail')}
                  onHide={() => onHide('deleteDetail')}
                >
                  <div className="delate_popup_wrap text-center">
                    <p>{t('title.confirm_message')}</p>
                  </div>
                </Dialog>
                <Dialog
                  header={t('employee_document.edit_document')}
                  visible={editDocument}
                  draggable={false}
                  resizable={false}
                  className="medium_popup"
                  footer={renderFooter('editDocument')}
                  onHide={() => onHide('editDocument')}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('employee_document.select_document')}</label>
                        <ReactTreeSelect
                          value={selectedDocument}
                          options={document}
                          optionLabel={'cname'}
                          optionGroupLabel={'name'}
                          optionGroupChildren={['states', 'cities']}
                          placeholder={'Aadhar'}
                          onChange={event => setSelectedDocument(event.value)}
                          itemTemplate={countryOptionTemplate}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('employee_document.name_as_per_doc')}</label>
                        <Input
                          type="text"
                          placeholder={t('userDetail.firstName')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_group">
                        <label>{t('employee_document.doc_no')}</label>
                        <Input
                          type="number"
                          placeholder={t('compensation.pan_no')}
                        />
                      </div>
                      <div className="form_group">
                        <label>{t('myProfile.dateOfBirth')} </label>
                        <ReactCelender
                          value="date"
                          placeholder={t('myProfile.birthday')}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
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
                  </div>
                </Dialog>
              </div>
            </div>
          </TabPanel>
          <TabPanel header={t('employee_document.salary_slip')}>
            <div className="p-3 bg_white_box">
              <div className="salry_slip_wrap">
                <h6 className="mb-3">{t('employee_document.salary_slip')}</h6>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="salary_slip_flex d-flex align-items-end">
                      <div className="form_group flex-grow-1 m-0 me-2">
                        <label>{t('title.year')}</label>
                        <ReactSelectSingle
                          value={salarySlip}
                          filter
                          options={salarySlipOption}
                          onChange={e => {
                            salarySlipHandleChange(e);
                          }}
                          placeholder={t('employee_document.salary_slip')}
                        />
                      </div>
                      <div className="slip_export">
                        <button type="button" className="btn-border">
                          <img
                            src={DowanloadBlue}
                            data-inject-svg
                            alt="edit_btn"
                            className=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Letters">
            <div className="data_table_one employeedocument_table">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th>
                        <span>{t('employee_document.letters')}</span>
                      </th>
                      <th>
                        <span>{t('title.action')}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('employee_document.experience_letter')}</td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <buttom type="button">
                                <img
                                  src={Eyes}
                                  data-inject-svg
                                  className="me-2"
                                  alt="Eyes"
                                />
                              </buttom>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="btn_trans border-0"
                              >
                                <img src={Download} alt="delete_btn" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>{t('employee_document.experience_letter')}</td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <buttom type="button">
                                <img
                                  src={Eyes}
                                  data-inject-svg
                                  className="me-2"
                                  alt="Eyes"
                                />
                              </buttom>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="btn_trans border-0"
                              >
                                <img src={Download} alt="delete_btn" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>{t('employee_document.experience_letter')}</td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <buttom type="button">
                                <img
                                  src={Eyes}
                                  data-inject-svg
                                  className="me-2"
                                  alt="Eyes"
                                />
                              </buttom>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="btn_trans border-0"
                              >
                                <img src={Download} alt="delete_btn" />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel header={t('employee_document.policies_and_forms')}>
            <div className="data_table_one policy_form_table">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th>
                        <span>{t('employee_document.policy_name')}</span>
                      </th>
                      <th>
                        <span>{t('employee_document.description_label')}</span>
                      </th>
                      <th>
                        <span>{t('employee_document.created_by')}</span>
                      </th>
                      <th>{t('title.action')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{t('employee_document.attendance_policy')}</td>
                      <td>{t('employee_document.description_val')}</td>
                      <td>
                        <div className="created_date">
                          {t('userDetail.secondName')}
                          <span className="wrap_text">
                            {t('leave.on')} {t('myProfile.dateOfJoin')} •{' '}
                            {t('attendance.first_chek_in_value')}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img
                                src={Eyes}
                                data-inject-svg
                                className="me-2"
                                alt="Eyes"
                              />
                            </li>
                            <li>
                              <buttom type="button">
                                <img
                                  src={Download}
                                  data-inject-svg
                                  className="me-2"
                                  alt="PlusImage"
                                />
                              </buttom>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>{t('employee_document.attendance_policy')}</td>
                      <td>{t('employee_document.description_val')}</td>
                      <td>
                        <div className="created_date">
                          {t('userDetail.secondName')}
                          <span className="wrap_text">
                            {t('leave.on')} {t('myProfile.dateOfJoin')} •{' '}
                            {t('attendance.first_chek_in_value')}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img
                                src={Eyes}
                                data-inject-svg
                                className="me-2"
                                alt="Eyes"
                              />
                            </li>
                            <li>
                              <buttom type="button">
                                <img
                                  src={Download}
                                  data-inject-svg
                                  className="me-2"
                                  alt="PlusImage"
                                />
                              </buttom>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>{t('employee_document.attendance_policy')}</td>
                      <td>{t('employee_document.description_val')}</td>
                      <td>
                        <div className="created_date">
                          {t('userDetail.secondName')}
                          <span className="wrap_text">
                            {t('leave.on')} {t('myProfile.dateOfJoin')} •{' '}
                            {t('attendance.first_chek_in_value')}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="action_btn">
                          <ul className="d-flex align-items-center">
                            <li>
                              <img
                                src={Eyes}
                                data-inject-svg
                                className="me-2"
                                alt="Eyes"
                              />
                            </li>
                            <li>
                              <buttom type="button">
                                <img
                                  src={Download}
                                  data-inject-svg
                                  className="me-2"
                                  alt="PlusImage"
                                />
                              </buttom>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>

      {/* delete popup */}
      <div
        className="modal popup_modal small_modal fade"
        id="departmentnModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      ></div>
    </div>
  );
}
