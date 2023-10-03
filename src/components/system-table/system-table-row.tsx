import React from "react";
import PlusIcon from "@components/icon/plus";
import Image from 'next/image'
import StoreIcon from "@components/icon/store";
import CheckIcon from "@components/icon/check";
import {MotherboardData} from "@store/features/hardware/motherboard/motherboardSlice";
import {currencyFormat} from "@/utils/format/number";
import {RamData} from "@store/features/hardware/ram/ramSlice";
import {MonitorData} from "@store/features/hardware/monitor/monitorSlice";

export type SystemData = MotherboardData | RamData | MonitorData;

type SystemTableRowData<T> = {
    data: T[],
    infoCallback: (n: T) => React.ReactNode,
    pickedId: string,
    changeCallback: (id: string) => void
}

export function systemTableRows<T extends SystemData>({data, infoCallback, pickedId, changeCallback}: SystemTableRowData<T>): React.ReactNode {
    const list = data
        .map(item => <SystemTableRow
            key={item.id}
            data={item}
            info={infoCallback(item)}
            pickedId={pickedId}
            changeCallback={changeCallback}
        />)

    return (<>{list}</>)
}

type SystemTableRowType = {
    data: SystemData,
    info: React.ReactNode,
    pickedId: string,
    changeCallback: (id: string) => void
}

export default function SystemTableRow({data, info, pickedId, changeCallback}: SystemTableRowType) {
    return (
        <div className="w-full h-auto lg:h-[160px] flex flex-wrap justify-start leading-loose lg:leading-normal px-2 lg:p-0 text-black bg-white">
            <div className="w-full lg:hidden lg:pl-2 flex justify-start items-center font-bold capitalize">
                <div className="relative flex items-center py-5 w-full text-[16px]">
                    <span className="mr-4 flex-shrink">#</span>
                    <div className="flex-grow border-t-2 border-gray-600"></div>
                </div>
            </div>
            <div className="w-full lg:w-1/8 flex justify-around items-center">
                <Image
                    src={data.img_url}
                    width={80}
                    height={80}
                    alt="product"
                />
                <div className="block lg:hidden font-semibold"><span>{currencyFormat(data.price)}</span></div>
            </div>
            <div className="w-full lg:w-5/8 pl-2 capitalize pt-2 pr-[12px] pb-[12px] lg:pb-0">
                <div className="font-bold line-clamp-3">
                    {data.name}
                </div>
                <div className="text-[13px] leading-loose">
                    {info}
                </div>
            </div>
            <div className="w-1/12 pl-2 hidden lg:flex justify-start items-center font-semibold">
                <span>{currencyFormat(data.price)}</span></div>
            <div className="w-1/2 lg:w-1/12 pl-2 flex justify-center items-center">
                <a href={data.url} target="_blank">
                    <div
                        className="w-[32px] h-[32px] flex justify-center items-center">
                        <StoreIcon width="40px" height="40px" color="#1e40af"/>
                    </div>
                </a>
            </div>
            <div className="w-1/2 lg:w-1/12 flex justify-center items-center">
                <div className="w-auto h-auto cursor-pointer">
                    {
                        (pickedId === data.id) ? <CheckIcon width="28px" height="28px" color="#15803d"/>
                            : <div onClick={() => changeCallback(data.id)}><PlusIcon
                                width="28px"
                                height="28px"
                                color="#b91c1c"
                            /></div>
                    }
                </div>
            </div>
        </div>
    )
}