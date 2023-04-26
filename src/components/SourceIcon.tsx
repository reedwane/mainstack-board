import * as React from "react";

interface ISourceIconProps {
  label: string;
}

const SourceIcon: React.FunctionComponent<ISourceIconProps> = ({ label }) => {
  let source = "";

  switch (label) {
    case "nigeria":
      source = "nigeria.png";
      break;
    case "ghana":
      source = "ghana.png";
      break;

    case "finland":
      source = "finland.png";
      break;
    case "germany":
      source = "germany.png";
      break;
    case "united kingdom":
      source = "uk.png";
      break;

    case "instagram":
      source = "instagram.png";
      break;

    case "linkedin":
      source = "linkedin.png";
      break;
    case "facebook":
      source = "facebook.png";
      break;
    default:
      source = "google.png";
  }

  return <img src={`/icons/${source}`} className="w-[20px]" />;
};

export default SourceIcon;
