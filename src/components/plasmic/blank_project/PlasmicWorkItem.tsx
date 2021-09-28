// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5TUFsMr1jutmu8n3UiyCoV
// Component: M60KbPHn4A
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 5TUFsMr1jutmu8n3UiyCoV/projectcss
import * as sty from "./PlasmicWorkItem.module.css"; // plasmic-import: M60KbPHn4A/css

import theMoreYouKnowgifBSaxVfZry from "./images/theMoreYouKnowgif.gif"; // plasmic-import: bSAXVfZRY/picture

export type PlasmicWorkItem__VariantMembers = {};

export type PlasmicWorkItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicWorkItem__VariantsArgs;
export const PlasmicWorkItem__VariantProps = new Array<VariantPropType>();

export type PlasmicWorkItem__ArgsType = {
  test?: string;
  headline?: React.ReactNode;
  description?: React.ReactNode;
};

type ArgPropType = keyof PlasmicWorkItem__ArgsType;
export const PlasmicWorkItem__ArgProps = new Array<ArgPropType>(
  "test",
  "headline",
  "description"
);

export type PlasmicWorkItem__OverridesType = {
  root?: p.Flex<"div">;
  headline?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<"img">;
  description?: p.Flex<"div">;
  subheadline?: p.Flex<"div">;
};

export interface DefaultWorkItemProps {
  test?: string;
  headline?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

function PlasmicWorkItem__RenderFunc(props: {
  variants: PlasmicWorkItem__VariantsArgs;
  args: PlasmicWorkItem__ArgsType;
  overrides: PlasmicWorkItem__OverridesType;
  dataFetches?: PlasmicWorkItem__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"headline"}
        data-plasmic-override={overrides.headline}
        className={classNames(defaultcss.all, sty.headline)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.headline,
          className: classNames(sty.slotTargetHeadline)
        })}
      </div>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          src={theMoreYouKnowgifBSaxVfZry}
        />
      </div>

      <div
        data-plasmic-name={"description"}
        data-plasmic-override={overrides.description}
        className={classNames(defaultcss.all, sty.description)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.description
        })}
      </div>

      <div
        data-plasmic-name={"subheadline"}
        data-plasmic-override={overrides.subheadline}
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.subheadline
        )}
      >
        {"Enter some text"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "headline", "freeBox", "img", "description", "subheadline"],
  headline: ["headline"],
  freeBox: ["freeBox", "img"],
  img: ["img"],
  description: ["description"],
  subheadline: ["subheadline"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headline: "div";
  freeBox: "div";
  img: "img";
  description: "div";
  subheadline: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWorkItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWorkItem__VariantsArgs;
    args?: PlasmicWorkItem__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicWorkItem__Fetches;
  } & Omit<PlasmicWorkItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWorkItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicWorkItem__ArgProps,
      internalVariantPropNames: PlasmicWorkItem__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicWorkItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWorkItem";
  } else {
    func.displayName = `PlasmicWorkItem.${nodeName}`;
  }
  return func;
}

export const PlasmicWorkItem = Object.assign(
  // Top-level PlasmicWorkItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headline: makeNodeComponent("headline"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    description: makeNodeComponent("description"),
    subheadline: makeNodeComponent("subheadline"),

    // Metadata about props expected for PlasmicWorkItem
    internalVariantProps: PlasmicWorkItem__VariantProps,
    internalArgProps: PlasmicWorkItem__ArgProps
  }
);

export default PlasmicWorkItem;
/* prettier-ignore-end */