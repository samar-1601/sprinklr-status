//lib
import React, { useCallback } from "react";

//components
import { SelectStatusComponent } from "./SelectStatusComponent";
import { Block } from "baseui/block";
import { FormControl } from "baseui/form-control";

//constants
import { ComponentsAffectedProps } from "../../../variableTypes";
import { affectedComponenetsStyle } from "./styles/BlockStyles";

const label = <Block>Components Affected</Block>;

/**
 * AffectedComponents Component
 * @params props contains:
 * componentList: list of components containing isSelected and type of choice
 * handleComponentUpdate: Funtion
 */
export const AffectedComponents = React.memo(
  (props: ComponentsAffectedProps) => {
    return (
      <Block {...affectedComponenetsStyle}>
        <FormControl
          label={label}
          overrides={{
            ControlContainer: {
              style: ({ $theme }) => ({
                borderStyle: "solid none",
                borderColor: $theme.colors.borderOpaque,
              }),
            },
          }}
        >
          <div>
            {props.componentList.map((item) => {
              return (
                <SelectStatusComponent
                  key={item.id}
                  name={item.compName}
                  id={item.id}
                  type={item.compType}
                  selected={item.selected}
                  handleChange={props.handleComponentUpdate}
                />
              );
            })}
          </div>
        </FormControl>
      </Block>
    );
  }
);
