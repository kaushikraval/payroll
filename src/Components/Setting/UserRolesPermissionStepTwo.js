import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import { Checkbox } from 'primereact/checkbox';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function UserRolesPermissionStepTwo() {
  const [checked, setChecked] = useState(false);
  const [taskAndCheckList, setTaskAndCheckList] = useState({
    selectAllTask: false,
    employeeDashboard: {
      selectAllInEmployeeDashboard: false,
      create: false,
      edit: false,
      view: false,
      delete: false,
    },
    createEmployee: {
      selectAllInCreateEmployee: false,
      create: false,
      edit: false,
      view: false,
      delete: false,
    },
    employeeList: {
      selectAllInEmployeeList: false,
      create: false,
      edit: false,
      view: false,
      delete: false,
    },
    organisationStructure: {
      selectAllInOrganisationStructure: false,
      create: false,
      edit: false,
      view: false,
      delete: false,
    },
  });

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', function () {
      var SVGInjector = window.SVGInjector.SVGInjector;
      SVGInjector(document.querySelectorAll('[data-inject-svg]'));
    });
  }, []);

  return (
    <div className="inner_wrapper">
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <img src={HomeIcon} data-inject-svg alt="HomeIcon" />
            </Link>
          </li>
          <li>
            <b>Settings</b>
          </li>
          <li>
            <Link to="/setting/user-roles-permission">
              <b>User & Roles - Permission</b>
            </Link>
          </li>
          <li>Add User Access</li>
        </ul>
      </div>
      <div className="step_wrapper bg_white_box">
        <ul>
          <li className="completed">
            <div className="icon"></div>
            <span>Basic Info</span>
          </li>
          <li className="current">
            <div className="icon"></div>
            <span>Module Permission</span>
          </li>
        </ul>
      </div>
      <div className="UserRole_accordion_inner setting_employee ">
        <div className="UserRole_accordion">
          <Accordion activeIndex={0}>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">
                      Tasks & Checklist
                    </span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      value={taskAndCheckList.selectAllTask}
                      onChange={e => {
                        if (taskAndCheckList.selectAllTask === false) {
                          setTaskAndCheckList({
                            selectAllTask: true,
                            employeeDashboard: {
                              selectAllInEmployeeDashboard: true,
                              create: true,
                              edit: true,
                              view: true,
                              delete: true,
                            },
                            createEmployee: {
                              selectAllInCreateEmployee: true,
                              create: true,
                              edit: true,
                              view: true,
                              delete: true,
                            },
                            employeeList: {
                              selectAllInEmployeeList: true,
                              create: true,
                              edit: true,
                              view: true,
                              delete: true,
                            },
                            organisationStructure: {
                              selectAllInOrganisationStructure: true,
                              create: true,
                              edit: true,
                              view: true,
                              delete: true,
                            },
                          });
                        } else {
                          setTaskAndCheckList({
                            selectAllTask: false,
                            employeeDashboard: {
                              selectAllInEmployeeDashboard: false,
                              create: false,
                              edit: false,
                              view: false,
                              delete: false,
                            },
                            createEmployee: {
                              selectAllInCreateEmployee: false,
                              create: false,
                              edit: false,
                              view: false,
                              delete: false,
                            },
                            employeeList: {
                              selectAllInEmployeeList: false,
                              create: false,
                              edit: false,
                              view: false,
                              delete: false,
                            },
                            organisationStructure: {
                              selectAllInOrganisationStructure: false,
                              create: false,
                              edit: false,
                              view: false,
                              delete: false,
                            },
                          });
                        }
                      }}
                      checked={taskAndCheckList.selectAllTask}
                    />
                    <label htmlFor="ctc">Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeDashboard.create}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeDashboard: {
                              ...prevState.employeeDashboard,
                              create:
                                !taskAndCheckList.employeeDashboard.create,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.employeeDashboard.create === true
                        }
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeDashboard.edit}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeDashboard: {
                              ...prevState.employeeDashboard,
                              edit: !taskAndCheckList.employeeDashboard.edit,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.employeeDashboard.edit === true
                        }
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeDashboard.view}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeDashboard: {
                              ...prevState.employeeDashboard,
                              view: !taskAndCheckList.employeeDashboard.view,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.employeeDashboard.view === true
                        }
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeDashboard.delete}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeDashboard: {
                              ...prevState.employeeDashboard,
                              delete:
                                !taskAndCheckList.employeeDashboard.delete,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.employeeDashboard.delete === true
                        }
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <button
                      type="button"
                      className="btn-primary me-3"
                      disabled={
                        taskAndCheckList.employeeDashboard.delete === true &&
                        taskAndCheckList.employeeDashboard.create === true &&
                        taskAndCheckList.employeeDashboard.edit === true &&
                        taskAndCheckList.employeeDashboard.view === true
                      }
                      onClick={() => {
                        setTaskAndCheckList(prevState => ({
                          ...prevState,
                          employeeDashboard: {
                            selectAllInEmployeeDashboard: true,
                            delete: true,
                            edit: true,
                            view: true,
                            create: true,
                          },
                        }));
                      }}
                    >
                      Select All
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      disabled={
                        taskAndCheckList.employeeDashboard.delete === false &&
                        taskAndCheckList.employeeDashboard.create === false &&
                        taskAndCheckList.employeeDashboard.edit === false &&
                        taskAndCheckList.employeeDashboard.view === false
                      }
                      onClick={() => {
                        setTaskAndCheckList({
                          ...taskAndCheckList,
                          employeeDashboard: {
                            selectAllInEmployeeDashboard: false,
                            delete: false,
                            edit: false,
                            view: false,
                            create: false,
                          },
                        });
                      }}
                    >
                      Deselect All
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.createEmployee.create}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            createEmployee: {
                              ...prevState.createEmployee,
                              create: !taskAndCheckList.createEmployee.create,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.createEmployee.create === true
                        }
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.createEmployee.edit}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            createEmployee: {
                              ...prevState.createEmployee,
                              edit: !taskAndCheckList.createEmployee.edit,
                            },
                          }));
                        }}
                        checked={taskAndCheckList.createEmployee.edit === true}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.createEmployee.view}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            createEmployee: {
                              ...prevState.createEmployee,
                              view: !taskAndCheckList.createEmployee.view,
                            },
                          }));
                        }}
                        checked={taskAndCheckList.createEmployee.view === true}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.createEmployee.delete}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            createEmployee: {
                              ...prevState.createEmployee,
                              delete: !taskAndCheckList.createEmployee.delete,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.createEmployee.delete === true
                        }
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <button
                      type="button"
                      className="btn-primary me-3"
                      disabled={
                        taskAndCheckList.createEmployee.delete === true &&
                        taskAndCheckList.createEmployee.create === true &&
                        taskAndCheckList.createEmployee.edit === true &&
                        taskAndCheckList.createEmployee.view === true
                      }
                      onClick={() => {
                        setTaskAndCheckList(prevState => ({
                          ...prevState,
                          createEmployee: {
                            selectAllInCreateEmployee: true,
                            delete: true,
                            edit: true,
                            view: true,
                            create: true,
                          },
                        }));
                      }}
                    >
                      Select All
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      disabled={
                        taskAndCheckList.createEmployee.delete === false &&
                        taskAndCheckList.createEmployee.create === false &&
                        taskAndCheckList.createEmployee.edit === false &&
                        taskAndCheckList.createEmployee.view === false
                      }
                      onClick={() => {
                        setTaskAndCheckList({
                          ...taskAndCheckList,
                          createEmployee: {
                            selectAllInCreateEmployee: false,
                            delete: false,
                            edit: false,
                            view: false,
                            create: false,
                          },
                        });
                      }}
                    >
                      Deselect All
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeList.create}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeList: {
                              ...prevState.employeeList,
                              create: !taskAndCheckList.employeeList.create,
                            },
                          }));
                        }}
                        checked={taskAndCheckList.employeeList.create === true}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeList.edit}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeList: {
                              ...prevState.employeeList,
                              edit: !taskAndCheckList.employeeList.edit,
                            },
                          }));
                        }}
                        checked={taskAndCheckList.employeeList.edit === true}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeList.view}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeList: {
                              ...prevState.employeeList,
                              view: !taskAndCheckList.employeeList.view,
                            },
                          }));
                        }}
                        checked={taskAndCheckList.employeeList.view === true}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.employeeList.delete}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            employeeList: {
                              ...prevState.employeeList,
                              delete: !taskAndCheckList.employeeList.delete,
                            },
                          }));
                        }}
                        checked={taskAndCheckList.employeeList.delete === true}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <button
                      type="button"
                      className="btn-primary me-3"
                      disabled={
                        taskAndCheckList.employeeList.delete === true &&
                        taskAndCheckList.employeeList.create === true &&
                        taskAndCheckList.employeeList.edit === true &&
                        taskAndCheckList.employeeList.view === true
                      }
                      onClick={() => {
                        setTaskAndCheckList(prevState => ({
                          ...prevState,
                          employeeList: {
                            selectAllInEmployeeList: true,
                            delete: true,
                            edit: true,
                            view: true,
                            create: true,
                          },
                        }));
                      }}
                    >
                      Select All
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      disabled={
                        taskAndCheckList.employeeList.delete === false &&
                        taskAndCheckList.employeeList.create === false &&
                        taskAndCheckList.employeeList.edit === false &&
                        taskAndCheckList.employeeList.view === false
                      }
                      onClick={() => {
                        setTaskAndCheckList({
                          ...taskAndCheckList,
                          employeeList: {
                            selectAllInEmployeeList: false,
                            delete: false,
                            edit: false,
                            view: false,
                            create: false,
                          },
                        });
                      }}
                    >
                      Deselect All
                    </button>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.organisationStructure.create}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            organisationStructure: {
                              ...prevState.organisationStructure,
                              create:
                                !taskAndCheckList.organisationStructure.create,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.organisationStructure.create === true
                        }
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.organisationStructure.edit}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            organisationStructure: {
                              ...prevState.organisationStructure,
                              edit: !taskAndCheckList.organisationStructure
                                .edit,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.organisationStructure.edit === true
                        }
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.organisationStructure.view}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            organisationStructure: {
                              ...prevState.organisationStructure,
                              view: !taskAndCheckList.organisationStructure
                                .view,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.organisationStructure.view === true
                        }
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        value={taskAndCheckList.organisationStructure.delete}
                        onChange={() => {
                          setTaskAndCheckList(prevState => ({
                            ...prevState,
                            organisationStructure: {
                              ...prevState.organisationStructure,
                              delete:
                                !taskAndCheckList.organisationStructure.delete,
                            },
                          }));
                        }}
                        checked={
                          taskAndCheckList.organisationStructure.delete === true
                        }
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <button
                      type="button"
                      className="btn-primary me-3"
                      disabled={
                        taskAndCheckList.organisationStructure.delete ===
                          true &&
                        taskAndCheckList.organisationStructure.create ===
                          true &&
                        taskAndCheckList.organisationStructure.edit === true &&
                        taskAndCheckList.organisationStructure.view === true
                      }
                      onClick={() => {
                        setTaskAndCheckList(prevState => ({
                          ...prevState,
                          organisationStructure: {
                            selectAllInEmployeeList: true,
                            delete: true,
                            edit: true,
                            view: true,
                            create: true,
                          },
                        }));
                      }}
                    >
                      Select All
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      disabled={
                        taskAndCheckList.organisationStructure.delete ===
                          false &&
                        taskAndCheckList.organisationStructure.create ===
                          false &&
                        taskAndCheckList.organisationStructure.edit === false &&
                        taskAndCheckList.organisationStructure.view === false
                      }
                      onClick={() => {
                        setTaskAndCheckList({
                          ...taskAndCheckList,
                          organisationStructure: {
                            selectAllInEmployeeList: false,
                            delete: false,
                            edit: false,
                            view: false,
                            create: false,
                          },
                        });
                      }}
                    >
                      Deselect All
                    </button>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="flex align-items-center user-role-text">
                    <span className="vertical-align-middle">Employees</span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">Master</span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">Organization</span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">
                      Scheme Configuration
                    </span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">
                      Time & Attendance
                    </span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">Leave</span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">Statutory</span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <div className="d-flex align-items-center justify-content-between user-rol-flex">
                  <div className="d-flex align-items-center user-role-text">
                    <span className="vertical-align-middle">payroll</span>
                  </div>
                  <div className="epics_checkbox">
                    <Checkbox
                      inputId="ctc"
                      className="me-2"
                      onChange={e => setChecked(e.checked)}
                      checked={checked}
                    />
                    <label>Select All</label>
                  </div>
                </div>
              }
            >
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee Dashboard</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Create Employee</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Employee List</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
              <div className="m-0">
                <div className="UserRole_accordion_bottom flex-row">
                  <p className="m-0">Organization Structure</p>
                  <div className="UserRole_accordion_checkbox">
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Create</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Edit</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>View</label>
                    </div>
                    <div className="epics_checkbox">
                      <Checkbox
                        inputId="ctc"
                        className="me-2"
                        onChange={e => setChecked(e.checked)}
                        checked={checked}
                      />
                      <label>Delete</label>
                    </div>
                  </div>
                  <div className="UserRole_accordion_select_all">
                    <Link to="">Select All</Link>
                    <Link to="">Deselect All</Link>
                  </div>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
      <div className="btn_group d-flex justify-content-end mt-4">
        <Link className="btn-secondary" to="/setting/user-roles-permission">
          Cancel
        </Link>
        <Link
          className="btn-secondary  mx-3"
          to="/setting/User-roles-permission-step-one"
        >
          Previous
        </Link>

        <Link className="btn-primary" to="/setting/user-roles-permission">
          Save
        </Link>
      </div>
    </div>
  );
}
