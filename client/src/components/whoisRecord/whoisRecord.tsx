import React, { PropsWithChildren, useEffect } from "react";
import moment from 'moment';

export interface whoisRecordProps {
  contactEmail: string;
  domainName: string;
  createdDate: Date;
  expiresDate: string;
}

export const WhoisRecord = (props: PropsWithChildren<whoisRecordProps>) => {
  return (
    <div>
      <h3 style={{color: "#c19015", fontFamily: "Courier New"}}>Whois Records</h3>
      <p style={{color: "#DADBDD", fontFamily: "Courier New"}}>Email: {props.contactEmail}</p>
      <p style={{color: "#DADBDD", fontFamily: "Courier New"}}>Domain Name: {props.domainName}</p>
      <p style={{color: "#DADBDD", fontFamily: "Courier New"}}>Created: {moment(props.createdDate).format('DD MMMM, YYYY')}</p>
      <p style={{color: "#DADBDD", fontFamily: "Courier New"}}>Expires: {moment(props.expiresDate).format('DD MMMM, YYYY')}</p>
    </div>
  );
};
