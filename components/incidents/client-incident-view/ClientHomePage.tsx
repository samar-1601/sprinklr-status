// components
import { IncidentsList } from "./IncidentsList";
import { Block } from "baseui/block";
import { AboutThisSite } from "./about-this-page/AboutThisSite";
import { PastIncidents } from "./past-incidents-component/PastIncidents";

// constants
import { PageType } from "../../../constants";

// styles
import {
  incidentsListView,
  h1,
  h3,
  clientsActiveIncidentsViewWrapper,
  aboutThisPageWrapper,
  scheduledMaintenanceWrapper,
  pastIncidentsWrapper,
} from "./styles/containerStyles";

/**
 * Client Page View
 * triggers when / is accessed
 * @returns various components placed columnwise
 */
export const ClientsPageHome: React.FC = () => {
  return (
    <Block {...incidentsListView}>
      <Block {...clientsActiveIncidentsViewWrapper}>
        <Block {...h1}> Active Incidents </Block> 
        <IncidentsList pageType={PageType.Active} />
      </Block>
      <Block {...aboutThisPageWrapper}>
        <Block {...h3}> About This Site</Block>
        <AboutThisSite />
      </Block>
      <Block {...scheduledMaintenanceWrapper}>
        <Block {...h3}> Scheduled Maintenance</Block>
        <IncidentsList pageType={PageType.Scheduled} />
      </Block>
      <Block {...pastIncidentsWrapper}>
        <Block {...h3}> Past Incidents</Block>
        <PastIncidents />
      </Block>
    </Block>
  );
};
