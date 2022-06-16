import Head from "next/head";
import { IncidentsListViewHeader } from "./incidents/incidents-list-view/Header";

/**
 * Incidents List View Home
 * @returns the parent component returning the incident lists component
 */
const IncidentsHome = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <IncidentsListViewHeader />
    </>
  );
};

export default IncidentsHome;
