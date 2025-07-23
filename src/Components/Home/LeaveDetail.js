import React from 'react';

export default function LeaveDetail({ employee, status }) {
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
      {status === 'UpcomingLeave' && (
        <div className="aprove-leave">
          <h5 className="fw-500">{employee.leavePeriod}</h5>
          <h6>{employee.leaveDay}</h6>
        </div>
      )}
      {status === 'TodayLeave' && (
        <div className="leave-day">
          <h5>{employee.today}</h5>
        </div>
      )}
    </div>
  );
}
