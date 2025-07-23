import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import UserPlus from '../../Assets/images/use-plus.svg';
import Plus from '../../Assets/images/plus.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import EditButtonIcon from '../../Assets/images/edit.svg';
import MapLeaveButtonIcon from '../../Assets/images/map-leave.svg';
import CloneLeaveButtonIcon from '../../Assets/images/clone-leave.svg';
import DeleteButtonIcon from '../../Assets/images/DeleteBtn.svg';
import FileConfiguration from '../../Assets/images/file-configuration.svg';
import Eyes from '../../Assets/images/eyes.svg';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import TextArea from '../Common/TextArea';
import { Checkbox } from 'primereact/checkbox';

export default function Leave() {
  const [expandedRows, setExpandedRows] = useState(null);
  const [deleteDetail, setDeleteDetail] = useState(false);
  const [addLeaveScheme, setAddLeaveScheme] = useState(false);
  const [editLeaveScheme, setEditLeaveScheme] = useState(false);
  const [leaveCalender, setLeaveCalender] = useState([]);
  const [mapLeaveType, setMapLeaveType] = useState(false);
  const allowExpansion = rowData => {
    return rowData.leaveDetail?.length > 0;
  };
  const navigate = useNavigate();
  const actionTemplate = data => {
    return (
      <ul className="edit_wrap d-flex">
        <li onClick={() => setMapLeaveType(true)}>
          <Button
            tooltip="Map Leave Type"
            tooltipOptions={{
              position: 'bottom',
            }}
            className="tooltip_button"
          >
            <img src={data.mapLeaveActionIcon} alt="map Leave" />
          </Button>
        </li>
        <li>
          <Button
            tooltip="Clone Leave Scheme"
            tooltipOptions={{
              position: 'bottom',
            }}
            className="tooltip_button"
          >
            <img src={data.cloneLeaveActionIcon} alt="Clone Leave" />
          </Button>
        </li>
        <li onClick={() => setEditLeaveScheme(true)}>
          <Button
            tooltip="Edit Leave Scheme"
            tooltipOptions={{
              position: 'bottom',
            }}
            className="tooltip_button"
          >
            <img src={data.editActionIcon} alt="Edit" />
          </Button>
        </li>
        <li onClick={() => setDeleteDetail(true)}>
          <Button
            tooltip="Delete Leave Scheme"
            tooltipOptions={{
              position: 'bottom',
            }}
            className="tooltip_button"
          >
            <img src={data.deleteActionIcon} alt="Delete" />
          </Button>
        </li>
      </ul>
    );
  };
  const detailActionTemplate = data => {
    return (
      <ul className="edit_wrap d-flex align-items-center">
        {data.configureButton === true ? (
          <li>
            <Button
              tooltip="Configure Leave Type"
              tooltipOptions={{
                position: 'bottom',
              }}
              className="tooltip_button"
              onClick={() => {
                navigate('/scheme/leavepages/leave-entitle-setup');
              }}
            >
              <img src={FileConfiguration} alt="Setting" />
            </Button>
          </li>
        ) : (
          <>
            <li>
              <Button
                tooltip="View Leave Configuration"
                tooltipOptions={{
                  position: 'bottom',
                }}
                className="tooltip_button"
              >
                <img src={data.viewActionIcon} alt="View Leave Configuration" />
              </Button>
            </li>
            <li>
              <Button
                tooltip="Edit Leave Configuration"
                tooltipOptions={{
                  position: 'bottom',
                }}
                className="tooltip_button"
              >
                <img src={data.editActionIcon} alt="Clone Leave" />
              </Button>
            </li>
          </>
        )}
        <li>
          <Button
            tooltip="Remove Leave Type"
            tooltipOptions={{
              position: 'bottom',
            }}
            className="tooltip_button"
          >
            <img src={data.deleteActionIcon} alt="Delete" />
          </Button>
        </li>
      </ul>
    );
  };
  const assignEmployeeTemplate = rowdata => {
    return (
      <>
        <Link className="text-secondary" to="/scheme/leave/assign-employee">
          <img src={rowdata.assignEmployeeIcon} alt="Employee Icon" />
          Add Employee
        </Link>
      </>
    );
  };
  const leaveNameTemplate = rowdata => {
    return <span className="">{rowdata.leaveName}</span>;
  };

  const data = [
    {
      leavePlanScheme: '2022 Standard Leave',
      leaveCalender: 'Jan - Dec',
      description: '2022 Standard Leave',
      assignEmployeeIcon: UserPlus,
      mapLeaveActionIcon: MapLeaveButtonIcon,
      cloneLeaveActionIcon: CloneLeaveButtonIcon,
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
      leaveDetail: [
        {
          leaveName: 'Privillage Leave',
          entitleCount: '18',
          entitlePeriod: 'Monthly',
          endOfPeriodStatus: 'Carry Forward',
          viewActionIcon: '',
          editActionIcon: '',
          deleteActionIcon: DeleteButtonIcon,
          configureButton: true,
        },
        {
          leaveName: 'Sick Leave',
          entitleCount: '7',
          entitlePeriod: 'Yearly',
          endOfPeriodStatus: 'Lapes',
          viewActionIcon: '',
          editActionIcon: '',
          deleteActionIcon: DeleteButtonIcon,
          configureButton: true,
        },
        {
          leaveName: 'Casual Leave',
          entitleCount: '7',
          entitlePeriod: 'Yearly',
          endOfPeriodStatus: 'Lapes',
          viewActionIcon: '',
          editActionIcon: '',
          deleteActionIcon: DeleteButtonIcon,
          configureButton: true,
        },
        {
          leaveName: 'Earned Leave',
          entitleCount: '18',
          entitlePeriod: 'Monthly',
          endOfPeriodStatus: 'Carry Forward',
          viewActionIcon: Eyes,
          editActionIcon: EditButtonIcon,
          deleteActionIcon: DeleteButtonIcon,
          configureButton: false,
        },
        {
          leaveName: 'Short Leave',
          entitleCount: '4',
          entitlePeriod: 'Monthly',
          endOfPeriodStatus: 'Lapes',
          viewActionIcon: '',
          editActionIcon: '',
          deleteActionIcon: DeleteButtonIcon,
          configureButton: true,
        },
        {
          leaveName: 'Maternity Leave',
          entitleCount: '182',
          entitlePeriod: 'One Time',
          endOfPeriodStatus: 'Carry Forward',
          viewActionIcon: Eyes,
          editActionIcon: EditButtonIcon,
          deleteActionIcon: DeleteButtonIcon,
          configureButton: false,
        },
        {
          leaveName: 'Paternity Leave',
          entitleCount: '15',
          entitlePeriod: 'One Time',
          endOfPeriodStatus: 'Carry Forward',
          viewActionIcon: '',
          editActionIcon: '',
          deleteActionIcon: DeleteButtonIcon,
          configureButton: true,
        },
      ],
    },
    {
      leavePlanScheme: 'Manager Department Leave',
      leaveCalender: 'Jan - Dec',
      description: '2022 Standard Leave',
      assignEmployeeIcon: UserPlus,
      mapLeaveActionIcon: MapLeaveButtonIcon,
      cloneLeaveActionIcon: CloneLeaveButtonIcon,
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
    },
    {
      leavePlanScheme: 'Probation Employee Leave',
      leaveCalender: 'Jan - Dec',
      description: '2022 Standard Leave',
      assignEmployeeIcon: UserPlus,
      mapLeaveActionIcon: MapLeaveButtonIcon,
      cloneLeaveActionIcon: CloneLeaveButtonIcon,
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
    },
    {
      leavePlanScheme: 'Trainee Employee Leave',
      leaveCalender: 'Jan - Dec',
      description: '2022 Standard Leave',
      assignEmployeeIcon: UserPlus,
      mapLeaveActionIcon: MapLeaveButtonIcon,
      cloneLeaveActionIcon: CloneLeaveButtonIcon,
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
    },
    {
      leavePlanScheme: '2021 Standard Leave',
      leaveCalender: 'Jan - Dec',
      description: '2022 Standard Leave',
      assignEmployeeIcon: UserPlus,
      mapLeaveActionIcon: MapLeaveButtonIcon,
      cloneLeaveActionIcon: CloneLeaveButtonIcon,
      editActionIcon: EditButtonIcon,
      deleteActionIcon: DeleteButtonIcon,
    },
  ];
  const rowExpansionTemplate = data => {
    return (
      <div className="">
        <DataTable value={data.leaveDetail}>
          <Column
            field="leaveName"
            header="Leave Name"
            body={leaveNameTemplate}
          ></Column>
          <Column field="entitleCount" header="Entitle Count"></Column>
          <Column field="entitlePeriod" header="Entitle Period"></Column>
          <Column
            field="endOfPeriodStatus"
            header="End Of Period Status"
          ></Column>
          <Column header="Action" body={detailActionTemplate}></Column>
        </DataTable>
      </div>
    );
  };

  const dialogFuncMap = {
    deleteDetail: setDeleteDetail,
    addLeaveScheme: setAddLeaveScheme,
    editLeaveScheme: setEditLeaveScheme,
    mapLeaveType: setMapLeaveType,
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

  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const leaveCalenderOption = [
    { label: 'Jan - Dec', value: 'Month' },
    { label: 'Jan - Dec', value: 'Month' },
    { label: 'Jan - Dec', value: 'Month' },
    { label: 'Jan - Dec', value: 'Month' },
    { label: 'Jan - Dec', value: 'Month' },
    { label: 'Jan - Dec', value: 'Month' },
  ];

  const leaveCalenderHandleChange = e => {
    setLeaveCalender(e.value);
  };
  const [ingredients, setIngredients] = useState([]);

  const onIngredientsChange = e => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);
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
          <li>Leave</li>
        </ul>
      </div>
      <div className="letter_temp_top mb-3">
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
                className="btn-border"
                onClick={() => setAddLeaveScheme(true)}
              >
                <img src={Plus} className="me-2" alt="FilterImage" />
                Add Leave Scheme
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="scheme_leave_table data_table_one letter_temp_table">
        <div className="table-responsive employee-code-responsive">
          <DataTable
            value={data}
            rowExpansionTemplate={rowExpansionTemplate}
            expandedRows={expandedRows}
            onRowToggle={e => setExpandedRows(e.data)}
            className="main_table"
          >
            <Column expander={allowExpansion} />
            <Column field="leavePlanScheme" header="Leave Plan Scheme" />
            <Column field="leaveCalender" header="Leave Calender" />
            <Column field="description" header="Description" />
            <Column header="Assign Employee" body={assignEmployeeTemplate} />
            <Column header="Action" body={actionTemplate} />
          </DataTable>
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
        <Dialog
          header="Map Leave Type to Plan"
          visible={mapLeaveType}
          draggable={false}
          resizable={false}
          className="small_popup"
          footer={renderFooter('mapLeaveType')}
          onHide={() => setMapLeaveType(false)}
        >
          <div className="row">
            <div className="col-6">
              <div className="flex align-items-center">
                <Checkbox
                  inputId="ingredient1"
                  name="leave"
                  value="PrivillageLeave"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes('PrivillageLeave')}
                />
                <label htmlFor="ingredient1" className="ms-2">
                  Privillage Leave
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="flex align-items-center">
                <Checkbox
                  inputId="ingredient2"
                  name="leave"
                  value="ShortLeave"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes('ShortLeave')}
                />
                <label htmlFor="ingredient2" className="ms-2">
                  Short Leave
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="flex align-items-center">
                <Checkbox
                  inputId="ingredient3"
                  name="leave"
                  value="SickLeave"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes('SickLeave')}
                />
                <label htmlFor="ingredient3" className="ms-2">
                  Sick Leave
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="flex align-items-center">
                <Checkbox
                  inputId="ingredient4"
                  name="leave"
                  value="MaternityLeave"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes('MaternityLeave')}
                />
                <label htmlFor="ingredient4" className="ms-2">
                  Maternity Leave
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="flex align-items-center">
                <Checkbox
                  inputId="ingredient5"
                  name="leave"
                  value="CasualLeave"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes('CasualLeave')}
                />
                <label htmlFor="ingredient5" className="ms-2">
                  Casual Leave
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="flex align-items-center">
                <Checkbox
                  inputId="ingredient6"
                  name="leave"
                  value="PaternityLeave"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes('PaternityLeave')}
                />
                <label htmlFor="ingredient6" className="ms-2">
                  Paternity Leave
                </label>
              </div>
            </div>
            <div className="col-6">
              <div className="flex align-items-center">
                <Checkbox
                  inputId="ingredient7"
                  name="leave"
                  value="EarnedLeave"
                  onChange={onIngredientsChange}
                  checked={ingredients.includes('EarnedLeave')}
                />
                <label htmlFor="ingredient7" className="ms-2">
                  Earned Leave
                </label>
              </div>
            </div>
          </div>
        </Dialog>
        <Dialog
          header="Add Leave Plan Scheme"
          visible={addLeaveScheme}
          draggable={false}
          resizable={false}
          className="small_popup"
          footer={renderFooter('addLeaveScheme')}
          onHide={() => setAddLeaveScheme(false)}
        >
          <div className="form_group">
            <label>Leave PLan Scheme Name</label>
            <input
              className="form-control"
              placeholder="Enter Leave Plan Scheme Name"
            />
          </div>
          <div className="form_group">
            <label>Leave PLan Scheme Name</label>
            <ReactSelectSingle
              value={leaveCalender}
              filter
              options={leaveCalenderOption}
              onChange={e => {
                leaveCalenderHandleChange(e);
              }}
              placeholder="Select"
            />
          </div>
          <div className="form_group">
            <label>Description</label>
            <TextArea placeholder="Write Description" rows={5} />
          </div>
        </Dialog>
        <Dialog
          header="Edit Leave Plan Scheme"
          visible={editLeaveScheme}
          draggable={false}
          resizable={false}
          className="small_popup"
          footer={renderFooter('editLeaveScheme')}
          onHide={() => setEditLeaveScheme(false)}
        >
          <div className="form_group">
            <label>Leave PLan Scheme Name</label>
            <input
              className="form-control"
              placeholder="Enter Leave Plan Scheme Name"
            />
          </div>
          <div className="form_group">
            <label>Leave PLan Scheme Name</label>
            <ReactSelectSingle
              value={leaveCalender}
              filter
              options={leaveCalenderOption}
              onChange={e => {
                leaveCalenderHandleChange(e);
              }}
              placeholder="Select"
            />
          </div>
          <div className="form_group">
            <label>Description</label>
            <TextArea placeholder="Write Description" rows={5} />
          </div>
        </Dialog>
      </div>
    </div>
  );
}
