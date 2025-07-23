import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../../../Assets/images/home-blue.svg';
import Certificate from '../../../../Assets/images/certificate.svg';
import CertificateUser from '../../../../Assets/images/certificate-user.svg';
import CheckIcon from '../../../../Assets/images/check-blue.svg';
import _ from 'lodash';
export default function BullkDocumentUploadStepTwo() {
  const [actionType, setActionType] = useState('Pending');
  const [pendingDocument, setPendingDocument] = useState([
    {
      userId: 1,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Dhaval Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 2,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Chintan Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 3,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Nirmal Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 4,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Rajesh Parmar',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 5,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Jaylon Dias',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 6,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Roger Vaccaro',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 7,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Mira Siphron',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 8,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Alfredo Rhiel Madsen',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
  ]);
  const [acceptedDocument, setAcceptedDocument] = useState([
    {
      userId: 9,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Dhruv Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 10,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'ketan Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 11,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'mahir Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 12,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Raj Thummer',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 13,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Priyank Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 14,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Parth Vora',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 15,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Kaushal Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
    {
      userId: 16,
      className: 'nav-link',
      userImage: CertificateUser,
      userName: 'Milan Patel',
      fileName: '1214.jpg',
      userEId: '#1214',
      certificateImage: Certificate,
    },
  ]);
  const [searchEmployee, setSearchEmployee] = useState('');
  const [displayData, setDisplayData] = useState(pendingDocument);
  const [selectedUser, setSelectedUser] = useState(pendingDocument[0]);
  const acceptSingleHandler = () => {
    if (Object.keys(selectedUser).length > 0) {
      const newDisplayData = displayData.filter(
        data => data.userId !== selectedUser.userId,
      );
      setDisplayData(newDisplayData);
      const newPendingData = pendingDocument.filter(
        data => data.userId !== selectedUser.userId,
      );
      setPendingDocument(newPendingData);
      const mergeArray = [...acceptedDocument, selectedUser];
      setAcceptedDocument(mergeArray);
      if (newDisplayData.length === 0) {
        setSelectedUser(mergeArray[0]);
        setActionType('Accepted');
        setDisplayData(mergeArray);
      } else {
        setSelectedUser(newDisplayData[0]);
      }
    }
  };
  const acceptAllHandler = () => {
    if (searchEmployee) {
      const mergeArray = [...acceptedDocument, ...displayData];
      const selectIdArray = displayData.map(data => data.userId);
      let newPendingDocArray = pendingDocument.filter(
        pendingData => !selectIdArray.includes(pendingData.userId),
      );
      setAcceptedDocument(mergeArray);
      setPendingDocument(newPendingDocArray);
      setDisplayData([]);
    } else {
      const mergeArray = [...acceptedDocument, ...pendingDocument];
      setAcceptedDocument(mergeArray);
      setPendingDocument([]);
      setDisplayData(mergeArray);
      setActionType('Accepted');
      setSelectedUser(mergeArray[0]);
    }
  };
  const handleChange = (e, pendingDocument, acceptedDocument) => {
    if (e.target.value) {
      let newSearchEmployeeArray,
        currentArray =
          actionType === 'Pending' ? pendingDocument : acceptedDocument;
      newSearchEmployeeArray =
        currentArray.filter(employee =>
          employee.userName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()),
        ) || [];
      newSearchEmployeeArray.length > 0
        ? setDisplayData(newSearchEmployeeArray)
        : setDisplayData([]);
      newSearchEmployeeArray.length > 0
        ? setSelectedUser(newSearchEmployeeArray[0])
        : setSelectedUser({});
    } else {
      if (actionType === 'Pending') {
        setDisplayData(pendingDocument);
        setSelectedUser(pendingDocument[0]);
      } else {
        setDisplayData(acceptedDocument);
        setSelectedUser(acceptedDocument[0]);
      }
    }
  };
  const searchEmployeeHandler = useCallback(_.debounce(handleChange, 800), []);
  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Employees</b>
          </li>
          <li>
            <b>Administration</b>
          </li>
          <li>
            <b>
              <Link to="/employees/administration/bulk-document-upload">
                Import Document
              </Link>
            </b>
          </li>
          <li>Import Process</li>
        </ul>
      </div>
      <div className="bg_white_box Degree_Certificate_row px-3 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-certi">
            <p>
              Degree Certificate
              <span className="text-light">(employee certificate.zip)</span>
            </p>
          </div>
          <div className="d-certi">
            <p>
              Total Files <span className="text-light"> : 58</span>
            </p>
          </div>
        </div>
      </div>
      <div className="employee_tabs mt-4">
        <div className="row">
          <div className="col-lg-3">
            <div className="bg_white_box employee_tabs_one p-4">
              <div className="tabs_headding mb-4">
                <h6>Employee</h6>
              </div>
              <ul
                className="nav nav-pills mb-3  tabs_btn"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      actionType === 'Pending' ? 'nav-link active' : 'nav-link'
                    }
                    disabled={pendingDocument.length === 0}
                    onClick={() => {
                      setActionType('Pending');
                      setSearchEmployee('');
                      setDisplayData(
                        pendingDocument.length > 0 ? pendingDocument : [],
                      );
                      setSelectedUser(
                        pendingDocument.length > 0 ? pendingDocument[0] : {},
                      );
                    }}
                  >
                    Pending
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={
                      actionType === 'Accepted' ? 'nav-link active' : 'nav-link'
                    }
                    onClick={() => {
                      setActionType('Accepted');
                      setSearchEmployee('');
                      setDisplayData(acceptedDocument);
                      setSelectedUser(acceptedDocument[0]);
                    }}
                  >
                    Accepted
                  </button>
                </li>
              </ul>
              <input
                type="search"
                className="form-control src_input mb-3"
                placeholder="Search  Employee"
                value={searchEmployee}
                onChange={e => {
                  searchEmployeeHandler(e, pendingDocument, acceptedDocument);
                  setSearchEmployee(e.target.value);
                }}
              />
              {actionType === 'Pending' && (
                <div className="pending_status" id="pills-tabContent">
                  <ul>
                    {displayData?.map((user, index) => {
                      return (
                        <li
                          className={
                            selectedUser.userName === user.userName
                              ? 'active'
                              : ''
                          }
                          onClick={() => {
                            setSelectedUser(user);
                          }}
                        >
                          {user.userName}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {actionType === 'Accepted' && (
                <div className="pending_status accept" id="pills-tabContent">
                  <ul>
                    {displayData?.map((user, index) => {
                      return (
                        <li
                          className={
                            selectedUser.userName === user.userName
                              ? 'active'
                              : ''
                          }
                          onClick={() => {
                            setSelectedUser(user);
                          }}
                        >
                          {user.userName}
                          <img src={CheckIcon} alt="check icon" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-9">
            <div className="employee_tabs_one">
              {Object.keys(selectedUser).length > 0 && (
                <>
                  <div className="certificate_user pe-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex  align-items-center">
                        <img src={CertificateUser} alt="CertificateUser" />
                        <p className="mb-0">
                          {selectedUser.userName}{' '}
                          <p className="text-light mb-0">
                            {selectedUser.userEId}
                          </p>
                        </p>
                      </div>
                      <p>
                        File Name :
                        <span className="text-light mb-0">
                          {selectedUser.fileName}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="certificate_user_img bg_white_box d-flex justify-content-center align-items-center">
                    <img
                      src={selectedUser.certificateImage}
                      alt="Certificate"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="btn_group d-flex justify-content-end mt-4">
            <Link
              className="btn-secondary ms-3"
              to="/employees/administration/bulk-document-upload"
            >
              Cancel
            </Link>
            <Link
              className="btn-secondary  ms-3"
              to="/employees/administration/bullk-document-upload-step-one"
            >
              Previous
            </Link>
            {actionType === 'Pending' ? (
              <>
                <button
                  className="btn-primary  ms-3"
                  onClick={acceptSingleHandler}
                >
                  Accept & Next
                </button>
                <button className="btn-primary ms-3" onClick={acceptAllHandler}>
                  Accept All
                </button>
              </>
            ) : (
              <>
                <Link
                  className="btn-primary  ms-3"
                  to="/employees/administration/bulk-document-upload"
                >
                  Save
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
