import BuilderTableHead from "@components/builder-table/builder-table-head";
import React from "react";
import BuilderTableFoot from "@components/builder-table/builder-table-foot";

type BuilderTableProps = {
    rows: React.ReactNode,
    grandTotal: number
}

export default function BuilderTable({rows, grandTotal}: BuilderTableProps) {
    return (
        <div className="w-full h-auto shadow-2xl text-[14px]">
            <BuilderTableHead />
            <div className="w-full h-auto border border-gray-400 divide-y divide-gray-400">
                {rows}
            </div>
            {
                grandTotal !== 0 &&
                <BuilderTableFoot grandTotal={grandTotal} />
            }
        </div>
    )
}