import {RamData} from "@store/features/hardware/ram/ramSlice";

const data: RamData[] = [
    {
        id: 'r01',
        name: 'XPG Lancer DDR5 RGB 7200MHz 32GB (2x16GB) CL34-46-46 UDIMM 288-Pins Desktop SDRAM DDR5 Dual Channel RAM Kit Black Heatsink (AX5U7200C3416G-DCLARBK)',
        img_url: 'https://m.media-amazon.com/images/I/41Tmgrj0cvL._SL75_.jpg',
        price: 188.18,
        url: 'https://amazon.com/dp/B0BSVSZ8JD',
        info: {
            brand: 'XPG',
            model: 'AX5U7200C3416G-DCLARBK',
            size: 32,
            quantity: '2 x 16 GB',
            type: 'DDR5',
            speed_mhz: 7200,
            dimm: '288-PIN',
            cas: 'CL34',
        }
    },
    {
        id: 'r02',
        name: 'G.Skill Trident Z5 RGB Series 32GB 2 x 16GB 288-Pin SDRAM DDR5 6400 CL32-39-39-102 1.40V Dual Channel Desktop Memory',
        img_url: 'https://m.media-amazon.com/images/I/31JXcCFBoFL._SL75_.jpg',
        price: 219.99,
        url: 'https://amazon.com/dp/B09QS2K59B',
        info: {
            brand: 'G.Skill',
            model: 'Trident Z5 RGB',
            size: 32,
            quantity: '2 x 16 GB',
            type: 'DDR5',
            speed_mhz: 6400,
            dimm: '288-PIN',
            cas: 'CL32',
        }
    },
    {
        id: 'r03',
        name: 'TEAMGROUP T-Force Delta RGB DDR5 Ram 32GB Kit 2x16GB 6000MHz CL40 Desktop Memory Module Ram for 600 Series Chipset',
        img_url: 'https://m.media-amazon.com/images/I/41GuP4h6IfL._SL75_.jpg',
        price: 474.41,
        url: 'https://amazon.com/dp/B09LHQL3GF',
        info: {
            brand: 'TEAMGROUP',
            model: 'FF3D532G6000HC38ADC01',
            size: 32,
            quantity: '2 x 16 GB',
            type: 'DDR5',
            speed_mhz: 6000,
            dimm: '288-PIN',
            cas: 'CL40',
        }
    },
]

export async function GET() {
    return Response.json(data)
}