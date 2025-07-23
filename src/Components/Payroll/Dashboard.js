import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from 'primereact/tabview';
import HomeIcon from '../../Assets/images/home-blue.svg';
import LineChart from './Chart/LineChart';
import EmployeeSummaryPieChart from './Chart/EmployeeSummaryPieChart';
import GrossSummaryPieChart from './Chart/GrossSummaryPieChart';
import DeductionSummaryPieChart from './Chart/DeductionSummaryPieChart';
import DistributionLocationPieChart from './Chart/DistributionLocationPieChart';
import DistributionDepartmentPieChart from './Chart/DistributionDepartmentPieChart';
import ReactSelectMultiple from '../Common/ReactSelectMultiple';
import FilterIcon from '../../Assets/images/filter.svg';
import EmployeeCount from '../../Assets/images/count-employe.svg';
import EarningCount from '../../Assets/images/count-profit.svg';
import DeductionCount from '../../Assets/images/count-deduction.svg';
import EmployeePayable from '../../Assets/images/count-payable.svg';
import RedArrow from '../../Assets/images/red-arrow.svg';
import GreenArrow from '../../Assets/images/green-arrow.svg';
export default function Dashboard() {
  const [years, setYears] = useState([]);
  const [month, setMonth] = useState([]);
  const [company, setCompany] = useState([]);

  const yearsOptions = [
    { label: '2022 - 2023', value: '2022 - 2023' },
    { label: '2021 - 2022', value: '2021 - 2022' },
    { label: '2020 - 2021', value: '2020 - 2021' },
  ];
  const monthOptions = [
    { label: 'Apr - 2022', value: 'Apr - 2022' },
    { label: 'May - 2022', value: 'May - 2022' },
    { label: 'Jun - 2022', value: 'Jun - 2022' },
  ];
  const companyOptions = [
    { label: 'Cmcreation Pvt Ltd', value: 'Cmcreation Pvt Ltd' },
    { label: 'Tempcm Pvt Ltd', value: 'Tempcm Pvt Ltd' },
    { label: 'Metaloop Solution', value: 'Metaloop Solution' },
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
            <b>Payroll</b>
          </li>
          <li>Salary Dashboard</li>
        </ul>
      </div>
      <div className="payroll_dashbord">
        <TabView>
          <TabPanel header="Company Payroll Summary">
            <div className="summary_chart">
              <LineChart />
            </div>
            <div className="top_filter_wrap mt-3">
              <div className="row">
                <div className="col-xl-12">
                  <ul className="filter_wrapper">
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={years}
                          options={yearsOptions}
                          onChange={e => {
                            setYears(e.value);
                          }}
                          placeholder="2022 - 2023"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={month}
                          options={monthOptions}
                          onChange={e => {
                            setMonth(e.value);
                          }}
                          placeholder="Dec 2022"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="form_group">
                        <ReactSelectMultiple
                          value={company}
                          options={companyOptions}
                          onChange={e => {
                            setCompany(e.value);
                          }}
                          placeholder="Select Company"
                        />
                      </div>
                    </li>
                    <li>
                      <button type="button" className="btn-primary">
                        <img
                          src={FilterIcon}
                          className="me-2"
                          alt="FilterImage"
                        />
                        Filter
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="count_box mb-3">
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0">
                  <div className="box_info d-flex">
                    <div className="left_side flex-grow-1">
                      <p>Total Employee</p>
                      <div className="d-flex align-items-center">
                        <div className="icon employe_icon d-flex align-items-center justify-content-center rounded-circle me-3">
                          <img src={EmployeeCount} />
                        </div>
                        <h5>60</h5>
                      </div>
                    </div>
                    <div className="right_side flex-shrink-0">
                      <span className="badge bg-red d-block mb-2">
                        <img src={RedArrow} alt="arrow" /> 0
                      </span>
                      <span className="badge bg-green d-block">
                        <img src={GreenArrow} alt="arrow" />0
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0">
                  <div className="box_info d-flex">
                    <div className="left_side flex-grow-1">
                      <p>Total Gross Earning</p>
                      <div className="d-flex align-items-center">
                        <div className="icon earning_icon d-flex align-items-center justify-content-center rounded-circle me-3">
                          <img src={EarningCount} />
                        </div>
                        <h5>446,434.00</h5>
                      </div>
                    </div>
                    <div className="right_side flex-shrink-0">
                      <span className="badge bg-red d-block mb-2">
                        <img src={RedArrow} alt="arrow" /> 0
                      </span>
                      <span className="badge bg-green d-block">
                        <img src={GreenArrow} alt="arrow" />0
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0">
                  <div className="box_info d-flex">
                    <div className="left_side flex-grow-1">
                      <p>Total Deduction</p>
                      <div className="d-flex align-items-center">
                        <div className="icon deduction_icon d-flex align-items-center justify-content-center rounded-circle me-3">
                          <img src={DeductionCount} />
                        </div>
                        <h5>33,312.00</h5>
                      </div>
                    </div>
                    <div className="right_side flex-shrink-0">
                      <span className="badge bg-red d-block mb-2">
                        <img src={RedArrow} alt="arrow" /> 0
                      </span>
                      <span className="badge bg-green d-block">
                        <img src={GreenArrow} alt="arrow" />0
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-4 mb-xl-0">
                  <div className="box_info d-flex">
                    <div className="left_side flex-grow-1">
                      <p>Total Net Payable</p>
                      <div className="d-flex align-items-center">
                        <div className="icon payable_icon d-flex align-items-center justify-content-center rounded-circle me-3">
                          <img src={EmployeePayable} />
                        </div>
                        <h5>413,522.00</h5>
                      </div>
                    </div>
                    <div className="right_side flex-shrink-0">
                      <span className="badge bg-red d-block mb-2">
                        <img src={RedArrow} alt="arrow" /> 0
                      </span>
                      <span className="badge bg-green d-block">
                        <img src={GreenArrow} alt="arrow" />0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart_group">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <div className="chart_box h-100">
                    <h6 class="chart_title d-flex justify-content-between">
                      Employee Summary<span>27 Jun 2022</span>
                    </h6>
                    <EmployeeSummaryPieChart />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="chart_box h-100">
                        <h6 class="chart_title d-flex justify-content-between">
                          Employee Summary<span>27 Jun 2022</span>
                        </h6>
                        <GrossSummaryPieChart />
                        <ul className="d-flex justify-content-center">
                          <li className="text-center d-inline-block px-3">
                            <p className="mb-1">Total Gross Earnings</p>
                            <h6>413,522.00</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="chart_box h-100">
                        <h6 class="chart_title d-flex justify-content-between">
                          Deduction Summary<span>27 Jun 2022</span>
                        </h6>
                        <DeductionSummaryPieChart />
                        <ul className="d-flex justify-content-center">
                          <li className="text-center d-inline-block px-3">
                            <p className="mb-1">Total Dedutions</p>
                            <h6>413,522.00</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="chart_box h-100">
                    <h6 class="chart_title d-flex justify-content-between">
                      Compensation Distribution by Location
                      <span>27 Jun 2022</span>
                    </h6>
                    <DistributionLocationPieChart />
                    <ul className="d-flex justify-content-center">
                      <li className="text-center d-inline-block px-3">
                        <p className="mb-1">Total Net Payable</p>
                        <h6>413,522.00</h6>
                      </li>
                      <li className="text-center d-inline-block px-3">
                        <p className="mb-1">
                          Highest Net Payable by Department
                        </p>
                        <h6>144,522.00</h6>
                      </li>
                      <li className="text-center d-inline-block px-3">
                        <p className="mb-1">Lowest Net Payable by Department</p>
                        <h6>413,522.00</h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="chart_box h-100">
                    <h6 class="chart_title d-flex justify-content-between">
                      Compensation Distribution by Department
                      <span>27 Jun 2022</span>
                    </h6>
                    <DistributionDepartmentPieChart />

                    <ul className="d-flex justify-content-center">
                      <li className="text-center d-inline-block px-3">
                        <p className="mb-1">Total Net Payable</p>
                        <h6>413,522.00</h6>
                      </li>
                      <li className="text-center d-inline-block px-3">
                        <p className="mb-1">
                          Highest Net Payable by Department
                        </p>
                        <h6>144,522.00</h6>
                      </li>
                      <li className="text-center d-inline-block px-3">
                        <p className="mb-1">Lowest Net Payable by Department</p>
                        <h6>413,522.00</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header="My Payroll Summary">
            <div className="summary_chart">
              <LineChart />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </>
  );
}
