import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Input from '../../Common/Input';
import PlusIcon from '../../../Assets/images/plus.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import saveIcon from '../../../Assets/images/close-circle.svg';
import EditIcon from '../../../Assets/images/EditIcon.svg';
import cancelIcon from '../../../Assets/images/close-circle-two.png';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function CreateIpRange() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [dummyList, setDummyList] = useState([]);
  const [addNewRow, setAddNewRow] = useState(true);
  const [deleteRowId, setDeleteRow] = useState('');
  const submitRef = useRef(null);
  const initialValues = {
    ipRangeFrom: 0,
    ipRangeTo: 0,
  };
  const [ipRangeRow, setIpRangeRow] = useState(initialValues);
  const [ipRangeList, setIpRangeList] = useState([]);
  const ipRangeScheme = Yup.object().shape({
    ipRangeFrom: Yup.number().required('Required'),
    ipRangeTo: Yup.number().required('Required'),
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
            const filterData = ipRangeList.filter(
              data => data.id !== deleteRowId,
            );
            setIpRangeList(filterData);
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };
  const hanleUpdateData = (index, toggleValue) => {
    let newData = ipRangeList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setIpRangeList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = ipRangeList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setIpRangeList(newData);
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
            <b>Scheme</b>
          </li>
          <li>
            <b>Attendance</b>
          </li>
          <li>
            <b>
              <Link to="/scheme/attendance/ip-range">IP Range</Link>
            </b>
          </li>
          <li>Add IP Range</li>
        </ul>
      </div>
      <Formik
        initialValues={ipRangeRow}
        validationSchema={ipRangeScheme}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setIpRangeList([
            ...ipRangeList,
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
          <>
            <div className="create_iprange_wrap bg_white_box p-3">
              <div className="create_iprange_inner">
                <div className="form_group form_letter_name">
                  <label>Network Name</label>
                  <Input type="text" placeholder="Network Name" />
                </div>
                <Form onSubmit={handleSubmit}>
                  <div className="create_pfconfig_wrap ">
                    <h6 className="mb-3">IP Address Ranges</h6>
                    <form>
                      <div className="data_table_one lwf_table create_iprange_table">
                        <div className="table-responsive">
                          <table id="example" className="display">
                            <thead>
                              <tr>
                                <th>IP Range From</th>
                                <th>IP Range To</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {ipRangeList &&
                                ipRangeList.length > 0 &&
                                ipRangeList?.map((data, i) => {
                                  return (
                                    <tr>
                                      <td>
                                        <Input
                                          type="number"
                                          placeholder="00"
                                          value={data.ipRangeFrom}
                                          disabled={data.isEditable === false}
                                          onChange={e => {
                                            handleOnChange(
                                              'ipRangeFrom',
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
                                          value={data.ipRangeTo}
                                          disabled={data.isEditable === false}
                                          onChange={e => {
                                            handleOnChange(
                                              'ipRangeTo',
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
                                                setDummyList(ipRangeList);
                                              }}
                                            >
                                              <img
                                                src={EditIcon}
                                                alt="EditIcon"
                                              />
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
                                              <img
                                                src={saveIcon}
                                                alt="saveIcon"
                                              />
                                            </li>
                                            <li
                                              onClick={() => {
                                                setIpRangeList([...dummyList]);
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
                                      name="ipRangeFrom"
                                      value={values.ipRangeFrom}
                                      onChange={e => {
                                        handleChange('ipRangeFrom')(
                                          e.target.value,
                                        );
                                      }}
                                      className={
                                        touched.ipRangeFrom &&
                                        errors.ipRangeFrom
                                          ? 'error-message'
                                          : ''
                                      }
                                    />
                                  </td>
                                  <td>
                                    <Input
                                      type="number"
                                      placeholder="00"
                                      name="ipRangeTo"
                                      value={values.ipRangeTo}
                                      onChange={e => {
                                        handleChange('ipRangeTo')(
                                          e.target.value,
                                        );
                                      }}
                                      className={
                                        touched.ipRangeTo && errors.ipRangeTo
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
                                        <img
                                          src={cancelIcon}
                                          alt="cancelIcon"
                                        />
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              )}

                              <tr>
                                <td colSpan="3">
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
                    </form>
                  </div>

                  <div className="btn_group d-flex justify-content-end mt-4">
                    <Link
                      to="/scheme/attendance/ip-range"
                      className="btn-secondary mx-3"
                    >
                      Cancel
                    </Link>
                    <Link
                      className="btn-primary"
                      to="/scheme/attendance/ip-range"
                    >
                      Save
                    </Link>
                  </div>
                </Form>
              </div>
            </div>

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
        )}
      </Formik>
    </div>
  );
}
