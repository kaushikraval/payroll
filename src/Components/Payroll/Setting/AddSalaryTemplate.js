import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Input from 'Components/Common/Input';
import EarningIcon from '../../../Assets/images/earning-icon.svg';
import DeductionIcon from '../../../Assets/images/deduction-icon.svg';
import cancelIcon from '../../../Assets/images/close-circle-two.png';
import saveIcon from '../../../Assets/images/close-circle.svg';
import Delete from '../../../Assets/images/DeleteBtn.svg';
import PlusIcon from '../../../Assets/images/plus.svg';
import EditIcon from '../../../Assets/images/EditIcon.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import ReactSelectSingle from '../../Common/ReactSelectSingle';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function AddSalaryTemplate() {
  const initialValuesEarning = {
    componentName: '',
    payslipName: '',
    calculationType: '',
    fieldData: 0,
    calculationOn: '',
    amountMonthly: 0,
    amountAnnually: 0,
    order: 0,
  };
  const initialValuesDeduction = {
    componentName: '',
    amountMonthly: 0,
    amountAnnually: 0,
  };
  const submitRefEarning = useRef(null);
  const submitRefDeduction = useRef(null);
  const [earningList, setEarningList] = useState([]);
  const [dummyEarningList, setDummyEarningList] = useState([]);
  const [deleteEarningRowId, setDeleteEarningRowId] = useState('');
  const [deleteEarningDetail, setDeleteEarningDetail] = useState(false);
  const [addDeductionNewRow, setAddDeductionNewRow] = useState(true);
  const [deductionList, setDeductionList] = useState([]);
  const [dummyDeductionList, setDummyDeductionList] = useState([]);
  const [deleteDeductionRowId, setDeleteDeductionRowId] = useState('');
  const [deleteDeductionDetail, setDeleteDeductionDetail] = useState(false);
  const [addEarningNewRow, setAddEarningNewRow] = useState(true);
  const earningTemplateScheme = Yup.object().shape({
    componentName: Yup.string().required('Required'),
    payslipName: Yup.string().required('Required'),
    calculationType: Yup.string().required('Required'),
    fieldData: Yup.number().required('Required'),
    calculationOn: Yup.string().required('Required'),
    amountMonthly: Yup.number().required('Required'),
    amountAnnually: Yup.number().required('Required'),
    order: Yup.number().required('Required'),
  });
  const deductionTemplateScheme = Yup.object().shape({
    amountMonthly: Yup.number().required('Required'),
    amountAnnually: Yup.number().required('Required'),
  });
  const companyNameOption = [
    { label: 'Basic', value: 'Basic' },
    { label: 'HRA', value: 'HRA' },
    { label: 'Special Allowance', value: 'Special Allowance' },
    { label: 'Conveyance', value: 'Conveyance' },
    { label: 'Transport  ', value: 'Transport  ' },
    { label: 'Washing', value: 'Washing' },
    { label: 'DA', value: 'DA' },
  ];
  const calculationTypeOption = [
    { label: 'Percentage', value: 'Percentage' },
    { label: 'Fixed Amount', value: 'Fixed Amount' },
    { label: 'Settlement Amount', value: 'Settlement Amount' },
  ];
  const calculationOnOption = [
    { label: 'Based On CTC', value: 'Based On CTC' },
    { label: 'N/A', value: 'N/A' },
  ];
  const deductionComponentName = [
    { label: 'Leave', value: 'Leave' },
    { label: 'Other Deduction', value: 'Other Deduction' },
    { label: 'Gratuity', value: 'Gratuity' },
    { label: 'Security', value: 'Security' },
  ];
  const hanleUpdateData = (index, toggleValue) => {
    let newData = earningList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setEarningList(newData);
  };
  const hanleUpdateDataDeduction = (index, toggleValue) => {
    let newData = deductionList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setDeductionList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = earningList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setEarningList(newData);
  };
  const handleOnChangeDeduction = (name, value, index) => {
    let newData = deductionList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setDeductionList(newData);
  };
  const dialogFuncMap = {
    deleteEarningDetail: setDeleteEarningDetail,
    deleteDeductionDetail: setDeleteDeductionDetail,
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
            if (name === 'deleteDeductionDetail') {
              const filterData = deductionList.filter(
                data => data.id !== deleteDeductionRowId,
              );
              setDeductionList(filterData);
            } else {
              const filterData = earningList.filter(
                data => data.id !== deleteEarningRowId,
              );
              setEarningList(filterData);
            }
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };

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
            <b>Payroll</b>
          </li>
          <li>
            <b>Setting</b>
          </li>
          <li>Salary Template</li>
        </ul>
      </div>
      <div className="add_salary_temp">
        <div className="row">
          <div className="col-md-4">
            <div className="form_group">
              <label>Template Name</label>
              <Input placeholder="Template Name" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Effective From</label>
              <Input placeholder="Effective From" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form_group">
              <label>Description</label>
              <Input placeholder="Description" />
            </div>
          </div>
        </div>
        <div className="bg_white_box p-3">
          <h5>Salary Components</h5>
          <Formik
            initialValues={initialValuesEarning}
            validationSchema={earningTemplateScheme}
            innerRef={submitRefEarning}
            enableReinitialize
            onSubmit={async (values, { resetForm }) => {
              setEarningList([
                ...earningList,
                {
                  ...values,
                  id: Math.floor(Math.random() * 100),
                  isEditable: false,
                },
              ]);
              submitRefEarning.current.resetForm();
              setAddEarningNewRow(false);
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
              <>
                <div className="icon_title">
                  <h6 className="mb-0">
                    <img className="me-2" src={EarningIcon} alt="EarningIcon" />
                    Earnings
                  </h6>
                </div>
                <Form onSubmit={handleSubmit}>
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Component Name</th>
                          <th>Payslip Name</th>
                          <th>Calculation Type</th>
                          <th>Field Data</th>
                          <th>Calculation On</th>
                          <th>Amount Monthly</th>
                          <th>Amount Annually</th>
                          <th>Order</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {earningList &&
                          earningList.length > 0 &&
                          earningList?.map((data, i) => {
                            return (
                              <tr>
                                <td>
                                  <div className="form_group">
                                    <Input
                                      type="text"
                                      className="p-inputtext p-component p-filled"
                                      value={data.componentName}
                                      disabled
                                      onChange={e => {
                                        handleOnChange(
                                          'componentName',
                                          e.target.value,
                                          data.id,
                                        );
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <Input
                                    type="text"
                                    className="p-inputtext p-component p-filled border-0"
                                    value={data.payslipName}
                                    disabled
                                    onChange={e => {
                                      handleOnChange(
                                        'payslipName',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <div className="form_group">
                                    <ReactSelectSingle
                                      value={data.calculationType}
                                      options={calculationTypeOption}
                                      disabled={data.isEditable === false}
                                      onChange={e => {
                                        handleOnChange(
                                          'calculationType',
                                          e.value,
                                          data.id,
                                        );
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="form_group">
                                    <Input
                                      type="number"
                                      className="p-inputtext p-component p-filled"
                                      value={data.fieldData}
                                      disabled={data.isEditable === false}
                                      onChange={e => {
                                        handleOnChange(
                                          'fieldData',
                                          e.target.value,
                                          data.id,
                                        );
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="form_group">
                                    <ReactSelectSingle
                                      value={data.calculationOn}
                                      options={calculationOnOption}
                                      disabled={data.isEditable === false}
                                      onChange={e => {
                                        handleOnChange(
                                          'calculationOn',
                                          e.value,
                                          data.id,
                                        );
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <Input
                                    type="number"
                                    className="p-inputtext p-component p-filled border-0"
                                    value={data.amountMonthly}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChange(
                                        'amountMonthly',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <Input
                                    type="number"
                                    className="p-inputtext p-component p-filled border-0"
                                    value={data.amountAnnually}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChange(
                                        'amountAnnually',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <div className="form_group">
                                    <Input
                                      type="number"
                                      className="p-inputtext p-component p-filled "
                                      value={data.order}
                                      disabled={data.isEditable === false}
                                      onChange={e => {
                                        handleOnChange(
                                          'order',
                                          e.target.value,
                                          data.id,
                                        );
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  {data.isEditable === false ? (
                                    <ul className="edit_wrap d-flex">
                                      <li
                                        onClick={() => {
                                          hanleUpdateData(data.id, true);
                                          setDummyEarningList(earningList);
                                        }}
                                      >
                                        <img src={EditIcon} alt="EditIcon" />
                                      </li>
                                      <li
                                        onClick={() => {
                                          setDeleteEarningRowId(data.id);
                                          setDeleteEarningDetail(true);
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
                                          setEarningList([...dummyEarningList]);
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
                        {addEarningNewRow === true && (
                          <tr>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  options={companyNameOption}
                                  value={values.componentName}
                                  placeholder="Select Company Name"
                                  onChange={e => {
                                    handleChange('componentName')(
                                      e.target.value,
                                    );
                                    setFieldValue(
                                      'payslipName',
                                      e.target.value,
                                    );
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <Input
                                type="text"
                                name="payslipName"
                                className={
                                  touched.payslipName && errors.payslipName
                                    ? 'p-inputtext p-component p-filled error-message'
                                    : 'p-inputtext p-component p-filled border-0'
                                }
                                value={values.payslipName}
                              />
                            </td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={values.calculationType}
                                  options={calculationTypeOption}
                                  onChange={e => {
                                    handleChange('calculationType')(
                                      e.target.value,
                                    );
                                  }}
                                  placeholder="Select Calculation Type"
                                />
                                {/* <Input
                                  type="text"
                                  name="payslipName"
                                  className={
                                    touched.payslipName && errors.payslipName
                                      ? 'p-inputtext p-component p-filled error-message'
                                      : 'p-inputtext p-component p-filled'
                                  }
                                  value={values.payslipName}
                                /> */}
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <Input
                                  type="number"
                                  name="fieldData"
                                  className={
                                    touched.fieldData && errors.fieldData
                                      ? 'p-inputtext p-component p-filled error-message'
                                      : 'p-inputtext p-component p-filled'
                                  }
                                  value={values.fieldData}
                                  onChange={e => {
                                    handleChange('fieldData')(e.target.value);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form_group">
                                <ReactSelectSingle
                                  value={values.calculationOn}
                                  options={calculationOnOption}
                                  onChange={e => {
                                    handleChange('calculationOn')(
                                      e.target.value,
                                    );
                                  }}
                                  placeholder="Select Calculation On"
                                />
                                {/* <Input
                                  type="text"
                                  name="calculationOn"
                                  className="p-inputtext p-component p-filled"
                                  value={values.calculationOn}
                                  onChange={e => {
                                    handleChange('calculationOn')(
                                      e.target.value,
                                    );
                                  }}
                                /> */}
                              </div>
                            </td>
                            <td>
                              <Input
                                type="number"
                                name="amountMonthly"
                                className={
                                  touched.amountMonthly && errors.amountMonthly
                                    ? 'p-inputtext p-component p-filled error-message'
                                    : 'p-inputtext p-component p-filled border-0'
                                }
                                value={values.amountMonthly}
                                onChange={e => {
                                  handleChange('amountMonthly')(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                name="amountAnnually"
                                className={
                                  touched.amountAnnually &&
                                  errors.amountAnnually
                                    ? 'p-inputtext p-component p-filled  error-message'
                                    : 'p-inputtext p-component p-filled border-0'
                                }
                                value={values.amountAnnually}
                                onChange={e => {
                                  handleChange('amountAnnually')(
                                    e.target.value,
                                  );
                                }}
                              />
                            </td>
                            <td>
                              <div className="form_group">
                                <Input
                                  type="number"
                                  name="order"
                                  className={
                                    touched.order && errors.order
                                      ? 'p-inputtext p-component p-filled  error-message'
                                      : 'p-inputtext p-component p-filled'
                                  }
                                  value={values.order}
                                  onChange={e => {
                                    handleChange('order')(e.target.value);
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li onClick={submitForm}>
                                  <img src={saveIcon} alt="saveIcon" />
                                </li>
                                <li
                                  onClick={() => {
                                    submitRefEarning.current.resetForm();
                                  }}
                                >
                                  <img src={cancelIcon} alt="cancelIcon" />
                                </li>
                              </ul>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="hr_line_wrap my-4">
                    <span></span>
                    <div className="hr_btn_wrap">
                      <button
                        type="button"
                        className="btn-primary"
                        disabled={addEarningNewRow === true}
                        onClick={() => {
                          setAddEarningNewRow(true);
                        }}
                      >
                        <img src={PlusIcon} className="me-2" alt="PlusImage" />
                        Add New
                      </button>
                    </div>
                    <span></span>
                  </div>
                  <Dialog
                    header="Confirm"
                    visible={deleteEarningDetail}
                    draggable={false}
                    resizable={false}
                    className="small_popup confirm_popup"
                    footer={renderFooter('deleteEarningDetail')}
                    onHide={() => setDeleteEarningDetail(false)}
                  >
                    <div className="delate_popup_wrap text-center">
                      <p>Are you sure you want to delete?</p>
                    </div>
                  </Dialog>
                </Form>
              </>
            )}
          </Formik>
          <div className="icon_title">
            <h6 className="mb-0">
              <img className="me-2" src={DeductionIcon} alt="DeductionIcon" />
              Deduction
            </h6>
          </div>
          <Formik
            initialValues={initialValuesDeduction}
            validationSchema={deductionTemplateScheme}
            innerRef={submitRefDeduction}
            enableReinitialize
            onSubmit={async (values, { resetForm }) => {
              setDeductionList([
                ...deductionList,
                {
                  ...values,
                  id: Math.floor(Math.random() * 100),
                  isEditable: false,
                },
              ]);
              submitRefDeduction.current.resetForm();
              addDeductionNewRow(false);
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
              <Form onSubmit={handleSubmit}>
                <>
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th style={{ width: '60%' }}>Component Name</th>
                          <th>Amount Monthly</th>
                          <th>Amount Annually</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {deductionList &&
                          deductionList.length > 0 &&
                          deductionList?.map((data, i) => {
                            return (
                              <tr key={i}>
                                <td style={{ width: '30%' }}>
                                  <div className="form_group">
                                    <Input
                                      type="text"
                                      className="p-inputtext p-component p-filled"
                                      value={data.componentName}
                                      disabled
                                      onChange={e => {
                                        handleOnChangeDeduction(
                                          'componentName',
                                          e.target.value,
                                          data.id,
                                        );
                                      }}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <Input
                                    type="number"
                                    className="p-inputtext p-component p-filled border-0"
                                    value={data.amountMonthly}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChangeDeduction(
                                        'amountMonthly',
                                        e.target.value,
                                        data.id,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <Input
                                    type="number"
                                    className="p-inputtext p-component p-filled border-0"
                                    value={data.amountAnnually}
                                    disabled={data.isEditable === false}
                                    onChange={e => {
                                      handleOnChangeDeduction(
                                        'amountAnnually',
                                        e.target.value,
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
                                          hanleUpdateDataDeduction(
                                            data.id,
                                            true,
                                          );
                                          setDummyDeductionList(deductionList);
                                        }}
                                      >
                                        <img src={EditIcon} alt="EditIcon" />
                                      </li>
                                      <li
                                        onClick={() => {
                                          setDeleteDeductionRowId(data.id);
                                          setDeleteDeductionDetail(true);
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
                                          hanleUpdateDataDeduction(
                                            data.id,
                                            false,
                                          );
                                        }}
                                      >
                                        <img src={saveIcon} alt="saveIcon" />
                                      </li>
                                      <li
                                        onClick={() => {
                                          setDeductionList([
                                            ...dummyDeductionList,
                                          ]);
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
                        {addDeductionNewRow === true && (
                          <tr>
                            <td style={{ width: '30%' }}>
                              <div className="form_group">
                                <ReactSelectSingle
                                  options={deductionComponentName}
                                  value={values.componentName}
                                  placeholder="Select Company Name"
                                  onChange={e => {
                                    handleChange('componentName')(
                                      e.target.value,
                                    );
                                  }}
                                />
                              </div>
                            </td>
                            <td>
                              <Input
                                type="number"
                                className={
                                  touched.amountMonthly && errors.amountMonthly
                                    ? 'p-inputtext p-component p-filled  error-message'
                                    : 'p-inputtext p-component p-filled'
                                }
                                value={values.amountMonthly}
                                onChange={e => {
                                  handleChange('amountMonthly')(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                className={
                                  touched.amountAnnually &&
                                  errors.amountAnnually
                                    ? 'p-inputtext p-component p-filled  error-message'
                                    : 'p-inputtext p-component p-filled'
                                }
                                value={values.amountAnnually}
                                onChange={e => {
                                  handleChange('amountAnnually')(
                                    e.target.value,
                                  );
                                }}
                              />
                            </td>
                            <td>
                              <ul className="edit_wrap d-flex">
                                <li onClick={submitForm}>
                                  <img src={saveIcon} alt="saveIcon" />
                                </li>
                                <li
                                  onClick={() => {
                                    submitRefDeduction.current.resetForm();
                                  }}
                                >
                                  <img src={cancelIcon} alt="cancelIcon" />
                                </li>
                              </ul>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="hr_line_wrap my-4">
                    <span></span>
                    <div className="hr_btn_wrap">
                      <button
                        type="button"
                        className="btn-primary"
                        disabled={addDeductionNewRow === true}
                        onClick={() => {
                          setAddDeductionNewRow(true);
                        }}
                      >
                        <img src={PlusIcon} className="me-2" alt="PlusImage" />
                        Add New
                      </button>
                    </div>
                    <span></span>
                  </div>

                  <div className="total_table">
                    <table className="border-0">
                      <tr>
                        <td style={{ width: '60%' }}>Cost To Company</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>&nbsp;</td>
                      </tr>
                    </table>
                  </div>
                </>
                <Dialog
                  header="Confirm"
                  visible={deleteDeductionDetail}
                  draggable={false}
                  resizable={false}
                  className="small_popup confirm_popup"
                  footer={renderFooter('deleteDeductionDetail')}
                  onHide={() => onHide('deleteDeductionDetail')}
                >
                  <div className="delate_popup_wrap text-center">
                    <p>Are you sure you want to delete?</p>
                  </div>
                </Dialog>
              </Form>
            )}
          </Formik>
        </div>
        <div className="btn_group d-flex justify-content-end pt-3">
          <Link
            to="/payroll/setting/salary-template"
            className="btn-secondary mx-3"
          >
            Cancel
          </Link>
          <Link to="/payroll/setting/salary-template" className="btn-primary">
            Save
          </Link>
        </div>
      </div>
    </>
  );
}
