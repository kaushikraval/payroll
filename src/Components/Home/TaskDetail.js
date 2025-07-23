import React from 'react';
import { useTranslation } from 'react-i18next';
import UserPro from '../../Assets/images/user9.png';
import TaskSubDetail from './TaskSubDetail';
import { TabView, TabPanel } from 'primereact/tabview';

export default function TaskDetail() {
  const { t } = useTranslation();
  const taskDetail = [
    {
      id: 1,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'High',
    },
    {
      id: 2,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'High',
    },
    {
      id: 3,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'High',
    },
    {
      id: 4,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'High',
    },
    {
      id: 5,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'Medium',
    },
    {
      id: 6,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'Medium',
    },
    {
      id: 7,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'Medium',
    },
    {
      id: 8,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'Low',
    },
    {
      id: 9,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'Low',
    },
    {
      id: 10,
      firstName: t('userDetail.firstName'),
      userProfile: UserPro,
      designation: t('userDetail.designation'),
      description: t('userDetail.description'),
      dueTime: t('userDetail.dueTime'),
      priority: 'Low',
    },
  ];

  return (
    <div className="bg_white_box p-2 mb-3">
      <div className="nav_tab_bar">
        <TabView>
          <TabPanel header="Today Task">
            {taskDetail.map(task => {
              return <TaskSubDetail task={task} status="Uncompleted" />;
            })}
          </TabPanel>
          <TabPanel header="Completed">
            {taskDetail.map(task => (
              <TaskSubDetail task={task} status="Completed" />
            ))}
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
