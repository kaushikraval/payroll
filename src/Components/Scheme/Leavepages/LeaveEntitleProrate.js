import { useState, useRef } from 'react';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import PlusIcon from '../../../Assets/images/plus.svg';
import ReactRadioButton from '../../Common/ReactRadioButton';
import Info from '../../../Assets/images/info_grey.svg';
import saveIcon from '../../../Assets/images/close-circle.svg';
import EditIcon from '../../../Assets/images/EditIcon.svg';
import cancelIcon from '../../../Assets/images/close-circle-two.png';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function LeaveEntitleProrate() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [Approval, setApproval] = useState('NoApproval');
  const [Round, setRound] = useState('Offround');
  const [firstMonthDummyList, setFirstMonthDummyList] = useState([]);
  const [lastMonthDummyList, setLastMonthDummyList] = useState([]);
  const [addNewRowFirstMonth, setAddNewRowFirstMonth] = useState(true);
  const [addNewRowLastMonth, setAddNewRowLastMonth] = useState(true);
  const [deleteRowId, setDeleteRow] = useState('');
  const submitRef = useRef(null);
  const initialValues = {
    firstMonth: {
      from: 0,
      to: 0,
      percentage: 0,
    },
    lastMonth: {
      from: 0,
      to: 0,
      percentage: 0,
    },
  };
  const [lwfRow, setLwfRow] = useState(initialValues);
  const [leaveBalanceFirstMonthList, setLeaveBalanceFirstMonthList] = useState(
    [],
  );
  const [leaveBalanceLastMonthList, setLeaveBalanceLastMonthList] = useState(
    [],
  );
  const [leaveBalanceMonth, setLeaveBalanceMonth] = useState('');
  const lwfConfigurationSchema = Yup.object().shape({
    firstMonth: Yup.object().shape({
      from: Yup.number().required('Required'),
      to: Yup.number().required('Required'),
      percentage: Yup.number().required('Required'),
    }),
    lastMonth: Yup.object().shape({
      from: Yup.number().required('Required'),
      to: Yup.number().required('Required'),
      percentage: Yup.number().required('Required'),
    }),
  });
  const hanleUpdateData = (index, toggleValue) => {
    if (leaveBalanceMonth === 'First Month') {
      let newData = leaveBalanceFirstMonthList.map(item => {
        if (item.id === index) {
          return { ...item, isEditable: toggleValue };
        }
        return item;
      });
      setLeaveBalanceFirstMonthList(newData);
    } else {
      let newData = leaveBalanceLastMonthList.map(item => {
        if (item.id === index) {
          return { ...item, isEditable: toggleValue };
        }
        return item;
      });
      setLeaveBalanceLastMonthList(newData);
    }
  };
  const handleOnChange = (name, value, index) => {
    if (leaveBalanceMonth === 'First Month') {
      let newData = leaveBalanceFirstMonthList.map(item => {
        if (item.id === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      setLeaveBalanceFirstMonthList(newData);
    } else {
      let newData = leaveBalanceLastMonthList.map(item => {
        if (item.id === index) {
          return { ...item, [name]: value };
        }
        return item;
      });
      setLeaveBalanceLastMonthList(newData);
    }
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
            if (leaveBalanceMonth === 'First Month') {
              const filterData = leaveBalanceFirstMonthList.filter(
                data => data.id !== deleteRowId,
              );
              setLeaveBalanceFirstMonthList(filterData);
              onHide(name);
            } else {
              const filterData = leaveBalanceLastMonthList.filter(
                data => data.id !== deleteRowId,
              );
              setLeaveBalanceLastMonthList(filterData);
              onHide(name);
            }
          }}
          autoFocus
        />
      </div>
    );
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
            <b>
              <Link to="/scheme/leave">Leave</Link>
            </b>
          </li>
          <li>Configure Leave Type</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="completed">
            <div className="icon"></div>
            <span>Leave Entitle Setup</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Leave Entitle Prorate</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Application Rule</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Restriction Setting</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Holiday & Weekend</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Year end</span>
          </li>
          <li>
            <div className="icon"></div>
            <span>Leave Approval</span>
          </li>
        </ul>
      </div>
      <Formik
        initialValues={lwfRow}
        validationSchema={lwfConfigurationSchema}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          if (leaveBalanceMonth === 'First Month') {
            setLeaveBalanceFirstMonthList(prev => [
              ...prev,
              {
                ...values.firstMonth,
                id: Math.floor(Math.random() * 100),
                isEditable: false,
              },
            ]);
            submitRef.current.resetForm();
            setAddNewRowFirstMonth(false);
          } else {
            setLeaveBalanceLastMonthList(prev => [
              ...prev,
              {
                ...values.lastMonth,
                id: Math.floor(Math.random() * 100),
                isEditable: false,
              },
            ]);
            submitRef.current.resetForm();
            setAddNewRowLastMonth(false);
          }
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
          <div className="p-3">
            <p>
              Do you want to system to prorate interval based credit leave
              balance?
            </p>
            <Form onSubmit={handleSubmit}>
              {console.log('values....', values)}
              <div className="bg_white_box p-3">
                <div className="radio_button_wrapper">
                  <div className="radio_button pf_radio_wrap">
                    <ReactRadioButton
                      inputId="NoApproval"
                      name="NoApproval"
                      value="NoApproval"
                      onChange={e => setApproval(e.value)}
                      checked={Approval === 'NoApproval'}
                    />
                    <label className="m-0" htmlFor="NoApproval">
                      Do not Pro rate
                      <img src={Info} alt="info" className="ms-3" />
                    </label>
                  </div>
                  <div className="radio_button pf_radio_wrap">
                    <ReactRadioButton
                      inputId="Approval"
                      name="Approval"
                      value="Approval"
                      onChange={e => setApproval(e.value)}
                      checked={Approval === 'Approval'}
                    />
                    <label className="m-0" htmlFor="Approval">
                      Pro rate leave balance
                      <img src={Info} alt="info" className="ms-3" />
                    </label>
                  </div>
                </div>
                {Approval === 'Approval' && (
                  <>
                    <h6>Advance Pro rate leave Rule</h6>
                    <div className="data_table_one lwf_table CompOffStepone create_pt_config_table mb-3">
                      <div className="table-responsive">
                        <table id="example" className="display">
                          <thead>
                            <tr>
                              <th>From</th>
                              <th>To</th>
                              <th>Percentage</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={7}>
                                <b>First Month</b>
                              </td>
                            </tr>
                            {leaveBalanceFirstMonthList &&
                              leaveBalanceFirstMonthList.length > 0 &&
                              leaveBalanceFirstMonthList?.map((data, i) => {
                                return (
                                  <tr>
                                    <td>
                                      <input
                                        type="number"
                                        placeholder="00"
                                        className="p-inputtext p-component p-filled"
                                        value={data.from}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          setLeaveBalanceMonth('First Month');
                                          handleOnChange(
                                            'from',
                                            e.target.value,
                                            data.id,
                                          );
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="number"
                                        placeholder="00"
                                        className="p-inputtext p-component p-filled"
                                        value={data.to}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          setLeaveBalanceMonth('First Month');
                                          handleOnChange(
                                            'to',
                                            e.target.value,
                                            data.id,
                                          );
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Placeholder Text"
                                        className="p-inputtext p-component p-filled"
                                        value={data.percentage}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          setLeaveBalanceMonth('First Month');
                                          handleOnChange(
                                            'percentage',
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
                                              setLeaveBalanceMonth(
                                                'First Month',
                                              );
                                              hanleUpdateData(data.id, true);
                                              setFirstMonthDummyList(
                                                leaveBalanceFirstMonthList,
                                              );
                                            }}
                                          >
                                            <img
                                              src={EditIcon}
                                              alt="EditIcon"
                                            />
                                          </li>
                                          <li
                                            onClick={() => {
                                              setLeaveBalanceMonth(
                                                'First Month',
                                              );
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
                                              setLeaveBalanceMonth(
                                                'First Month',
                                              );
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
                                              setLeaveBalanceFirstMonthList([
                                                ...firstMonthDummyList,
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
                            {addNewRowFirstMonth === true && (
                              <tr>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="00"
                                    value={values.firstMonth.from}
                                    onChange={e => {
                                      handleChange('firstMonth.from')(
                                        e.target.value,
                                      );
                                    }}
                                    className={
                                      touched.firstMonth &&
                                      touched.firstMonth.from &&
                                      errors.firstMonth &&
                                      errors.firstMonth.from
                                        ? 'p-inputtext p-component p-filled error-message'
                                        : 'p-inputtext p-component p-filled'
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="00"
                                    className={
                                      touched.firstMonth &&
                                      touched.firstMonth.to &&
                                      errors.firstMonth &&
                                      errors.firstMonth.to
                                        ? 'p-inputtext p-component p-filled error-message'
                                        : 'p-inputtext p-component p-filled'
                                    }
                                    value={values.firstMonth.to}
                                    onChange={e => {
                                      handleChange('firstMonth.to')(
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="Placeholder Text"
                                    className={
                                      touched.firstMonth &&
                                      touched.firstMonth.percentage &&
                                      errors.firstMonth &&
                                      errors.firstMonth.percentage
                                        ? 'p-inputtext p-component p-filled error-message'
                                        : 'p-inputtext p-component p-filled'
                                    }
                                    value={values.firstMonth.percentage}
                                    onChange={e => {
                                      handleChange('firstMonth.percentage')(
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <ul className="edit_wrap d-flex">
                                    <li
                                      onClick={() => {
                                        setLeaveBalanceMonth('First Month');
                                        submitForm();
                                      }}
                                    >
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
                                      disabled={addNewRowFirstMonth === true}
                                      onClick={() => {
                                        setAddNewRowFirstMonth(true);
                                      }}
                                    >
                                      <img
                                        src={PlusIcon}
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
                            <tr>
                              <td colSpan={7}>
                                <b>Last Month</b>
                              </td>
                            </tr>
                            {leaveBalanceLastMonthList &&
                              leaveBalanceLastMonthList.length > 0 &&
                              leaveBalanceLastMonthList.map((data, i) => {
                                return (
                                  <tr>
                                    <td>
                                      <input
                                        type="number"
                                        placeholder="00"
                                        className="p-inputtext p-component p-filled"
                                        value={data.from}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          setLeaveBalanceMonth('Last Month');
                                          handleOnChange(
                                            'from',
                                            e.target.value,
                                            data.id,
                                          );
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="number"
                                        placeholder="00"
                                        className="p-inputtext p-component p-filled"
                                        value={data.to}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          setLeaveBalanceMonth('Last Month');
                                          handleOnChange(
                                            'to',
                                            e.target.value,
                                            data.id,
                                          );
                                        }}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        placeholder="Placeholder Text"
                                        className="p-inputtext p-component p-filled"
                                        value={data.percentage}
                                        disabled={data.isEditable === false}
                                        onChange={e => {
                                          setLeaveBalanceMonth('Last Month');
                                          handleOnChange(
                                            'percentage',
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
                                              setLeaveBalanceMonth(
                                                'Last Month',
                                              );
                                              hanleUpdateData(data.id, true);
                                              setLastMonthDummyList(
                                                leaveBalanceLastMonthList,
                                              );
                                            }}
                                          >
                                            <img
                                              src={EditIcon}
                                              alt="EditIcon"
                                            />
                                          </li>
                                          <li
                                            onClick={() => {
                                              setLeaveBalanceMonth(
                                                'Last Month',
                                              );
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
                                              setLeaveBalanceMonth(
                                                'Last Month',
                                              );
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
                                              setLeaveBalanceLastMonthList([
                                                ...lastMonthDummyList,
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
                            {addNewRowLastMonth === true && (
                              <tr>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="00"
                                    value={values.lastMonth.from}
                                    onChange={e => {
                                      handleChange('lastMonth.from')(
                                        e.target.value,
                                      );
                                    }}
                                    className={
                                      touched.lastMonth &&
                                      touched.lastMonth.from &&
                                      errors.lastMonth &&
                                      errors.lastMonth.from
                                        ? 'p-inputtext p-component p-filled error-message'
                                        : 'p-inputtext p-component p-filled'
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    placeholder="00"
                                    className={
                                      touched.lastMonth &&
                                      touched.lastMonth.to &&
                                      errors.lastMonth &&
                                      errors.lastMonth.to
                                        ? 'p-inputtext p-component p-filled error-message'
                                        : 'p-inputtext p-component p-filled'
                                    }
                                    value={values.lastMonth.to}
                                    onChange={e => {
                                      handleChange('lastMonth.to')(
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    placeholder="Placeholder Text"
                                    className={
                                      touched.lastMonth &&
                                      touched.lastMonth.percentage &&
                                      errors.lastMonth &&
                                      errors.lastMonth.percentage
                                        ? 'p-inputtext p-component p-filled error-message'
                                        : 'p-inputtext p-component p-filled'
                                    }
                                    value={values.lastMonth.percentage}
                                    onChange={e => {
                                      handleChange('lastMonth.percentage')(
                                        e.target.value,
                                      );
                                    }}
                                  />
                                </td>
                                <td>
                                  <ul className="edit_wrap d-flex">
                                    <li
                                      onClick={() => {
                                        setLeaveBalanceMonth('Last Month');
                                        submitForm();
                                      }}
                                    >
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
                                      disabled={addNewRowLastMonth === true}
                                      onClick={() => {
                                        setAddNewRowLastMonth(true);
                                      }}
                                    >
                                      <img
                                        src={PlusIcon}
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
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-4">
                  <h5 className="mb-3">Round Off Pro rate Credit Balance</h5>
                  <div className="radio_button_wrapper">
                    <div className="radio_button pf_radio_wrap">
                      <ReactRadioButton
                        inputId="Offround"
                        name="Offround"
                        value="Offround"
                        onChange={e => setRound(e.value)}
                        checked={Round === 'Offround'}
                      />
                      <label className="m-0" htmlFor="Offround">
                        Do not round - off decimals
                        <img src={Info} alt="info" className="ms-3" />
                      </label>
                    </div>
                    <div className="radio_button pf_radio_wrap">
                      <ReactRadioButton
                        inputId="Halfround"
                        name="Halfround"
                        value="Halfround"
                        onChange={e => setRound(e.value)}
                        checked={Round === 'Halfround'}
                      />
                      <label className="m-0" htmlFor="Halfround">
                        Round - off to half day
                        <img src={Info} alt="info" className="ms-3" />
                      </label>
                    </div>
                    <div className="radio_button pf_radio_wrap">
                      <ReactRadioButton
                        inputId="Fullround"
                        name="Fullround"
                        value="Fullround"
                        onChange={e => setRound(e.value)}
                        checked={Round === 'Fullround'}
                      />
                      <label className="m-0" htmlFor="Fullround">
                        Round - off to full day
                        <img src={Info} alt="info" className="ms-3" />
                      </label>
                    </div>
                  </div>
                </div>
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
            <div className="btn_group d-flex justify-content-end mt-4">
              <Link to="/scheme/leave" className="btn-secondary">
                Cancel
              </Link>
              <Link
                to="/scheme/leavepages/leave-entitle-setup"
                className="btn-secondary mx-3"
              >
                Previous
              </Link>

              <Link
                to="/scheme/leavepages/leave-application-rule"
                className="btn-primary me-3"
              >
                Next
              </Link>
              <Link to="" className="btn-primary">
                Save
              </Link>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
