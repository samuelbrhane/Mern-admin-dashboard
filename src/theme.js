// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            background: {
              default: "#04303F",
            },
          }
        : {
            // palette values for light mode

            background: {
              default: "#F8F9FA",
            },
          }),
    },
  };
};
