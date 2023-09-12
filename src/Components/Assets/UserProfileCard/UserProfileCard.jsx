import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../UserProfileCard/image.jpg'
const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Scarlett Johansson</div>
        <div className="profile-description">
        I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person, able to communicate well with people at all levels. I am good at working using my own initiative and I am flexible in my approach to work duties. I have a good sense of humour and a pleasant approach.

        </div>
        <div className="profile-button"><a href="mailto:kosaladayarathne@gmail.com">Contact Me</a></div>
      </div>
    </div>
  )
}

export default UserProfileCard
