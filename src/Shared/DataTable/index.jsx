import React, { useState, memo } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import { TiArrowUnsorted } from "react-icons/ti";

const MyTableComponent = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "null",
    direction: "asc",
  });

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Sorting logic based on current sortConfig state
  const sortedData = React.useMemo(() => {
    if (sortConfig.key !== null) {
      const sorted = [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
      return sorted;
    }
    return data;
  }, [data, sortConfig]);

  return (
    <div className="table-responsive">
      <Table className="table table-bordered table-hover border-success w-100 p-0 m-0">
        <Thead className="text-yellow bg-green">
          <Tr>
            {columns.map((column, index) => (
              <Th
                className={`p-2 text-yellow bg-green  ${
                  column.align ? `text-${column.align}` : ""
                }`}
                key={index}
                onClick={() => handleSort(column.dataKey)}
              >
                {column.label}

                {column.label !== "Status" &&
                  column.label !== "Action" &&
                  column.label !== "Subscription Status" &&
                  column.label !== "Redemption Status" && (
                    <span className="ml-2 cursorPointer">
                      <TiArrowUnsorted size={16} />
                    </span>
                  )}
              </Th>
            ))}
          </Tr>
        </Thead>

        {sortedData.length === 0 ? (
          <Tbody>
            <Tr>
              {columns.map((column, cellIndex) => (
                <Td
                  className={`p-2 text-green fw-bold text-center`}
                  key={cellIndex}
                >
                  {"---"}
                </Td>
              ))}
            </Tr>
          </Tbody>
        ) : (
          <Tbody>
            {sortedData.map((item, rowIndex) => (
              <Tr key={rowIndex}>
                {columns.map((column, cellIndex) => (
                  <Td
                    className={`p-2 ${
                      column.align ? `text-${column.align}` : ""
                    }`}
                    key={cellIndex}
                  >
                    {item[column.dataKey]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>
    </div>
  );
};

export default memo(MyTableComponent);
