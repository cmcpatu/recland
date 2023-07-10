import React from 'react';
// import PropTypes from 'prop-types';

const SearchArea = () => {
  return (
    <section className="wrapper search-wrap">
      <div className="search-left">
        <input type="text" placeholder="Nhập vị trí hoặc từ khóa..." />
      </div>
      <div className="search-right">
        <input type="text" placeholder="Chọn địa điểm" />
        <div className="btn btn-contained">Tìm Kiếm</div>
      </div>
    </section>
  );
};

SearchArea.propTypes = {

};

export default SearchArea;
