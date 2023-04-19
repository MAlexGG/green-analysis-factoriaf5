import React, { useEffect, useState } from 'react';
import { CtOrganizations, CtImg, ImgLogo } from './SupportOrganizations.styled';
import data from '../../assets/data/organizations.json';


function SupportOrganizations() {

    const [list, setList] = useState(data.organizations[0]);

    useEffect(() => {
    setTimeout(() => {
        if(list.id === data.organizations.length - 1){
        setList(data.organizations[0]);
        } else {
        setList(data.organizations[list.id + 1])
        }
    }, 3000);
    }, [list]);

  return (
    <CtOrganizations>
        {list.organization.map((organization, index) => (
        <CtImg>
          <ImgLogo key={index} src={require(`/src/assets/organizations/${organization.image}`)} alt="logo"/>
        </CtImg>
      ))}     
    </CtOrganizations>
  )
}

export default SupportOrganizations