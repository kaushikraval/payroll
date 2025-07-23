import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Plus from '../../../Assets/images/plus.svg';
import UserImagesFive from '../../../Assets/images/user5.png';
import UserImagesSix from '../../../Assets/images/user6.png';
import UserImagesSeven from '../../../Assets/images/user7.png';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import EditIcon from '../../../Assets/images/edit.svg';
import DeleteIcon from '../../../Assets/images/DeleteBtn.svg';
import HelpUser from '../../../Assets/images/helpuser.png';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import TextArea from '../../Common/TextArea';
import Input from '../../Common/Input';
import UserImage from '../../../Assets/images/user8.png';

export default function Category() {
  const searchEmpHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={UserImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };

  const searchEmpOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const [searchEmp, setSearchEmp] = useState([]);
  const [addExpenseTrip, setAddCategory] = useState(false);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const dialogFuncMap = {
    addExpenseTrip: setAddCategory,
    deleteDetail: setDeleteDetail,
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
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
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const [reportingAuthority, setReportingAuthority] = useState([]);
  const reportingAuthorityOption = [
    { label: 'Vishal Shah(1001)', value: 'VishalShah' },
    { label: 'Keval Sonvane(1002)', value: 'KevalSonvane' },
    { label: 'Dhaval Radadiya(1003)', value: 'DhavalRadadiya' },
    { label: 'Pari Mor(1004)', value: 'PariMor' },
  ];
  const reportingAuthorityHandleChange = option => {
    return (
      <div className="multiple_with_image">
        <img
          alt={option.label}
          src={UserImage}
          onError={e => (e.target.src = '')}
          className={`flag flag-${option?.label?.toLowerCase()}`}
        />
        <div className="multiple_label">{option.label}</div>
      </div>
    );
  };
  const categoryData = [
    {
      categoryName: 'HR',
      description: 'HR',
      assignee: 'Chintan Raval',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      categoryName: 'Payroll',
      description: 'Payroll',
      assignee: 'Chintan Raval',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      categoryName: 'Office Administration',
      description: 'Office Administration',
      assignee: 'Chintan Raval',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      categoryName: 'System & IT Networks',
      description: 'System & IT Networks',
      assignee: 'Chintan Raval',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      categoryName: 'Other',
      description: 'Other',
      assignee: 'Chintan Raval',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
  ];
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
            <b>Helpdesk</b>
          </li>
          <li>
            <b>Setting</b>
          </li>
          <li>Category</li>
        </ul>
      </div>
      <div className="row align-items-center mb-3">
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
            <Link className="btn-primary" onClick={() => setAddCategory(true)}>
              <img src={Plus} className="me-2" alt="FilterImage" />
              Add Category
            </Link>
          </div>
        </div>
      </div>
      <div className="data_table_one employee_form_table">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>Category Name</span>
                </th>
                <th>
                  <span>Description</span>
                </th>
                <th>
                  <span>Assignee</span>
                </th>
                <th>
                  <span>Followers</span>
                </th>
                <th>
                  <span>Action By</span>
                </th>
                <th>
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.categoryName}</td>
                    <td>{data.description}</td>
                    <td>
                      <div className="name_wrap">
                        <img src={HelpUser} alt="UserImage" />
                        <span>{data.assignee}</span>
                      </div>
                    </td>
                    <td>
                      <span className="group_member">
                        <Button
                          tooltip="Chintan Raval"
                          tooltipOptions={{
                            position: 'bottom',
                          }}
                          className="tooltip_button"
                        >
                          <img src={UserImagesFive} alt="Reporting" />
                        </Button>
                        <Button
                          tooltip="Chintan Raval"
                          tooltipOptions={{
                            position: 'bottom',
                          }}
                          className="tooltip_button"
                        >
                          <img src={UserImagesSix} alt="Reporting" />
                        </Button>
                        <Button
                          tooltip="Chintan Raval"
                          tooltipOptions={{
                            position: 'bottom',
                          }}
                          className="tooltip_button"
                        >
                          <img src={UserImagesSeven} alt="Reporting" />
                        </Button>
                        <Button
                          tooltip="Chintan Raval"
                          tooltipOptions={{
                            position: 'bottom',
                          }}
                          className="tooltip_button"
                        >
                          <img src={UserImagesFive} alt="Reporting" />
                        </Button>
                      </span>
                    </td>
                    <td>
                      <div className="created_date">
                        {data.actionByName}
                        <span className="wrap_text">{data.actionByDate}</span>
                      </div>
                    </td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img
                            src={EditIcon}
                            alt="EditIcon"
                            onClick={() => setAddCategory(true)}
                          />
                        </li>
                        <li>
                          <img
                            onClick={() => onClick('deleteDetail')}
                            src={DeleteIcon}
                            alt="DeleteIcon"
                          />
                        </li>
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
      <Dialog
        className="medium_popup"
        header="Add Category"
        visible={addExpenseTrip}
        // style={{ width: '50vw' }}
        onHide={() => setAddCategory(false)}
        footer={renderFooter('addExpenseTrip')}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form_group">
              <label>Category Name</label>
              <Input type="text" placeholder="Category Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Ticket Assignee</label>
              <ReactSelectMultiple
                value={searchEmp}
                options={searchEmpOption}
                onChange={e => setSearchEmp(e.value)}
                optionLabel="name"
                placeholder="Search Employees"
                filter
                className="multiselect-custom"
                itemTemplate={searchEmpHandleChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Ticket Followers</label>
              <ReactSelectMultiple
                value={reportingAuthority}
                options={reportingAuthorityOption}
                onChange={e => setReportingAuthority(e.value)}
                optionLabel="name"
                placeholder="Search any keyword"
                filter
                className="multiselect-custom"
                itemTemplate={reportingAuthorityHandleChange}
                display="chip"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Escalation Email</label>
              <Input type="email" placeholder="Email alert" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Define Time</label>
              <Input type="text" placeholder="Time Interval" />
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Description</label>
              <TextArea placeholder="Write Remark" rows={5} cols={10} />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Confirm"
        visible={deleteDetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deleteDetail')}
        onHide={() => onHide('deleteDetail')}
      >
        <div className="delate_popup_wrap text-center">
          <p>Are you sure you want to delete?</p>
        </div>
      </Dialog>
    </>
  );
}
