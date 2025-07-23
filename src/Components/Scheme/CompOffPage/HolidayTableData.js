import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import saveIcon from '../../../Assets/images/close-circle.svg';
import EditIcon from '../../../Assets/images/EditIcon.svg';
import cancelIcon from '../../../Assets/images/close-circle-two.png';
import Input from '../../Common/Input';
import PlusIcon from '../../../Assets/images/plus.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function HolidayTableData() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [dummyList, setDummyList] = useState([]);
  const [addNewRow, setAddNewRow] = useState(true);
  const [deleteRowId, setDeleteRow] = useState('');
  const submitRef = useRef(null);
  const initialValues = {
    from: 0,
    to: 0,
    creditDays: 0,
  };
  const [holidayRow, setHolidayRow] = useState(initialValues);
  const [holidayList, setHolidayList] = useState([]);
  const holidaySchema = Yup.object().shape({
    from: Yup.number().required('Required'),
    to: Yup.number().required('Required'),
    creditDays: Yup.number().required('Required'),
  });
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
          className="btn-secondary"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => {
            const filterData = holidayList.filter(
              data => data.id !== deleteRowId,
            );
            setHolidayList(filterData);
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };
  const hanleUpdateData = (index, toggleValue) => {
    let newData = holidayList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setHolidayList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = holidayList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setHolidayList(newData);
  };
  return (
    <div>
      <Formik
        initialValues={holidayRow}
        validationSchema={holidaySchema}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setHolidayList([
            ...holidayList,
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
          submitForm,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="data_table_one lwf_table  CompOffStepone create_pt_config_table pb-3">
              <div className="table-responsive">
                <table id="example" className="display">
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To </th>
                      <th>Credit Days</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidayList &&
                      holidayList.length > 0 &&
                      holidayList?.map((data, i) => {
                        return (
                          <tr>
                            <td>
                              <Input
                                type="number"
                                placeholder="00"
                                value={data.from}
                                disabled={data.isEditable === false}
                                onChange={e => {
                                  handleOnChange(
                                    'from',
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
                                value={data.to}
                                disabled={data.isEditable === false}
                                onChange={e => {
                                  handleOnChange('to', e.target.value, data.id);
                                }}
                              />
                            </td>
                            <td>
                              <Input
                                type="number"
                                placeholder="00"
                                value={data.creditDays}
                                disabled={data.isEditable === false}
                                onChange={e => {
                                  handleOnChange(
                                    'creditDays',
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
                                      hanleUpdateData(data.id, true);
                                      setDummyList(holidayList);
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
                                      setHolidayList([...dummyList]);
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
                            name="from"
                            value={values.from}
                            onChange={e => {
                              handleChange('from')(e.target.value);
                            }}
                            className={
                              touched.from && errors.from ? 'error-message' : ''
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            placeholder="00"
                            name="to"
                            value={values.to}
                            onChange={e => {
                              handleChange('to')(e.target.value);
                            }}
                            className={
                              touched.to && errors.to ? 'error-message' : ''
                            }
                          />
                        </td>
                        <td>
                          <Input
                            type="number"
                            placeholder="00"
                            name="creditDays"
                            value={values.creditDays}
                            onChange={e => {
                              handleChange('creditDays')(e.target.value);
                            }}
                            className={
                              touched.creditDays && errors.creditDays
                                ? 'error-message'
                                : ''
                            }
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
          </Form>
        )}
      </Formik>
    </div>
  );
}
