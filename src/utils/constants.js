//pagination prams
export const PAGE_RANGE = 2;

//api endpoints
export const LOGIN_URL = "/auth/login";
export const SIGNUP_URL = "/auth/signup";
export const GET_USER_URL = "/user/getUser";
export const VERIFY_OTP_URL = "/auth/verifyOtp";
export const RESEND_OTP_URL = "/auth/resendOtp";
export const EDIT_PROFILE_URL = "/user/updateUser";
export const DELETE_ACCOUNT_URL = "/user/deleteAccount";
export const RESET_PASSWORD_URL = "/auth/resetPassword";
export const CHANGE_PASSWORD_URL = "/user/changePassword";
export const FORGOT_PASSWORD_URL = "/auth/forgotPassword";
export const BUYER_GET_WISHLIST = "/wishlist/getWishlist";
export const SELLER_GET_WISHLIST = "/wishlist/getWishlist";
export const ADMIN_GET_ALL_USERS_URL = "/user/getAllUsers";
export const BUYER_ADD_NDC_URL = "wishlist/addBuyerWishlist";
export const SELLER_ADD_NDC_URL = "wishlist/addSellerWishlist";
export const ADMIN_CHANGE_USER_STATUS_URL = "/user/changeUserStatus";
export const ADD_PHARMACY_DETAIL_URL = "/pharmacy/addPharmacyDetails";
export const Delete_Adopter = `/AddEditSubscriptionModalAdopter/`;
export const Single_Adopter_User_List = `/adopter/getSingleAdopter/`;
// admin api endpoint
export const DASHBOARD_CARDS = "/dashboard/dashboardCard";
export const ADMIN_GET_LATEST_SHELTERS = "/admin/latestShelters";
export const ADMIN_DASHBOARD_GRAPH = "/adopter/getAllAdopterGraph";
export const GET_ALL_SHELTERS = "/shelter/getAllShelter";
export const GET_ADOPTERS_OF_SHELTER = "/admin/getAllAdopterByAdmin/";
export const SHELTER_LIMIT_PUT = "/shelter/shelterLimit";
export const SHELTER_LIMIT_GET = "/shelter/getAllShelterLimit";

//options
export const NumberOfCats = [
  ...(() => {
    const options = [];

    for (let i = 1; i <= 291; i += 10) {
      const end = i + 9 <= 300 ? i + 9 : 300;
      options.push({
        label: `${i} - ${end} cats`,
        value: [i, end],
      });
    }
    options.push({ label: "300+ Cats", value: "300+ Cats" });
    options.push({ label: "Don't know yet", value: "Don't know yet" });

    return options;
  })(),
];

export const US_States = [
  ...(() => {
    const options = [];

    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ];

    states.forEach((state) => {
      options.push({
        label: state,
        value: state,
      });
    });

    return options;
  })(),
];

export const shippingMethodOptions = [
  { label: "Shipping method", value: "parsal" },
  { label: "Shipping method 1", value: "physically" },
  { label: "Shipping method 2", value: "online" },
];

export const yearsData = [
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
  { label: "2022", value: "2022" },
  { label: "2021", value: "2021" },
  { label: "2020", value: "2020" },
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
];
export const productSubscription = [
  { label: "MULTI CAT", value: "42662009471125" },
  { label: "HEALTHY CAT", value: "42661956550805" },
  { label: "UNSCENTED", value: "42662019858581" },
  { label: "WOOD PELLETS", value: "45119920930965" },
];

export const FrequencyOptions = [
  // {
  //   label: "Daily",
  //   value: "day",
  // },
  {
    label: "Weekly",
    value: "week",
  },
  {
    label: "Monthly",
    value: "month",
  },
];

export const QuantityOptions = [
  {
    label: "1 Pack",
    value: 1,
  },
  {
    label: "2 Packs",
    value: 2,
  },
  {
    label: "3 Packs",
    value: 3,
  },
  {
    label: "4 Packs",
    value: 4,
  },
  {
    label: "5 Packs",
    value: 5,
  },
];

//options
export const weeksRange = [
  ...(() => {
    const options = [];
    options.push({
      label: `1 week`,
      value: 1,
    });

    for (let i = 2; i <= 12; i += 1) {
      options.push({
        label: `${i} weeks`,
        value: i,
      });
    }
    return options;
  })(),
];

export const monthsRange = [
  ...(() => {
    const options = [];

    options.push({
      label: `1 month`,
      value: 1,
    });

    for (let i = 2; i <= 12; i += 1) {
      options.push({
        label: `${i} months`,
        value: i,
      });
    }
    return options;
  })(),
];

export const RecordsPerPageOptions = [
  {
    label: "10 records",
    value: "10",
  },
  {
    label: "20 records",
    value: "20",
  },
  {
    label: "30 records",
    value: "30",
  },
  {
    label: "40 records",
    value: "40",
  },
  {
    label: "50 records",
    value: "50",
  },
];

// **********  Options for filtering Graph  **********
export const FilterDuration = [
  {
    label: "Today",
    value: "daily",
  },
  // {
  //   label: "Current Week",
  //   value: "weekly",
  // },
  {
    label: "Current Month",
    value: "monthly",
  },
  {
    label: "Current Year",
    value: "yearly",
  },
];

// +++++++++++  Column of Recent 5 Shelters Data table   ++++++++++++

export const columnsForRecent5Shelters = [
  { label: "Shelter Name", dataKey: "shelterName", align: "left" },
  { label: "Email", dataKey: "email", align: "left" },
  { label: "State", dataKey: "state", align: "center" },
  { label: "Invites sent", dataKey: "totalAdopters", align: "center" },
  { label: "Redemptions", dataKey: "redeem", align: "center" },
  { label: "Ratio", dataKey: "ratio", align: "center" },
  { label: "Status", dataKey: "status", align: "center" },
  { label: "Action", dataKey: "action", align: "center" },
];

// +++++++++++  Column of Recent 5 orders Data table   ++++++++++++

export const columnsForRecent5Orders = [
  { label: "Shelter Order Name", dataKey: "shelterName", align: "left" },
  { label: "Shelter Email", dataKey: "email", align: "left" },
  { label: "State", dataKey: "state", align: "center" },
  { label: "Product", dataKey: "product", align: "center" },
  { label: "Quantity", dataKey: "quantity", align: "center" },
  { label: "Frequency", dataKey: "frequency", align: "center" },
  { label: "Order Date", dataKey: "lastSentDate", align: "center" },
  { label: "Subscription Status", dataKey: "status", align: "center" },
];

// +++++++++++  Column of Data table of Get All Shelters main table   ++++++++++++
export const GetAllSheltersColumns = [
  { label: "Shelter Name", dataKey: "shelterName", align: "left" },
  { label: "Email", dataKey: "email", align: "left" },
  { label: "State", dataKey: "state", align: "center" },
  // { label: "Ratio", dataKey: "ratio", align: "center" },
  { label: "Invites Sent", dataKey: "totalAdopters", align: "center" },
  { label: "Redeemed", dataKey: "redeem", align: "center" },
  { label: "Repeat", dataKey: "repeatPercentage", align: "center" },
  { label: "Status", dataKey: "status", align: "center" },
  // { label: "Product", dataKey: "productId", align: "center" },
  // { label: "Quant", dataKey: "quantity", align: "center" },
  // { label: "Freq", dataKey: "frequency", align: "center" },
  {
    label: "Subscription Status",
    dataKey: "subscriptionStatus",
    align: "center",
  },
  { label: "Action", dataKey: "action", align: "center" },
];

