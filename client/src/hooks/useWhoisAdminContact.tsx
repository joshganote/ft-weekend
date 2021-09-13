import React, {useEffect, useState} from 'react';
import axios from 'axios';

/**
 * 
 * Making a hook to take the off the administrativeContact object.
 */
export const useWhoisAdminContact = () => {
    const [whoisAdminContact, setWhoisAdminContact] = useState([] as any);

    useEffect(() => {
        axios
          .get(
            `http://localhost:5000/getApiRequest`
          )
          .then((res) => {
            setWhoisAdminContact(res.data.WhoisRecord.administrativeContact);
          });
      }, []);

      return whoisAdminContact;
}