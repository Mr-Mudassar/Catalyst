import "./styles.scss";
import React, { memo } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {
  PAGE_RANGE,
  RecordsPerPageOptions,
} from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import MyDropdown from "../MyDropdown";
import { setRecordsPerPage } from "../../Redux/features/User/userSlice";

const Pagination = ({ size, handlePageChange, page }) => {
  const { recordsPerPage } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-end align-items-center">
      <MyDropdown
        name="recordsPerPage"
        Options={RecordsPerPageOptions}
        value={recordsPerPage}
        onChangeHandle={(e) => dispatch(setRecordsPerPage(e.target.value))}
        placeholder="Records Per page"
        className="shadow-0 border rounded-3 mt-2 "
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight className="text-gray fs-4" />}
        onPageChange={handlePageChange}
        pageRangeDisplayed={PAGE_RANGE}
        pageCount={size / recordsPerPage}
        previousLabel={<FaChevronLeft className="text-gray fs-4" />}
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        activeLinkClassName={"activePageLink"}
        forcePage={page - 1}
      />
    </div>
  );
};

export default memo(Pagination);
