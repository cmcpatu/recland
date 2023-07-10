import React from 'react';
import SectionHeader from './components/SectionHeader';
import Partner1Image from '../../resources/images/partner-1.png';
import Partner2Image from '../../resources/images/partner-2.png';
import Partner3Image from '../../resources/images/partner-3.png';
import Partner4Image from '../../resources/images/partner-4.png';
import Partner5Image from '../../resources/images/partner-5.png';

const Partner = () => {
  return (
    <section className="wrapper partner-wrap">
      <SectionHeader
        title="Đối Tác"
      />
      <div className="partner__list">
        <img src={Partner1Image} alt="partner 1" />
        <img src={Partner2Image} alt="partner 2" />
        <img src={Partner3Image} alt="partner 3" />
        <img src={Partner4Image} alt="partner 4" />
        <img src={Partner5Image} alt="partner 5" />
      </div>
    </section>
  );
};

export default Partner;
