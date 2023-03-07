import React from "react";
import { useSelector } from "react-redux";
import { selectCustomers } from "../redux/slice/clientSlice";

const Customers = () => {
  const customers = useSelector(selectCustomers);
  console.log("customers", customers);
  return <div>Customers</div>;
};

export default Customers;
