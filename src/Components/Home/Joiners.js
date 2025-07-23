import Input from '../Common/Input';
import { useTranslation } from 'react-i18next';
import UserPro from '../../Assets/images/user9.png';
import { TabView, TabPanel } from 'primereact/tabview';

export default function Joiners({ showNewJoinerToggle, newJoinerComment }) {
  const { t } = useTranslation();
  const JoinerDetail = [
    {
      id: 1,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 2,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 3,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 4,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 5,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 6,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 7,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 8,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 9,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 10,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 11,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
    {
      id: 12,
      firstName: t('userDetail.firstName'),
      designation: t('userDetail.designation'),
      userProfile: UserPro,
      joinAs: t('event.join_designation'),
    },
  ];
  return (
    <div className="col-12">
      <div className="bg_white_box p-2 mb-3">
        <div className="nav_tab_bar">
          <TabView>
            <TabPanel header="New Joiners">
              <div
                className="profile_inner d-flex justify-content-between p-2 align-items-center"
                onClick={() => {
                  showNewJoinerToggle();
                }}
              >
                <div className="profile_img_name d-flex align-items-center">
                  <div className="profile_img">
                    <img src={UserPro} alt="userpro" />
                  </div>
                  <div className="profile-name">
                    <h6 className="m-0 fw-400">{t('userDetail.firstName')}</h6>
                  </div>
                </div>
                <div className="new-join">
                  <h5>{t('event.join_designation')}</h5>
                </div>
              </div>
              {newJoinerComment && (
                <div className="input-box my-2 ps-3 pe-2 d-flex align-items-center">
                  <Input type="text" placeholder={t('commentPlaceHolder')} />
                  <button className="btn-primary ms-2 py-2">
                    <i className="pi pi-send"></i>
                  </button>
                </div>
              )}
              {JoinerDetail.map(employee => {
                return (
                  <div className="profile_inner d-flex justify-content-between p-2 align-items-center">
                    <div className="profile_img_name d-flex align-items-center">
                      <div className="profile_img">
                        <img src={employee.userProfile} alt="userpro" />
                      </div>
                      <div className="profile-name">
                        <h6 className="m-0 fw-400">{employee.firstName}</h6>
                      </div>
                    </div>
                    <div className="new-join">
                      <h5>{employee.joinAs}</h5>
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
