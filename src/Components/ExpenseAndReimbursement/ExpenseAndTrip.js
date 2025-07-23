import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import LeftArrow from '../../Assets/images/chevron-left.svg';
import RightArrow from '../../Assets/images/chevron-right.svg';
import Plus from '../../Assets/images/plus.svg';
import UserImagesFive from '../../Assets/images/user5.png';
import UserImagesSix from '../../Assets/images/user6.png';
import UserImagesSeven from '../../Assets/images/user7.png';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import EditIcon from '../../Assets/images/edit.svg';
import DeleteIcon from '../../Assets/images/DeleteBtn.svg';
import EyeIcon from '../../Assets/images/eyes.svg';
import RefundIcon from '../../Assets/images/refund.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ReactCelender from '../Common/ReactCelender';
import TextArea from '../Common/TextArea';
import Input from '../Common/Input';
import UserImage from '../../Assets/images/user8.png';

export default function ExpenseAndTrip() {
  const [expense, setExpense] = useState([]);
  const expenseOptions = [
    { label: 'Travel Expenses', value: 'CityplusSurat' },
    { label: 'Business Expenses', value: 'VarachhaSurat' },
    { label: 'Food Expenses', value: 'StationSurat' },
    { label: 'Fuel Expenses', value: 'AdajanSurat' },
  ];
  const [addExpenseTrip, setAddExpenseTrip] = useState(false);
  const [editExpenseTrip, setEditExpenseTrip] = useState(false);
  const dialogFuncMap = {
    addExpenseTrip: setAddExpenseTrip,
    editExpenseTrip: setEditExpenseTrip,
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
  const expenseTripData = [
    {
      expenseAndTripName: 'Travel Expenses',
      date: '22 Jun 2022 - 25 Jun 2022',
      noOfExpenses: '(0/0)',
      description: 'Project Work',
      amount: '2,000.00',
      createdByName: 'Chintan Raval',
      createdByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
  ];
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
            <b>Expense & Reimbursement</b>
          </li>
          <li>Expense & Trip</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row justify-content-between">
          <div className="col-sm-8">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={expense}
                    options={expenseOptions}
                    onChange={e => {
                      setExpense(e.value);
                    }}
                    placeholder="Expense & Trip Name"
                    display="chip"
                    maxSelectedLabels={2}
                  />
                </div>
              </li>

              <li>
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  Filter
                </button>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <div className="top_date_wrap">
              <h6>
                <button type="button">
                  <img src={LeftArrow} alt="LeftArrow" />
                </button>
                26 July 2022
                <button type="button">
                  <img src={RightArrow} alt="RightArrow" />
                </button>
              </h6>
            </div>
          </div>
        </div>
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
            <Link
              className="btn-primary"
              onClick={() => setAddExpenseTrip(true)}
            >
              <img src={Plus} className="me-2" alt="FilterImage" />
              Add Expense & Trip
            </Link>
          </div>
        </div>
      </div>
      <div className="data_table_one expense_table">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>Expense & Trip Name</span>
                </th>
                <th>
                  <span>Employees</span>
                </th>
                <th>
                  <span>Date</span>
                </th>
                <th>
                  <span>No. of Expenses</span>
                </th>
                <th>
                  <span>Description</span>
                </th>
                <th>
                  <span>Amount</span>
                </th>
                <th>
                  <span>Created By</span>
                </th>
                <th>
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {expenseTripData.map((data, i) => {
                return (
                  <tr>
                    <td>
                      <Link to="/expense-reimbursement/expense-trip/reimbursement">
                        {data.expenseAndTripName}
                      </Link>
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
                    <td>{data.date}</td>
                    <td>
                      <Link>{data.noOfExpenses}</Link>
                    </td>
                    <td>{data.description}</td>
                    <td>{data.amount}</td>
                    <td>
                      <div className="created_date">
                        {data.createdByName}
                        <span className="wrap_text">{data.createdByDate}</span>
                      </div>
                    </td>
                    <td>
                      <ul className="edit_wrap d-flex align-items-center">
                        <li>
                          <img src={RefundIcon} alt="RefundIcon" />
                        </li>
                        <li>
                          <img src={EyeIcon} alt="EyeIcon" />
                        </li>
                        <li>
                          <img
                            src={EditIcon}
                            alt="EditIcon"
                            onClick={() => setEditExpenseTrip(true)}
                          />
                        </li>
                        <li>
                          <img src={DeleteIcon} alt="DeleteIcon" />
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
        header="Add Expense & Trip"
        visible={addExpenseTrip}
        // style={{ width: '50vw' }}
        onHide={() => setAddExpenseTrip(false)}
        footer={renderFooter('addExpenseTrip')}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form_group">
              <label>Expense & Trip Name</label>
              <Input type="text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Task Followers</label>
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
              <label>From Date</label>
              <ReactCelender value="date" placeholder="DD/MM/YYYY" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>To Date</label>
              <ReactCelender value="date" placeholder="DD/MM/YYYY" />
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
        className="medium_popup"
        header="Edit Expense & Trip"
        visible={editExpenseTrip}
        style={{ width: '50vw' }}
        onHide={() => setEditExpenseTrip(false)}
        footer={renderFooter('editExpenseTrip')}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form_group">
              <label>Expense & Trip Name</label>
              <Input type="text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Task Followers</label>
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
                maxSelectedLabels={3}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>From Date</label>
              <ReactCelender value="date" placeholder="DD/MM/YYYY" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>To Date</label>
              <ReactCelender value="date" placeholder="DD/MM/YYYY" />
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
    </>
  );
}
