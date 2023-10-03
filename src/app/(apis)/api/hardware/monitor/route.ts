import {MonitorData} from "@store/features/hardware/monitor/monitorSlice";

const data: MonitorData[] = [
    {
        id: 'mnt01',
        name: 'Acer SB241Y Abi 23.8" Full HD (1920 x 1080) VA Zero-Frame Home Office Monitor | AMD FreeSync Technology | Ultra-Thin Stylish Design',
        img_url: 'https://m.media-amazon.com/images/I/41eBqSi3fFL._SL75_.jpg',
        price: 109.49,
        url: 'https://amazon.com/dp/B09MZMGG1S',
        info: {
            brand: 'Acer',
            model: 'UM.QS1AA.A01',
            screen_size: 23.8,
            resolution: '1920 x 1080',
            aspect_ratio: '16:9',
            response_time_ms: 1,
            panel: 'VA',
            refresh_rate: 75,
        }
    },
    {
        id: 'mnt02',
        name: 'HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports',
        img_url: 'https://m.media-amazon.com/images/I/31PTviHMeUL._SL75_.jpg',
        price: 169.99,
        url: 'https://amazon.com/dp/B072M34RQC',
        info: {
            brand: 'HP',
            model: 'VH240a',
            screen_size: 23.8,
            resolution: '1920 x 1080',
            aspect_ratio: '16:9',
            response_time_ms: 5,
            panel: 'IPS',
            refresh_rate: 60,
        }
    },
    {
        id: 'mnt03',
        name: 'SAMSUNG 27" Odyssey G55A QHD 165Hz 1ms FreeSync Curved Gaming Monitor with HDR 10, Futuristic Design for Any Desktop (LS27AG550ENXZA)',
        img_url: 'https://m.media-amazon.com/images/I/41vd9JOgIQL._SL75_.jpg',
        price: 313.70,
        url: 'https://amazon.com/dp/B09TS2DLVN',
        info: {
            brand: 'SAMSUNG',
            model: 'LS27AG550ENXZA',
            screen_size: 27,
            resolution: '2560 x 1440',
            aspect_ratio: '16:9',
            response_time_ms: 1,
            panel: 'VA',
            refresh_rate: 165,
        }
    },
];

export async function GET () {
    return Response.json(data);
}