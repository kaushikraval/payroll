import React from 'react';

export default function TaskSubDetail({ task, status }) {
  return (
    <div className="profile_inner p-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="profile_img_name d-flex align-items-center">
          <div className="profile_img">
            <img src={task.userProfile} alt="userpro" />
          </div>
          <div className="profile-name">
            <h6 className="m-0 fw-400">{task.firstName}</h6>
            <p className="m-0">{task.designation}</p>
          </div>
        </div>
        <div className="task_status">
          {status === 'Uncompleted' &&
            (task.priority === 'High' ? (
              <span className="badge bedge_danger">{task.priority}</span>
            ) : task.priority === 'Medium' ? (
              <span className="badge bedge_warning">{task.priority}</span>
            ) : (
              <span className="badge bedge_success">{task.priority}</span>
            ))}
        </div>
      </div>
      <div className="tast-text mt-2">
        <div className="tast-text-inner">
          <h6 className="m-0">{task.description}</h6>
          {status === 'Uncompleted' && <h5 className="m-0">{task.dueTime}</h5>}
        </div>
      </div>
    </div>
  );
}
