import React from 'react';

import './BusinessList.css';
import { Business } from '../Business/Business';

export const BusinessList = (props) => {
  return (
    <div className='BusinessList'>
      {props.businesses.map((business, index) => {
        return <Business business={business} key={business.name} />;
      })}
    </div>
  );
};
