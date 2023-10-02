import React from "react";
import Link from "next/link";
import PlusIcon from "@components/icon/plus";
import Image from 'next/image'
import StoreIcon from "@components/icon/store";
import TrashIcon from "@components/icon/trash";
import {SystemData} from "@components/system-table/system-table-row";
import {currencyFormat} from "@/utils/format/number";

type BuilderTableRowDefaultType = {
    name: string,
    href: string,
}

type BuilderTableRowType = BuilderTableRowDefaultType & {
    data: SystemData,
    info: React.ReactNode,
    removeHandle: () => void
}

const RowDefault = ({name, href}: BuilderTableRowDefaultType) => (
    <div className="w-full h-[60px] flex justify-start">
        <div className="w-1/8 pl-2 flex justify-start items-center font-bold capitalize"><span>{name}</span></div>
        <div className="w-1/8 pl-8 flex justify-start items-center">
            <Link href={href}>
                <div
                    className="w-[32px] h-[32px] border border-gray-500 bg-blue-950 flex justify-center items-center rounded-lg hover:bg-blue-700 stroke-2">
                    <PlusIcon color={'#fff'} strokeWidth={12} stroke={'#fff'}/>
                </div>
            </Link>
        </div>
    </div>
)

const RowData = ({name, data, info, removeHandle}: BuilderTableRowType) => {
    return (
        <div className="w-full h-[160px] flex justify-start">
            <div className="w-1/8 pl-2 flex justify-start items-center font-bold capitalize"><span>{name}</span></div>
            <div className="w-1/8 flex justify-center items-center">
                <Image
                    src={data.img_url}
                    width={80}
                    height={80}
                    alt="product"
                />
            </div>
            <div className="w-1/2 pl-2 capitalize pt-2 pr-[12px]">
                <div className="font-bold">
                    {data.name}
                </div>
                <div className="text-[13px] leading-loose">
                    {info}
                </div>
            </div>
            <div className="w-1/12 pl-2 flex justify-start items-center font-semibold"><span>{currencyFormat(data.price)}</span></div>
            <div className="w-1/12 pl-2 flex justify-center items-center">
                <a href={data.url} target="_blank">
                    <div
                        className="w-[32px] h-[32px] flex justify-center items-center">
                        <StoreIcon width="40px" height="40px" color="#1e40af" />
                    </div>
                </a>
            </div>
            <div className="w-1/12 flex justify-center items-center">
                <div className="w-auto h-auto cursor-pointer" onClick={() => removeHandle()}>
                    <TrashIcon width="28px" height="28px" color="#b91c1c" />
                </div>
            </div>
        </div>
    )
}

export default function BuilderTableRow({name, href, data, info, removeHandle}: BuilderTableRowType) {
    return (
        <>
            {
                (typeof data.id === "undefined") ? <RowDefault name={name} href={href}/>
                    : <RowData name={name} href={href} data={data} info={info} removeHandle={removeHandle}/>
            }
        </>
    )
}