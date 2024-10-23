import React, { memo } from "react";
import AdopterDataTable from "../AdopterMangement";

const ShelterWrapper = () => {
  return (
    <div className="w-100 mt-3 ">
      <AdopterDataTable />
    </div>
  );
};

export default memo(ShelterWrapper);
