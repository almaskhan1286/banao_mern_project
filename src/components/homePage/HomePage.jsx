import React from 'react'
import HeroSection from './HeroSection'
import PostPage from './PostPage'
import { userPost } from "../constant";





const HomePage = () => {
  return (
    <div className='p-0'>
      <HeroSection 
      title="Computer Engineering"
      paragraph="142,765 Computer Engineers follow this"
      imageSrc="../src/assets/heroImg.png"
      />
      <PostPage/>

     
    </div>
  )
}

export default HomePage