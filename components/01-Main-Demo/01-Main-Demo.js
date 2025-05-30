"use client";

import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import ServiceTwelve from "../Services/Service-Twelve";
import CategoryOne from "../Category/CategoryOne";
import Card from "../Cards/Card";
import AboutTwo from "../Abouts/About-Two";
import CallToAction from "../Call-To-Action/CallToAction";
import Counter from "../Counters/Counter";
import TestimonialSeven from "../Testimonials/Testimonial-Seven";
import EventCarouse from "../Events/EventCarouse";
import TeamTwo from "../Team/TeamTwo";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import NewsletterTwo from "../Newsletters/Newsletter-Two";
import ServiceNine from "../Services/Service-Nine";
import TestimonialData from "../../data/elements/testimonial.json";
import { ParallaxProvider } from "react-scroll-parallax";
import MultilingualBanner from "../20-multilingual/Multilingual-Banner";
import MultilingualHighlights from "../20-multilingual/Multilingual-Highlights";
import OurCourse from "../20-multilingual/Our-Course";
import AdvancetabTwo from "../AdvanceTab/AdvanceTab-Two";
import ContactPage from "@/app/(pages)/contact/(contact)";
import HowToApply from "../06-university-status/HowToApply";
import Accordion from "../17-online-academy/Accordion";
import History from "../03-online-school/History";
import StudentFeedback from "../25-life-coach/StudentFeedback";

const MainDemo = ({ blogs }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-banner-area rbt-banner-1">
          <MultilingualBanner />
        </div>

          <div>
            <MultilingualHighlights/>
          </div>

        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <ParallaxProvider>
              <AboutTwo />
            </ParallaxProvider>
          </div>
        </div>

            <OurCourse/>
            <HowToApply/>
        <AdvancetabTwo/>
            <Accordion/>
            <History/>
            <StudentFeedback/>

<div>
  <ContactPage/>
</div>

        {/* <div className="rbt-callto-action-area mt_dec--half">
          <CallToAction />
        </div>

        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
          <div className="container">
            <Counter isDesc={false} />
          </div>
        </div>

        <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title">
                      People like histudy education. <br /> No joking - here’s
                      the proof!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialSeven />
        </div>

        <div className="rbt-event-area rbt-section-gap bg-gradient-3">
          <div className="container">
            <div className="row mb--55">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                  STIMULATED TO TAKE PART IN?
                </span>
                <h2 className="title color-white">Upcoming Events</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <EventCarouse />
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-team-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Our Teacher
                  </span>
                  <h2 className="title">Whose Inspirations You</h2>
                </div>
              </div>
            </div>
            <TeamTwo />
          </div>
        </div>

        <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-pink-opacity">Blog Post</span>
                  <h2 className="title">Post Popular Post.</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/blog"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <BlogGridTop BlogData={blogs} />
          </div>
        </div>

        <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
          <NewsletterTwo />
        </div> */}
      </main>
    </>
  );
};

export default MainDemo;
