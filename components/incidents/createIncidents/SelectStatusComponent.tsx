import React from "react";
import { Select, SIZE, TYPE } from "baseui/select";
import { StatefulPopover, TRIGGER_TYPE } from "baseui/popover";
import { ParagraphSmall } from "baseui/typography";
import { useStyletron } from "baseui";
import { Checkbox, STYLE_TYPE, LABEL_PLACEMENT } from "baseui/checkbox";
import { Block } from "baseui/block";
import { ITEMS } from "./../../../constants";
import { ImageProps, statusComponentProps } from "./../../../variableTypes";

function Image(props: ImageProps) {
  return (
    <Block overrides={{ Block: { style: { display: "flex" } } }}>
      <img
        style={{ paddingRight: "5px", height: "24px", width: "24px" }}
        src={props.imgUrl}
      />{" "}
      <Block>{props.title}</Block>
    </Block>
  );
}
export default function SelectStatusComponent(props: statusComponentProps) {
  const [css, theme] = useStyletron();

  const options = ITEMS.map((item, idx) => {
    return {
      label: <Image title={item.title} imgUrl={item.imgUrl} />,
      id: idx,
    };
  });

  if (!props.selected) {
    return (
      <Block
        id={props.id}
        overrides={{
          Block: {
            style: {
              margin: "20px 0px",
              display: "flex",
              justifyContent: "space-between",
            },
          },
        }}
      >
        <Checkbox
          labelPlacement={LABEL_PLACEMENT.right}
          checked={props.selected}
          onChange={(event) => {
            props.toggleCheckBox(event);
          }}
          name={props.id}
          overrides={{
            Root: {
              style: {
                paddingTop: "15px",
              },
            },
            Checkmark: {
              style: ({ $checked }) => ({
                borderLeftColor: "blue",
                borderRightColor: "blue",
                borderTopColor: "blue",
                borderBottomColor: "blue",
                backgroundColor: $checked ? "blue" : "white",
              }),
            },
          }}
        >
          {props.name}
        </Checkbox>

        <StatefulPopover
          content={
            <ParagraphSmall padding="scale500">
              Select Component to enable options
            </ParagraphSmall>
          }
          accessibilityType={"tooltip"}
          triggerType={TRIGGER_TYPE.hover}
        >
          <span className={css({ ...theme.typography.font300 })}>
            <Select
              options={options}
              disabled={!props.selected}
              backspaceRemoves={false}
              clearable={false}
              searchable={false}
              value={[options[props.type - 1]]}
              placeholder="Select color"
              onChange={(event) => {
                props.changeOption(event, props.id);
              }}
              overrides={{
                DropdownOption: {
                  style: ({ $theme }) => ({
                    outline: `${$theme.colors.warning200} solid`,
                    backgroundColor: $theme.colors.warning200,
                  }),
                },
                Root: {
                  style: {
                    width: "300px",
                  },
                },
              }}
            />
          </span>
        </StatefulPopover>
      </Block>
    );
  } else {
    return (
      <Block
        overrides={{
          Block: {
            style: {
              margin: "20px 0px",
              display: "flex",
              justifyContent: "space-between",
            },
          },
        }}
        id={props.id}
      >
        <Checkbox
          labelPlacement={LABEL_PLACEMENT.right}
          checked={props.selected}
          onChange={(event) => {
            props.toggleCheckBox(event);
          }}
          name={props.id}
          overrides={{
            Root: {
              style: {
                paddingTop: "15px",
              },
            },
            Checkmark: {
              style: ({ $checked }) => ({
                borderLeftColor: "blue",
                borderRightColor: "blue",
                borderTopColor: "blue",
                borderBottomColor: "blue",
                backgroundColor: $checked ? "blue" : "white",
              }),
            },
          }}
        >
          {props.name}
        </Checkbox>
        <Select
          options={options}
          disabled={!props.selected}
          backspaceRemoves={false}
          clearable={false}
          searchable={false}
          value={[options[props.type - 1]]}
          placeholder="Select color"
          onChange={(event) => {
            props.changeOption(event, props.id);
          }}
          overrides={{
            DropdownOption: {
              style: ({ $theme }) => ({
                outline: `${$theme.colors.warning200} solid`,
                backgroundColor: $theme.colors.warning200,
              }),
            },
            Root: {
              style: {
                width: "300px",
              },
            },
          }}
        />
      </Block>
    );
  }
}
