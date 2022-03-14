import { grey } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  icon: {
    marginRight: "20px",
  },

  buttons: {
    marginTop: "40px",
  },

  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: "200px",
    paddingTop: "56.25px",
  },
  cardContent: {
    flexGrow: 1,
  },

  footer: {
    boxShadow: "0px 0px 10px red",
    marginTop: "40px",
    backgroundColor: "#00008b",
    padding: "10px 0",
    color: "#fff",
  },
}));

export default useStyles;
