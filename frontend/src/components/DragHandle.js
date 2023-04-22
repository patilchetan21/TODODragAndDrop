import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

function DragHandle() {
  return (
    <div className="text-gray-400 cursor-move mr-3">
      <HiOutlineDotsVertical />
    </div>
  );
}

export default DragHandle;
