import React from 'react';
import Edit from '../../Assets/images/edit.svg';
import DeleteBtn from '../../Assets/images/DeleteBtn.svg';

export default function TaskSubList({ task, onClick }) {
  return (
    <tr>
      <td>{task.taskName}</td>
      <td>
        <span className="group_member">{task.assignee}</span>
      </td>
      <td>{task.project}</td>
      <td>{task.dueDate}</td>
      <td>
        {task.priority === 'High' ? (
          <span className="badge bedge_danger">{task.priority}</span>
        ) : task.priority === 'Medium' ? (
          <span className="badge bedge_warning">{task.priority}</span>
        ) : (
          <span className="badge bedge_success">{task.priority}</span>
        )}
        {/* <span className="badge bedge_success">{task.priority}</span> */}
      </td>
      <td>
        {task.status === 'Open' ? (
          <span className="badge bedge_primary">{task.status}</span>
        ) : task.status === 'Due' ? (
          <span className="badge bedge_warning">{task.status}</span>
        ) : (
          <span className="badge bedge_success">{task.status}</span>
        )}
        {/* <span className="badge bedge_primary">{task.status}</span> */}
      </td>
      <td>
        <ul className="edit_wrap d-flex">
          <li onClick={() => onClick('addExitEmp')}>
            <img src={Edit} alt="edit" />
          </li>
          <li onClick={() => onClick('educationDetails')}>
            <img src={DeleteBtn} alt="DeleteBtn" />
          </li>
        </ul>
      </td>
    </tr>
  );
}
