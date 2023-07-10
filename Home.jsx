import React from 'react'
import { Link } from 'react-router-dom'
import ImgMediaCard from '../Cards/Cards'
import Carousel from '../Carousel/Carousel'

export default function Home() {
  return (
    <div>

      <Carousel />
      <ImgMediaCard />
    </div>
  )
}
