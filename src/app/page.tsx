

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Plan } from '@/components/plan'
import { Screenshot } from '@/components/screenshot'
// import ImageCarousel from '@/components/slidingsocial'
import { Testimonials } from '@/components/testimonials'
import TimedModal from '@/components/TimedModal'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'



import dynamic from 'next/dynamic';
import FAQ from '@/components/faq'
import Testimonial2 from '@/components/Testimonial2'

const ImageCarousel = dynamic(() => import('@/components/slidingsocial'), { ssr: false });



export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
        // banner={
        //   // <Link
        //   //   href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
        //   //   className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
        //   // >
        //   //   {/* RadAiant raises $100M Series A from Tailwind Ventures */}
        //   //   <ChevronRightIcon className="size-4" />
        //   // </Link>
        // }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Social + Business
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            For social managers who sell and the businesses that trust them to.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Try Free  &mdash;  No card needed</Button>
            <Button variant="secondary" href="/pricing">
              See Pricing
            </Button>

          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
         All-in-one <span className='' > contents </span>, <span> conversations </span> , <span> accounts  </span> and customer managements.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/mp2.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Plan</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Avoid chaos, plan ahead.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Schedule"
          title="Content on the go! "
          description="Scheduling takes off the limits on when your creativity gets to shine. No matter the platform, we integrate seamlessly to ensure your creativity meets your audience when you want it to."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard


          eyebrow="Analysis"
          title="Track Trends. Set Prices. Sell Smarter
"
          description="With built-in analytics and smart pricing tools that track customer behavior, product trends and insights across your social channels, you always know what's working and what to change"
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Inventory"
          title="No Surprises, Just Smart Inventory"
          description="No overselling, no guess-work, no disappointing customers: just smart inventory so you always know what’s in stock, and what’s not."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Whispers"
          title="Suggestions at your fingertips"
          description="Feeling stuck? We integrated our Social Business bot called NIA GPT to provide extra support for days when you need a creative boost or need to get deep competitor research done. "
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Post</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Integrate all your social channels.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Multi-Platform "
            title="All in on app hosting"
            description="Access all your social channels in one dashboard; from instagram to whatsapp, no tab switching, just one app to manage it all."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Templates"
            title="Post Templates and Auto Captions"
            description="With Ready to use and easy to use templates, content production time could be cut in half. Our added AI- generator that suggests captions and hashtags help save time and improve productivity."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Responder"
            title="24/7 replies that sound just like you"
            description="Never miss an opportunity in the DM’s or Comments, we've Integrated an automated AI responder that communicates in your brand voice even when you're offline."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}
function BentoSection_Close() {
  return (
    <Container>
      <Subheading>Close</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Sale. Sell. Sold
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Invoicing"
          title="Professional payment requests"
          description="Request payments with ease, generate and send professional invoices in seconds, keep track, no spreadsheets needed. "
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard


          eyebrow="CRM"
          title="Every DM automatically becomes a customer profile"
          description="MendPro captures key details from your DMs and turns them into organized customer records in real time. No more scrolling through chats,  just smart, instant CRM that grows with your business."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Tracking"
          title="Know the status of every order"
          description="Nothing slips through the cracks, your customers stay updated and you stay in control from close of sale to delivery."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Bookkeeping"
          title="Smart records, zero guesswork"
          description="Track sales, expenses, and profits in real time, no spreadsheets or calculators required.
          Stay organized with clean, automatic records that make running your business easier."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Remarketing"
          title="Re-engage with your audience strategically"
          description="Set smart triggers that automatically follow up with leads who didn’t convert the first time.
Whether it’s a DM nudge or email reminder, bring back interested customers without lifting a finger.
"
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection_Repeat() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Repeat</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Keep customers coming back

        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="History"
            title="Customer History & Insights"
            description="Get the full picture at a glance. See who bought what, when, and how often so you can personalize every message, promo, and offer to the right people at the right time."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Messaging"
            title="Automated Messaging that feels human
"
            description="Set up custom replies, autoresponders, and follow-ups that sound just like you. Always stay responsive, even when you're off the clock."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Reports"
            title="Know what’s working, fix what’s not"
            description="Track your content performance, sales, and customer engagement all in one dashboard. Make smarter decisions with real insights, not guesswork."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Segmentation"
            title="Organized contacts, targeted growth"
            description="Group your audience by behavior, purchase history, or interest. Send the right message to the right people and watch your engagement soar."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <Plan />
          {/* <LogoCloud /> */}
          <ImageCarousel />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">

          <BentoSection_Close />
          <DarkBentoSection_Repeat />
        </div>

      </main>
      {/* <Testimonials /> */}
      <Testimonial2 />

      <FAQ />
      <Footer />

      <TimedModal />
    </div>
  )
}
