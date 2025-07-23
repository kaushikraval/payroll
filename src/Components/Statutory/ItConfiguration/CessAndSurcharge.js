import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import DeleteButtonIcon from '../../../Assets/images/DeleteBtn.svg';
import saveIcon from '../../../Assets/images/close-circle.svg';
import EditIcon from '../../../Assets/images/EditIcon.svg';
import cancelIcon from '../../../Assets/images/close-circle-two.png';
import Input from '../../Common/Input';
import PlusIcon from '../../../Assets/images/plus.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export default function CessAndSurcharge() {
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [dummyList, setDummyList] = useState([]);
  const [addNewRow, setAddNewRow] = useState(true);
  const [deleteRowId, setDeleteRow] = useState('');
  const submitRef = useRef(null);
  const initialValues = {
    fromAmount: 0,
    toAmount: 0,
    taxPer: 0,
  };
  const [taxRagimeRow, setTaxRagimeRow] = useState(initialValues);
  const [taxRagimeList, setTaxRagimeList] = useState([]);
  const taxRagimeSchema = Yup.object().shape({
    fromAmount: Yup.number().required('Required'),
    toAmount: Yup.number().required('Required'),
    taxPer: Yup.number().required('Required'),
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
          className="btn-secondary me-3"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => {
            const filterData = taxRagimeList.filter(
              data => data.id !== deleteRowId,
            );
            setTaxRagimeList(filterData);
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };
  const hanleUpdateData = (index, toggleValue) => {
    let newData = taxRagimeList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setTaxRagimeList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = taxRagimeList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setTaxRagimeList(newData);
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
            <b>IT Configuration</b>
          </li>
          <li>Cess & Surcharge</li>
        </ul>
      </div>
      <Formik
        initialValues={taxRagimeRow}
        validationSchema={taxRagimeSchema}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setTaxRagimeList([
            ...taxRagimeList,
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
          <div className="surcharge_config_wrap bg_white_box p-3">
            <div className="surcharge_config_top mb-4">
              <div className="pf_radio_wrap m-0">
                <label className="m-0" htmlFor="actualPf">
                  Health & Education Cess
                  <Input type="number" placeholder="04" className="mx-sm-2" />
                  <span className="percentage_input">%</span>
                </label>
              </div>
            </div>
            <Form onSubmit={handleSubmit}>
              <div className="data_table_one lwf_table surcharge_config_table mb-3">
                <h6 className="mb-3">Surcharge Slab Details</h6>
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th>From Amount</th>
                        <th>To Amount</th>
                        <th>Tax (%)</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {taxRagimeList &&
                        taxRagimeList.length > 0 &&
                        taxRagimeList?.map((data, i) => {
                          return (
                            <tr>
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
                                  value={data.taxPer}
                                  disabled={data.isEditable === false}
                                  onChange={e => {
                                    handleOnChange(
                                      'taxPer',
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
                                        setDummyList(taxRagimeList);
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
                                        setTaxRagimeList([...dummyList]);
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
                              name="taxPer"
                              value={values.taxPer}
                              onChange={e => {
                                handleChange('taxPer')(e.target.value);
                              }}
                              className={
                                touched.taxPer && errors.taxPer
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
          </div>
        )}
      </Formik>
    </div>
  );
}
