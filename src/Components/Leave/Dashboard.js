import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import MoneyHand from '../../Assets/images/money-hand.svg';
import MoneyStack from '../../Assets/images/money-stack.svg';
import EmployeeImg from '../../Assets/images/user3.png';
import LeftArrow from '../../Assets/images/chevron-left.svg';
import RightArrow from '../../Assets/images/chevron-right.svg';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import LeaveWeeklyStatsBarChart from './chart/LeaveWeeklyStatsBarChart';
import LeaveMonthlyStatsLineChart from './chart/LeaveMonthlyStatsLineChart';
import LeaveStatsVariablepieChart from './chart/LeaveStatsVariablepieChart';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
export const weeklyLeaveOption = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        min: 0,
        max: 10,
        stepSize: 2,
      },
    },
  },
};

const labels = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const weeklyLeaveData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: '#606EEE',
      barPercentage: 1,
      barThickness: 20,
      maxBarThickness: 28,
      minBarLength: 2,
      borderRadius: 4,
    },
  ],
};
export const dataLeave = {
  options: {
    legend: {
      display: false,
    },
  },
  labels: [
    'MaternityLeave',
    'Loss Of Pay',
    'Earned Leave',
    'Sick Leave',
    'Casual Leave',
    'Paternity Leave',
  ],
  datasets: [
    {
      label: '',
      data: [53, 53, 53, 10, 30, 40],
      backgroundColor: [
        '#FF8F0B',
        '#5C6DFE',
        '#345DC6',
        '#3BA4E8',
        '#097B82',
        '#34C75A',
      ],
      borderColor: ['#ffffff', '#ffffff', '#ffffff'],
      borderWidth: 0,
      // offset: 10,
      // cutout: 150,
      radius: '50%',
    },
  ],
};

export const monthlyLeaveStatus = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: '#4C5D70',
      cornerRadius: 4,
      borderWidth: 0,
      displayColors: true,

      callbacks: {
        labelColor: function (context) {
          let label = context.dataset.label || '';
          return {
            borderColor: '#FFF',
            backgroundColor: label === 'Joined' ? '#8676FF' : '#FFBA69',
            borderWidth: 0,
          };
        },
      },
    },
    hover: {
      mode: 'index',
      intersect: false,
      backgroundColor: '#4C5D70',
      cornerRadius: 4,
      borderWidth: 0,
    },
  },

  elements: {
    line: {
      tension: 0.5,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        min: 0,
        max: 60,
        stepSize: 10,
      },
    },
  },
};

