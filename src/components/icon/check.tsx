import Icon, {IconType} from "@components/icon/icon";

const path = <path
    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
const viewBox = "0 0 448 512";

export default function CheckIcon({
                                      color,
                                      width,
                                      height,
                                      stroke,
                                      strokeWidth
                                  }: IconType) {
    return (
        <Icon path={path} viewBox={viewBox} color={color} stroke={stroke} strokeWidth={strokeWidth} width={width}
              height={height}/>
    )
}