import { useTranslation } from 'react-i18next';
import UserIcon1 from '../../../../Assets/images/user1.png';
import UserIcon2 from '../../../../Assets/images/user2.png';
import UserIcon3 from '../../../../Assets/images/user3.png';
import PlusIcon from '../../../../Assets/images/plus.svg';
import { Link } from 'react-router-dom';
export default function NewJoiners() {
  const { t } = useTranslation();
  const JoinerDetail = [
    {
      id: 1,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserIcon1,
      joinDate: t('event.today'),
    },
    {
      id: 2,
      firstName: t('userDetail.secondName'),
      designation: t('userDetail.designation'),
      userProfile: UserIcon2,
      joinDate: t('event.birthdate'),
    },
    {
      id: 3,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserIcon3,
      joinDate: t('event.birthdate'),
    },
    {
      id: 4,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserIcon1,
      joinDate: t('event.today'),
    },
    {
      id: 5,
      firstName: t('userDetail.secondName'),
      designation: t('userDetail.designation'),
      userProfile: UserIcon2,
      joinDate: t('event.birthdate'),
    },
  ];
  return (
    <div className="col-lg-4 col-md-6 mb-3">
      <div className="employee_detail_box">
        <div className="employee_detail_header">
          <div className="row align-items-center">
            <div className="col-9">
              <h4>{t('employee_dashboard.new_join_in_month')}</h4>
            </div>
            <div className="col-3">
              <ul>
                <li>
                  <Link
                    to="/employees/masters/create-employee-step-one"
                    className="btn-border small"
                  >
                    <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                    {t('title.add')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="employee_detail_body">
          <ul>
            {JoinerDetail.map((employee, index) => {
              return (
                <li key={index}>
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
                              <span>{employee.designation}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="join_date text-end">
                          <p className="m-0">{employee.joinDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
            {/* <li>
              <div className="employee_detail_main">
                <div className="row align-items-center">
                  <div className="col-7">
                    <div className="d-flex align-items-center">
                      <div className="employee_img">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="employee_text">
                        <p className="m-0">
                          {t('userDetail.firstName')}{' '}
                          <span>{t('userDetail.designation')}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="join_date text-end">
                      <p className="m-0">{t('event.today')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="employee_detail_main">
                <div className="row align-items-center">
                  <div className="col-7">
                    <div className="d-flex align-items-center">
                      <div className="employee_img">
                        <img src={UserIcon2} alt="UserIcon2" />
                      </div>
                      <div className="employee_text">
                        <p className="m-0">
                          {t('userDetail.secondName')}{' '}
                          <span>{t('userDetail.designation')}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="join_date text-end">
                      <p className="m-0">{t('event.birthdate')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="employee_detail_main">
                <div className="row align-items-center">
                  <div className="col-7">
                    <div className="d-flex align-items-center">
                      <div className="employee_img">
                        <img src={UserIcon3} alt="UserIcon3" />
                      </div>
                      <div className="employee_text">
                        <p className="m-0">
                          {t('userDetail.firstName')}{' '}
                          <span>{t('userDetail.designation')}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="join_date text-end">
                      <p className="m-0">{t('event.birthdate')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="employee_detail_main">
                <div className="row align-items-center">
                  <div className="col-7">
                    <div className="d-flex align-items-center">
                      <div className="employee_img">
                        <img src={UserIcon1} alt="UserIcon1" />
                      </div>
                      <div className="employee_text">
                        <p className="m-0">
                          {t('userDetail.firstName')}{' '}
                          <span>{t('userDetail.designation')}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="join_date text-end">
                      <p className="m-0">{t('event.today')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li> 
              <div className="employee_detail_main">
                <div className="row align-items-center">
                  <div className="col-7">
                    <div className="d-flex align-items-center">
                      <div className="employee_img">
                        <img src={UserIcon2} alt="UserIcon2" />
                      </div>
                      <div className="employee_text">
                        <p className="m-0">
                          {t('userDetail.secondName')}{' '}
                          <span>{t('userDetail.designation')}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="join_date text-end">
                      <p className="m-0">{t('event.birthdate')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
