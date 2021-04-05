import {makeStyles} from "@material-ui/core/styles";

const useListStyles = makeStyles({
    headerRow: {
        borderLeftColor: "white",
        borderLeftWidth: 5,
        borderLeftStyle: "solid",
    },
    headerCell: {
        padding: "6px 8px 6px 8px",
    },
    rowCell: {
        padding: "6px 8px 6px 8px",
    },
    comment: {
        maxWidth: "18em",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
});
export default useListStyles