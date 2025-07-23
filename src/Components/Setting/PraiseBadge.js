import { Link } from 'react-router-dom';
import HomeIcon from '../../Assets/images/home-blue.svg';
import PraiseDadge from '../../Assets/images/praise-badge-1.svg';
import PraiseDadgeT from '../../Assets/images/praise-badge-2.svg';
import PraiseDadgeTh from '../../Assets/images/praise-badge-3.svg';
import PraiseDadgeF from '../../Assets/images/praise-badge-4.svg';
import PraiseDadgeFi from '../../Assets/images/praise-badge-5.svg';
import PraiseDadgeS from '../../Assets/images/praise-badge-6.svg';

export default function PraiseBadge() {
  const praiseBadge = [
    {
      icon: PraiseDadge,
      badgeName: 'Top Performer',
      description: 'Top Performer Badge',
    },
    {
      icon: PraiseDadgeT,
      badgeName: 'Leadership',
      description: 'Leadership Badge',
    },
    {
      icon: PraiseDadgeTh,
      badgeName: 'Customer Hero',
      description: 'Customer Hero Badge',
    },
    {
      icon: PraiseDadgeF,
      badgeName: 'Above & Beyond',
      description: 'Above & Beyond Badge',
    },
    {
      icon: PraiseDadgeFi,
      badgeName: 'Rockstar',
      description: 'Rockstar Badge',
    },
    {
      icon: PraiseDadgeS,
      badgeName: 'Good Employee',
      description: 'Good Employee Badge',
    },
  ];
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
            <b>Settings</b>
          </li>
          <li>
            <b>Feedback</b>
          </li>
          <li>Praise Badge</li>
        </ul>
      </div>
      <div className="data_table_one letter_temp_table">
        <div className="table-responsive praise-code-responsive">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>
                  <span>Icon</span>
                </th>
                <th>
                  <span>Badge Name</span>
                </th>
                <th>
                  <span>Description</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {praiseBadge.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        className="PraiseDadge"
                        src={user.icon}
                        alt="PraiseDadge"
                      />
                    </td>
                    <td>{user.badgeName}</td>
                    <td>{user.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
