import React, { useEffect, useState } from 'react'
import { CtCompanies, CtImg, ImgLogo } from './SupportCompanies.styled';
import data from '../../assets/data/companies.json';

function SupportCompanies() {

  const [list, setList] = useState(data.companies[0]);

useEffect(() => {
  setTimeout(() => {
    if(list.id === data.companies.length - 1){
      setList(data.companies[0]);
    } else {
      setList(data.companies[list.id + 1])
    }
  }, 5000);
}, [list])

console.log(list.company)
console.log(data.companies)


  return (
    <CtCompanies>
      {list.company.map((company, index) => (
        <CtImg>
          <ImgLogo key={index} src={require(`/src/assets/companies/${company.image}`)} alt="logo"/>
        </CtImg>
      ))}     
    </CtCompanies>
  )
}

export default SupportCompanies