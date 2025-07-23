import React from 'react';
import { Button } from 'primereact/button';
import UserImagesFive from '../../Assets/images/user5.png';
import UserImagesFour from '../../Assets/images/user4.png';
import UserImagesThree from '../../Assets/images/user3.png';
import TaskSubList from './TaskSubList';
import { useTranslation } from 'react-i18next';

export default function TaskList(props) {
  const { t } = useTranslation();
  const groupMember = (
    <>
      <Button
        onClick={() => props.onClick('leaveHistory')}
        placeholder="Right"
        tooltip={t('userDetail.secondName')}
        tooltipOptions={{
          position: 'bottom',
        }}
        className="tooltip_button tooltip_button_with_userImg"
      >
        <img src={UserImagesFive} alt="Reporting" />
      </Button>
      <Button
        onClick={() => props.onClick('leaveHistory')}
        placeholder="Right"
        tooltip={t('userDetail.secondName')}
        tooltipOptions={{
          position: 'bottom',
        }}
        className="tooltip_button tooltip_button_with_userImg"
      >
        <img src={UserImagesFour} alt="Reporting" />
      </Button>
      <Button
        onClick={() => props.onClick('leaveHistory')}
        placeholder="Right"
        tooltip={t('userDetail.secondName')}
        tooltipOptions={{
          position: 'bottom',
        }}
        className="tooltip_button tooltip_button_with_userImg"
      >
        <img src={UserImagesThree} alt="Reporting" />
      </Button>
    </>
  );
  const taskDetail = [
    {
      id: 1,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.high_label'),
      status: t('task.open_label'),
    },
    {
      id: 2,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.high_label'),
      status: t('task.due_label'),
    },
    {
      id: 3,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.high_label'),
      status: t('task.completed_label'),
    },
    {
      id: 4,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.medium_label'),
      status: t('task.open_label'),
    },
    {
      id: 5,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.medium_label'),
      status: t('task.due_label'),
    },
    {
      id: 6,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.medium_label'),
      status: t('task.completed_label'),
    },
    {
      id: 7,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.medium_label'),
      status: t('task.open_label'),
    },
    {
      id: 8,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.low_label'),
      status: t('task.completed_label'),
    },
    {
      id: 9,
      taskName: t('task.task_name_value'),
      assignee: groupMember,
      project: t('projectTitle'),
      dueDate: t('myProfile.dateOfJoin'),
      priority: t('task.low_label'),
      status: t('task.open_label'),
    },
  ];

  return (
    <>
      <div className="task_table_wrap">
        <div className="table-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>{t('task.task_name')}</span>
                </th>
                <th>
                  <span>{t('task.assignee')}</span>
                </th>
                <th>
                  <span>{t('task.project_label')}</span>
                </th>
                <th>
                  <span>{t('task.due_date')}</span>
                </th>
                <th>
                  <span>{t('task.priority')}</span>
                </th>
                <th>
                  <span>{t('workposttype.status')}</span>
                </th>
                <th>
                  <span>{t('title.action')}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {taskDetail?.map(task => (
                <TaskSubList task={task} onClick={props.onClick} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
