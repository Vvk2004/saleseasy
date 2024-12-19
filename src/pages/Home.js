import React from 'react'
import MainContain from '../components/MainContain'
import Companies from '../components/Companies'
import Features from '../components/Features'
import Tools from '../components/Tools'
import UserStories from '../components/UserStories'
import Pricing from '../components/Pricing'
import GetStarted from '../components/GetStarted'

const Home = () => {
    return (
        <>
            <MainContain />
            <Companies />
            <Features />
            <Tools />
            <UserStories />
            <Pricing />
            <GetStarted />
        </>
    )
}

export default Home
