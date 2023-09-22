import React from "react";
import Section from "@/components/links/Section";
import James from "@/assets/James.png";
import JamesBg from "@/assets/James-bg.jpg";

const Home = () => {
  return (
    <Section title="Home">
      <div className="flex items-center justify-center flex-col gap-10">
        <div className="flex items-center justify-center gap-6 md:gap-20 flex-col md:flex-row">
          <div className="md:w-1/2 ">
            <img src={JamesBg} className="rounded-2xl" />
          </div>
          <div className="md:w-1/2 max-w-[500px]">
            <div className="text-center mb-10">
              <p className="text-3xl text-gray-600">Meet The Founder</p>
              <p className="text-5xl font-bold ">James Baker, CPA</p>
              <span className="border-b-8 border-black"></span>
            </div>
            <p className="text-left ">
              James is the head of different companies around the US, serving
              international Corporations and international entrepreneurs with
              different services and companies. ​ James allied with silent
              investors to create EB-3 Workforce solutions, a company that
              connects employers which are facing a chronic shortage of
              unskilled workers with immigrant employees willing to apply for a
              US Green Card through the EB-3 Visa program.
            </p>
            <button>YES! TEACH ME HOW</button>
          </div>
        </div>

        <div>
          Contact Us Want to Know More? If you find yourself in a situation
          where you are struggling to find a significant number of qualified,
          accessible, and highly motivated U.S. employees to fill various
          entry-level positions, or if you are facing challenges with relentless
          turnover and overwhelming HR responsibilities and charges, then we
          have the perfect solution for you. ​ Introducing the EB-3 Visa
          Program, a long-term staffing solution specifically designed for U.S.
          employers like yourself. This employment-based Green Card option is
          tailored to address your staffing needs and provide the qualified
          workforce you require.
        </div>

        <div className="flex items-center justify-center">
          <div>
            <h2>Process Length Around 18 months</h2>
            <p>
              The length of the processing times for the EB3 program varies and
              depends on the location (country of origin) and status of the
              applicant (Consular Process vs. Adjustment of Status) and can also
              depend on the type of industry the applicant is sought for.
            </p>
          </div>
          <div>
            <h2>Investment $400-$1200</h2>
            <p>
              n order to proceed with the Labor Certificate, compliance with
              regulations necessitates the advertisement of the position to U.S.
              Workers. This process labor certification process, independent of
              the quantity of employees required.
            </p>
          </div>
        </div>
        <div>
          <h2>EB-3 Workforce Solutions</h2>
          <p>
            At EB3 Workforce Solutions, we understand the importance of finding
            reliable and dedicated employees. That's why we offer a unique
            solution to your staffing needs - EB3 visa workers. Our team is
            dedicated to finding and placing highly qualified personnel who are
            committed to making a positive impact on your business. With a
            rigorous screening process and a network of top-notch talent, we
            ensure that you receive the highest quality workforce available. Say
            goodbye to the struggles of finding committed workers and hello to a
            bright future with EB3 Workforce Solutions.
          </p>
        </div>
        <div>
          <h2>Struggling to Find Commited Workers?</h2>
          <p>
            Discover the solution to your staffing needs with our company! Say
            goodbye to the hassle of unreliable workers and hello to a team of
            dedicated and committed professionals. Our EB3 visa workers are
            handpicked to ensure top-notch performance and complete commitment
            to your projects. Trust us to provide the workforce you deserve."
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Home;
