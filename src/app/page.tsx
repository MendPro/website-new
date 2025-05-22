

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { MdChevronRight } from "react-icons/md";
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
import Table from '@/components/Table'

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
            {/* <Button href="#">Try Free  &mdash;  No card needed</Button> */}
            <Button href="#">Book Demo</Button>
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
        <Heading as="h2" className=" max-w-3xl">
          Content. Conversations. Conversions &rarr; all in one place </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/mp3.png"
          className="mt-16 h-[20rem]  md-[36rem] md:h-auto w-full md:w-[82rem]"
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
        Organize, analyze and prepare
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Schedule"
          title="Streamlined content scheduling"
          description="Plan and publish content across 12 platforms from one centralized dashboard"
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/schedule.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard


          eyebrow="Analysis"
          title="Performance that informs strategy"
          description="Monitor post engagement, trends, and audience behavior to understand what’s working and what’s not."
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/analysis.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Inventory"
          title="Sync content with commerce"
          description="Link your product catalog so your content reflects what’s in stock, what’s selling, and what needs a spotlight."
          graphic={
            // <div className="flex size-full pt-10 pl-10">

            //   <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            // </div>

            <div className="h-full w-full bg-[url(/screenshots/inventory.jpg)] bg-cover bg-center bg-no-repeat" />

          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Ads (Coming Soon)"
          title="Campaigns, built right in"
          description="Create, manage, and track Facebook ad campaigns directly from the app."
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/ads.jpg)] bg-cover bg-center bg-no-repeat" />

          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Insights"
          title="Intelligent recommendations"
          description="Receive weekly suggestions from Nia, your AI assistant, on what to post, when to post, and how to optimize for impact. "
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/insight.jpg)] bg-cover bg-center bg-no-repeat" />  
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx- mt- rounded-4xl bg-linear-115  via-[#7dd9c7] via-50% to-[#012b3a] sm:bg-linear-145 py-32">
      <Container>
        <Subheading dark>Post</Subheading>
        <Heading as="h3" dark className="mt-2 text-black max-w-3xl">
          Show up, everywhere        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Multi-Platform "
            title="Publish to 12 platforms"
            description="Share content across Instagram, Facebook, TikTok, X, LinkedIn, and more — all from one place."
            graphic={
              <div className="h-full w-full bg-[url(/screenshots/multi.jpg)] bg-cover bg-center bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Post generator"
            title="AI-written, ready to go"
            description="Get fresh, engaging post ideas and captions written for you — no brainstorming needed"
            graphic={
              <div className="h-full w-full bg-[url(/screenshots/generate.jpg)] bg-cover bg-center bg-no-repeat" />

            }
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Auto-Responder"
            title="Reply while you sleep"
            description="Automated replies that keep conversations going even when offline or busy."
            graphic={
              <div className="h-full w-full bg-[url(/screenshots/auto.jpg)] bg-cover bg-center bg-no-repeat" />
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Suggestions"
            title="Smart captions and hashtags"
            description="Hashtags and post timing recommendations based on what’s trending and what’s worked before."
            graphic={
              <div className="h-full w-full bg-[url(/screenshots/suggest.jpg)] bg-cover bg-center bg-no-repeat" />
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
        Turn conversations into customers.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Auto-Capture"
          title="Collect order details from chat."
          description="Automatically extract names, numbers, products, and delivery info from conversations — no need for a separate form. "
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/capture.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard


          eyebrow="DM → CRM"
          title="Every message becomes a profile."
          description="Turn customer chats into structured contact records, complete with purchase history and engagement logs."
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/dr.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Fulfillment"
          title="Ship orders without the hassle."
          description="Integrate with third-party providers to fulfill and track orders without leaving your dashboard."
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/fillfull.jpg)] bg-cover bg-center bg-no-repeat" />

          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Simple Bookkeeping"
          title="Stay on top of your numbers."
          description="Sales are automatically logged so you can track revenue and expenses without spreadsheets."
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/booking.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Remarketing Triggers"
          title="Follow up without the guesswork."
          description="Set triggers based on behavior or timing to re-engage buyers and turn one-time orders into repeat business.
"
          graphic={
            <div className="h-full w-full bg-[url(/screenshots/trigger.jpg)] bg-cover bg-center bg-no-repeat" />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

// function DarkBentoSection_Repeat() {
//   return (
//     <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
//       <Container>
//         <Subheading dark>Repeat</Subheading>
//         <Heading as="h3" dark className="mt-2 max-w-3xl">
//           Keep customers coming back

//         </Heading>

//         <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
//           <BentoCard
//             dark
//             eyebrow="History"
//             title="Customer History & Insights"
//             description="Get the full picture at a glance. See who bought what, when, and how often so you can personalize every message, promo, and offer to the right people at the right time."
//             graphic={
//               <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
//             }
//             fade={['top']}
//             className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="Messaging"
//             title="Automated Messaging that feels human
// "
//             description="Set up custom replies, autoresponders, and follow-ups that sound just like you. Always stay responsive, even when you're off the clock."
//             graphic={<LogoTimeline />}
//             // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
//             className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="Reports"
//             title="Know what’s working, fix what’s not"
//             description="Track your content performance, sales, and customer engagement all in one dashboard. Make smarter decisions with real insights, not guesswork."
//             graphic={<LinkedAvatars />}
//             className="lg:col-span-2 lg:rounded-bl-4xl"
//           />
//           <BentoCard
//             dark
//             eyebrow="Segmentation"
//             title="Organized contacts, targeted growth"
//             description="Group your audience by behavior, purchase history, or interest. Send the right message to the right people and watch your engagement soar."
//             graphic={
//               <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
//             }
//             fade={['top']}
//             className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
//           />
//         </div>
//       </Container>
//     </div>
//   )
// }

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
        </div>

      </main>
      {/* <Testimonials /> */}
      <Testimonial2 />
      <Table />

      <FAQ />
      <Footer />

      <TimedModal />
    </div>
  )
}
