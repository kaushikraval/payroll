import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import PlusIcon from '../../../../../Assets/images/plus.svg';
import EditIcon from '../../../../../Assets/images/edit.svg';
import { useTranslation } from 'react-i18next';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import ReactSelectSingle from '../../../../Common/ReactSelectSingle';
import ReactCelender from '../../../../Common/ReactCelender';

export default function WorkPostType() {
  const { t } = useTranslation();
  const [addBusinessUnit, setAddBusinessUnit] = useState(false);
  const [businessUnit, setBusinessUnit] = useState([]);
  const businessUnitOption = [
    { label: 'Codezee Solutions', value: 'CodezeeSolutions' },
    { label: 'Oozee Technologies', value: 'OozeeTechnologies' },
    { label: 'Microloop', value: 'Microloop' },
    { label: 'Metaloop', value: 'Metaloop' },
  ];
  const dialogFuncMap = {
    addBusinessUnit: setAddBusinessUnit,
  };
  const businessUnitHandleChange = e => {
    setBusinessUnit(e.value);
  };
  const onClick = name => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = name => {
    dialogFuncMap[`${name}`](false);
  };
  const renderFooter = name => {
    return (
      <div className="d-flex justify-content-end">
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="btn-secondary me-3"
        />
        <Button
          label="Save"
          className="btn-primary"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="work_post_wrapper">
      <div className="bg_white_box p-3">
        <TabView scrollable>
          <TabPanel header={t('workposttype.organization_details')}>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <h6 className="m-0 text-dark">{t('title.legal_entity')}</h6>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('title.legal_entity')}</span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.legal_entity_value')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('title.business_unit')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.business_units')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.business_unit_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">{t('title.location')}</h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('title.location')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('myProfile.address_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header={t('workposttype.post_details')}>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('myProfile.departmentTitle')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('myProfile.departmentTitle')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('myProfile.department')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>

                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>{t('myProfile.department')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.sub_department')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.sub_department')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.sub_department_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img src={EditIcon} alt="Edit Button" />
                          </td>
                        </tr>
                        <tr>
                          <td>{t('workposttype.sub_department_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('pastwork_employment.designation')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('pastwork_employment.designation')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('userDetail.designation')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>{t('userDetail.designation')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.grade')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.grade')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.grade_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img src={EditIcon} alt="Edit Button" />
                          </td>
                        </tr>
                        <tr>
                          <td>{t('workposttype.grade_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.employee_type')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.employee_type')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.full_time')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.status')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.status')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.confirmed')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel header={t('workposttype.scheme_details')}>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.attendance_tracking_scheme')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>
                              {t('workposttype.attendance_tracking_scheme')}{' '}
                            </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.scheme_value_one')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>{t('workposttype.scheme_value_two')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.leave_tracking_scheme')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>
                              {t('workposttype.leave_tracking_scheme')}{' '}
                            </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.scheme_value_one')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>{t('workposttype.scheme_value_two')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.weekoff_type')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.weekoff_type')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.weekoff_type_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.shift_type')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.shift_type')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.shift_type_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.holiday_type')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.holiday_type')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.holiday_type_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.attendance_capture_scheme')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>
                              {t('workposttype.attendance_capture_scheme')}{' '}
                            </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('title.default')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper mb-4">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.ot_scheme')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.ot_scheme')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.ot_scheme_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card_header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 text-dark">
                        {t('workposttype.coff_scheme')}
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-end">
                      <button
                        className="btn-border small"
                        onClick={() => onClick('addBusinessUnit')}
                      >
                        <img src={PlusIcon} alt="PlusIcon" className="me-1" />
                        {t('title.add')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_body">
                <div className="data_table_one">
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <span>{t('workposttype.coff_scheme')} </span>
                          </th>
                          <th>
                            <span>{t('workposttype.effective_from')} </span>
                          </th>
                          <th>
                            <span>Action By</span>
                          </th>
                          <th>
                            <span>Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{t('workposttype.coff_scheme_value')}</td>
                          <td>{t('myProfile.dateOfJoin')}</td>
                          <td>
                            Chintan Raval{' '}
                            <span className="wrap_text">
                              On 20 Nov 2022 • 04:23 PM
                            </span>
                          </td>
                          <td>
                            <img
                              src={EditIcon}
                              alt="Edit Button"
                              onClick={() => onClick('addBusinessUnit')}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
      <Dialog
        header="Add Business Unit"
        visible={addBusinessUnit}
        draggable={false}
        resizable={false}
        className="small_popup"
        footer={renderFooter('addBusinessUnit')}
        onHide={() => onHide('addBusinessUnit')}
      >
        <div className="form_group">
          <label>{t('title.business_unit')}</label>
          <ReactSelectSingle
            value={businessUnit}
            options={businessUnitOption}
            filter
            onChange={e => {
              businessUnitHandleChange(e);
            }}
            placeholder={t('emp_step_form.business_unit_placeholder')}
          />
        </div>
        <div className="form_group">
          <label>Effective From</label>
          <ReactCelender value="date" placeholder="Select Date" />
        </div>
        <div className="form_group">
          <label>Effective To</label>
          <ReactCelender value="date" placeholder="Select Date" />
        </div>
      </Dialog>
    </div>
  );
}
