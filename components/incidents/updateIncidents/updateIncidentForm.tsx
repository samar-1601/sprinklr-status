import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CreateIncident from "../createIncidents/CreateIncident";
import {
  NEXT_PUBLIC_AUTH_TOKEN,
  STATUS,
  getIncidentStatusFromPost,
  PAGE_ID,
} from "../../../constants";
import {
  ComponentObject,
  JSONObject,
  UpdateIncidentFormProps,
  IncidentFetchType,
} from "../../../variableTypes";
import { useSnackbar, DURATION } from "baseui/snackbar";
import Router from "next/router";
import { Block } from "baseui/block";

let InitialData: (ComponentObject | never)[] = [];

export default function UpdateIncidentForm(props: UpdateIncidentFormProps) {
  console.log(props.incidentId);
  const [components, setComponents] = useState<ComponentObject[]>([]);
  const [incidentName, setIncidentName] = useState<string>("");
  const [incidentStatus, setIncidentStatus] = useState<string>("Investigating");
  const [stateOfPage, setStateOfPage] = useState(0);
  const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false);
  const { enqueue, dequeue } = useSnackbar();

  const handleSubmit = (payload: any) => {
    setIsSubmitClicked(true);
    console.log("Updating Incident");
    // dequeue();
    enqueue(
      {
        message: "Updating Incident Details",
        progress: true,
      },
      DURATION.infinite
    );
    fetch(
      "https://api.statuspage.io/v1/pages/" +
        PAGE_ID +
        "/incidents/" +
        props.incidentId,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth ${NEXT_PUBLIC_AUTH_TOKEN ?? ""}`,
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if ("error" in json) {
          throw json.error;
        }
        // throw json;
        dequeue();
        enqueue(
          {
            message: "Successfully updated Incident",
          },
          DURATION.short
        );
        setIsSubmitClicked(false);
      })
      .then(() => {
        Router.push("/");
      })
      .catch((err) => {
        console.log(err);
        dequeue();
        // console.log(err);
        enqueue(
          {
            message: err,
          },
          DURATION.long
        );
        setIsSubmitClicked(false);
      });
  };

  useEffect(() => {
    const compURL = `https://api.statuspage.io/v1/pages/${PAGE_ID}/components`;
    fetch(compURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `OAuth ${NEXT_PUBLIC_AUTH_TOKEN ?? ""}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        InitialData = json.map((item: JSONObject, index: Number) => {
          return {
            compName: item.name,
            compType: STATUS[item.status],
            id: index,
            compId: item.id,
            selected: false,
          };
        });
        // setComponents(InitialData);
        // console.log("setting");
      })
      .then(() => {
        const incidentURL = `https://api.statuspage.io/v1/pages/${PAGE_ID}/incidents/${props.incidentId}`;
        console.log(incidentURL);
        fetch(incidentURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `OAuth ${NEXT_PUBLIC_AUTH_TOKEN ?? ""}`,
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            console.log(InitialData);
            json.components.forEach((item: IncidentFetchType) => {
              let obj: ComponentObject = InitialData.find(
                (o) => o.compId === item.id
              )!;
              InitialData[Number(obj.id)].selected = true;
              InitialData[Number(obj.id)].compType = STATUS[item.status];
            });
            console.log(InitialData);
            setComponents(InitialData);
            setStateOfPage(1);
            setIncidentName(json.name);
            setIncidentStatus(getIncidentStatusFromPost(json.status));
          })
          .catch(() => {
            setStateOfPage(3);
          });
      })
      .catch(() => setStateOfPage(2));
  }, []);
  if (stateOfPage == 3) {
    return (
      <>
        <Block
          overrides={{
            Block: {
              style: {
                display: "flex",
                flexDirection: "column",
                paddingLeft: "20%",
                paddingRight: "20%",
                fontFamily: "Arial, Helvetica, sans-serif",
              },
            },
          }}
        >
          <Block
            overrides={{
              Block: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                },
              },
            }}
          >
            <h1>Wrong Incident Update Request</h1>
          </Block>
        </Block>
      </>
    );
  } else {
    return (
      <CreateIncident
        incidentName={incidentName}
        incidentStatus={incidentStatus}
        components={components}
        currentStateOfPage={stateOfPage}
        isSubmitClicked={isSubmitClicked}
        handleSubmit={handleSubmit}
        type={"Update"}
      />
    );
  }
}
