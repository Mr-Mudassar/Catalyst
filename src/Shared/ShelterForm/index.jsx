import React, { useEffect, useState } from "react";
import "./shelterTable.scss";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { useDispatch } from "react-redux";
import {GET_ALL_SHELTERS} from "../../utils/constants";
import {getAllShelters} from "../../Redux/features/User/userApi";


const 
ShelterTable = () => {
  const [sheltersData, setSheltersData] = useState([]);
  const dispatch = useDispatch();

  // get all shelters api call
  useEffect(() => {
    const data = {
      apiEndpoint: GET_ALL_SHELTERS,
    };
    dispatch(getAllShelters(data)).then((res) => {
      if (res.type === "getAllShelters/fulfilled") {
        setSheltersData(res?.payload?.shelters);
      }
    });
  }, [setSheltersData]);

  const sheltersHeader = [
    "Adopter Name",
    "Email",
    "Phone No.",
    "City",
    "Address",
    "Radeem",
    "Action",
  ];

  return (
    <div className="table-container ">
      <table className="shelter-table">
        <thead>
          <tr>
            {sheltersHeader.map((items) => (
              <th>{items}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sheltersData.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-green fw-bold py-5">
                No data found
              </td>
            </tr>
          ) : (
            sheltersData.map((shelter, index) => (
              <tr key={index}>
                <td>{shelter.shelterName}</td>
                <td>{shelter.email}</td>
                <td>{shelter.state}</td>
                <td>muda</td>
                <td className="text-center">
                  <UncontrolledDropdown className="">
                    <DropdownToggle className="p-0" nav>
                      <div className="bgProperties rounded-circle border-2 border-danger">
                        •••
                      </div>
                    </DropdownToggle>
                    <DropdownMenu className="px-0 dropdown-custom-width">
                      <DropdownItem className="px-2 dropdown-custom-width-inner ">
                        <Link
                          to={`/admin/shelter/adopters/${shelter.id}`}
                          className="mb-0 font-12 text-decoration-none text-green fw-bold"
                        >
                          Show Details
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShelterTable;

