import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend, LineSeries } from "@syncfusion/ej2-react-charts";
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from "../../data/data";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
const Area = () => {
    const { currentMode } = useStateContext();
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
            <Header category="Chart" title="Inflation Rate" />
            <ChartComponent id="line-chart" height="420px" primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} background={currentMode === "Dark" ? "#33373e" : "#fff"}>
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Area;
