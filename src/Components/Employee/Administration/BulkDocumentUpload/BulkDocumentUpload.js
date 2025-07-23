import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import ImportIcon from '../../../../Assets/images/import_img.svg';
import DeleteBtn from '../../../../Assets/images/DeleteBtn.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import FilterIcon from '../../../../Assets/images/filter.svg';
import ErrorIcon from '../../../../Assets/images/error.svg';
import CheckIcon from '../../../../Assets/images/check-green.svg';
import ReactTreeSelect from '../../../Common/ReactTreeSelect';

export default function BulkDocumentUpload() {
  const [educationDetails, setEducationDetails] = useState(false);
  const [selectCategory, setSelectedCategory] = useState(null);
  const [publishPopUp, setPublishPopUp] = useState(false);
  const navigate = useNavigate();
  const categories = [
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
  const dialogFuncMap = {
    educationDetails: setEducationDetails,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const employeeImportDetail = [
    {
      documentName: 'Education Qualification',
      category: 'Education',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: ErrorIcon,
      publishName: 'Publish',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      documentName: 'Driving License',
      category: 'Driving License',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: ErrorIcon,
      publishName: 'Publish',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      documentName: 'Previous Experience',
      category: 'Previous Experience',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: ErrorIcon,
      publishName: 'Publish',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      documentName: 'Aadhar Card',
      category: 'Aadhar Card',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: ErrorIcon,
      publishName: 'Publish',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      documentName: 'Voter ID',
      category: 'Voter ID',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: ErrorIcon,
      publishName: 'Publish',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      documentName: 'Passport',
      category: 'Passport',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: ErrorIcon,
      publishName: 'Publish',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      documentName: 'Address',
      category: 'Address',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: CheckIcon,
      publishName: 'Published',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
    {
      documentName: 'Bank',
      category: 'Bank Docs',
      pendingAndAccepted: '(0 / 0)',
      publishLogo: CheckIcon,
      publishName: 'Published',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
      actionLogo: DeleteBtn,
    },
  ];
  const renderFooterConfirm = name => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary"
        />
        <Button
          label="Delete"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const renderFooterPublish = () => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          label="Cancel"
          onClick={() => setPublishPopUp(false)}
          className="btn-secondary"
        />
        <Button
          label="Confirm"
          className="btn-primary"
          onClick={() => setPublishPopUp(false)}
          autoFocus
        />
      </div>
    );
  };
  const categoryTemplate = option => {
    return (
      <div className="country-item">
        <span>{option.cname || option.name}</span>
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
            <b>Employees</b>
          </li>
          <li>
            <b>Administration</b>
          </li>
          <li>Import Document</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactTreeSelect
                    value={selectCategory}
                    options={categories}
                    optionLabel={'cname'}
                    optionGroupLabel={'name'}
                    optionGroupChildren={['states', 'cities']}
                    placeholder={'Select Category'}
                    onChange={event => setSelectedCategory(event.value)}
                    itemTemplate={categoryTemplate}
                  />
                </div>
              </li>
              <li>
                {' '}
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  Filter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="publicform_top mb-3">
        <div className="row align-items-center">
          <div className="col-sm-6 order-2 order-sm-1">
            <div className="show_entries">
              Show
              <select className="form-select">
                <option value="1">10</option>
                <option value="2">25</option>
                <option value="3">50</option>
                <option value="4">100</option>
              </select>
              entiries
            </div>
          </div>
          <div className="col-sm-6 order-1 order-sm-2">
            <div className="text-sm-end">
              <Link
                to="/employees/administration/bullk-document-upload-step-one"
                className="btn-border d-inline-block"
              >
                <img src={ImportIcon} className="me-2" alt="FilterImage" />
                Import Document
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="data_table_one import_docuement_wrapper">
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-List"
            role="tabpanel"
            aria-labelledby="pills-List-tab"
          >
            <div className="list_tab_wrap">
              <div className="employee_list_table_inner">
                <div className="table-responsive">
                  <table id="example" className="display">
                    <thead>
                      <tr>
                        <th scope="col">
                          <span>Document Name</span>
                        </th>
                        <th scope="col">
                          <span>Category</span>
                        </th>
                        <th scope="col">
                          <span>Pending/Accepted</span>
                        </th>
                        <th scope="col">
                          <span>Publish/Unpublish</span>
                        </th>
                        <th scope="col">
                          <span>Action By</span>
                        </th>
                        <th scope="col">
                          <span>Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeImportDetail.map((emp, index) => {
                        return (
                          <tr key={index}>
                            <td>{emp.documentName}n</td>
                            <td>{emp.category}</td>
                            <td>
                              <span
                                className="text-secondary"
                                onClick={() => {
                                  navigate(
                                    '/employees/administration/bullk-document-upload-step-two',
                                  );
                                }}
                              >
                                {emp.pendingAndAccepted}
                              </span>
                            </td>
                            <td>
                              {emp.publishName === 'Publish' ? (
                                <span
                                  className="badge bedge_danger"
                                  onClick={() => setPublishPopUp(true)}
                                >
                                  <img
                                    src={emp.publishLogo}
                                    alt="Unpublish Icon"
                                  />
                                  {emp.publishName}
                                </span>
                              ) : (
                                <span className="badge bedge_success">
                                  <img
                                    src={emp.publishLogo}
                                    alt="Unpublish Icon"
                                  />
                                  {emp.publishName}
                                </span>
                              )}
                            </td>
                            <td>
                              {emp.actionByName}
                              <span className="wrap_text">
                                {emp.actionByDate}
                              </span>
                            </td>
                            <td>
                              <img
                                src={emp.actionLogo}
                                alt="EditIcon"
                                onClick={() => onClick('educationDetails')}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="table_bottom_wrap">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <p className="m-0 text-center text-sm-start">
                    Showing <span>10</span> to <span>20</span> of
                    <span>20</span> entries
                  </p>
                </div>
                <div className="col-sm-6">
                  <div className="table_pagination">
                    <ul className="d-flex justify-content-center justify-content-sm-end">
                      <li className="prev">
                        <Link className="w-auto d-block">Previous</Link>
                      </li>
                      <li>
                        <Link className="d-block">1</Link>
                      </li>
                      <li className="active">
                        <Link className="d-block">2</Link>
                      </li>
                      <li className="next">
                        <Link className="w-auto d-block">Next</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Confirm"
        visible={educationDetails}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterConfirm('educationDetails')}
        onHide={() => onHide('educationDetails')}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
      <Dialog
        header="Publish Documents"
        visible={publishPopUp}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooterPublish}
        onHide={() => setPublishPopUp(false)}
      >
        <div className="publish_documents_popup text-center">
          <p>
            Are you sure you want to Publish documents in the Employee Portal?
          </p>
        </div>
      </Dialog>
    </div>
  );
}
