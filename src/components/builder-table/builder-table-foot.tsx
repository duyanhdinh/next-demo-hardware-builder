import React from "react";
import {currencyFormat} from "@/utils/format/number";

type BuilderTableFootType = {
    grandTotal: number
}

export default function BuilderTableFoot({grandTotal}: BuilderTableFootType) {
    return (
        <div className="w-full h-[40px] bg-gray-800 flex text-white font-bold">
            <div className="w-3/4 pl-2 flex justify-start items-center capitalize">Grant total</div>
            <div className="w-1/4 pl-2 flex justify-start items-center">{currencyFormat(grandTotal)}</div>
        </div>
    )
}