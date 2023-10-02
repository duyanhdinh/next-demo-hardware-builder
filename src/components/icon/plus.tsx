import Icon, {IconType} from "@components/icon/icon";

const path = <path
    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
const viewBox = "0 0 448 512";

export default function PlusIcon({
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