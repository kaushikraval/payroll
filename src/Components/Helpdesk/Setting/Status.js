import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import Plus from '../../../Assets/images/plus.svg';
import FilterIcon from '../../../Assets/images/filter.svg';
import ReactSelectMultiple from '../../Common/ReactSelectMultiple';
import EditIcon from '../../../Assets/images/edit.svg';
import DeleteIcon from '../../../Assets/images/DeleteBtn.svg';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from '../../Common/Input';

export default function Status() {
  const [statusAssigned, setExpense] = useState([]);
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
  const statusData = [
    {
      statusName: 'New',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      statusName: 'Assigned',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      statusName: 'In-Progress',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
    {
      statusName: 'Resolved',
      actionByName: 'Chintan Raval',
      actionByDate: 'On 20 Nov 2022 • 04:23 PM',
    },
  ];
  const statusOptions = [
    { label: 'Assigned', value: 'Assigned' },
    { label: 'Returned', value: 'Returned' },
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
          <li>Status</li>
        </ul>
      </div>
      <div className="top_filter_wrap">
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={statusAssigned}
                    options={statusOptions}
                    onChange={e => {
                      setExpense(e.value);
                    }}
                    placeholder="Status"
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
            <Link className="btn-primary" onClick={() => setAddCategory(true)}>
              <img src={Plus} className="me-2" alt="FilterImage" />
              Add Status
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
                  <span>Status Name</span>
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
              {statusData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.statusName}</td>
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
        className="small_popup"
        header="Add Status"
        visible={addExpenseTrip}
        // style={{ width: '50vw' }}
        onHide={() => setAddCategory(false)}
        footer={renderFooter('addExpenseTrip')}
      >
        <div className="row">
          <div className="col-12">
            <div className="form_group">
              <label>Status Name</label>
              <Input type="text" placeholder="Status Name" />
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
