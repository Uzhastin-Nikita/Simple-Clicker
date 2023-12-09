import React from "react";

export type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({ variant = "p", children }) => {
  const renderTypography = () => {
    switch (variant) {
      case "h1":
        return <h1>{children}</h1>;
      case "h2":
        return <h2>{children}</h2>;
      case "h3":
        return <h3>{children}</h3>;
      case "p":
      default:
        return <p>{children}</p>;
    }
  };

  return <>{renderTypography()}</>;
};

export default Typography;
