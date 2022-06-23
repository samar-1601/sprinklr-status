import React from "react";

import styles from "../../components/ComponentCreation/styles.module.css";
import { hasListLoadedStyle } from "../../components/incidents/incidents-list-view/styles/listStyles";

import { ComponentCreationForm } from "../../components/ComponentCreation/ComponentCreationForm";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Block } from "baseui/block";
import { Spinner } from "baseui/spinner";
import { PageSlot } from "../../components/PageSlot/PageSlot";
import SideBar from "../../components/SideBar/SideBar";

const AddComponents: React.FC = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push("/login/loginList");
    },
  });

  if (status == "loading") {
    return (
      <Block {...hasListLoadedStyle}>
        <Spinner />
      </Block>
    );
  }

  if (status != "authenticated")
    return <Block> You are unauthenticated. this is a protected page.</Block>;
  return (
    <PageSlot>
      <PageSlot.Slot name="leftNavBar">
        <SideBar activeItemID={2} />
      </PageSlot.Slot>
      <PageSlot.Slot name="rightContent">
        <Block className={styles.page}>
          <ComponentCreationForm />
        </Block>
      </PageSlot.Slot>
    </PageSlot>
  );
};

export default AddComponents;
