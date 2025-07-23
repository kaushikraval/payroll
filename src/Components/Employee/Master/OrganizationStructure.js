import React, { useState } from 'react';
import HomeIcon from '../../../Assets/images/home-blue.svg';
import AlkeshVirani from '../../../Assets/images/alkesh-virani.jpg';
import KishaBhadiyadra from '../../../Assets/images/kishan-bhadiyadara.jpg';
import KishaMakani from '../../../Assets/images/kishan-makani.jpg';
import RakeshThummar from '../../../Assets/images/rakesh-thumar.jpg';
import KaushikRaval from '../../../Assets/images/kaushik-raval.jpg';
import DhavalRadadiya from '../../../Assets/images/dhaval-radadiya.jpg';
import PankajSonvane from '../../../Assets/images/pankaj-sonvane.jpg';
import Bhumika from '../../../Assets/images/bhumika.jpg';
import { OrganizationChart } from 'primereact/organizationchart';
import { Link } from 'react-router-dom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ReactInputSwitch from '../../Common/ReactInputSwitch';

export default function OrganizationStructure() {
  const [checked1, setChecked1] = useState(true);
  const [selection, setSelection] = useState([]);

  const data1 = [
    {
      label: 'Founder & CEO',
      type: 'person',
      className: 'p-person',
      expanded: true,
      data: { name: 'Alkesh Virani', avatar: AlkeshVirani },
      children: [
        {
          label: 'Design',
          className: 'button department-design',
          expanded: true,
          children: [
            {
              label: 'Project Manager',
              type: 'person',
              className: 'p-person',
              expanded: true,
              data: { name: 'Kishan Bhadiyadra', avatar: KishaBhadiyadra },
              children: [
                {
                  label: 'UX/UI Design',
                  className: 'button department-uiuxdesign',
                  expanded: true,
                  children: [
                    {
                      label: 'Senior UX/UI Design',
                      type: 'person',
                      className: 'p-person',
                      expanded: true,
                      data: { name: 'Dhaval Radadiya', avatar: DhavalRadadiya },
                    },
                    {
                      label: 'Senior UX/UI Design',
                      type: 'person',
                      className: 'p-person',
                      expanded: true,
                      data: { name: 'Pankaj Sonvane', avatar: PankajSonvane },
                    },
                  ],
                },
                {
                  label: 'Web Design',
                  className: 'button department-web',
                  expanded: true,
                  children: [
                    {
                      label: 'Web Designer',
                      type: 'person',
                      className: 'p-person',
                      expanded: true,
                      data: { name: 'Kaushik Raval', avatar: KaushikRaval },
                    },
                    {
                      label: 'Web Designer',
                      type: 'person',
                      className: 'p-person',
                      expanded: true,
                      data: { name: 'Kevin Dobariya', avatar: '' },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Development',
          className: 'button department-developer',
          expanded: true,
          children: [
            {
              label: 'Chief Technology Officer',
              type: 'person',
              className: 'p-person',
              expanded: true,
              data: { name: 'Rakesh Thummar', avatar: RakeshThummar },
              children: [
                {
                  label: 'IOS Developer',
                  type: 'person',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'Bhumika Thummar', avatar: Bhumika },
                },
                {
                  label: 'Android Developer',
                  type: 'person',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'Digan Vaghasiya', avatar: '' },
                },
              ],
            },
            {
              label: 'General Manager',
              type: 'person',
              className: 'p-person',
              expanded: true,
              data: { name: 'Kishan Makani', avatar: KishaMakani },
              children: [
                {
                  label: 'Flutter Developer',
                  type: 'person',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'krishna Dhaduk', avatar: '' },
                },
                {
                  label: 'React Native Developer',
                  type: 'person',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'Vivek Ghodadara', avatar: '' },
                },
              ],
            },
          ],
        },
        {
          label: 'Sales',
          className: 'button department-sales',
          expanded: true,
          children: [
            {
              label: 'Team Leader',
              type: 'person',
              className: 'p-person',
              expanded: true,
              data: { name: 'Utsav Pandya', avatar: '' },
              children: [
                {
                  label: 'Sr. Business Development',
                  type: 'person',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'Siddhi Patel', avatar: '' },
                },
                {
                  label: 'Business Development',
                  type: 'person',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'Keval Patel', avatar: '' },
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const nodeTemplate = node => {
    if (node.type === 'person') {
      return (
        <div>
          <div className="node-image">
            <img
              alt={node.data.avatar}
              src={node.data.avatar}
              onError={e =>
                (e.target.src =
                  'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
              }
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'cover',
                background: '#fff',
              }}
            />
          </div>
          <div className="node-content">
            <div>{node.data.name}</div>
          </div>
          <div className="node-header">{node.label}</div>
        </div>
      );
    }

    return node.label;
  };
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
            <b>Employees</b>
          </li>
          <li>
            <b>Masters</b>
          </li>
          <li>Org Structure</li>
        </ul>
      </div>
      <div className="organisation_structure_wrap bg_white_box p-3">
        <div className="group_by_department">
          <ReactInputSwitch
            id="goupByDepartment"
            checked={checked1}
            onChange={e => setChecked1(e.value)}
          />
          <label htmlFor="goupByDepartment">Group By Department</label>
        </div>
        <TransformWrapper
          initialScale={1}
          initialPositionX={100}
          initialPositionY={100}
          minScale={0.25}
        >
          {({ zoomIn, zoomOut }) => (
            <React.Fragment>
              <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
              </div>
              <TransformComponent>
                <div
                  className={
                    checked1
                      ? 'organisation_table_wrapper'
                      : 'organisation_table_wrapper ungroup'
                  }
                >
                  <OrganizationChart
                    value={data1}
                    nodeTemplate={nodeTemplate}
                    selection={selection}
                    selectionMode="multiple"
                    onSelectionChange={event => setSelection(event.data)}
                    className="company"
                  ></OrganizationChart>
                </div>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}
