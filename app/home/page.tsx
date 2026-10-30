import BlogSection from '@/components/home/BlogSection'
import ChannelIntegration from '@/components/home/channelIntegration'
import CTASection from '@/components/home/CTASection'
import FAQSection from '@/components/home/FAQSection'
import HeroSection from '@/components/home/hero'
import HostingOptions from '@/components/home/HostingOptions'
import HowItWorks from '@/components/home/HowItWorks'
import OwnerUpdates from '@/components/home/OwnerUpdates'
import Testimonials from '@/components/home/Testimonials'
import WhyPropertyFlow from '@/components/home/whyPropertyFlow'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <WhyPropertyFlow/>
        <ChannelIntegration/>
        <HostingOptions/>
        <HowItWorks/>
        <OwnerUpdates/>
        <Testimonials/>
        <BlogSection/>
        <FAQSection/>
        <CTASection/>
    </div>
  )
}

export default HomePage