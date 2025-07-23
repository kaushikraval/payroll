import UserPro from '../../Assets/images/user9.png';
import Input from '../Common/Input';
import { useTranslation } from 'react-i18next';
import { TabView, TabPanel } from 'primereact/tabview';

export default function Anniversary({
  anniversaryComment,
  showAnniversaryToggle,
}) {
  const { t } = useTranslation();
  const AnniversaryDetail = [
    {
      id: 1,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 2,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 3,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 4,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 5,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 6,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 7,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 8,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 9,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 10,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
    {
      id: 11,
      firstName: t('userDetail.firstName'),
      year: t('event.anniversary_time'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
    },
  ];
  return (
    <div className="col-12">
      <div className="bg_white_box p-2 mb-3">
        <div className="nav_tab_bar">
          <TabView>
            <TabPanel header="Work Anniversaries">
              <div
                className="profile_inner d-flex justify-content-between p-2 align-items-center"
                onClick={() => {
                  showAnniversaryToggle();
                }}
              >
                <div className="profile_img_name d-flex align-items-center">
                  <div className="profile_img">
                    <img src={UserPro} alt="userpro" />
                  </div>
                  <div className="profile-name">
                    <h6 className="m-0 fw-400">{t('userDetail.firstName')}</h6>
                    <p className="m-0">{t('userDetail.designation')}</p>
                  </div>
                </div>
                <div className="year-com">
                  <h5>{t('event.anniversary_time')}</h5>
                </div>
              </div>
              {anniversaryComment && (
                <div className="input-box my-2 ps-3 pe-2 d-flex align-items-center">
                  <Input type="text" placeholder={t('commentPlaceHolder')} />
                  <button className="btn-primary ms-2 py-2">
                    <i className="pi pi-send"></i>
                  </button>
                </div>
              )}
              {AnniversaryDetail.map(employee => {
                return (
                  <div className="profile_inner d-flex justify-content-between p-2 align-items-center">
                    <div className="profile_img_name d-flex align-items-center">
                      <div className="profile_img">
                        <img src={employee.userProfile} alt="userpro" />
                      </div>
                      <div className="profile-name">
                        <h6 className="m-0 fw-400">{employee.firstName}</h6>
                        <p className="m-0">{employee.designation}</p>
                      </div>
                    </div>
                    <div className="year-com">
                      <h5> {employee.year}</h5>
                    </div>
                  </div>
                );
              })}
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
}
