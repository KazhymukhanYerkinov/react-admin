import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    card: {
        overflow: "visible"
    },

    session: {
        position: "relative",
        zIndex: 4000,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
    },

    background: {
        backgroundColor: theme.palette.primary.main,
    },

    content: {
        padding: `40px ${theme.spacing(1)}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 0 auto",
        flexDirection: "column",
        minHeight: "100%",
        textAlign: "center"
    },
    wrapper: {
        flex: "none",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto"
    },
    logo: {
        display: "flex",
        flexDirection: "column",
    },
    fullWidth: {
        width: "100%",
    },
    buttonText: {
        fontSize: 12,
    },
    errorMessage: {
        color: "red",
        border: "1px solid red",
        marginTop: "2%",
        padding: "2%",
    }
}));