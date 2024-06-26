import { otuiAnchorPropertyValues } from "./otuiAnchorPropertyValues";

type OtuiPropertyValue = {
  label: string;
  detail: string;
  insertText: string;
};

type OtuiProperty = {
  label: string;
  detail: string;
  insertText: string;
  relatedValues?: OtuiPropertyValue[];
};

const otuiCommonProperties: OtuiProperty[] = [
  {
    label: "!text",
    detail: "Property: Sets the text of the component",
    insertText: "!text: tr('')",
  },
  {
    label: "@onClick",
    detail: "Property: Sets the onClick event of the component",
    insertText: "@onClick: function()"
  },
  {
    label: "@onSetup",
    detail: "Property: Sets the onSetup event of the component",
    insertText: "@onSetup: function()"
  },
  {
    label: "@onEscape",
    detail: "Property: Sets the onEscape event of the component",
    insertText: "@onEscape: function()"
  },
  {
    label: "@onEnter",
    detail: "Property: Sets the onEnter event of the component",
    insertText: "@onEnter: function()"
  },
  {
    label: "@onFocusChange",
    detail: "Property: Sets the onFocusChange event of the component",
    insertText: "@onFocusChange: function()"
  },
  {
    label: "@onClose",
    detail: "Property: Sets the onClose event of the component",
    insertText: "@onClose: function()"
  },
  { 
    label: '$!on', 
    detail: 'Property: Sets the locked property in the component',
    insertText: '$!on:\n  property:' 
  },
  { 
    label: '$on', 
    detail: 'Property: $on Sets the unlocked property in the component OR on: true / false',
    insertText: '\\$on:\n  property:' 
  },
  { 
    label: 'on', 
    detail: 'Property: $on Sets the unlocked property in the component OR on: true / false',
    insertText: 'on:\n  property:' 
  },
  { 
    label: '$mobile', 
    detail: 'Property: Sets the mobile layout property in the component',
    insertText: '\\$mobile:\n  property:'
  },
  {
    label: "anchors.fill",
    detail: "Property: Sets the component to fill the parent component",
    insertText: "anchors.fill: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.centerIn",
    detail: "Property: Centers the component in the parent component",
    insertText: "anchors.centerIn: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.top",
    detail: "Property: Sets the top anchor of the component",
    insertText: "anchors.top: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.bottom",
    detail: "Property: Sets the bottom anchor of the component",
    insertText: "anchors.bottom: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.left",
    detail: "Property: Sets the left anchor of the component",
    insertText: "anchors.left: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.right",
    detail: "Property: Sets the right anchor of the component",
    insertText: "anchors.right: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.topMargin",
    detail: "Property: Sets the top margin of the component",
    insertText: "anchors.topMargin: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.bottomMargin",
    detail: "Property: Sets the bottom margin of the component",
    insertText: "anchors.bottomMargin: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.leftMargin",
    detail: "Property: Sets the left margin of the component",
    insertText: "anchors.leftMargin: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.rightMargin",
    detail: "Property: Sets the right margin of the component",
    insertText: "anchors.rightMargin: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.fill",
    detail: "Property: Sets the component to fill the parent component",
    insertText: "anchors.fill: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.margins",
    detail: "Property: Sets the margins of the component",
    insertText: "anchors.margins: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.horizontalCenter",
    detail: "Property: Sets the horizontal center of the component",
    insertText: "anchors.horizontalCenter: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.verticalCenter",
    detail: "Property: Sets the vertical center of the component",
    insertText: "anchors.verticalCenter: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.horizontalCenterMargin",
    detail: "Property: Sets the horizontal center margin of the component",
    insertText: "anchors.horizontalCenterMargin: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.verticalCenterMargin",
    detail: "Property: Sets the vertical center margin of the component",
    insertText: "anchors.verticalCenterMargin: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.baseline",
    detail: "Property: Sets the baseline of the component",
    insertText: "anchors.baseline: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.baselineMargin",
    detail: "Property: Sets the baseline margin of the component",
    insertText: "anchors.baselineMargin: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "anchors.leftBaseline",
    detail: "Property: Sets the left baseline of the component",
    insertText: "anchors.leftBaseline: ",
    relatedValues: otuiAnchorPropertyValues,
  },
  {
    label: "auto-focus",
    detail: "Property: Sets the auto-focus of the component",
    insertText: "auto-focus: first",
  },
  {
    label: "anchors.rightBaseline",
    detail: "Property: Sets the right baseline of the component",
    insertText: "anchors.rightBaseline: ",
  },
  {
    label: "background-color",
    detail: "Property: Sets the background color of the component",
    insertText: "background-color: ",
  },
  {
    label: "border",
    detail: "Property: Sets the border of the component",
    insertText: "border: 1 black",
  },
  {
    label: "border-width",
    detail: "Property: Sets the border width of the component",
    insertText: "border-width: ",
  },
  {
    label: "border-color",
    detail: "Property: Sets the border color of the component",
    insertText: "border-color: ",
  },
  {
    label: "checked",
    detail: "Property: Add checked true / false",
    insertText: "checked: true",
  },
  {
    label: "enabled",
    detail: "Property: Sets the enabled of the component",
    insertText: "enabled: ",
  },
  {
    label: "font",
    detail: "Property: Sets the font of the component",
    insertText: "font: ",
  },
  {
    label: "focusable",
    detail: "Property: Sets if the component is focusable or not",
    insertText: "focusable: ",
  },
  {
    label: "size",
    detail: "Property: Sets the size: x y of the component ",
    insertText: "size: ",
  },
  {
    label: "opacity",
    detail: "Property: Sets the opacity of the component",
    insertText: "opacity: ",
  },
  {
    label: "color",
    detail: "Property: Sets the color of the component",
    insertText: "color: ",
  },
  {
    label: "change-cursor-image",
    detail: "Property: Sets the change-cursor-image of the component true/false",
    insertText: "change-cursor-image: true",
  },
  {
    label: "clipping",
    detail: "Property: Sets the clipping of the component true/false",
    insertText: "clipping: true",
  },
  {
    label: "draggable",
    detail: "Property: Sets if the component is draggable or not true/false",
    insertText: "draggable: true",
  },
  {
    label: "horizontal-scrollbar",
    detail: "Property: Sets the horizontal scrollbar of the component true/false",
    insertText: "horizontal-scrollbar: true",
  },
  {
    label: "text-offset",
    detail: "Property: Sets the text offset in the component",
    insertText: "text-offset: ",
  },
  {
    label: "text-align",
    detail:"Property: Sets the text alignment in the component, can be left, right or center",
    insertText: "text-align: ",
  },
  {
    label: "text-auto-resize",
    detail:"Property: Sets the text alignment in the component, can be left, right or center",
    insertText: "text-auto-resize: ",
  },
  {
    label: "text-wrap",
    detail:"Property: Sets the text alignment in the component, can be left, right or center",
    insertText: "text-wrap: ",
  },
  {
    label: "icon",
    detail: "Property: Sets the icon of the component",
    insertText: "icon: ",
  },
  {
    label: "image-source",
    detail: "Property: Sets the image source of the component",
    insertText: "image-source: ",
  },
  {
    label: "image-border",
    detail: "Property: Sets the image border of the component",
    insertText: "image-border: ",
  },
  {
    label: "image-border-top",
    detail: "Property: Sets the image top border of the component",
    insertText: "image-border-top: ",
  },
  {
    label: "image-border-right",
    detail: "Property: Sets the image right border of the component",
    insertText: "image-border-right: ",
  },
  {
    label: "image-border-bottom",
    detail: "Property: Sets the image bottom border of the component",
    insertText: "image-border-bottom: ",
  },
  {
    label: "image-border-left",
    detail: "Property: Sets the image left border of the component",
    insertText: "image-border-left: ",
  },
  {
    label: "image-clip",
    detail: "Property: Sets the image clip of the component",
    insertText: "image-clip: ",
  },
  {
    label: "id",
    detail: "Property: Sets the id: variable of the component",
    insertText: "id: ",
  },
  {
    label: "margin",
    detail: "Property: Sets the margin of the component",
    insertText: "margin: ",
  },
  {
    label: "margin-top",
    detail: "Property: Sets the top margin of the component",
    insertText: "margin-top: ",
  },
  {
    label: "margin-left",
    detail: "Property: Sets the left margin of the component",
    insertText: "margin-left: ",
  },
  {
    label: "margin-right",
    detail: "Property: Sets the right margin of the component",
    insertText: "margin-right: ",
  },
  {
    label: "margin-bottom",
    detail: "Property: Sets the bottom margin of the component",
    insertText: "margin-bottom: ",
  },
  {
    label: "layout",
    detail: "Property: Sets the layout of the component",
    insertText: "layout: ",
  },
  {
    label: "multi-line",
    detail: "Property: Sets the multi-line of the component",
    insertText: "multi-line: true",
  },
  {
    label: "padding-top",
    detail: "Property: Sets the top padding of the component",
    insertText: "padding-top: ",
  },
  {
    label: "padding-left",
    detail: "Property: Sets the left padding of the component",
    insertText: "padding-left: ",
  },
  {
    label: "padding-right",
    detail: "Property: Sets the right padding of the component",
    insertText: "padding-right: ",
  },
  {
    label: "padding-bottom",
    detail: "Property: Sets the bottom padding of the component",
    insertText: "padding-bottom: ",
  },
  {
    label: "phantom",
    detail: "Property: Sets the phantom of the component",
    insertText: "phantom: ",
  },
  {
    label: "percent",
    detail: "Property: Sets the percent of the component",
    insertText: "percent: ",
  },
  {
    label: "pixels-scroll",
    detail: "Property: Sets the pixels scroll of the component, true/false",
    insertText: "pixels-scroll: true",
  },
  {
    label: "rotation",
    detail: "Property: Sets the rotation of the component",
    insertText: "rotation: ",
  },
  {
    label: "step",
    detail: "Property: Sets the step of the component",
    insertText: "step: ",
  },
  {
    label: "tooltip",
    detail: "Property: Sets the tooltip of the component",
    insertText: "tooltip: ",
  },
  {
    label: "width",
    detail: "Property: Sets the width of the component",
    insertText: "width: ",
  },
  {
    label: "height",
    detail: "Property: Sets the height of the component",
    insertText: "height: ",
  },
  {
    label: "vertical-scrollbar",
    detail: "Property: Sets the vertical scrollbar of the component",
    insertText: "vertical-scrollbar: ",
  },
  {
    label: "visible",
    detail: "Property: Sets the visibility of the component",
    insertText: "visible: ",
  },
  {
    label: "virtual",
    detail: "Property: Sets the virtual of the component",
    insertText: "virtual: ",
  },
  // ... Other common properties
];

export default otuiCommonProperties;