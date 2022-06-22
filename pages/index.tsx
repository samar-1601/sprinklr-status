import { Block } from "baseui/block";
import { StatefulMenu } from "baseui/menu";
import Head from "next/head";
import Router from "next/router";
import { Avatar } from "baseui/avatar";
import { Spinner } from "baseui/spinner";
import { hasListLoadedStyle } from "../components/incidents/incidents-list-view/styles/listStyles";
import { useSession } from "next-auth/react";
import WelcomePage from "../components/welcome/WelcomePage";
import { DURATION, useSnackbar } from "baseui/snackbar";

const Home = () => {
  const { enqueue, dequeue } = useSnackbar();

  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <Block {...hasListLoadedStyle}>
        <Spinner />
      </Block>
    );
  }
  if (!session) {
    return <WelcomePage />;
  }
  // dequeue();
  // enqueue(
  //   {
  //     message: "Login Successful!",
  //   },
  //   DURATION.long
  // );
  return (
    <>
      <Head>
        <title>Status App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Status_icon.png" />
      </Head>
      <main>
        <Block
          overrides={{
            Block: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "rgb(1,73,176)",
                width: "50vh",
                margin: "20vh auto",
                borderRadius: "30px",
                boxShadow: "0 0 40px 	#A9A9A9",
              },
            },
          }}
        >
          <Block
            overrides={{
              Block: {
                style: {
                  fontFamily: "Arial, Helvetica, sans-serif",
                  color: "white",
                  fontWeight: 900,
                  fontSize: "32px",
                  padding: "50px",
                },
              },
            }}
          >
            <Avatar
              name="Status_Icon"
              src="/Status_icon.png"
              overrides={{
                Root: { style: { paddingRight: "10px", paddingTop: "10px" } },
              }}
            />
            StatusPage
          </Block>
          <Block
            overrides={{
              Block: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "50px",
                },
              },
            }}
          >
            <StatefulMenu
              items={[
                { label: "Go to Incidents Home Page", url: "/incidents" },
                { label: "Go to Components Home Page", url: "/component" },
                {
                  label: "Go to Client Incidents Page",
                  url: "https://client-incident-list-view.netlify.app/",
                },
              ]}
              onItemSelect={(item) => {
                if (
                  item.item.url ==
                  "https://client-incident-list-view.netlify.app/"
                ) {
                  window.open(item.item.url, "_blank");
                } else Router.push(item.item.url);
              }}
            />
          </Block>
        </Block>
      </main>
    </>
  );
};

export default Home;
