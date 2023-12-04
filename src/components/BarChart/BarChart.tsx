import { Grid } from "@mui/material";
import { useAppSelector } from "../../hooks/redux-hooks";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const BarChart = () => {
    const { prices } = useAppSelector((state) => state.prices);
    const pricesArray = prices.map(({ price }) => price);

    const datesArray = prices.map(({ startDate }) => startDate);

    const min = Math.min(...prices.map(({ price }) => price));
    const max = Math.max(...prices.map(({ price }) => price));
    const average = pricesArray.reduce((a, b) => a + b, 0) / pricesArray.length;

    const series = [
        {
            name: "Electricity price",
            data: pricesArray,
        },
    ];
    const options: ApexOptions = {
        chart: {
            type: "bar",
            height: 350,
        },
        tooltip: { x: { show: true, format: "dd MMM - HH:mm" } },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        {
                            from: -1000,
                            to: average,
                            color: "#00d4ff",
                        },
                        {
                            from: average,
                            to: 1000,
                            color: "#269ffb",
                        },
                        {
                            from: min,
                            to: min,
                            color: "#00ff99",
                        },
                        {
                            from: max,
                            to: max,
                            color: "#ff5050",
                        },
                    ],
                },
                columnWidth: "80%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            title: {
                text: "Price c/Kwh",
            },
            labels: {
                formatter: function (y: any) {
                    return y + " c";
                },
            },
        },
        xaxis: {
            type: "datetime",
            labels: {
                datetimeFormatter: { hour: "HH" },
            },

            categories: datesArray,
        },
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={0.5} />
            <Grid item xs={11}>
                <div id="chart">
                    <ReactApexChart
                        options={options}
                        series={series}
                        type="bar"
                        height={350}
                    />
                </div>
            </Grid>
            <Grid item xs={0.5} />
        </Grid>
    );
};

export default BarChart;
