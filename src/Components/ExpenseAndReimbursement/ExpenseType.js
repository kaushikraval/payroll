import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import FilterIcon from '../../Assets/images/filter.svg';
import Plus from '../../Assets/images/plus.svg';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import EditIcon from '../../Assets/images/edit.svg';
import { Button } from 'primereact/button';
import TextArea from '../Common/TextArea';
import Input from '../Common/Input';
import { Dialog } from 'primereact/dialog';
import UserPlus from '../../Assets/images/use-plus.svg';
import { RadioButton } from 'primereact/radiobutton';
import DeleteIcon from '../../Assets/images/DeleteBtn.svg';

export default function ExpenseType() {
  const [ingredient, setIngredient] = useState('');
  const [expense, setExpense] = useState([]);
  const expenseOptions = [
    { label: 'Travel Expenses', value: 'CityplusSurat' },
    { label: 'Business Expenses', value: 'VarachhaSurat' },
    { label: 'Food Expenses', value: 'StationSurat' },
    { label: 'Fuel Expenses', value: 'AdajanSurat' },
  ];

  const [addExpenseType, setAddExpenseType] = useState(false);
  const [editExpenseType, setEditExpenseType] = useState(false);
  const dialogFuncMap = {
    addExpenseType: setAddExpenseType,
    editExpenseType: setEditExpenseType,
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
  const expenseTypeData = [
    {
      expenseCode: 'TE',
      expenseAndTypeName: 'Travel Expenses',
      maxAmount: '5,000.00',
      description: 'Travel Reimbursement',
      status: 'Active',
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
            <b>Expense & Reimbursement</b>
          </li>
          <li>Expense Type</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={expense}
                    options={expenseOptions}
                    onChange={e => {
                      setExpense(e.value);
                    }}
                    placeholder="Expense Type"
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
              onClick={() => setAddExpenseType(true)}
            >
              <img src={Plus} className="me-2" alt="FilterImage" />
              Add Expense Type
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
                  <span>Expense Code</span>
                </th>
                <th>
                  <span>Expense Name</span>
                </th>
                <th>
                  <span>Max Amount</span>
                </th>
                <th>
                  <span>Description</span>
                </th>
                <th>
                  <span>Status</span>
                </th>
                <th>
                  <span>Assign Employee</span>
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
              {expenseTypeData.map((data, i) => {
                return (
                  <tr>
                    <td>{data.expenseCode}</td>
                    <td>{data.expenseAndTypeName}</td>
                    <td>{data.maxAmount}</td>
                    <td>{data.description}</td>
                    <td>
                      <span className="badge bedge_success">{data.status}</span>
                    </td>
                    <td>
                      <Link>
                        <span className="d-flex text-secondary">
                          <img
                            src={UserPlus}
                            className="me-2"
                            alt="Plus Icon"
                          />
                          Add Employee
                        </span>
                      </Link>
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
                            onClick={() => setEditExpenseType(true)}
                          />
                        </li>
                        <li>
                          <img src={DeleteIcon} alt="EyeIcon" />
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
        className="small_popup"
        header="Add Expense Type"
        visible={addExpenseType}
        // style={{ width: '50vw' }}
        onHide={() => setAddExpenseType(false)}
        footer={renderFooter('addExpenseType')}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form_group">
              <label>Expense Name*</label>
              <Input type="text" placeholder="Enter Expense Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Expense Code*</label>
              <Input type="text" placeholder="Enter Expense Code" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Maximum Amount</label>
              <Input type="text" placeholder="Enter Amount" />
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Description</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center">
                <RadioButton
                  inputId="ingredient1"
                  name="addtype"
                  value="Active"
                  onChange={e => setIngredient(e.value)}
                  checked={ingredient === 'Active'}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  Active
                </label>
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="ingredient2"
                  name="addtype"
                  value="Inactive"
                  onChange={e => setIngredient(e.value)}
                  checked={ingredient === 'Inactive'}
                />
                <label htmlFor="ingredient2" className="ml-2">
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        className="small_popup"
        header="Edit Expense Type"
        visible={editExpenseType}
        // style={{ width: '50vw' }}
        onHide={() => setEditExpenseType(false)}
        footer={renderFooter('editExpenseType')}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form_group">
              <label>Expense Name*</label>
              <Input type="text" placeholder="Enter Expense Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Expense Code*</label>
              <Input type="text" placeholder="Enter Expense Code" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_group">
              <label>Maximum Amount</label>
              <Input type="text" placeholder="Enter Amount" />
            </div>
          </div>
          <div className="col-12">
            <div className="form_group">
              <label>Description</label>
              <TextArea placeholder="Write Description" rows={5} cols={10} />
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center">
                <RadioButton
                  inputId="ingredient1"
                  name="edittype"
                  value="Active"
                  onChange={e => setIngredient(e.value)}
                  checked={ingredient === 'Active'}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  Active
                </label>
              </div>
              <div className="flex align-items-center">
                <RadioButton
                  inputId="ingredient2"
                  name="edittype"
                  value="Inactive"
                  onChange={e => setIngredient(e.value)}
                  checked={ingredient === 'Inactive'}
                />
                <label htmlFor="ingredient2" className="ml-2">
                  Inactive
                </label>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
