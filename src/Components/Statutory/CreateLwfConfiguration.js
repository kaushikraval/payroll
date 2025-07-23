import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import HomeIcon from '../../Assets/images/home-blue.svg';
import ReactCelender from '../Common/ReactCelender';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import Input from '../Common/Input';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import EditIcon from '../../Assets/images/EditIcon.svg';
import PlusIcon from '../../Assets/images/plus.svg';
import cancelIcon from '../../Assets/images/close-circle-two.png';
import saveIcon from '../../Assets/images/close-circle.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function CreateLwfConfiguration() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [deductionSelect, setDeductionSelect] = useState([]);
  const [stateSelect, setStateSelect] = useState([]);
  const [contributionMonth, setContributionMonth] = useState([]);
  const [dummyList, setDummyList] = useState([]);
  const [addNewRow, setAddNewRow] = useState(true);
  const [deleteRowId, setDeleteRow] = useState('');
  const submitRef = useRef(null);
  const initialValues = {
    fromAmount: 0,
    toAmount: 0,
    employeeContribution: 0,
    employerContribution: 0,
    deductionMonthMultiple: [],
  };
  const [lwfRow, setLwfRow] = useState(initialValues);
  const [lwfList, setLwfList] = useState([]);
  const lwfConfigurationSchema = Yup.object().shape({
    fromAmount: Yup.number().required('Required'),
    toAmount: Yup.number().required('Required'),
    employeeContribution: Yup.number().required('Required'),
    employerContribution: Yup.number().required('Required'),
    deductionMonthMultiple: Yup.array().of(Yup.string()),
  });
  const deductionSelectOption = [
    { label: 'Yearly', value: 'Yearly' },
    { label: 'Half Yearly', value: 'Half Yearly' },
    { label: 'Monthly', value: 'Monthly' },
  ];
  const stateSelectOption = [
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Rajasthan', value: 'Rajasthan' },
  ];
  const deductionMonthOption = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];
  const contributionMonthOption = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' },
  ];
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
            const filterData = lwfList.filter(data => data.id !== deleteRowId);
            setLwfList(filterData);
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };
  const hanleUpdateData = (index, toggleValue) => {
    let newData = lwfList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setLwfList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = lwfList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setLwfList(newData);
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
            <b>Statutory</b>
          </li>
          <li>
            <Link to="/statutory/lwfconfiguration">
              <b>LWF Configuration</b>
            </Link>
          </li>
          <li>Add LWF</li>
        </ul>
      </div>
      <Formik
        initialValues={lwfRow}
        validationSchema={lwfConfigurationSchema}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setLwfList([
            ...lwfList,
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
          <div className="create_lwfconfig_wrap bg_white_box p-3">
            <div className="create_lwfconfig_top mb-3">
              <h6 className="mb-3">LWF Configuration</h6>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="form_group">
                    <label>Select State</label>
                    <ReactSelectSingle
                      value={stateSelect}
                      options={stateSelectOption}
                      onChange={e => {
                        setStateSelect(e.value);
                      }}
                      filter={true}
                      placeholder="Select State"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="form_group">
                    <label>Effective Month</label>
                    <ReactCelender placeholder="DD/MM/YYYY" value="date" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="form_group">
                    <label>Deduction Type</label>
                    <ReactSelectSingle
                      value={deductionSelect}
                      options={deductionSelectOption}
                      onChange={e => {
                        setDeductionSelect(e.value);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="form_group">
                    <label>Contribution Start Month</label>
                    <ReactSelectSingle
                      value={contributionMonth}
                      options={contributionMonthOption}
                      onChange={e => {
                        setContributionMonth(e.value);
                      }}
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="lwf_table_wrap">
                <div className="data_table_one lwf_table">
                  <div className="table-responsive">
                    <table id="example" className="display">
                      <thead>
                        <tr>
                          <th>From Amount</th>
                          <th></th>
                          <th>To Amount</th>
                          <th>Employee Contribution</th>
                          <th>Employer Contribution</th>
                          <th>Deduction Month</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lwfList &&
                          lwfList.length > 0 &&
                          lwfList?.map((data, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  <Input
                                    type="number"
                                    placeholder="00"
                                    value={data.fromAmount}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChange(
                                        'fromAmount',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>-</td>
                                <td>
                                  <Input
                                    type="number"
                                    placeholder="00"
                                    value={data.toAmount}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChange(
                                        'toAmount',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <Input
                                    type="number"
                                    placeholder="00"
                                    value={data.employeeContribution}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChange(
                                        'employeeContribution',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <Input
                                    type="number"
                                    placeholder="00"
                                    value={data.employerContribution}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChange(
                                        'employerContribution',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <ReactSelectMultiple
                                    options={deductionMonthOption}
                                    value={data.deductionMonthMultiple}
                                    placeholder="Month"
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChange(
                                        'deductionMonthMultiple',
                                        e.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  {data.isEditable === false ? (
                                    <ul className="edit_wrap d-flex">
                                      <li
                                        onClick={() => {
                                          hanleUpdateData(data.id, true);
                                          setDummyList(lwfList);
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
                                        <img
                                          src={DeleteButtonIcon}
                                          alt="DeleteIcon"
                                        />
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
                                          setLwfList([...dummyList]);
                                        }}
                                      >
                                        <img
                                          src={cancelIcon}
                                          alt="cancelIcon"
                                        />
                                      </li>
                                    </ul>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        {addNewRow === true && (
                          <tr>
                            <td>
                              <Input
                                type="number"
                                placeholder="00"
                                name="fromAmount"
                                value={values.fromAmount}
                                onChange={e => {
                                  handleChange('fromAmount')(e.target.value);
                                }}
                                className={
                                  touched.fromAmount && errors.fromAmount
                                    ? 'error-message'
                                    : ''
                                }
                              />
                            </td>
                            <td>-</td>
                            <td>
                              <Input
                                type="number"
                                placeholder="00"
                                name="toAmount"
                                value={values.toAmount}
                                onChange={e => {
                                  handleChange('toAmount')(e.target.value);
                                }}
                                className={
                                  touched.toAmount && errors.toAmount
                                    ? 'error-message'
                                    : ''
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                placeholder="00"
                                value={values.employeeContribution}
                                name="employeeContribution"
                                onChange={e => {
                                  handleChange('employeeContribution')(
                                    e.target.value,
                                  );
                                }}
                                className={
                                  touched.employeeContribution &&
                                  errors.employeeContribution
                                    ? 'error-message'
                                    : ''
                                }
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                placeholder="00"
                                value={values.employerContribution}
                                name="employerContribution"
                                onChange={e => {
                                  handleChange('employerContribution')(
                                    e.target.value,
                                  );
                                }}
                                className={
                                  touched.employerContribution &&
                                  errors.employerContribution
                                    ? 'error-message'
                                    : ''
                                }
                              />
                            </td>
                            <td>
                              <ReactSelectMultiple
                                value={values.deductionMonthMultiple}
                                options={deductionMonthOption}
                                name="deductionMonthMultiple"
                                onChange={e => {
                                  setFieldValue(
                                    'deductionMonthMultiple',
                                    e.value,
                                  );
                                }}
                                className={
                                  touched.deductionMonthMultiple &&
                                  errors.deductionMonthMultiple
                                    ? 'error-message'
                                    : ''
                                }
                                placeholder="Month"
                              />
                            </td>
                            <td>
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
                            </td>
                          </tr>
                        )}
                        <tr>
                          <td colSpan="7">
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
                                  Add New
                                </button>
                              </div>
                              <span></span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                </div>
              </div>
            </Form>

            <div className="btn_group d-flex justify-content-end mt-4">
              <Link
                to="/statutory/lwfconfiguration"
                className="btn-secondary mx-3"
              >
                Cancel
              </Link>
              <Link className="btn-primary" to="/statutory/lwfconfiguration">
                Save
              </Link>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
