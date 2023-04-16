import React, { useEffect, useState } from 'react'
import { CtCompanies } from './SupportCompanies.styled';
import data from '../../assets/data/companies.json';

function SupportCompanies() {

  const [company, setCompany] = useState();

  /* useEffect(() => {
    setTimeout(() => {
        if(company.id === data.companies.length - 1){
            setCompany(data.companies[0]);
        } else {
            setCompany(data.companies[company.id + 1]);
        };
    }, 5000);
}, [company]); */



  return (
    <CtCompanies>

    </CtCompanies>
  )
}

export default SupportCompanies