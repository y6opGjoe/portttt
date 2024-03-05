import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>Front-End Development (user-facing elements like buttons and menus)
Back-End Development (server-side logic and database management)
Full-Stack Development (expertise in both front-end and back-end)
E-commerce Development (building online stores)
Content Management System (CMS) Development (creating user-friendly platforms for managing website content)
Responsive Web Design (ensuring websites adapt seamlessly to different devices)</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>User Interface (UI) Design (visual elements and layout)
User Experience (UX) Design (ensuring usability and user satisfaction)
Graphic Design (creating logos, icons, and other visual elements)
Information Architecture (organizing website content for optimal navigation)</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>Mobile Web Development (creating websites optimized for mobile browsing)
Responsive Web Design (ensuring websites adapt to various screen sizes)
Native App Development (building mobile applications specifically for iOS or Android)
Progressive Web Apps (PWAs) (combining web and app features for an app-like experience on the web)</p>
        </div>
      </div>
    </div>
  )
}

export default Services