import React, { PropsWithChildren, useEffect } from "react";

export interface AdminContactProps {
  organization: string;
  country: string;
  state: string;
}

export const AdminContact = (props: PropsWithChildren<AdminContactProps>) => {
  return (
    <div>
      <h3 style={{color: "#c19015", fontFamily: "Courier New"}}>Administrative Contact Information</h3>
      <p style={{color: "#DADBDD", fontFamily: "Courier New"}}>Organization: {props.organization}</p>
      <p style={{color: "#DADBDD", fontFamily: "Courier New"}}>Country: {props.country}</p>
      <p style={{color: "#DADBDD", fontFamily: "Courier New"}}>State: {props.state}</p>
    </div>
  );
};
