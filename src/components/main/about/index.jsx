import React from 'react'
import SectionHeader from '../common/section-header'
import Intro from './intro'
const About = () => {
  return (
    <section id="about" class="about">
        <SectionHeader title="About Me" isResumeDownload={true}/>
        < Intro/>
    </section>
  )
}
export default About