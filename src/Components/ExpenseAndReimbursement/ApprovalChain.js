import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactSelectMultiple from 'Components/Common/ReactSelectMultiple';
import userImage from '../../Assets/images/user8.png';
import { Checkbox } from 'primereact/checkbox';
import Input from 'Components/Common/Input';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import PlusIcon from '../../Assets/images/plus.svg';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import EditIcon from '../../Assets/images/EditIcon.svg';
import cancelIcon from '../../Assets/images/close-circle-two.png';
import saveIcon from '../../Assets/images/close-circle.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function ApprovalChain() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const [dummyList, setDummyList] = useState([]);
  const [addNewRow, setAddNewRow] = useState(true);
  const [deleteRowId, setDeleteRow] = useState('');
  const submitRef = useRef(null);
  const initialValues = {
    employeeName: '',
    autoApprove: false,
    noOfDays: 0,
  };
  const [approvalChainRow, setApprovalChainRow] = useState(initialValues);
  const [approvalChainList, setApprovalChainList] = useState([]);
  const approvalChainSchema = Yup.object().shape({
    employeeName: Yup.string().required('Required'),
    noOfDays: Yup.number().required('Required'),
  });
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const hanleUpdateData = (index, toggleValue) => {
    let newData = approvalChainList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setApprovalChainList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = approvalChainList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setApprovalChainList(newData);
  };
  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => {
            const filterData = approvalChainList.filter(
              data => data.id !== deleteRowId,
            );
            setApprovalChainList(filterData);
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };
  const [headerToggle, setHeaderToggle] = useState(false);
  const [notifyCheck, setNotifyCheck] = useState(false);
  return (
    <>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Expense & Reimbursement</b>
          </li>
          <li>Approval Chain</li>
        </ul>
      </div>
      <Formik
        initialValues={approvalChainRow}
        validationSchema={approvalChainSchema}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setApprovalChainList([
            ...approvalChainList,
            {
              ...values,
              id: Math.floor(Math.random() * 100),
              isEditable: false,
            },
          ]);
          submitRef.current.resetForm();
          setAddNewRow(false);
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
          submitForm,
        }) => (
          <div className="aprove_chain">
            <Form onSubmit={handleSubmit}>
              <ul className="chain_list">
                {approvalChainList &&
                  approvalChainList.length > 0 &&
                  approvalChainList?.map((data, i) => {
                    return (
                      <li>
                        <h6>Level {i + 1}</h6>
                        <div className="select_box d-flex align-items-center">
                          <ReactSelectSingle
                            value={data.employeeName}
                            name="employeeName"
                            options={reportingAuthorityOption}
                            onChange={e => {
                              handleOnChange(
                                'employeeName',
                                e.target.value,
                                data.id,
                              );
                            }}
                            disabled={data.isEditable === false}
                            filter={true}
                            placeholder="Roll/Employee"
                            className="chain_select"
                          />

                          {data.isEditable === false ? (
                            <ul className="edit_wrap d-flex">
                              <li
                                onClick={() => {
                                  hanleUpdateData(data.id, true);
                                  setDummyList(approvalChainList);
                                }}
                              >
                                <img src={EditIcon} alt="EditIcon" />
                              </li>
                              <li
                                onClick={() => {
                                  setDeleteRow(data.id);
                                  setDeleteDetail(true);
                                }}
                              >
                                <img src={DeleteButtonIcon} alt="DeleteIcon" />
                              </li>
                            </ul>
                          ) : (
                            <ul className="edit_wrap d-flex">
                              <li
                                onClick={() => {
                                  hanleUpdateData(data.id, false);
                                }}
                              >
                                <img src={saveIcon} alt="saveIcon" />
                              </li>
                              <li
                                onClick={() => {
                                  setApprovalChainList([...dummyList]);
                                }}
                              >
                                <img src={cancelIcon} alt="cancelIcon" />
                              </li>
                            </ul>
                          )}
                        </div>
                        <div className="check_line d-flex align-items-center">
                          <Checkbox
                            inputId="ctc"
                            className="me-2"
                            onChange={e =>
                              handleOnChange('autoApprove', e.checked, data.id)
                            }
                            disabled={data.isEditable === false}
                            checked={data.autoApprove === true}
                          />
                          Auto-approve and skip this level if no action taken in
                          <Input
                            placeholder="0"
                            value={data.noOfDays}
                            disabled={data.isEditable === false}
                            onChange={e => {
                              handleOnChange(
                                'noOfDays',
                                e.target.value,
                                data.id,
                              );
                            }}
                          />
                          days
                        </div>
                      </li>
                    );
                  })}
                {addNewRow === true && (
                  <li>
                    <h6>Level {approvalChainList.length + 1}</h6>
                    <div className="select_box d-flex align-items-center">
                      <ReactSelectSingle
                        value={values.employeeName}
                        name="employeeName"
                        options={reportingAuthorityOption}
                        onChange={e => {
                          handleChange('employeeName')(e.target.value);
                        }}
                        className={
                          touched.employeeName && errors.employeeName
                            ? 'error-message'
                            : ''
                        }
                        filter={true}
                        placeholder="Roll/Employee"
                      />
                      <ul className="edit_wrap d-flex">
                        <li onClick={submitForm}>
                          <img src={saveIcon} alt="saveIcon" />
                        </li>
                        <li
                          onClick={() => {
                            submitRef.current.resetForm();
                          }}
                        >
                          <img src={cancelIcon} alt="cancelIcon" />
                        </li>
                      </ul>
                    </div>
                    <div className="check_line d-flex align-items-center">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        name={values.autoApprove}
                        onChange={e => {
                          setFieldValue('autoApprove', e.checked);
                        }}
                        checked={values.autoApprove}
                      />
                      Auto-approve and skip this level if no action taken in
                      <Input
                        placeholder="0"
                        value={values.noOfDays}
                        name="noOfDays"
                        onChange={e => {
                          handleChange('noOfDays')(e.target.value);
                        }}
                      />
                      days
                    </div>
                  </li>
                )}
              </ul>

              <div className="hr_line_wrap">
                <span></span>
                <div className="hr_btn_wrap">
                  <button
                    type="button"
                    className="btn-primary"
                    disabled={addNewRow === true}
                    onClick={() => {
                      setAddNewRow(true);
                    }}
                  >
                    <img
                      src={PlusIcon}
                      data-inject-svg
                      className="me-2"
                      alt="PlusImage"
                    />
                    Add New Level
                  </button>
                </div>
                <span></span>
              </div>

              <div className="checkbox_wrapper mt-3">
                <Checkbox
                  inputId="WebDevlopment"
                  onChange={e => setNotifyCheck(e.checked)}
                  checked={notifyCheck}
                ></Checkbox>
                <label htmlFor="WebDevlopment" className="p-checkbox-label">
                  Notify all previous approvers if request is rejected.
                </label>
              </div>
            </Form>
            <Dialog
              header="Confirm"
              visible={deleteDetail}
              draggable={false}
              resizable={false}
              className="small_popup confirm_popup"
              footer={renderFooter('deleteDetail')}
              onHide={() => setDeleteDetail(false)}
            >
              <div className="delate_popup_wrap text-center">
                <p>Are you sure you want to delete?</p>
              </div>
            </Dialog>
          </div>
        )}
      </Formik>
    </>
  );
}
