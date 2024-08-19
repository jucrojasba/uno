import React from "react";

export interface ButtonIconsToggleProps {
    type: "button";
    icon: React.JSX.Element;
    target?: string;
    href?: string;
    onClick?: () => void;
}