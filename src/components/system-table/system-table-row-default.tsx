import StoreIcon from "@components/icon/store";
import PlusIcon from "@components/icon/plus";
import React from "react";

export default function SystemTableRowDefault() {
    return (
        <div className="animate-pulse w-full h-auto lg:h-[160px] flex flex-wrap justify-start leading-loose lg:leading-normal px-2 lg:p-0 text-black bg-white">
            <div className="w-full lg:hidden lg:pl-2 flex justify-start items-center font-bold capitalize">
                <div className="relative flex items-center py-5 w-full text-[16px]">
                    <span className="mr-4 flex-shrink">#</span>
                    <div className="flex-grow border-t-2 border-gray-600"></div>
                </div>
            </div>
            <div className="w-full lg:w-1/8 flex justify-around items-center">
                <div className="rounded-full bg-slate-200 h-[80px] w-[80px]"></div>
            </div>
            <div className="w-full lg:w-5/8 pl-2 capitalize pt-4 pr-[12px] pb-[12px] lg:pb-0">
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded mt-2"></div>
                <div className="space-y-3 mt-2">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    </div>
                </div>
            </div>
            <div className="w-1/12 pl-2 hidden lg:flex justify-start items-center font-semibold">
                <div className="w-full h-4 bg-slate-200 rounded"></div>
            </div>
            <div className="w-1/2 lg:w-1/12 pl-2 flex justify-center items-center">
                <a href={''} target="_blank">
                    <div
                        className="w-[32px] h-[32px] flex justify-center items-center">
                        <StoreIcon width="40px" height="40px" color="#1e40af"/>
                    </div>
                </a>
            </div>
            <div className="w-1/2 lg:w-1/12 flex justify-center items-center">
                <div className="w-auto h-auto cursor-pointer">
                    <PlusIcon
                        width="28px"
                        height="28px"
                        color="#b91c1c"
                    />
                </div>
            </div>
        </div>
    )
}