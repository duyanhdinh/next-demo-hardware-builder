import {MotherboardData} from "@store/features/hardware/motherboard/motherboardSlice";

const data: MotherboardData[] = [
    {
        id: 'mb01',
        name: 'ASRock MB TRX40 Creator AMD Ryzen Threadripper sTRX4 TRX40 Max256GB DR4 ATX',
        img_url: 'https://m.media-amazon.com/images/I/51GC1-pJzWL._SL75_.jpg',
        price: 1549,
        url: 'https://www.amazon.com/dp/B081JX35ZK',
        info: {
            brand: 'ASRock',
            model: 'TRX40 CREATOR',
            chipset: 'AMD X570',
            form_factor: 'ATX',
            socket_type: 'sTRX4',
            memory_slots: 8,
            max_memory_gb: 256
        }
    },
    {
        id: 'mb02',
        name: 'ASUS ROG Zenith II Extreme Alpha TRX40 Gaming AMD 3rd Gen Ryzen Threadripper sTRX4 EATX Motherboard with 16 Infineon Power Stages, PCIe 4.0, Wi-Fi 6 (802.11ax), USB 3.2 Gen 2x2 and Aura Sync RGB',
        img_url: 'https://m.media-amazon.com/images/I/418Jiaw3qXL._SL75_.jpg',
        price: 962.99,
        url: 'https://www.amazon.com/dp/B083ZC9L91',
        info: {
            brand: 'ASUS',
            model: 'ROG ZENITH II EXTREME ALPHA',
            chipset: 'AMD TRX40',
            form_factor: 'Extended ATX',
            socket_type: 'sTRX4',
            memory_slots: 8,
            max_memory_gb: 256
        }
    },
    {
        id: 'mb03',
        name: 'Asus ROG Strix TRX40-E Gaming AMD 3rd Gen AMD Ryzen Threadripper sTR4 ATX Motherboard with 16 Power Stages, Onboard WiFi 6 802.11Ax, 2.5Gbps, USB 3.2 Gen2, 3X M.2, OLED and Aura Sync RGB Lighting',
        img_url: 'https://m.media-amazon.com/images/I/41xkqVA4oZL._SL75_.jpg',
        price: 962.6,
        url: 'https://www.amazon.com/dp/B08165D9R7',
        info: {
            brand: 'ASUS',
            model: 'ROG STRIX TRX40-E GAMING',
            chipset: 'AMD TRX40',
            form_factor: 'ATX',
            socket_type: 'sTRX4',
            memory_slots: 8,
            max_memory_gb: 256
        }
    },
    {
        id: 'mb04',
        name: 'GIGABYTE TRX40 AORUS Xtreme (sTRX/AMD/TRX40/Fins-Array Heatsink/16+3 Phases Infineon Digital VRM/Gen 4 AIC with 4 X M.2 NVMe/Intel WiFi 6/Intel Dual 10GbE LAN/XL-ATX/Motherboard)',
        img_url: 'https://m.media-amazon.com/images/I/41V59KIAcML._SL75_.jpg',
        price: 1599.99,
        url: 'https://www.amazon.com/dp/B081JDP378',
        info: {
            brand: 'Gigabyte',
            model: 'TRX40 AORUS XTREME',
            chipset: 'AMD TRX40',
            form_factor: 'Extended ATX',
            socket_type: 'sTRX4',
            memory_slots: 8,
            max_memory_gb: 256
        }
    },
    {
        id: 'mb05',
        name: 'GIGABYTE TRX40 AORUS Xtreme (sTRX/AMD/TRX40/Fins-Array Heatsink/16+3 Phases Infineon Digital VRM/Gen 4 AIC with 4 X M.2 NVMe/Intel WiFi 6/Intel Dual 10GbE LAN/XL-ATX/Motherboard)',
        img_url: 'https://m.media-amazon.com/images/I/41V59KIAcML._SL75_.jpg',
        price: 1999.99,
        url: 'https://www.amazon.com/dp/B081JDP378',
        info: {
            brand: 'Gigabyte',
            model: 'TRX40 AORUS XTREME',
            chipset: 'AMD TRX40',
            form_factor: 'Extended ATX',
            socket_type: 'sTRX4',
            memory_slots: 12,
            max_memory_gb: 256
        }
    },
    {
        id: 'mb06',
        name: 'GIGABYTE TRX40 AORUS Xtreme (sTRX/AMD/TRX40/Fins-Array Heatsink/16+3 Phases Infineon Digital VRM/Gen 4 AIC with 4 X M.2 NVMe/Intel WiFi 6/Intel Dual 10GbE LAN/XL-ATX/Motherboard)',
        img_url: 'https://m.media-amazon.com/images/I/41V59KIAcML._SL75_.jpg',
        price: 2499.99,
        url: 'https://www.amazon.com/dp/B081JDP378',
        info: {
            brand: 'Gigabyte',
            model: 'TRX40 AORUS XTREME',
            chipset: 'AMD TRX40',
            form_factor: 'Extended ATX',
            socket_type: 'sTRX4',
            memory_slots: 16,
            max_memory_gb: 512
        }
    },
]

export async function GET() {
    return Response.json(data)
}