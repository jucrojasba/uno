import { GlobalTheme } from "@/app/GlobalStyling";
import styled from "styled-components"

const Tags = ['#Toys','#Games']

export function getTagColor(label: any) {
  switch (label) {
    case Tags[0]:
      return GlobalTheme.tagsColor.tagQuinary;
    case Tags[1]:
      return GlobalTheme.tagsColor.tagSenary;
    default:
      return GlobalTheme.pageColors.widgetsQuaternary;
  }
}