export default function Dashboard() {
  const navigate = useNavigate();
  const handleTrClick = () => {
    navigate('/leave/dashboard/on-leave-today');
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
            <b>Leave</b>
          </li>

          <li>Dashboard</li>
        </ul>
      </div>
      <div className="leave_dashboard">
        <div className="row">
          <div className="col-lg-5 mb-3">
            <div className="bg_white_box p-3">
              <h5 className="box_title">On Leave Today</h5>
              <div className="row">
                <div className="col-sm-6">
                  <div
                    className="leave_box paid_leave"
                    onClick={() => {
                      handleTrClick();
                    }}
                  >
                    <div className="icon_box d-flex justify-content-center align-items-center rounded-circle">
                      <img src={MoneyStack} alt="moneystack" />
                    </div>
                    <h3>
                      3<span>/80</span>
                    </h3>
                    <h5 className="mb-0">Paid Leave</h5>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="leave_box unpaid_leave"
                    onClick={() => {
                      handleTrClick();
                    }}
                  >
                    <div className="icon_box d-flex justify-content-center align-items-center rounded-circle">
                      <img src={MoneyHand} alt="moneyhand" />
                    </div>
                    <h3>
                      6<span>/80</span>
                    </h3>
                    <h5 className="mb-0">Unpaid Leave</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mb-3">
            <div className="bg_white_box p-3">
              <h5 className="box_title">My Leave Weekly Stats</h5>
              {/* <Bar
                options={weeklyLeaveOption}
                data={weeklyLeaveData}
                width={600}
                height={197}
              /> */}
              <div className="leave_weekly_chart">
                <LeaveWeeklyStatsBarChart />
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-3">
            <div className="bg_white_box p-3">
              <h5 className="box_title">Today Team Leave Statistics</h5>
              {/* <Doughnut id="gender" data={dataLeave} width={200} height={100} /> */}
              <LeaveStatsVariablepieChart />
            </div>
          </div>
          <div className="col-md-7 mb-3">
            <div className="bg_white_box p-3">
              <h5 className="box_title">My Leave Monthly Stats</h5>
              {/* <Line
                options={monthlyLeaveStatus}
                data={monthlyLeaveData}
                width={600}
                height={250}
              /> */}
              <LeaveMonthlyStatsLineChart />
            </div>
          </div>

          <div className="col-sm-12">
            <div className="bg_white_box p-3">
              <div className="row mb-3">
                <div className="col-lg-4">
                  <h5 className="box_title mb-3">Team Leave Calender</h5>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex flex-wrap justify-content-lg-end">
                    <div className="attendance_satus_wrap pt-0 mt-0">
                      <ul>
                        <li className="status status_orange">Weekly Off</li>
                        <li className="status status_bluePantone">Holiday</li>
                        <li className="status status_pink">Paid Leave</li>
                        <li className="status status_cyan">Unpaid Leave</li>
                      </ul>
                    </div>
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
              <div className="leave_calender">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="text-center"></th>
                          <th className="text-center">Su</th>
                          <th className="text-center">Mo</th>
                          <th className="text-center">Tu</th>
                          <th className="text-center">We</th>
                          <th className="text-center">Th</th>
                          <th className="text-center">Fr</th>
                          <th className="text-center">Sa</th>
                          <th className="text-center">Su</th>
                          <th className="text-center">Mo</th>
                          <th className="text-center">Tu</th>
                          <th className="text-center">We</th>
                          <th className="text-center">Th</th>
                          <th className="text-center">Fr</th>
                          <th className="text-center">Sa</th>
                          <th className="text-center">Su</th>
                          <th className="text-center">Mo</th>
                          <th className="text-center">Tu</th>
                          <th className="text-center">We</th>
                          <th className="text-center">Th</th>
                          <th className="text-center">Fr</th>
                          <th className="text-center">Sa</th>
                          <th className="text-center">Su</th>
                          <th className="text-center">Mo</th>
                          <th className="text-center">Tu</th>
                          <th className="text-center">We</th>
                          <th className="text-center">Th</th>
                          <th className="text-center">Fr</th>
                          <th className="text-center">Sa</th>
                          <th className="text-center">Su</th>
                          <th className="text-center">Mo</th>
                          <th className="text-center">Tu</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="name_wrap">
                              <img src={EmployeeImg} alt="UserImage" />
                              <span>Dhaval Patel</span>
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              1
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              2
                            </div>
                          </td>
                          <td>
                            <div className="num_box paidleave d-flex align-items-center justify-content-center">
                              3
                            </div>
                          </td>
                          <td>
                            <div className="num_box paidleave endleave d-flex align-items-center justify-content-center">
                              4
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              5
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              6
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff d-flex align-items-center justify-content-center">
                              7
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              8
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              9
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              10
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              11
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              12
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              13
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff d-flex align-items-center justify-content-center">
                              14
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              15
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              16
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              17
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              18
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              19
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              20
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff d-flex align-items-center justify-content-center">
                              21
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              22
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              23
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              24
                            </div>
                          </td>
                          <td>
                            <div className="num_box holiday d-flex align-items-center justify-content-center">
                              25
                            </div>
                          </td>
                          <td>
                            <div className="num_box holiday endleave d-flex align-items-center justify-content-center">
                              26
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              27
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              28
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              29
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              30
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              31
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="name_wrap">
                              <img src={EmployeeImg} alt="UserImage" />
                              <span>Dhaval Patel</span>
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              1
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              2
                            </div>
                          </td>
                          <td>
                            <div className="num_box paidleave d-flex align-items-center justify-content-center">
                              3
                            </div>
                          </td>
                          <td>
                            <div className="num_box paidleave endleave d-flex align-items-center justify-content-center">
                              4
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              5
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              6
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff d-flex align-items-center justify-content-center">
                              7
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              8
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              9
                            </div>
                          </td>
                          <td>
                            <div className="num_box unpaidleave d-flex align-items-center justify-content-center">
                              10
                            </div>
                          </td>
                          <td>
                            <div className="num_box unpaidleave endleave d-flex align-items-center justify-content-center">
                              11
                            </div>
                          </td>
                          <td>
                            <div className="num_box unpaidleave_half d-flex align-items-center justify-content-center">
                              12
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              13
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff d-flex align-items-center justify-content-center">
                              14
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              15
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              16
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              17
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              18
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              19
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              20
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff d-flex align-items-center justify-content-center">
                              21
                            </div>
                          </td>
                          <td>
                            <div className="num_box weeklyoff endleave d-flex align-items-center justify-content-center">
                              22
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              23
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              24
                            </div>
                          </td>
                          <td>
                            <div className="num_box holiday d-flex align-items-center justify-content-center">
                              25
                            </div>
                          </td>
                          <td>
                            <div className="num_box holiday endleave d-flex align-items-center justify-content-center">
                              26
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              27
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              28
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              29
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              30
                            </div>
                          </td>
                          <td>
                            <div className="num_box d-flex align-items-center justify-content-center">
                              31
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
