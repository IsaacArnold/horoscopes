import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import StarSignGrid from "../components/StarSignGrid";

const IndexPage = () => (
  <Layout>
    <Seo title="Horoscopes" />
    <section className="flex flex-col justify-center items-center w-full h-full pt-8">
      <h1 className="font-semibold text-3xl">Horoscopes</h1>
      <p className="italic text-sm">Explore your destiny</p>
      {/* Render the grid */}
      <StarSignGrid />
    </section>
  </Layout>
);

export default IndexPage;
