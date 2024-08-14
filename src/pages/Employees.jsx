import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/data";
import { Header } from "../components";

const Employees = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Employees" />
            {/*for displaying all data*/}
            <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={["Search"]} width="auto">
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} /> {/*Add ablity to change page, and do all stuffs at this tag*/}
            </GridComponent>
        </div>
    );
};

export default Employees;
