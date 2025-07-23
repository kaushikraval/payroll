import React from 'react';
import { Link } from 'react-router-dom';
import ReactSelectMultiple from 'Components/Common/ReactSelectMultiple';
import FilterIcon from '../../Assets/images/filter.svg';
import { useTranslation } from 'react-i18next';
import { PickList } from 'primereact/picklist';

export default function AssignEmployeeDetail({
  departmentHandleChange,
  departmentOptions,
  department,
  designation,
  designationOptions,
  designationHandleChange,
  location,
  locationOptions,
  locationHandleChange,
  source,
  target,
  itemTemplate,
  onChange,
}) {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="top_filter_wrap">
        <div className="row">
          <div className="col-md-12">
            <ul className="filter_wrapper">
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={department}
                    options={departmentOptions}
                    onChange={e => {
                      departmentHandleChange(e);
                    }}
                    placeholder={t('myProfile.departmentTitle')}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={designation}
                    options={designationOptions}
                    onChange={e => {
                      designationHandleChange(e);
                    }}
                    placeholder={t('pastwork_employment.designation')}
                  />
                </div>
              </li>
              <li>
                <div className="form_group">
                  <ReactSelectMultiple
                    value={location}
                    options={locationOptions}
                    onChange={e => {
                      locationHandleChange(e);
                    }}
                    placeholder={t('title.location')}
                  />
                </div>
              </li>
              <li>
                <button type="button" className="btn-primary">
                  <img src={FilterIcon} className="me-2" alt="FilterImage" />
                  {t('leave.filter')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="assign_employee_wrapper">
        <PickList
          source={source}
          target={target}
          itemTemplate={itemTemplate}
          sourceHeader="Unassigned Employee"
          targetHeader="Assigned  Employee"
          onChange={onChange}
          filterBy="name"
          sourceFilterPlaceholder="Search by name"
          targetFilterPlaceholder="Search by name"
        />
      </div>
    </div>
  );
}
