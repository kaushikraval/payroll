import { Doughnut } from 'react-chartjs-2';
import EmployeeGroup from '../../../../Assets/images/group-user.svg';
import { useTranslation } from 'react-i18next';
import GenderPieChart from './Chart/GenderPieChart';
export const dataGender = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: '',
      data: [53, 53, 53],
      backgroundColor: ['#3BA4E8', '#141A2A', '#E6EDEF'],
      borderColor: ['#ffffff', '#ffffff', '#ffffff'],
      borderWidth: 1,
      offset: 10,
      cutout: 150,
      radius: '50%',
    },
  ],
};
export const optionsGender = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
      position: 'right',
      align: 'right',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 0,
      },
      title: {
        display: false,
        padding: 0,
        text: 'Chart.js Line Chart',
      },
    },
  },
};
export default function GenderSummary() {
  const { t } = useTranslation();
  return (
    <div className="col-md-4">
      <div className="gender_wrap bg_white_box p-3 mb-3">
        <div className="gender_chart_main">
          <div className="gender_chart">
            {/* <Doughnut id="gender" data={dataGender} options={optionsGender} /> */}
            <GenderPieChart />
          </div>
        </div>
        <div className="total_employee_wrap d-flex align-items-center">
          <div className="employee_icon">
            <img src={EmployeeGroup} alt="EmployeeGroup" />
          </div>
          <div className="employee_text">
            <h6>159</h6>
            <p>{t('employee_dashboard.employee')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
