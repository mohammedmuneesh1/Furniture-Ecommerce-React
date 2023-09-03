import React from 'react'
import TextCrousel from './TextCrousel'
import './Body.css'
import IntroImg from './IntroImg'
import SocialMediaCrousel from './SocialMediaCrousel'
import Items from './Items'
import ProductPage from './ProductPage'

export default function Body() {
  return (
    <>
    <div className='body-main'>
        <TextCrousel/>
        <IntroImg/>
        <Items/>
        </div>
    </>
  )
}
