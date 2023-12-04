import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useAppSelector } from "../../hooks/redux-hooks";

const PriceTable = () => {
    const { prices } = useAppSelector((state) => state.prices);

    type TPrices = {
        price: number;
        startDate: string;
        endDate: string;
    };

    return (
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={0.5} />
            <Grid item xs={11}>
                <TableContainer sx={{ maxHeight: 550 }} component={Paper}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6">Date</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Time</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">Price</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {prices.map((row: TPrices) => (
                                <TableRow
                                    key={row.startDate.toString()}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Typography variant="subtitle1">
                                            {new Date(
                                                row.startDate
                                            ).getUTCMonth() +
                                                1 +
                                                "." +
                                                new Date(
                                                    row.startDate
                                                ).getUTCDate()}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            {new Date(
                                                row.startDate
                                            ).getUTCHours()}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            {row.price + " c"}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={0.5} />
        </Grid>
    );
};

export default PriceTable;
