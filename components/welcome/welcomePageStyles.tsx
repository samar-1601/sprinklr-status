import { BlockProps } from "baseui/block";

export const contentBlock: BlockProps = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F6F6F7",
};

export const imageProps: BlockProps = {
  width: "600px",
  alignSelf: "center",
  overrides: {
    Block: {
      style: {
        objectFit: "contain",
      },
    },
  },
  height: "250px",
};

export const textProps: BlockProps = {
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
  width: "400px",
  position: "relative",
};

export const rowContent: BlockProps = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "25px",
  marginBottom: "25px",
  paddingLeft: "15px",
  paddingRight: "15px",
  flexWrap: true,
};

export const headerStyle: BlockProps = {
  margin: "10px",
  marginLeft: "0px",
};
export const welcomeHeaderSecondHalfStyle: BlockProps = {
  overrides: {
    Block: {
      style: {
        display: "flex",
        gap: "20px",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "40px 100px",
      },
    },
  },
};
export const welcomeHeaderWrapper: BlockProps = {
  overrides: {
    Block: {
      style: {
        backgroundColor: "rgb(20,47,93)",
        color: "white",
      },
    },
  },
};
export const signInButton: BlockProps = {
  onMouseEnter: (event) => {
    if (event.target) {
      (event.currentTarget as HTMLElement).style.backgroundColor = "white";
      (event.currentTarget as HTMLElement).style.color = "rgb(20,47,93)";
    }
  },
  onMouseLeave: (event) => {
    if (event.target) {
      (event.currentTarget as HTMLElement).style.backgroundColor =
        "rgb(20,47,93)";
      (event.currentTarget as HTMLElement).style.color = "white";
    }
  },
  overrides: {
    Block: {
      style: {
        backgroundColor: "rgb(20,47,93)",
        border: "1px solid white",
        cursor: "pointer",
        padding: "8px 36px",
        borderRadius: "28px",
        marginTop: "20px",
        alignSelf: "flex-start",
      },
    },
  },
};
export const welcomeHeaderTextWrapper: BlockProps = {
  overrides: {
    Block: {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "space-around",
        alignItems: "center",
        width: "450px",
      },
    },
  },
};
export const welcomeHeaderBigText: BlockProps = {
  overrides: {
    Block: {
      style: {
        fontSize: "3rem",
        lineHeight: "3.525rem",
        fontWeight: 700,
      },
    },
  },
};
export const welcomeHeaderSiteName: BlockProps = {
  overrides: {
    Block: {
      style: {
        fontSize: "3.5rem",
        lineHeight: "3.525rem",
        fontWeight: 500,
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgb(20,47,93))",
        color: "white",
        padding: "20px 0px 30px 0px",
        textAlign: "center",
      },
    },
  },
};
export const welcomeHeaderMediumText: BlockProps = {
  overrides: {
    Block: {
      style: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: "1.5rem",
        marginTop: "20px",
      },
    },
  },
};
export const headerImageWrapper: BlockProps = {
  overrides: {
    Block: {
      style: {
        // borderRadius: "8px",
      },
    },
  },
};
