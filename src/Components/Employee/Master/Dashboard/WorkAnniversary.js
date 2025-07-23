import { useTranslation } from 'react-i18next';
import UserIcon1 from '../../../../Assets/images/user1.png';
import UserIcon2 from '../../../../Assets/images/user2.png';

export default function WorkAnniversary() {
  const { t } = useTranslation();
  const WorkAnniversaryDetail = [
    {
      id: 1,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserIcon1,
      anniversaryDate: t('event.today'),
    },
    {
      id: 2,
      firstName: t('userDetail.secondName'),
      designation: t('userDetail.designation'),
      userProfile: UserIcon2,
      anniversaryDate: t('event.birthdate'),
    },
  ];
  return (
    <div className="col-lg-4 col-md-6 mb-3">
      <div className="employee_detail_box">
        <div className="employee_detail_header">
          <div className="row align-items-center">
            <div className="col-12">
              <h4>{t('employee_dashboard.work_anniversary_in_month')}</h4>
            </div>
          </div>
        </div>
        <div className="employee_detail_body">
          <ul>
            {WorkAnniversaryDetail.map(employee => {
              return (
                <li>
                  <div className="employee_detail_main">
                    <div className="row align-items-center">
                      <div className="col-7">
                        <div className="d-flex align-items-center">
                          <div className="employee_img">
                            <img src={employee.userProfile} alt="UserIcon1" />
                          </div>
                          <div className="employee_text">
                            <p className="m-0">
                              {employee.firstName}{' '}
                              <span>{t(employee.designation)}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="join_date text-end">
                          <p className="m-0">{employee.anniversaryDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
