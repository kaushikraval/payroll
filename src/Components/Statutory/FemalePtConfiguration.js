import React, { useState, useRef } from 'react';
import Input from '../Common/Input';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import PlusIcon from '../../Assets/images/plus.svg';
import PlusRound from '../../Assets/images/plus-round.svg';
import MinusRound from '../../Assets/images/minus-round.svg';
import cancelIcon from '../../Assets/images/close-circle-two.png';
import saveIcon from '../../Assets/images/close-circle.svg';
import { Dialog } from 'primereact/dialog';
import EditIcon from '../../Assets/images/EditIcon.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import { Button } from 'primereact/button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function FemalePtConfiguration() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [DeductionMonth, setDeductionMonth] = useState([]);
  const [dummyList, setDummyList] = useState([]);
  const [addNewRow, setAddNewRow] = useState(true);
  const [deleteRowId, setDeleteRow] = useState('');
  const initialValues = {
    fromAmount: 0,
    toAmount: 0,
    taxAmount: 0,
    monthSelection: false,
    applicableAmount: 0,
    selectMonth: [],
  };
  const femalePtConfigurationSchema = Yup.object().shape({
    fromAmount: Yup.number().required('Required'),
    toAmount: Yup.number().required('Required'),
    taxAmount: Yup.number().required('Required'),
  });
  const [femalePtRow, setFemalePtRow] = useState(initialValues);
  const [femalePtList, setFemalePtList] = useState([]);
  const submitRef = useRef(null);
  const setDeductionMonthOption = [
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
            const filterData = femalePtList.filter(
              data => data.id !== deleteRowId,
            );
            setFemalePtList(filterData);
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };
  const hanleUpdateData = (index, toggleValue) => {
    let newData = femalePtList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setFemalePtList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = femalePtList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setFemalePtList(newData);
  };
  return (
    <div className="data_table_one lwf_table pt_config_table">
      <h6>Female</h6>
      <Formik
        initialValues={femalePtRow}
        validationSchema={femalePtConfigurationSchema}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setFemalePtList([
            ...femalePtList,
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
          <div className="table-responsive">
            <Form onSubmit={handleSubmit}>
              <>
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th>From Amount</th>
                      <th></th>
                      <th>To Amount</th>
                      <th>Tax Amount</th>
                      <th>Month Selection</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {femalePtList &&
                      femalePtList.length > 0 &&
                      femalePtList?.map((data, i) => {
                        return (
                          <tr
                            key={i}
                            className={
                              data.isEditable === false ? 'disable_tr' : ''
                            }
                          >
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
                                value={data.taxAmount}
                                disabled={data.isEditable === false}
                                onChange={e => {
                                  handleOnChange(
                                    'taxAmount',
                                    e.target.value,
                                    data.id,
                                  );
                                }}
                              />
                            </td>
                            <td>
                              <ul className="edit_wrap month_selection d-flex align-items-center">
                                <li
                                  onClick={() => {
                                    if (data.isEditable === true) {
                                      handleOnChange(
                                        'monthSelection',
                                        true,
                                        data.id,
                                      );
                                    }
                                  }}
                                >
                                  <img src={PlusRound} alt="plusround" />
                                </li>
                                {data.monthSelection === true && (
                                  <>
                                    <li>
                                      <ReactSelectMultiple
                                        value={data.selectMonth}
                                        options={setDeductionMonthOption}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          handleOnChange(
                                            'selectMonth',
                                            e.value,
                                            data.id,
                                          );
                                        }}
                                        placeholder="Month"
                                      />
                                    </li>
                                    <li>
                                      <Input
                                        type="number"
                                        placeholder="Applicable Amount"
                                        value={data.applicableAmount}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          handleOnChange(
                                            'applicableAmount',
                                            e.target.value,
                                            data.id,
                                          );
                                        }}
                                      />
                                    </li>
                                    <li
                                      onClick={() => {
                                        if (data.isEditable === true) {
                                          handleOnChange(
                                            'monthSelection',
                                            false,
                                            data.id,
                                          );
                                        }
                                      }}
                                    >
                                      <img src={MinusRound} alt="minusround" />
                                    </li>
                                  </>
                                )}
                              </ul>
                            </td>
                            <td>
                              {data.isEditable === false ? (
                                <ul className="edit_wrap d-flex">
                                  <li
                                    onClick={() => {
                                      hanleUpdateData(data.id, true);
                                      setDummyList(femalePtList);
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
                                      setFemalePtList([...dummyList]);
                                    }}
                                  >
                                    <img src={cancelIcon} alt="cancelIcon" />
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
                            name="taxAmount"
                            value={values.taxAmount}
                            onChange={e => {
                              handleChange('taxAmount')(e.target.value);
                            }}
                            className={
                              touched.taxAmount && errors.taxAmount
                                ? 'error-message'
                                : ''
                            }
                          />
                        </td>
                        <td>
                          <ul className="edit_wrap d-flex align-items-center">
                            <li
                              onClick={() => {
                                setFieldValue('monthSelection', true);
                              }}
                            >
                              <img src={PlusRound} alt="plusround" />
                            </li>
                            {values.monthSelection === true && (
                              <>
                                <li>
                                  <ReactSelectMultiple
                                    value={DeductionMonth}
                                    options={setDeductionMonthOption}
                                    onChange={e => {
                                      setDeductionMonth(e.value);
                                    }}
                                    placeholder="Month"
                                  />
                                </li>
                                <li>
                                  <Input
                                    type="number"
                                    placeholder="Applicable Amount"
                                    name="applicableAmount"
                                    value={values.applicableAmount}
                                    onChange={e => {
                                      handleChange('applicableAmount')(
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </li>
                                <li
                                  onClick={() => {
                                    setFieldValue('monthSelection', false);
                                  }}
                                >
                                  <img src={MinusRound} alt="minusround" />
                                </li>
                              </>
                            )}
                          </ul>
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
              </>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
