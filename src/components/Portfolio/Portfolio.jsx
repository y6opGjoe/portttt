import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Recipe Clipper & Organizer</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://thumbs.dreamstime.com/z/software-developer-team-laptop-computer-design-new-web-page-179270648.jpg" alt="" />
            <p>Personalized Workout Tracker</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://media.istockphoto.com/id/1347652268/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%89%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88.jpg?s=612x612&w=is&k=20&c=2oTNuLWGPvLcyYzcafkXAKzGWcWL4YFdWiwju0UoMFE=" alt="" />
            <p>Collaborative Budget Planner</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://n-o-v-a.com/wp-content/uploads/2018/12/teamwork-1500x1001-1-980x654.jpg" alt="" />
            <p>Travel Journal & Inspiration Board</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://thumbs.dreamstime.com/z/team-members-working-together-to-achieve-common-goal-doing-puzzle-vector-illustration-flat-style-putting-pieces-184117764.jpg?w=768" alt="" />
            <p>Online Learning Platform with Quizzes</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://nmgprod.s3.amazonaws.com/media/files/d6/f4/d6f42bfce6088993b2da64ac79879e83/cover_image_1591715803.jpg.760x400_q85_crop_upscale.jpg" alt="" />
            <p>Creative Writing Prompt Generator</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio