import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import DotIcon from '../../Assets/images/dotIcon.svg';
import TextArea from '../Common/TextArea';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Plus from '../../Assets/images/plus.svg';
import EditButtonIcon from '../../Assets/images/edit.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import CloseCircle from '../../Assets/images/close-circle.svg';
import CloseCircleTwo from '../../Assets/images/close-circle-two.png';
import Input from '../Common/Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
export default function AssetCategory() {
  const [deletedetail, setDeleteDetail] = useState(false);
  const [dummyList, setDummyList] = useState([]);
  const [addNewRow, setAddNewRow] = useState(false);
  const [deleteRowId, setDeleteRow] = useState('');
  const submitRef = useRef(null);
  const initialValues = {
    assetName: '',
  };
  const [assetCategoryRow, setAssetCategoryRow] = useState(initialValues);
  const [assetCategoryList, setAssetCategoryList] = useState([]);
  const assetCategorySchema = Yup.object().shape({
    assetName: Yup.string().required('Required'),
  });
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
            const filterData = assetCategoryList.filter(
              data => data.id !== deleteRowId,
            );
            setAssetCategoryList(filterData);
            onHide(name);
          }}
          autoFocus
        />
      </div>
    );
  };
  const renderFooterEdit = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          s
          className="btn-secondary"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const [editcategory, setEditCategory] = useState(false);
  const dialogFuncMap = {
    editcategory: setEditCategory,
    deletedetail: setDeleteDetail,
  };

  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const hanleUpdateData = (index, toggleValue) => {
    let newData = assetCategoryList.map(item => {
      if (item.id === index) {
        return { ...item, isEditable: toggleValue };
      }
      return item;
    });
    setAssetCategoryList(newData);
  };
  const handleOnChange = (name, value, index) => {
    let newData = assetCategoryList.map(item => {
      if (item.id === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setAssetCategoryList(newData);
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
            <b>Assets</b>
          </li>
          <li>Asset categories & Type</li>
        </ul>
      </div>
      {/* <div className="degree_certificate_row">
        <div className="d-flex justify-content-end align-items-center"></div>
      </div> */}
      <Formik
        initialValues={assetCategoryRow}
        validationSchema={assetCategorySchema}
        innerRef={submitRef}
        enableReinitialize
        onSubmit={async (values, { resetForm }) => {
          setAssetCategoryList([
            ...assetCategoryList,
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
          <div className="employee_tabs mt-md-4 mt-2">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-5">
                <div className="bg_white_box employee_tabs_one employee_tabs_one_asset p-md-4 p-3">
                  <h6 className="mb-md-4 mb-3">Asset Categories</h6>
                  <input
                    type="search"
                    className="form-control src_input mb-3 w-100"
                    placeholder="Search  Employee"
                  />
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="d-flex align-items-center tab_verticle">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <button
                            className="nav-link active"
                            id="v-pills-BranchLocation-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-BranchLocation"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-BranchLocation"
                            aria-selected="false"
                          >
                            Electronics
                          </button>
                          <button
                            className="nav-link"
                            id="v-pills-Department-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-Department"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-Department"
                            aria-selected="true"
                          >
                            Furniture
                          </button>
                          <button
                            className="nav-link"
                            id="v-pills-Designation-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-Designation"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-Designation"
                            aria-selected="false"
                          >
                            Inventory
                          </button>
                          <button
                            className="nav-link"
                            id="v-pills-Status-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-Status"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-Status"
                            aria-selected="false"
                          >
                            Vehicles
                          </button>
                          <button
                            className="nav-link"
                            id="v-pills-Grade-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-Grade"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-Grade"
                            aria-selected="false"
                          >
                            Equipments
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn-border"
                      type="button"
                      onClick={() => onClick('editcategory')}
                    >
                      <img src={Plus} className="me-2" alt="FilterImage" />
                      Add Asset category
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-7">
                <div className="   employee_tabs_one_asset_two">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-BranchLocation"
                      role="tabpanel"
                      aria-labelledby="v-pills-BranchLocation-tab"
                    >
                      <div className="certificate_user bg_white_box p-3 mt-md-0 mt-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex  align-items-center">
                            <h5 className="mb-0">
                              Electronics
                              <p className="text-light mb-0">
                                All Electronics in the organization.
                              </p>
                            </h5>
                          </div>
                          <div className="delate_wrap dropdown-toggle">
                            <button
                              className="btn_delate"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              id="dropdownMenuLink"
                            >
                              <img src={DotIcon} alt="Delate Icon" />
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <Link className="dropdown-item">
                                  <img
                                    src={EditButtonIcon}
                                    data-inject-svg
                                    className="me-2"
                                    alt="edit_btn"
                                  />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item">
                                  <img
                                    src={DeleteButtonIcon}
                                    className="me-2"
                                    alt="delete_btn"
                                  />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Form onSubmit={handleSubmit}>
                        <div className="table-responsive p-3 bg_white_box employee-code-responsive employee-code-responsive-asset">
                          <table id="example" className="display">
                            <thead>
                              <tr>
                                <th>
                                  <h5>Asset Type</h5>
                                </th>
                                <th>
                                  <h5>Action</h5>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Pendrive</td>
                                <td>
                                  <div className="action_btn">
                                    <ul className="d-flex align-items-center">
                                      <li>
                                        <img
                                          src={EditButtonIcon}
                                          data-inject-svg
                                          className=""
                                          alt="edit_btn"
                                        />
                                      </li>
                                      <li
                                        onClick={() => onClick('deletedetail')}
                                      >
                                        <img
                                          src={DeleteButtonIcon}
                                          alt="delete_btn"
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Laptop</td>
                                <td>
                                  <div className="action_btn">
                                    <ul className="d-flex align-items-center">
                                      <li>
                                        <img
                                          src={EditButtonIcon}
                                          data-inject-svg
                                          className=""
                                          alt="edit_btn"
                                        />
                                      </li>
                                      <li
                                        onClick={() => onClick('deletedetail')}
                                      >
                                        <img
                                          src={DeleteButtonIcon}
                                          alt="delete_btn"
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Card Reader</td>
                                <td>
                                  <div className="action_btn">
                                    <ul className="d-flex align-items-center">
                                      <li>
                                        <img
                                          src={EditButtonIcon}
                                          data-inject-svg
                                          className=""
                                          alt="edit_btn"
                                        />
                                      </li>
                                      <li
                                        onClick={() => onClick('deletedetail')}
                                      >
                                        <img
                                          src={DeleteButtonIcon}
                                          alt="delete_btn"
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>

                              {assetCategoryList &&
                                assetCategoryList.length > 0 &&
                                assetCategoryList?.map((data, i) => {
                                  return (
                                    <tr key={i}>
                                      <td>
                                        <Input
                                          type="text"
                                          // placeholder="00"
                                          value={data.assetName}
                                          disabled={data.isEditable === false}
                                          onChange={e => {
                                            handleOnChange(
                                              'assetName',
                                              e.target.value,
                                              data.id,
                                            );
                                          }}
                                        />
                                      </td>
                                      <td>
                                        {data.isEditable === false ? (
                                          <div className="action_btn">
                                            <ul className="d-flex align-items-center">
                                              <li
                                                onClick={() => {
                                                  hanleUpdateData(
                                                    data.id,
                                                    true,
                                                  );
                                                  setDummyList(
                                                    assetCategoryList,
                                                  );
                                                }}
                                              >
                                                <img
                                                  src={EditButtonIcon}
                                                  data-inject-svg
                                                  className=""
                                                  alt="edit_btn"
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
                                                  alt="delete_btn"
                                                />
                                              </li>
                                            </ul>
                                          </div>
                                        ) : (
                                          <div className="action_btn">
                                            <ul className="d-flex align-items-center">
                                              <li
                                                onClick={() => {
                                                  hanleUpdateData(
                                                    data.id,
                                                    false,
                                                  );
                                                }}
                                              >
                                                <img
                                                  src={CloseCircle}
                                                  data-inject-svg
                                                  className=""
                                                  alt="edit_btn"
                                                />
                                              </li>
                                              <li
                                                onClick={() => {
                                                  setAssetCategoryList([
                                                    ...dummyList,
                                                  ]);
                                                }}
                                              >
                                                <img
                                                  src={CloseCircleTwo}
                                                  alt="delete_btn"
                                                />
                                              </li>
                                            </ul>
                                          </div>
                                        )}
                                      </td>
                                    </tr>
                                  );
                                })}
                              {addNewRow === true && (
                                <tr className="border_input_asset">
                                  <td>
                                    <Input
                                      type="text"
                                      placeholder="00"
                                      name="assetName"
                                      value={values.assetName}
                                      onChange={e => {
                                        handleChange('assetName')(
                                          e.target.value,
                                        );
                                      }}
                                      className={
                                        touched.assetName && errors.assetName
                                          ? 'error-message'
                                          : ''
                                      }
                                    />
                                  </td>
                                  <td>
                                    <div className="action_btn">
                                      <ul className="d-flex align-items-center">
                                        <li onClick={submitForm}>
                                          <button
                                            type="button"
                                            className="btn_trans"
                                          >
                                            <img
                                              src={CloseCircle}
                                              data-inject-svg
                                              className=""
                                              alt="True Icon"
                                            />
                                          </button>
                                        </li>
                                        <li
                                          onClick={() => {
                                            submitRef.current.resetForm();
                                          }}
                                        >
                                          <button
                                            type="button"
                                            className="btn_trans"
                                          >
                                            <img
                                              src={CloseCircleTwo}
                                              alt="False Icon"
                                            />
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                          <div className="my-4"></div>
                          <div className="d-flex justify-content-center">
                            <button
                              type="button"
                              className="btn-primary ms-3"
                              disabled={addNewRow === true}
                              onClick={() => {
                                setAddNewRow(true);
                              }}
                            >
                              <img
                                src={Plus}
                                className="me-2"
                                alt="FilterImage"
                              />
                              Add Type
                            </button>
                          </div>
                        </div>
                      </Form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-Department"
                      role="tabpanel"
                      aria-labelledby="v-pills-Department-tab"
                    >
                      <div className="certificate_user bg_white_box p-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex  align-items-center">
                            <h5 className="mb-0">
                              Furniture
                              <p className="text-light mb-0">
                                All Electronics in the organization.
                              </p>
                            </h5>
                          </div>
                          <div className="delate_wrap dropdown-toggle">
                            <button
                              className="btn_delate"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              id="dropdownMenuLink"
                            >
                              <img src={DotIcon} alt="Delate Icon" />
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <Link
                                  onClick={() => onClick('editcategory')}
                                  className="dropdown-item"
                                >
                                  <img
                                    src={EditButtonIcon}
                                    data-inject-svg
                                    className="me-2"
                                    alt="edit_btn"
                                  />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  onClick={() => onClick('deletedetail')}
                                >
                                  <img
                                    src={DeleteButtonIcon}
                                    className="me-2"
                                    alt="delete_btn"
                                  />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive p-3 bg_white_box employee-code-responsive employee-code-responsive-asset">
                        <table id="example" className="display">
                          <thead>
                            <tr>
                              <th>
                                <h5>Asset Type</h5>
                              </th>

                              <th>
                                <h5>Action</h5>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Pendrive</td>
                              <td>
                                <div className="action_btn">
                                  <ul className="d-flex align-items-center">
                                    <li>
                                      <button type="button">
                                        <img
                                          src={EditButtonIcon}
                                          data-inject-svg
                                          className=""
                                          alt="edit_btn"
                                        />
                                      </button>
                                    </li>
                                    <li onClick={() => onClick('deletedetail')}>
                                      <img
                                        src={DeleteButtonIcon}
                                        alt="delete_btn"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Laptop</td>
                              <td>
                                <div className="action_btn">
                                  <ul className="d-flex align-items-center">
                                    <li>
                                      <button type="button">
                                        <img
                                          src={EditButtonIcon}
                                          data-inject-svg
                                          className=""
                                          alt="edit_btn"
                                        />
                                      </button>
                                    </li>
                                    <li onClick={() => onClick('deletedetail')}>
                                      <img
                                        src={DeleteButtonIcon}
                                        alt="delete_btn"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Card Reader</td>
                              <td>
                                <div className="action_btn">
                                  <ul className="d-flex align-items-center">
                                    <li>
                                      <button type="button">
                                        <img
                                          src={EditButtonIcon}
                                          data-inject-svg
                                          className=""
                                          alt="edit_btn"
                                        />
                                      </button>
                                    </li>
                                    <li onClick={() => onClick('deletedetail')}>
                                      <img
                                        src={DeleteButtonIcon}
                                        alt="delete_btn"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr className="border_input_asset">
                              <td>Card Reader</td>
                              <td>
                                <div className="action_btn">
                                  <ul className="d-flex align-items-center">
                                    <li>
                                      <button type="button">
                                        <img
                                          src={CloseCircle}
                                          data-inject-svg
                                          className=""
                                          alt="edit_btn"
                                        />
                                      </button>
                                    </li>
                                    <li>
                                      <img
                                        src={CloseCircleTwo}
                                        alt="delete_btn"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="my-4">
                          <Input
                            type="text"
                            placeholder="Enter New Asset here..."
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <Link className="btn-secondary">Cancel</Link>
                          <Link className="btn-primary ms-3">
                            <img
                              src={Plus}
                              className="me-2"
                              alt="FilterImage"
                            />
                            Add Type
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Dialog
              header="Add Asset Category"
              visible={editcategory}
              draggable={false}
              resizable={false}
              className="small_popup confirm_popup"
              footer={renderFooterEdit('editcategory')}
              onHide={() => onHide('editcategory')}
            >
              <div className="delate_popup_wrap">
                <div className="edit_category_popup_body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form_group">
                        <label>Name Of Asset Category</label>
                        <Input
                          type="text"
                          placeholder="Enter Name Of Asset Category"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form_group">
                        <label>Description</label>
                        <TextArea
                          placeholder="Write Description"
                          rows={5}
                          cols={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              header="Confirm"
              visible={deletedetail}
              draggable={false}
              resizable={false}
              className="small_popup confirm_popup"
              footer={renderFooter('deletedetail')}
              onHide={() => onHide('deletedetail')}
            >
              <div className="delate_popup_wrap text-center">
                <p>Are you sure you want to delete?</p>
              </div>
            </Dialog>
          </div>
        )}
      </Formik>
    </div>
  );
}
