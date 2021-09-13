import React, {useEffect, useState} from 'react';
import axios from 'axios';

/**
 * 
 * Making a hook to take the off the WhoisRecord object.
 */
export const useWhoisRecord = () => {
    const [whoisRecord, setWhoisRecord] = useState([] as any);

    useEffect(() => {
        axios
          .get(
            `http://localhost:5000/getApiRequest`
          )
          .then((res) => {
            setWhoisRecord(res.data.WhoisRecord);
          });
      }, []);

      return whoisRecord;
}