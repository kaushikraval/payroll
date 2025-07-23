import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import { useTranslation } from 'react-i18next';
import NewJoiners from './NewJoiners';
import BirthInMonth from './BirthInMonth';
import ConfirmedInMonth from './ConfirmedInMonth';
import ResignedInMonth from './ResignedInMonth';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';
import WorkAnniversary from './WorkAnniversary';
import MarriageAnniversary from './MarriageAnniversary';
import EmployeeCountBy from './EmployeeCountBy';
import GenderSummary from './GenderSummary';
import EmployeeCountSummary from './EmployeeCountSummary';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
);

export default function EmployeeDashboard() {
  const { t } = useTranslation();
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
            <b>{t('title.employees')}</b>
          </li>
          <li>
            <b>{t('title.masters')}</b>
          </li>
          <li>{t('title.dashboard')}</li>
        </ul>
      </div>
      <div className="content_wrapper">
        <div className="row">
          <EmployeeCountSummary />

          <GenderSummary />
        </div>
        <div className="employee_detail_wrapper bg_white_box p-3">
          <div className="row">
            <NewJoiners />

            <BirthInMonth />

            <ConfirmedInMonth />

            <ResignedInMonth />

            <WorkAnniversary />

            <MarriageAnniversary />
          </div>

          <EmployeeCountBy />
        </div>
      </div>
    </div>
  );
}
