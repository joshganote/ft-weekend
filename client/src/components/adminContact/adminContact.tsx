import React, { PropsWithChildren } from 'react';

export interface AdminContactProps {
    name: string;
    street1: string;
    city: string;
    state: string;
    country: string;
  }

export const AdminContact = (props: PropsWithChildren<AdminContactProps>) => {

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.street1}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.country}</p>
        </div>
    )
}