import { Badge } from "reactstrap";
import { format } from "date-fns";

const setUserInitialValues = (initalValues, user) => {
  return {
    ...initalValues,
    lastName: user?.lastName,
    firstName: user?.firstName,
  };
};

const parseDate = (date) => {
  return format(new Date(date), "yyyy-MM-dd");
};

export const ProductNameForTable = (data) => {
  if (data === "42662009471125") {
    return "MULTI CAT";
  } else if (data === "42661956550805") {
    return "HEALTHY CAT";
  } else if (data === "42662019858581") {
    return "UNSCENTED";
  } else if (data === "45119920930965") {
    return "WOOD PELLETS";
  } else {
    return "Unknown Product";
  }
};

export const ShelterStatusForTable = (data) => {
  if (data === "BLOCKED") {
    return (
      <Badge className="bg-dark" pill>
        Blocked
      </Badge>
    );
  } else if (data === "ACCEPTED") {
    return (
      <Badge className="bg-success" pill>
        Active
      </Badge>
    );
  } else if (data === "WAITING") {
    return (
      <Badge className="bg-info" pill>
        Waiting on <br /> Shelter
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-dark" pill>
        No status
      </Badge>
    );
  }
};

export const SubscriptionStatusForTable = (data) => {
  if (data === "active") {
    return (
      <Badge className="bg-success" pill>
        {data}
      </Badge>
    );
  } else if (data === ".") {
    return (
      <Badge className="bg-info" pill>
        {data}
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-danger" pill>
        {data}
      </Badge>
    );
  }
}; 

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  parseDate,
  setUserInitialValues,
};
