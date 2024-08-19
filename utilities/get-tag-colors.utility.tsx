import { IGlobalThemeAttributes } from "@/models/GlobalTheme";
import { GlobalDarkTheme, GlobalTheme } from "@/app/GlobalStyling";

// Definition of existent Tags Array and TagColors Object
const Tags = ['Toys', 'Games'];

function getTagsTheme(){
  if (localStorage.getItem('theme')=== 'dark'){
    const TagColors = GlobalDarkTheme.tagsColor;
    return TagColors
  }else {
    const TagColors = GlobalTheme.tagsColor;
    return TagColors
  }
}

// Function for setting a color to each existent Tag
function setColor(): IGlobalThemeAttributes {
  const TagWithColors: IGlobalThemeAttributes = {};
  const colors = Object.values(getTagsTheme());

  // forEach to assign each tag a color 'tag[color]'
  Tags.forEach((tag, index) => {
    index = index + 1
    // Checks if there are more Colors than Tags. If 'true', we reuse the default color (Gray 50% Opacity)
    if (index < colors.length) {
      TagWithColors[tag] = colors[index];
    } else {
      TagWithColors[tag] = colors[0];
    }
  });
  return TagWithColors;
}

// Function for getting the color for our Tag
export function getTagColor(label: string): string {
  const TagWithColors = setColor();

  // Checks if the entered Tag exists in the system, if not, return the default color (Gray 50% Opacity)
  if (label in TagWithColors) {
    return TagWithColors[label];
  } else {
    return getTagsTheme().tagQuaternary;
  }
}
