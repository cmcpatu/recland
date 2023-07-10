import React from 'react';
import SectionHeader from './components/SectionHeader';
import WP1Image from '../../resources/images/svg/Add.svg';
import WP2Image from '../../resources/images/svg/Search.svg';
import WP3Image from '../../resources/images/svg/Shield.svg';
import WorkProcessItem from './WorkProcessItem';

const workProcesses = [{
  count: 1,
  image: WP1Image,
  title: 'Tạo một tài khoản',
  desc: 'Trở thành member trên RecLand',
}, {
  count: 2,
  image: WP2Image,
  title: 'Tìm kiếm công việc',
  desc: 'Tìm kiếm công việc phù hợp để mời ứng viên',
}, {
  count: 3,
  image: WP3Image,
  title: 'Giới thiệu ứng viên',
  desc: 'Giới thiệu ứng viên vào các vị trí đang tuyển, process ứng viên và nhận kết quả',
}];

const WorkProcess = () => {
  return (
    <section className="wrapper wp-wrap">
      <SectionHeader
        title="Hợp tác cùng RecLand"
        subTitle="Quy trình làm việc"
      />
      <div className="wp__list">
        {workProcesses.map((item) => {
          return <WorkProcessItem item={item} />;
        })}
      </div>
    </section>
  );
};

export default WorkProcess;
