import PortfolioItem from "@components/PortfolioItem/PortfolioItem";
import type { NextPage } from "next";
import Image from "next/image";

const Portfolio: NextPage = () => {
  return (
    <section>
      <PortfolioItem
        title="tablethotels.com"
        link="https://www.tablethotels.com"
        image={{
          src: "/tablethotels.gif",
          width: 400,
          height: 300,
          alt: "Tablet Hotels Preview",
        }}
        tools={["react", "jest/react-testing-library"]}
      >
        <p>
          I currently am employed at{" "}
          <a href="https://www.tablethotels.com">Tablet Hotels</a> (a partner of
          Michelin) &mdash; A website for booking luxury and boutique hotels.
        </p>

        <p>
          I led our front end team to move the legacy frontend codebase to
          React. We finished the migration in summer 2021.
        </p>

        <p>Now we continue to release various site features to engage users</p>
        <p>Team size: 3 Frontend Engineers; 10 Total engineers</p>
      </PortfolioItem>

      <PortfolioItem
        title="fintive"
        link="https://beta.fintive.com"
        image={{
          src: "/fintive.png",
          width: 500,
          height: 300,
          alt: "Tablet Hotels Preview",
        }}
        tools={["react", "typescript", "node.js", "jest/react-testing-library"]}
      >
        <p>
          I worked on a team to build an app for banks that visualizes large
          amounts of data (read from spreadsheet) about a loan applicant. This
          aided banks in the loan approval process.
        </p>

        <p>Team size: 2 Frontend Engineers; 5 Total engineers</p>
      </PortfolioItem>

      <PortfolioItem
        title="show me the music"
        link="https://www.showmethemusic.co"
        image={{
          src: "/showmethemusic.gif",
          width: 500,
          height: 300,
          alt: "Show me the Music Preview",
        }}
        tools={[
          "next.js/vercel",
          "node.js",
          "mongodb",
          "spotify & songkick api",
        ]}
        github="https://github.com/gecko25/showmethemusic"
      >
        <p>
          A side project of mine connecting the songkick and spotify apis. The
          user can search for live music events and select artists to generate a
          spotify playlist with the artists most popular songs.
        </p>

        <p>
          <i>Note: Currently not fully in service in production aka buggy</i>
        </p>
        <p>Team size: 1 Frontend Engineer (me); 1 Designer</p>
      </PortfolioItem>

      <PortfolioItem
        title="dankport"
        link="https://dankport.saratankard.vercel.app"
        image={{
          src: "/dankport.gif",
          width: 500,
          height: 300,
          alt: "Dankport Preview",
        }}
        tools={["next.js/vercel", "node.js", "snipcart api"]}
        github="https://github.com/gecko25/dankport"
      >
        <p>
          Side project of mine and a friend to produce a prototype for a
          e-commerence CBD store. Worked with the snipcart service (similar to
          shopify) to provide a storefront as well as an admin portal.
        </p>
        <p>Team size: 1 Frontend Engineer (me); 1 product manager</p>
      </PortfolioItem>

      <PortfolioItem
        title="saratankard.com"
        link="https://saratankard.com"
        image={{
          src: "/logo.png",
          width: 200,
          height: 200,
          alt: "Sara Tankard Preview",
        }}
        tools={["next.js/vercel", "typescript"]}
        github="https://github.com/gecko25/saratankarddotcom"
      >
        <p>I built this website too.</p>
        <p>Team size: Me</p>
      </PortfolioItem>

      <PortfolioItem
        title="fixme app"
        link="http://fixmelathe.herokuapp.com"
        image={{
          src: "/fixme.gif",
          width: 300,
          height: 200,
          alt: "Fix me Preview",
        }}
        tools={["angular1", "infermedia API", "heroku"]}
        github="https://github.com/gecko25/fixme"
      >
        <p>
          I built this app to as a tool for users the enter their medical
          symptons and self diagnose
        </p>
      </PortfolioItem>
    </section>
  );
};

export default Portfolio;
