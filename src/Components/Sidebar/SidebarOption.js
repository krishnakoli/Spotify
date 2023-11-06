import React from 'react'
import './SidebarOption.css';
function SidebarOption({Icon,title}) {
  return (
    <div className='sidebaroption'>
     {Icon && <Icon className='sidebaroption_icon'/>}  
      <p className='sidebaroptiontitle'>{title}</p>
    </div>
  )
}

export default SidebarOption;
