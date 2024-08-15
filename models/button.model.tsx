export interface ButtonProps {
    type: "submit" | "button";
    label: string;
    onClick?: () => void;
}