import styled from "styled-components";
import Button from "../ui/Button";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const LandingContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1280px) {
    .xl\:px-0 {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }

    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }
  }
`;

const LandingCol = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    .lg\:w-1\/2 {
      width: 50%;
    }
  }
`;

const LandingColElement = styled.div`
  max-width: 42rem;
  margin-bottom: 2rem;
`;

const LandingLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem /* 12px */ * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem /* 12px */ * var(--tw-space-y-reverse));
`;

const LandingLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem /* 12px */ * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem /* 12px */ * var(--tw-space-y-reverse));
`;

const LandingH1 = styled.h1`
  font-size: 2.25rem /* 36px */;
  line-height: 2.5rem /* 40px */;
  font-weight: 700;
  line-height: 1.375;
  letter-spacing: -0.025em;
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
`;

const LandingP = styled.p`
  padding-top: 1.25rem /* 20px */;
  padding-bottom: 1.25rem /* 20px */;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  line-height: 1.5;
`;

function Landing() {
  return (
    <LandingContainer>
      <LandingCol>
        <LandingColElement>
          <LandingH1> Free Landing Page Template for startups</LandingH1>
          <LandingP>
            Nextly is a free landing page & marketing website template for
            startups and indie projects. Its built with Next.js & TailwindCSS.
            And its completely open-source.
          </LandingP>
          <LandingLinks>
            <LandingLink></LandingLink>
          </LandingLinks>
        </LandingColElement>
      </LandingCol>
      {/* <Row>
        <Heading as="h1">Effortless Staff Management</Heading>
        <p>
          Streamline your hotel operations with our intuitive booking and staff
          management system.
        </p>
      </Row>
      <Row>
        <Heading as="h1">Boost Employee Productivity</Heading>
        <p>
          Empower your hotel staff with efficient tools for managing bookings
          and enhancing guest experiences.
        </p>
      </Row>
      <Row>
        <Button size="large">Go to app</Button>
      </Row> */}
    </LandingContainer>
    //   <Container className="flex flex-wrap ">
    //   <div className="flex items-center w-full lg:w-1/2">
    //     <div className="max-w-2xl mb-8">
    //       <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
    //         Free Landing Page Template for startups
    //       </h1>
    //       <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
    //         Nextly is a free landing page & marketing website
    //         template for startups and indie projects. Its built with
    //         Next.js & TailwindCSS. And its completely open-source.
    //       </p>

    //       <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
    //         <a
    //           href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
    //           target="_blank"
    //           rel="noopener"
    //           className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
    //           Download for Free
    //         </a>
    //         <a
    //           href="https://github.com/web3templates/nextly-template/"
    //           target="_blank"
    //           rel="noopener"
    //           className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
    //           <svg
    //             role="img"
    //             width="24"
    //             height="24"
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             xmlns="http://www.w3.org/2000/svg">
    //             <title>GitHub</title>
    //             <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    //           </svg>
    //           <span> View on Github</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center w-full lg:w-1/2">
    //     <div className="">
    //       <Image
    //         src={heroImg}
    //         width="616"
    //         height="617"
    //         className={"object-cover"}
    //         alt="Hero Illustration"
    //         loading="eager"
    //         placeholder="blur"
    //       />
    //     </div>
    //   </div>
    // </Container>
  );
}

export default Landing;
