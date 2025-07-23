import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useTranslation } from 'react-i18next';
import DepartmentBarChart from './Chart/DepartmentBarChart';
import LocationBarChart from './Chart/LocationBarChart';
import DesignationBarChart from './Chart/DesignationBarChart';
import TimeTypeBarChart from './Chart/TimeTypeBarChart';
import GradeBarChart from './Chart/GradeBarChart';
import AgeBarChart from './Chart/AgeBarChart';
export const departmentOptions = {
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
        max: 50,
        stepSize: 10,
      },
    },
  },
};
const labels = [
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
];
export const departmentData = {
  labels: [
    'Marketing',
    'Sales',
    'Purchase',
    'Web Designing',
    'Mobile Dev ',
    'Web Dev',
    'UI/UX',
  ],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#606EEE',
      barPercentage: 1,
      barThickness: 20,
      maxBarThickness: 28,
      minBarLength: 2,
      borderRadius: 4,
    },
  ],
};

export const gradeData = {
  labels: ['G1', 'G2', 'G3', 'G4', 'G5 '],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#FFBC34',
      barPercentage: 1,
      barThickness: 20,
      maxBarThickness: 28,
      minBarLength: 2,
      borderRadius: 4,
    },
  ],
};
export const statusData = {
  labels: ['Confirmed', 'Probation', 'Contract', 'Trainee'],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#37BE75',
      barPercentage: 1,
      barThickness: 20,
      maxBarThickness: 28,
      minBarLength: 2,
      borderRadius: 4,
    },
  ],
};

export const dasignationData = {
  labels: [
    'Manager',
    'Accountant',
    'Executive',
    'Technical Sup',
    'Operator',
    'Operator',
  ],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#3BA4E8',
      barPercentage: 1,
      barThickness: 20,
      maxBarThickness: 28,
      minBarLength: 2,
      borderRadius: 4,
    },
  ],
};

export const branchLocationData = {
  labels: ['Station', 'Mota Varaccha', 'Adajan', 'Navsari', 'Unknow'],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#377EBE',
      barPercentage: 1,
      barThickness: 20,
      maxBarThickness: 28,
      minBarLength: 2,
      borderRadius: 4,
    },
  ],
};
export const ageDemographicsonData = {
  labels: ['<20', '20 -29', '30-39', '40-49', '50-59', '60+'],
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: '#D8D8D8',
      barPercentage: 1,
      barThickness: 20,
      maxBarThickness: 28,
      minBarLength: 2,
      borderRadius: 4,
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
export default function EmployeeCountBy() {
  const { t } = useTranslation();

  return (
    <div className="employee_count_wrap">
      <div className="d-md-flex tab_verticle">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <h6>{t('employee_dashboard.employees_count_by')}</h6>
          <button
            className="nav-link"
            id="v-pills-BranchLocation-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-BranchLocation"
            type="button"
            role="tab"
            aria-controls="v-pills-BranchLocation"
            aria-selected="false"
          >
            {t('title.location')}
          </button>
          <button
            className="nav-link active"
            id="v-pills-Department-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Department"
            type="button"
            role="tab"
            aria-controls="v-pills-Department"
            aria-selected="true"
          >
            {t('myProfile.departmentTitle')}
          </button>
          <button
            className="nav-link"
            id="v-pills-Designation-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Designation"
            type="button"
            role="tab"
            aria-controls="v-pills-Designation"
            aria-selected="false"
          >
            {t('userDetail.designation')}
          </button>
          <button
            className="nav-link"
            id="v-pills-Status-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Status"
            type="button"
            role="tab"
            aria-controls="v-pills-Status"
            aria-selected="false"
          >
            {t('employee_dashboard.employment_type')}
          </button>
          <button
            className="nav-link"
            id="v-pills-Grade-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Grade"
            type="button"
            role="tab"
            aria-controls="v-pills-Grade"
            aria-selected="false"
          >
            {t('workposttype.grade')}
          </button>
          <button
            className="nav-link"
            id="v-pills-Demographics-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-Demographics"
            type="button"
            role="tab"
            aria-controls="v-pills-Demographics"
            aria-selected="false"
          >
            {t('myProfile.age')}
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-Department"
            role="tabpanel"
            aria-labelledby="v-pills-Department-tab"
          >
            <h6>{t('myProfile.departmentTitle')}</h6>
            <DepartmentBarChart />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Grade"
            role="tabpanel"
            aria-labelledby="v-pills-Grade-tab"
          >
            <h6> {t('workposttype.grade')}</h6>
            <GradeBarChart />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Status"
            role="tabpanel"
            aria-labelledby="v-pills-Status-tab"
          >
            <h6>{t('employee_dashboard.employment_type')}</h6>
            <TimeTypeBarChart />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Designation"
            role="tabpanel"
            aria-labelledby="v-pills-Designation-tab"
          >
            <h6> {t('pastwork_employment.designation')}</h6>
            <DesignationBarChart />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-BranchLocation"
            role="tabpanel"
            aria-labelledby="v-pills-BranchLocation-tab"
          >
            <h6>{t('title.location')}</h6>
            <LocationBarChart />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-Demographics"
            role="tabpanel"
            aria-labelledby="v-pills-Demographics-tab"
          >
            <h6>{t('employee_dashboard.employees_age_demographics')}</h6>
            <AgeBarChart />
          </div>
        </div>
      </div>
    </div>
  );
}
