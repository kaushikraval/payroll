import NoData from '../../../../Assets/images/no-data.svg';
import { useTranslation } from 'react-i18next';

export default function ConfirmedInMonth() {
  const { t } = useTranslation();
  return (
    <div className="col-lg-4 col-md-6 mb-3">
      <div className="employee_detail_box">
        <div className="employee_detail_header">
          <div className="row align-items-center">
            <div className="col-12">
              <h4>{t('employee_dashboard.confirmation_due_in_month')}</h4>
            </div>
          </div>
        </div>
        <div className="employee_detail_body">
          <div className="no_data_wrap">
            <img src={NoData} alt="NoData" />
            <p>{t('employee_dashboard.no_employees_cofirmation_is_pending')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
