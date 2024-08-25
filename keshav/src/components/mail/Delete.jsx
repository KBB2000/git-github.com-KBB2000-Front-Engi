import React from "react";

function Delete({ onCancel, onDelete }) {
  return (
    <div className="top-0 left-0 w-screen h-screen flex justify-center items-center fixed bg-[#8484847D] bg-opacity-50 z-50">
      <div className="p-8 flex flex-col items-center bg-gradient-to-b from-[#141517] to-[#232528] rounded-lg">
        <h2 className="text-2xl font-bold ">Are you sure?</h2>
        <p className="text-sm my-12 px-16 ">
          Are you sure you want to delete this mail?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="text-white px-16 py-4 rounded-lg bg-[#25262B] focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="text-white px-16 py-4 rounded-lg bg-gradient-to-r from-[#FA5252] to-[#A91919] focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;