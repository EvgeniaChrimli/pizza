import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="110" cy="121" r="103" />
    <rect x="9" y="249" rx="0" ry="0" width="216" height="18" />
    <rect x="11" y="285" rx="0" ry="0" width="218" height="57" />
    <rect x="15" y="365" rx="0" ry="0" width="85" height="32" />
    <rect x="113" y="359" rx="33" ry="33" width="114" height="38" />
  </ContentLoader>
);

export default Skeleton;
