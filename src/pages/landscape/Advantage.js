import React from 'react';
import SectionHeader from './components/SectionHeader';
import Job1Image from '../../resources/images/svg/Job-1.svg';
import Job2Image from '../../resources/images/svg/Job-2.svg';
import Job3Image from '../../resources/images/svg/Job-3.svg';
import AdvantageItem from './AdvantageItem';

const advantages = [{
  id: 1,
  title: 'Đa dạng việc làm, thêm nhiều lựa chọn hấp dẫn',
  desc: 'Hơn 200+ việc làm IT, giúp các bạn REC có một kho việc làm để các bạn tìm kiếm, sale jobs đến những ứng viên phù hợp.',
  image: Job1Image,
  bgColorClass: 'bg--green',
}, {
  id: 2,
  title: 'Cơ chế hoa hồng hấp dẫn, rõ ràng và minh bạch',
  desc: 'RecLand đem đến cho các bạn REC mức hoa hồng hấp dẫn, giúp cho các bạn REC có được mức thu nhập tương xứng mà không cần đến công ty làm việc',
  image: Job2Image,
  bgColorClass: 'bg--purple',
}, {
  id: 3,
  title: 'Mở rộng network và học hỏi từ cộng đồng',
  desc: 'RecLand cũng thường xuyên tổ chức những buổi chia sẻ, buổi offline nhằm giúp các bạn REC trau dồi, học hỏi và mở rộng được network trong lĩnh vực tuyển dụng.',
  image: Job3Image,
  bgColorClass: 'bg--pink',
}];

const Advantage = () => {
  return (
    <section className="wrapper adv-wrap">
      <SectionHeader
        subTitle="Why"
        title="Tại Sao Lựa Chọn Recland?"
      />
      <div className="adv__list">
        {advantages.map((item) => {
          return (
            <AdvantageItem item={item} />
          );
        })}
      </div>
    </section>
  );
};

export default Advantage;
