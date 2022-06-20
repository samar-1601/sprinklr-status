import { Block } from "baseui/block";
import Head from "next/head";
import { HomePage } from "./incidents/incidents-list-view/HomePage";

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default IncidentsHome;
