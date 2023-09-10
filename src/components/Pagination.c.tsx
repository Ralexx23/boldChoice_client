import React from 'react';

function Pagination({ img, onClick }: any) {
  return (
    <div className="item-pagination" onClick={onClick}>
      <img src={img} />
    </div>
  );
}

export default Pagination;