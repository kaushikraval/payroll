import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import Input from '../Common/Input';
import { TabView, TabPanel } from 'primereact/tabview';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import Edit from '../../Assets/images/edit.svg';
import Deleat from '../../Assets/images/DeleteBtn.svg';
import PlusIcon from '../../Assets/images/plus.svg';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import ReactSelectSingle from '../Common/ReactSelectSingle';
import { Tag } from 'primereact/tag';
import UploadImg from '../../Assets/images/Upload-icon.svg';
import FileUploadImg from '../Common/ReactFileUpload';
export default function ManageTdsDetails() {
  const [date, setDate] = useState([]);

  const dateOptions = [
    { label: 'Jan 2022', value: 'Jan 2022' },
    { label: 'Feb 2022', value: 'Feb 2022' },
    { label: 'Mar 2022', value: 'Mar 2022' },
  ];
  const grossEarningData = [
    {
      salaryComponent: 'Basic',
      total: '214,230.00',
      april: '16,800.00',
      may: '16,800.00',
      june: '16,800.00',
      july: '16,800.00',
      aug: '16,800.00',
      sep: '16,800.00',
      oct: '16,800.00',
      nov: '16,800.00',
      dec: '16,800.00',
      jan: '16,800.00',
      feb: '16,800.00',
      mar: '16,800.00',
    },
    {
      salaryComponent: 'House Rent Allowance',
      total: '214,230.00',
      april: '16,800.00',
      may: '16,800.00',
      june: '16,800.00',
      july: '16,800.00',
      aug: '16,800.00',
      sep: '16,800.00',
      oct: '16,800.00',
      nov: '16,800.00',
      dec: '16,800.00',
      jan: '16,800.00',
      feb: '16,800.00',
      mar: '16,800.00',
    },
    {
      salaryComponent: 'Conveyance Allowance',
      total: '214,230.00',
      april: '16,800.00',
      may: '16,800.00',
      june: '16,800.00',
      july: '16,800.00',
      aug: '16,800.00',
      sep: '16,800.00',
      oct: '16,800.00',
      nov: '16,800.00',
      dec: '16,800.00',
      jan: '16,800.00',
      feb: '16,800.00',
      mar: '16,800.00',
    },
    {
      salaryComponent: 'Transport Allowance',
      total: '214,230.00',
      april: '16,800.00',
      may: '16,800.00',
      june: '16,800.00',
      july: '16,800.00',
      aug: '16,800.00',
      sep: '16,800.00',
      oct: '16,800.00',
      nov: '16,800.00',
      dec: '16,800.00',
      jan: '16,800.00',
      feb: '16,800.00',
      mar: '16,800.00',
    },
    {
      salaryComponent: 'Special Allowance',
      total: '214,230.00',
      april: '16,800.00',
      may: '16,800.00',
      june: '16,800.00',
      july: '16,800.00',
      aug: '16,800.00',
      sep: '16,800.00',
      oct: '16,800.00',
      nov: '16,800.00',
      dec: '16,800.00',
      jan: '16,800.00',
      feb: '16,800.00',
      mar: '16,800.00',
    },
    {
      salaryComponent: 'Overtime',
      total: '214,230.00',
      april: '16,800.00',
      may: '16,800.00',
      june: '16,800.00',
      july: '16,800.00',
      aug: '16,800.00',
      sep: '16,800.00',
      oct: '16,800.00',
      nov: '16,800.00',
      dec: '16,800.00',
      jan: '16,800.00',
      feb: '16,800.00',
      mar: '16,800.00',
    },
    {
      salaryComponent: 'Basic',
      total: '214,230.00',
      april: '16,800.00',
      may: '16,800.00',
      june: '16,800.00',
      july: '16,800.00',
      aug: '16,800.00',
      sep: '16,800.00',
      oct: '16,800.00',
      nov: '16,800.00',
      dec: '16,800.00',
      jan: '16,800.00',
      feb: '16,800.00',
      mar: '16,800.00',
    },
  ];
  const taxExemption = [
    {
      section: '10(13A)',
      allowanceName: 'House Rent Allowance',
      grossAmount: '74,333.00',
      exemptionAmount: '74,333.00',
    },
    {
      section: '16(iii)',
      allowanceName: 'Professional Tax',
      grossAmount: '2,400.00',
      exemptionAmount: '2,400.00',
    },
    {
      section: '16(ia)',
      allowanceName: 'Standard Deduction',
      grossAmount: '50,000.00',
      exemptionAmount: '50,000.00',
    },
  ];
  const taxCalculation = [
    {
      fromAmount: '100',
      toAmount: '25,000.00',
      tax: '00',
      taxableValue: '25,000.00',
      taxAmount: '00',
    },
    {
      fromAmount: '100',
      toAmount: '25,000.00',
      tax: '00',
      taxableValue: '25,000.00',
      taxAmount: '4,207.00',
    },
    {
      fromAmount: '100',
      toAmount: '25,000.00',
      tax: '00',
      taxableValue: '25,000.00',
      taxAmount: '00',
    },
    {
      fromAmount: '100',
      toAmount: '25,000.00',
      tax: '00',
      taxableValue: '25,000.00',
      taxAmount: '00',
    },
  ];
  const taxDeductionDetail = [
    {
      month: 'Monthly Tax',
      apr: '0.00',
      may: '0.00',
      june: '0.00',
      july: '0.00',
      aug: '0.00',
      sep: '0.00',
      oct: '0.00',
      nov: '0.00',
      dec: '0.00',
      jan: '0.00',
      feb: '0.00',
      mar: '0.00',
    },
  ];
  const [deletedetail, setDeleteDetail] = useState(false);
  const [compareTaxDetails, SetCompareTaxDetails] = useState(false);
  const [addRentedHouse, SetAddRentedHouse] = useState(false);
  const [addSelfOccupiedProperty, SetAddSelfOccupiedProperty] = useState(false);
  const [addLetOutProperty, SetAddLetOutProperty] = useState(false);
  const [addIncomeFromOtherSources, SetAddIncomeFromOtherSources] =
    useState(false);
  const dialogFuncMap = {
    deletedetail: setDeleteDetail,
    compareTaxDetails: SetCompareTaxDetails,
    addRentedHouse: SetAddRentedHouse,
    addSelfOccupiedProperty: SetAddSelfOccupiedProperty,
    addLetOutProperty: SetAddLetOutProperty,
    addIncomeFromOtherSources: SetAddIncomeFromOtherSources,
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
          label="Delete"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };
  const renderFooterCompareTax = name => {
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
  const [ingredients, setIngredient] = useState([]);
  const onIngredientsChange = e => {
    let _ingredients = [...ingredients];

    if (e.checked) _ingredients.push(e.value);
    else _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredient(_ingredients);
  };

  const [selectMonth, setSelectMonth] = useState();
  const selectMonthOpction = [
    { label: 'Apr 2022', value: 'Apr 2022' },
    { label: 'May 2022', value: 'May 2022' },
    { label: 'Jun 2022', value: 'Jun 2022' },
    { label: 'Jul 2022', value: 'Jul 2022' },
    { label: 'Aug 2022', value: 'Aug 2022' },
  ];
  const [selectCity, setSelectCity] = useState();
  const selectCityOpction = [
    { label: 'Owner PAN', value: 'Owner PAN' },
    { label: 'Non Metro City', value: 'Non Metro City' },
  ];

  const [totalSize, setTotalSize] = useState(0);
  const toast = useRef(null);

  const headerTemplate = options => {
    const { className, chooseButton, cancelButton } = options;
    return (
      <div
        className={className}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };
  const fileUploadRef = useRef();
  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className:
      'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  };
  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className:
      'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };
  const onTemplateSelect = e => {
    let _totalSize = totalSize;
    e?.files.FileList?.map(file => (_totalSize += file.size));
    setTotalSize(_totalSize);
  };

  const onTemplateUpload = e => {
    let _totalSize = 0;
    e.files.forEach(file => {
      _totalSize += file.size || 0;
    });

    setTotalSize(_totalSize);
    toast.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  };

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size);
    callback();
  };

  const onTemplateClear = () => {
    setTotalSize(0);
  };

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: '40%' }}>
          <img
            alt={file.name}
            role="presentation"
            src={file.objectURL}
            width={100}
          />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag
          value={props.formatSize}
          severity="warning"
          className="px-3 py-2"
        />
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-outlined p-button-rounded p-button-danger ml-auto"
          onClick={() => onTemplateRemove(file, props.onRemove)}
        />
      </div>
    );
  };
  const emptyTemplate = () => {
    return (
      <div className="outer_img_border">
        <div className="d-flex align-items-center flex-column">
          <img src={UploadImg} className="me-2" alt="FilterImage" />
          <h6
            style={{ fontWeight: '500', color: '#000' }}
            className="mt-3 mb-2"
          >
            Drag & drop files or Browse
          </h6>
          <p className="mb-0">
            Supported formates: Only ZIP, RAR files are accepted.
          </p>
        </div>
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
            <b>Payroll</b>
          </li>
          <li>
            <b>Compensation</b>
          </li>
          <li>Salary Setup</li>
        </ul>
      </div>
      <div className="manage_tds_detail">
        <div className="salary_user d-sm-flex justify-content-between border-bottom flex-wrap">
          <div className="d-flex align-items-center">
            <div className="employee_img">
              <img src={EmployeeImg} width={38} alt="user" />
            </div>
            <div className="employee_text ms-2 d-flex align-items-start flex-column flex-sm-row">
              <p className="m-0">
                Dhaval Patel <br /> <span>UX/UI Designer</span>
              </p>
              <span className="emp_code mt-2 mt-sm-0 ms-sm-2">
                EMP. CODE: 1002
              </span>
            </div>
          </div>
          <h6 className="mb-0 mt-2">Old Regime</h6>
        </div>
        <TabView>
          <TabPanel header="IT Computation">
            <div className="top_filter_wrap">
              <div className="row">
                <div className="col-lg-6">
                  <ul className="filter_wrapper">
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={date}
                          options={dateOptions}
                          onChange={e => {
                            setDate(e.value);
                          }}
                          placeholder="Dec 2022"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 text-lg-end mb-3 mb-lg-0">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      SetCompareTaxDetails(true);
                    }}
                  >
                    Switch Tax Regime
                  </button>
                </div>
              </div>
            </div>
            <div className="count_wrap bg_white_box d-flex justify-content-between py-3 mb-3 flex-wrap">
              <div className="count_box px-3">
                <p className="mb-1">Total Taxable Income</p>
                <h4>334,134.00</h4>
              </div>
              <div className="count_box px-3">
                <p className="mb-1">Tax Amount</p>
                <h4>0.00</h4>
              </div>
              <div className="count_box px-3">
                <p className="mb-1">Surcharge & Cess Amount</p>
                <h4>0.00</h4>
              </div>
              <div className="count_box px-3">
                <p className="mb-1">Total Tax Payable Amount</p>
                <h4>0.00</h4>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Gross Earning Summary (A)</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <thead>
                    <tr>
                      <th>Salary Components</th>
                      <th>Total</th>
                      <th>
                        <span className="badge bedge_warning">Apr - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_success">May - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_success">Jun - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_success">Jul - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_success">Aug - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_success">Sep - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_success">Oct - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_primary">Nov - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_primary">Dec - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_primary">Jan - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_primary">Feb - 2022</span>
                      </th>
                      <th>
                        <span className="badge bedge_primary">Mar - 2022</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {grossEarningData.map(data => {
                      return (
                        <tr>
                          <td>{data.salaryComponent}</td>
                          <td>{data.total}</td>
                          <td>{data.april}</td>
                          <td>{data.may}</td>
                          <td>{data.june}</td>
                          <td>{data.july}</td>
                          <td>{data.aug}</td>
                          <td>{data.sep}</td>
                          <td>{data.oct}</td>
                          <td>{data.nov}</td>
                          <td>{data.dec}</td>
                          <td>{data.jan}</td>
                          <td>{data.feb}</td>
                          <td>{data.mar}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Total Earnings</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                      <td>460,867.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Tax Exemption (B)</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <thead>
                    <tr>
                      <th>Section</th>
                      <th>Alowance Name</th>
                      <th>Gross AMount</th>
                      <th>Exempted Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxExemption.map(data => {
                      return (
                        <tr>
                          <td>{data.section}</td>
                          <td>{data.allowanceName}</td>
                          <td>{data.grossAmount}</td>
                          <td>{data.exemptionAmount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Total Exemptions</td>
                      <td></td>
                      <td>126,733.00</td>
                      <td>126,733.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Total Taxable Income (C=A-B)</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <tbody>
                    <tr>
                      <td>Total Taxable Income</td>
                      <td className="text-end">334,134.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Tax Calculation (D)</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <thead>
                    <tr>
                      <th>From Amount</th>
                      <th>To Amount</th>
                      <th>Tax(%)</th>
                      <th>Taxable Value</th>
                      <th>Tax Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxCalculation.map(data => {
                      return (
                        <tr>
                          <td>{data.fromAmount}</td>
                          <td>{data.toAmount}</td>
                          <td>{data.tax}</td>
                          <td>{data.taxableValue}</td>
                          <td>{data.taxAmount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}>Total Tax Amount</td>
                      <td>4,207.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Tax Rebate Calculation (E)</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <tbody>
                    <tr>
                      <td>
                        Tax Rebate-Section 87A When taxable income less than
                        500000
                      </td>
                      <td className="text-end">334,134.00-4,207.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Cess & Surcharge (F)</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <tbody>
                    <tr>
                      <td>
                        Health and Education Cess - 4% of Gross Income Tax and
                        Surcharge
                      </td>
                      <td className="text-end">0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Total Tax Payable Amount (G)</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <tbody>
                    <tr>
                      <td>
                        Tax Calculation(D) + Tax Rebate Calculation(E) + Cess &
                        Surcharge(F)
                      </td>
                      <td className="text-end">0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="title_table mb-3">
              <div className="title border-bottom">
                <h6 className="mb-0">Tax Deduction Detalis</h6>
              </div>
              <div className="table-responsive">
                <table className="text-nowrap">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Apr - 2022</th>
                      <th>May - 2022</th>
                      <th>Jun - 2022</th>
                      <th>Jul - 2022</th>
                      <th>Aug - 2022</th>
                      <th>Sep - 2022</th>
                      <th>Oct - 2022</th>
                      <th>Nov - 2022</th>
                      <th>Dec - 2022</th>
                      <th>Jan - 2022</th>
                      <th>Feb - 2022</th>
                      <th>Mar - 2022</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxDeductionDetail.map(data => {
                      return (
                        <tr>
                          <td>{data.month}</td>
                          <td>{data.apr}</td>
                          <td>{data.may}</td>
                          <td>{data.june}</td>
                          <td>{data.july}</td>
                          <td>{data.aug}</td>
                          <td>{data.sep}</td>
                          <td>{data.oct}</td>
                          <td>{data.nov}</td>
                          <td>{data.dec}</td>
                          <td>{data.jan}</td>
                          <td>{data.feb}</td>
                          <td>{data.mar}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={11}>Tax Paid Till Now : 0.00</td>
                      <td colSpan={2} className="text-end">
                        Remaining Tax To be Paid : 0.00
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Declaration">
            <div className="count_wrap bg_white_box d-flex justify-content-between py-3 mb-3 flex-wrap">
              <div className="count_box px-3">
                <p className="mb-1">Total Taxable Income</p>
                <h4>334,134.00</h4>
              </div>
              <div className="count_box px-3">
                <p className="mb-1">Total Tax Payable Amount</p>
                <h4>0.00</h4>
              </div>
              <div className="count_box px-3">
                <p className="mb-1">Paid Tax</p>
                <h4>0.00</h4>
              </div>
            </div>

            <TabView>
              <TabPanel header="80 C Investments">
                <p className="mb-3 w-50">
                  Note: This section contains the list of investments including
                  LIC schemes, mutual funds and PPF. The maximum limit for this
                  section is 1,50,000.00
                </p>
                <div className="title_table big_title mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Max Section Limit</th>
                          <th>Total Declared Amount</th>
                          <th>Total Approved Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>150,000.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="title_table mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Section</th>
                          <th>Scheme Name</th>
                          <th>Max Scheme Limit</th>
                          <th>Declaration Amount</th>
                          <th>Approved Amount</th>
                          <th>Proof Document</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>80 C</td>
                          <td>Employee PF</td>
                          <td>No Limit</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_success">
                              Approved
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li
                                onClick={() => {
                                  setDeleteDetail(true);
                                }}
                              >
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="80 D Investments">
                <p className="mb-3 w-50">
                  Note: This section contains Mediclaim policies for yourself,
                  your childern, spouse and parents. The maximum limit for this
                  section is 1,00,000.00
                </p>
                <div className="title_table big_title mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Max Section Limit</th>
                          <th>Total Declared Amount</th>
                          <th>Total Approved Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>--</td>
                          <td>0.00</td>
                          <td>0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="title_table table_input mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Section</th>
                          <th>Scheme Name</th>
                          <th>Max Scheme Limit</th>
                          <th>Declaration Amount</th>
                          <th>Approved Amount</th>
                          <th>Proof Document</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>80 C</td>
                          <td>Employee PF</td>
                          <td>No Limit</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>80 C</td>
                          <td>Employee PF</td>
                          <td>No Limit</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>80 C</td>
                          <td>Employee PF</td>
                          <td>No Limit</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>80 C</td>
                          <td>Employee PF</td>
                          <td>No Limit</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Tax Saving Allowance">
                <div className="title_table big_title mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Max Section Limit</th>
                          <th>Total Declared Amount</th>
                          <th>Total Approved Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>--</td>
                          <td>0.00</td>
                          <td>0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="title_table table_input mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Section</th>
                          <th>Scheme Name</th>
                          <th>Max Scheme Limit</th>
                          <th>Declaration Amount</th>
                          <th>Approved Amount</th>
                          <th>Proof Document</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Section 10 (5)</td>
                          <td>Leave Travel Allowance</td>
                          <td>No Proof</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Section 10 (14)</td>
                          <td>Uniform Allowance</td>
                          <td>No Proof</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Section 10 (14)</td>
                          <td>Uniform Allowance</td>
                          <td>No Proof</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Other Investments & Exemptions">
                <p className="mb-3 w-50">
                  Note: Declare other investments & exemptions such as Voluntary
                  NPS, Interest Paid on Education Loan and Medical Expenditures
                  under this section
                </p>
                <div className="title_table big_title mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Max Section Limit</th>
                          <th>Total Declared Amount</th>
                          <th>Total Approved Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>150,000.00</td>
                          <td>0.00</td>
                          <td>0.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="title_table table_input mb-3">
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Section</th>
                          <th>Scheme Name</th>
                          <th>Max Scheme Limit</th>
                          <th>Declaration Amount</th>
                          <th>Approved Amount</th>
                          <th>Proof Document</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>80 CCD (1B)</td>
                          <td>Employee PF</td>
                          <td>No Proof</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>80 DD</td>
                          <td>Employee PF</td>
                          <td>No Proof</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>80 DDB</td>
                          <td>Employee PF</td>
                          <td>No Proof</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>80 C</td>
                          <td>Employee PF</td>
                          <td>No Limit</td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>
                            <Input placeholder="0.00" />
                          </td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_warning">
                              Not Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="House Property">
                <div className="title_table mb-3">
                  <div className="title border-bottom d-flex align-items-center justify-content-between">
                    <h6 className="mb-0">House Rented Details</h6>
                    <button
                      className="btn btn-border"
                      onClick={() => {
                        SetAddRentedHouse(true);
                      }}
                    >
                      <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                      Add Rented House
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Rent Period Month From/To</th>
                          <th>City</th>
                          <th>Owner Name</th>
                          <th>Owner PAN</th>
                          <th>Rent Declared Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Apr 22 - Dec 22</td>
                          <td>Non Metro</td>
                          <td>Chirag Sondagar</td>
                          <td>FBKPS4764Q</td>
                          <td>45000 5000.00/Month</td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_primary">
                              Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Apr 22 - Dec 22</td>
                          <td>Non Metro</td>
                          <td>Chirag Sondagar</td>
                          <td>FBKPS4764Q</td>
                          <td>45000 5000.00/Month</td>
                          <td>-</td>
                          <td>
                            <span className="badge bedge_primary">
                              Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="title_table mb-3">
                  <div className="title border-bottom d-flex align-items-center justify-content-between">
                    <h6 className="mb-0">Self Occupied Property Details</h6>
                    <button
                      className="btn btn-border"
                      onClick={() => {
                        SetAddSelfOccupiedProperty(true);
                      }}
                    >
                      <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                      Add Self Occupied Property
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Intrest On Loan Amount</th>
                          <th>Lender Name</th>
                          <th>Lender PAN</th>
                          <th>Address</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5,000.00</td>
                          <td>Chirag Sondagar</td>
                          <td>FBKPS4764Q</td>
                          <td>Surat</td>
                          <td>
                            <span className="badge bedge_primary">
                              Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="title_table mb-3">
                  <div className="title border-bottom d-flex align-items-center justify-content-between">
                    <h6 className="mb-0">Let Out Property Details</h6>
                    <button
                      className="btn btn-border"
                      onClick={() => {
                        SetAddLetOutProperty(true);
                      }}
                    >
                      <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                      Add Let Out Property
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Intrest On Loan Amount</th>
                          <th>Net Annual Amount</th>
                          <th>30% Standard Deduction</th>
                          <th>Net Income/Loss From Property</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5,000.00</td>
                          <td>50,000.00</td>
                          <td>15,000.00</td>
                          <td>35,000.00</td>
                          <td>
                            <span className="badge bedge_primary">
                              Submitted
                            </span>
                          </td>
                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
              <TabPanel header="Other Sources Of Income">
                <div className="title_table mb-3">
                  <div className="title border-bottom d-flex align-items-center justify-content-between">
                    <h6 className="mb-0">Income From Other Sources</h6>
                    <button
                      className="btn btn-border"
                      onClick={() => {
                        SetAddIncomeFromOtherSources(true);
                      }}
                    >
                      <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                      Add Income From Other Sources
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="text-nowrap">
                      <thead>
                        <tr>
                          <th>Income From Other Sources</th>
                          <th>Interest Earned from Saving Deposit</th>
                          <th>Interest Earned from Fixed Deposit</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>50,000.00</td>
                          <td>15,000.00</td>
                          <td>35,000.00</td>

                          <td>
                            <ul className="edit_wrap d-flex align-items-center">
                              <li>
                                <img src={Edit} alt="Edit" />
                              </li>
                              <li>
                                <img src={Deleat} alt="Deleat" />
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabPanel>
            </TabView>
          </TabPanel>
          <TabPanel header="Previous Employement">
            <p className="mb-3 w-50">
              Note: Previous Employment detials are necessary for income tax
              computation when the employee switches the organization in the
              middel of the FY.
            </p>
            <div className="title_table table_input mb-3">
              <div className="table-responsive">
                <table className="text-nowrap">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Basic</th>
                      <th>House Rent Allowance</th>
                      <th>Gross</th>
                      <th>Employee PF</th>
                      <th>Professional Tax</th>
                      <th>Income Tax</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Apr - 2022</td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex align-items-center">
                          <li>
                            <img src={Edit} alt="Edit" />
                          </li>
                          <li>
                            <img src={Deleat} alt="Deleat" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>May - 2022</td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <Input placeholder="0.00" />
                      </td>
                      <td>
                        <ul className="edit_wrap d-flex align-items-center">
                          <li>
                            <img src={Edit} alt="Edit" />
                          </li>
                          <li>
                            <img src={Deleat} alt="Deleat" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
      <Dialog
        header="Declaration"
        visible={deletedetail}
        draggable={false}
        resizable={false}
        className="small_popup confirm_popup"
        footer={renderFooter('deletedetail')}
        onHide={() => onHide('deletedetail')}
      >
        <div className="delate_popup_wrap text-center">
          <p>
            Are you sure you want to Delete Declaration Data for Selected
            Scheme?
          </p>
        </div>
      </Dialog>
      <Dialog
        header="Compare Tax Details"
        visible={compareTaxDetails}
        draggable={false}
        resizable={false}
        className="medium_popup"
        footer={renderFooterCompareTax('compareTaxDetails')}
        onHide={() => onHide('compareTaxDetails')}
      >
        <div className="row radio_squre_box">
          <div className="col-md-6">
            <div className="type_box d-flex align-items-center active mb-3 mb-md-0">
              <RadioButton
                inputId="ingredients1"
                name="revisetype"
                value="Percentage"
                onChange={e => setIngredient(e.value)}
                checked={ingredients === 'Percentage'}
              />
              <div className="form_group flex-grow-1 mb-0">
                <h6>Old Tax Regime</h6>
                <p className="mb-0">Total Tax Amount: 4,207.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="type_box d-flex align-items-center">
              <RadioButton
                inputId="ingredients2"
                name="revisetype"
                value="Amount"
                onChange={e => setIngredient(e.value)}
                checked={ingredients === 'Amount'}
              />
              <div className="form_group flex-grow-1 mb-0">
                <h6>New Tax Regime</h6>
                <p className="mb-0">Total Tax Amount: 10,544.00</p>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Add Rented House"
        visible={addRentedHouse}
        draggable={false}
        resizable={false}
        className="medium_popup"
        footer={renderFooterCompareTax('addRentedHouse')}
        onHide={() => onHide('addRentedHouse')}
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="form_group">
              <label>Rental Period From Month</label>
              <ReactSelectSingle
                value={selectMonth}
                onChange={e => {
                  setSelectMonth(e.value);
                }}
                options={selectMonthOpction}
                placeholder="Select Month"
              />
            </div>
            <div className="form_group">
              <label>Total Rent Amount</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Rental Period To Month</label>
              <ReactSelectSingle
                value={selectCity}
                onChange={e => {
                  setSelectCity(e.value);
                }}
                options={selectCityOpction}
                placeholder="Select Month"
              />
            </div>
            <div className="form_group">
              <label>Owner Name</label>
              <Input placeholder="Name" />
            </div>
            <div className="form_group">
              <label>Owner PAN</label>
              <Input placeholder="PAN" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form_group">
              <label>Rental Period To Month</label>
              <ReactSelectSingle
                value={selectMonth}
                onChange={e => {
                  setSelectMonth(e.value);
                }}
                options={selectMonthOpction}
                placeholder="Select Month"
              />
            </div>
            <div className="form_group">
              <label>Address</label>
              <Input placeholder="Address" />
            </div>
            <div className="form_group">
              <label>Attachment</label>
              <div className="upload_wrapper">
                <FileUploadImg
                  ref={fileUploadRef}
                  name="demo[]"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  multiple
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={onTemplateUpload}
                  onSelect={onTemplateSelect}
                  onError={onTemplateClear}
                  onClear={onTemplateClear}
                  headerTemplate={headerTemplate}
                  itemTemplate={itemTemplate}
                  emptyTemplate={emptyTemplate}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Add Self Occupied Property"
        visible={addSelfOccupiedProperty}
        draggable={false}
        resizable={false}
        className="medium_popup"
        footer={renderFooterCompareTax('addSelfOccupiedProperty')}
        onHide={() => onHide('addSelfOccupiedProperty')}
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="form_group">
              <label>Interest Paid On Loan Amount</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Lender PAN</label>
              <Input placeholder="PAN" />
            </div>
            <div className="form_group">
              <label>Attachment</label>
              <div className="upload_wrapper">
                <FileUploadImg
                  ref={fileUploadRef}
                  name="demo[]"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  multiple
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={onTemplateUpload}
                  onSelect={onTemplateSelect}
                  onError={onTemplateClear}
                  onClear={onTemplateClear}
                  headerTemplate={headerTemplate}
                  itemTemplate={itemTemplate}
                  emptyTemplate={emptyTemplate}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form_group">
              <label>Name of The Lender</label>
              <Input placeholder="Name" />
            </div>
            <div className="form_group">
              <label>Address</label>
              <Input placeholder="Address" />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Add Let Out Property"
        visible={addLetOutProperty}
        draggable={false}
        resizable={false}
        className="medium_popup"
        footer={renderFooterCompareTax('addLetOutProperty')}
        onHide={() => onHide('addLetOutProperty')}
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="form_group">
              <label>Interest On Loan Amount</label>
              <Input placeholder="Amount" />
            </div>

            <div className="form_group">
              <label>Municipal Texes Paid</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Standard Deduction (@30% of Net Annual Value)</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Lender Name</label>
              <Input placeholder="Name" />
            </div>
            <div className="form_group">
              <label>Lender PAN</label>
              <Input placeholder="PAN" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form_group">
              <label>Annual Rent Received</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Net Annual Value</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Net Income/Loss from House Property</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Attachment</label>
              <div className="upload_wrapper">
                <FileUploadImg
                  ref={fileUploadRef}
                  name="demo[]"
                  url="https://primefaces.org/primereact/showcase/upload.php"
                  multiple
                  accept="image/*"
                  maxFileSize={1000000}
                  onUpload={onTemplateUpload}
                  onSelect={onTemplateSelect}
                  onError={onTemplateClear}
                  onClear={onTemplateClear}
                  headerTemplate={headerTemplate}
                  itemTemplate={itemTemplate}
                  emptyTemplate={emptyTemplate}
                  chooseOptions={chooseOptions}
                  uploadOptions={uploadOptions}
                  cancelOptions={cancelOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Add Income From Other Sources"
        visible={addIncomeFromOtherSources}
        draggable={false}
        resizable={false}
        className="medium_popup"
        footer={renderFooterCompareTax('addIncomeFromOtherSources')}
        onHide={() => onHide('addIncomeFromOtherSources')}
      >
        <div className="row">
          <div className="col-sm-6">
            <div className="form_group">
              <label>Income From Other Sources</label>
              <Input placeholder="Amount" />
            </div>

            <div className="form_group">
              <label>Interest Earned from Fixed Deposit</label>
              <Input placeholder="Amount" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form_group">
              <label>Interest Earned from Saving Deposit</label>
              <Input placeholder="Amount" />
            </div>
            <div className="form_group">
              <label>Total Income</label>
              <Input placeholder="Amount" />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
