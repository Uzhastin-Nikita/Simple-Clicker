import React from "react";
import { images } from "../../utils/ImageProvider";

export type ImageButtonProps = {
  onClick: () => void;
  imageKey: string;
  alt?: string;
  disabled?: boolean;
};

export const ImageButton: React.FC<ImageButtonProps> = ({
  onClick,
  imageKey,
  alt,
  disabled,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundImage: `url(${images[imageKey]})`,
    backgroundSize: "cover",
    width: "100px",
    height: "100px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick} disabled={disabled}>
      {/* Optionally, you can include an alt text */}
      {alt && <span style={{ display: "none" }}>{alt}</span>}
    </button>
  );
};
