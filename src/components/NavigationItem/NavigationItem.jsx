import "./NavigationItem.css"
import React, { useEffect, useRef, useState } from 'react'

function NavigationItem({title ,icon ,notificationCounter, isItChecked}) {

    const [isTheCheckBoxChecked, setIsTheCheckBoxChecked] = useState(isItChecked)
    
    const navigationItemContainerRef = useRef(null)
    const titleContainerRef = useRef(null)
    const notificationCounterContainerRef = useRef(null)
    const iconContainerRef = useRef(null)
    
    useEffect(() => {
        setIsTheCheckBoxChecked(isItChecked)
    } ,[isItChecked])

    useEffect(() => {
        if (!isTheCheckBoxChecked) {
            titleContainerRef.current.classList.remove("title-changes");
            iconContainerRef.current.classList.remove("icon-changes");
            navigationItemContainerRef.current.classList.remove("item-container-changes"); 
        } else {
            titleContainerRef.current.classList.add("title-changes");
            iconContainerRef.current.classList.add("icon-changes");
            navigationItemContainerRef.current.classList.add("item-container-changes");            
        }
    },[isTheCheckBoxChecked])

  return (
    <div className="navigation-item-container" ref={navigationItemContainerRef}>
        <div className="icon-container" ref={iconContainerRef}>{icon}</div>
        <div className="title-container" ref={titleContainerRef}>{title}</div>
        {Boolean(notificationCounter) && <div className="notification-counter-container" ref={notificationCounterContainerRef}>{notificationCounter}</div>}
    </div>
  )
}

export default NavigationItem