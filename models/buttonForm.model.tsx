export interface ButtonFormProps {
    type: "submit" | "button";
    label: string;
    onClick?: () => void;
}