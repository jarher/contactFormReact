/* eslint-disable react/display-name */
export const withStyles = (Component) => {
  return (props) => {
    const style = {
      borderColor: "brand.greyMedium",
      _hover: { borderColor: "brand.greenMedium", borderWidth: "2px" },
      focusBorderColor: "brand.greenMedium",
      cursor: "pointer",
    };
    return <Component {...props} style={style} />;
  };
};
