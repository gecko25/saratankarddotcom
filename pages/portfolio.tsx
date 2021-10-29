import PortfolioItem from "@components/PortfolioItem/PortfolioItem";
import type { NextPage } from "next";
import Image from "next/image";

const Portfolio: NextPage = () => {
  return (
    <section>
      <PortfolioItem
        title="tablethotels.com"
        link="https://www.tablethotels.com/"
        image={{
          src: "/tablethotels.gif",
          width: 500,
          height: 300,
          alt: "Tablet Hotels Preview",
        }}
        tools={["react", "jest/react-testing-library"]}
      >
        <p>
          I currently am employed at{" "}
          <a href="https://www.tablethotels.com">Tablet Hotels</a> where I led a
          team to move the legacy frontend codebase to React. While migrating, I
          also was responsible for releasing various site features.
        </p>

        <p>Team size: 3 Frontend Engineers; 10 Total engineers</p>
      </PortfolioItem>

      <PortfolioItem
        title="fintive"
        link="https://beta.fintive.com/"
        image={{
          src: "/fintive.png",
          width: 500,
          height: 300,
          alt: "Tablet Hotels Preview",
        }}
        tools={["react", "typescript", "node.js", "jest/react-testing-library"]}
      >
        <p>
          Worked on a team to build an app for banks that visualizes large
          amounts of data (read from spreadsheet) about a loan applicant. This
          aided banks in the loan approval process.
        </p>

        <p>Team size: 2 Frontend Engineers; 5 Total engineers</p>
      </PortfolioItem>

      <PortfolioItem
        title="show me the music"
        link="/showmethemusic.gif"
        image={{
          src: "/showmethemusic.gif",
          width: 500,
          height: 300,
          alt: "Tablet Hotels Preview",
        }}
        tools={["next.js/vercel", "node.js", "spotify & songkick api"]}
      >
        <p>
          A side project of mine connecting the songkick and spotify apis. The
          user can search for live music events and select artists to generate a
          spotify playlist with the artists most popular songs.
          <i>Currently not in service</i>
        </p>
        <p>Team size: 1 Frontend Engineer (me); 1 Designer</p>
      </PortfolioItem>

      <PortfolioItem
        title="dankport"
        link="https://dankport.saratankard.vercel.app"
        image={{
          src: "/dankport.gif",
          width: 400,
          height: 300,
          alt: "Tablet Hotels Preview",
        }}
        tools={["next.js/vercel", "node.js", "snipcart api"]}
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
    </section>
  );
};

export default Portfolio;
