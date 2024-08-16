import { GlobalTheme } from "@/app/GlobalStyling";
import styled from "styled-components"

export function getTagColor(label: any) {
  switch (label) {
    case "#Toys":
      return GlobalTheme.tagsColor.tagQuinary;
    case "#Games":
      return GlobalTheme.tagsColor.tagSenary;
    default:
      return GlobalTheme.pageColors.widgetsQuaternary;
  }
}