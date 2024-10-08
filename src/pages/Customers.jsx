import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/data";
import { Header } from "../components";
const Customers = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers" />
            {/*for displaying all data*/}
            <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={["Delete"]} editSettings={{ allowDeleting: true, allowEditing: true }} width="auto">
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} /> {/*Add ablity to change page, and do all stuffs at this tag*/}
            </GridComponent>
        </div>
    );
};

export default Customers;
