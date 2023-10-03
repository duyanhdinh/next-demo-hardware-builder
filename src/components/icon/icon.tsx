import React from "react";

export type IconType = {
    color?: string,
    width?: string,
    height?: string,
    stroke?: string,
    strokeWidth?: number,
}

type SvgType = {
    viewBox: string,
    path: React.ReactNode
}
export default function Icon ({
    color = '#000',
    width = '20px',
    height = '20px',
    stroke = '#000',
    strokeWidth = 0,
    viewBox, path
}: IconType & SvgType) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            fill={color}
            width={width}
            height={height}
            strokeWidth={strokeWidth}
            stroke={stroke}
        >
            {path}
        </svg>
    );
}