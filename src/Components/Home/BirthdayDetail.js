export default function BirthdaySubDetail({ employee, status }) {
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
      <div className="comment_like">
        {status === 'Upcoming' && (
          <h2 className="fw-500">{employee.birthDate}</h2>
        )}
        {status === 'Today' && (
          <>
            <span>
              <img src={employee.likeThumb} alt="like" />
            </span>
            <span className="ms-3">
              <img src={employee.comment} alt="comment" />
            </span>
          </>
        )}
      </div>
    </div>
  );
}
