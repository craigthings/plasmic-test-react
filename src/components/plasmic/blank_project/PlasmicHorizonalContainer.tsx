// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5TUFsMr1jutmu8n3UiyCoV
// Component: ImdPFYAZQh
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import WorkItem from "../../WorkItem"; // plasmic-import: M60KbPHn4A/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CGTY63khMo/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 5TUFsMr1jutmu8n3UiyCoV/projectcss
import * as sty from "./PlasmicHorizonalContainer.module.css"; // plasmic-import: ImdPFYAZQh/css

export type PlasmicHorizonalContainer__VariantMembers = {};

export type PlasmicHorizonalContainer__VariantsArgs = {};
type VariantPropType = keyof PlasmicHorizonalContainer__VariantsArgs;
export const PlasmicHorizonalContainer__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHorizonalContainer__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHorizonalContainer__ArgsType;
export const PlasmicHorizonalContainer__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicHorizonalContainer__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHorizonalContainerProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHorizonalContainer__RenderFunc(props: {
  variants: PlasmicHorizonalContainer__VariantsArgs;
  args: PlasmicHorizonalContainer__ArgsType;
  overrides: PlasmicHorizonalContainer__OverridesType;
  dataFetches?: PlasmicHorizonalContainer__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <WorkItem
              className={classNames("__wab_instance", sty.workItem__ldvgu)}
            />

            <WorkItem
              className={classNames("__wab_instance", sty.workItem__wnVav)}
            />

            <WorkItem
              className={classNames("__wab_instance", sty.workItem__ooYl3)}
            />
          </React.Fragment>
        ),
        value: args.children
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHorizonalContainer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHorizonalContainer__VariantsArgs;
    args?: PlasmicHorizonalContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHorizonalContainer__Fetches;
  } & Omit<PlasmicHorizonalContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHorizonalContainer__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHorizonalContainer__ArgProps,
      internalVariantPropNames: PlasmicHorizonalContainer__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHorizonalContainer__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHorizonalContainer";
  } else {
    func.displayName = `PlasmicHorizonalContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicHorizonalContainer = Object.assign(
  // Top-level PlasmicHorizonalContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHorizonalContainer
    internalVariantProps: PlasmicHorizonalContainer__VariantProps,
    internalArgProps: PlasmicHorizonalContainer__ArgProps
  }
);

export default PlasmicHorizonalContainer;
/* prettier-ignore-end */