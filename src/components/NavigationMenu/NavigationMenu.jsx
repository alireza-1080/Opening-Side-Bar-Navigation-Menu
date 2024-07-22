import NavigationItem from "../NavigationItem/NavigationItem"
import "./NavigationMenu.css"
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoCarSportOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";
import { FaChevronCircleRight } from "react-icons/fa";

function NavigationMenu() {
    const [navigationData] = useState([
        { title: "Home", icon: <AiOutlineHome />, notificationCounter: 0 },
        { title: "User", icon: <LuUser2 />, notificationCounter: 0 },
        { title: "Articles", icon: <RiArticleLine />, notificationCounter: 0 },
        { title: "Emails", icon: <MdOutlineEmail />, notificationCounter: 6 },
        { title: "Calender", icon: <SlCalender />, notificationCounter: 0 },
        { title: "Cars", icon: <IoCarSportOutline />, notificationCounter: 0 },
        { title: "Products", icon: <BsBoxSeam />, notificationCounter: 0 },
        { title: "Events", icon: <MdOutlineEventNote />, notificationCounter: 3 },
    ])

    const [isTheCheckBoxChecked, setIsTheCheckBoxChecked] = useState(true)

    const NavigationMenuContainerRef = useRef(null);
    const openingElementIconRef = useRef(null);

    const checkBoxHandler = () => {
        setIsTheCheckBoxChecked(!isTheCheckBoxChecked)
    }


    useEffect(() => {
        if (isTheCheckBoxChecked) {
            openingElementIconRef.current.classList.remove("opening-icon-changes")
            NavigationMenuContainerRef.current.classList.add("navigation-menu-container-changes")
        } else {
            openingElementIconRef.current.classList.add("opening-icon-changes")
            NavigationMenuContainerRef.current.classList.remove("navigation-menu-container-changes")
        }
    },[isTheCheckBoxChecked])

    return (
        <div className="navigation-menu-container" ref={NavigationMenuContainerRef}>
            <input type="checkbox" name="" id="check" value={isTheCheckBoxChecked} onClick={() => checkBoxHandler()} />
            <div className="opening-element" ref={openingElementIconRef}>
                <label htmlFor="check">
                    <div className="open-icon">
                        <FaChevronCircleRight />
                    </div>
                </label>
            </div>


            {
                navigationData.map((item, index) => {
                    return <NavigationItem key={index} {...item} isItChecked={isTheCheckBoxChecked}></NavigationItem>
                })
            }
        </div>
    )
}

export default NavigationMenu