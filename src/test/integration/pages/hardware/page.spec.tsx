import Page from "@pages/[hardware]/page";
import {RELEASE_URI_HARDWARE} from "@const/dynamic-route/hardware";
import {MotherboardData} from "@store/features/hardware/motherboard/motherboardSlice";
import {renderWithProviders} from "@/test/utils/store-provider-test";
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import {API_HARDWARE} from "@const/api";
import {act, screen} from "@testing-library/react";
import {vi} from "vitest";
import {userEvent} from "@testing-library/user-event";
import {HARDWARE_STORE} from "@const/localStorage";

const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');

const motherboardData: MotherboardData[] = [
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
        name: 'ASUS ROG Zenith II Extreme Alpha TRX40 Gaming AMD 3rd Gen Ryzen Threadripper',
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
    }
];

export const handlers = [
    http.get(API_HARDWARE.MOTHERBOARD, async () => {
        return HttpResponse.json(motherboardData);
    })
];

const server = setupServer(...handlers);

describe('Hardware page test suite', () => {
    let container: HTMLElement;

    beforeAll(() => server.listen());

    afterEach(() => {
        server.resetHandlers();
        localStorage.clear();
    });

    afterAll(() => server.close());

    const setup = async (hardware: string) => {
        await act(async () => {
            container = renderWithProviders(<Page params={{hardware}} />).container;
        });
    };

    describe('Motherboard page test suite', () => {

        it('should show and can picked motherboard', async () => {
            const user = userEvent.setup();
            await setup(RELEASE_URI_HARDWARE.MOTHERBOARD);
            const pickIcon = screen.getByRole('pick-new-system', {name: 'mb01'});

            expect(getItemSpy).toHaveBeenCalled();
            expect(getItemSpy).toHaveBeenCalledWith(HARDWARE_STORE.MOTHERBOARD);
            expect(screen.getByText('ASRock MB TRX40 Creator AMD Ryzen Threadripper sTRX4 TRX40 Max256GB DR4 ATX'));
            expect(screen.getByText('ASUS ROG Zenith II Extreme Alpha TRX40 Gaming AMD 3rd Gen Ryzen Threadripper'));
            expect(pickIcon).toBeInTheDocument();

            await user.click(pickIcon);

            expect(pickIcon).not.toBeInTheDocument();
        });

        it('should change picked item', async () => {
            const user = userEvent.setup();
            localStorage.setItem(HARDWARE_STORE.MOTHERBOARD, JSON.stringify({
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
            }));
            await setup(RELEASE_URI_HARDWARE.MOTHERBOARD);
            const pickIconOld = screen.queryByRole('pick-new-system', {name: 'mb01'});
            const pickIconNew = screen.getByRole('pick-new-system', {name: 'mb02'});

            expect(getItemSpy).toHaveBeenCalled();
            expect(getItemSpy).toHaveBeenCalledWith(HARDWARE_STORE.MOTHERBOARD);
            expect(screen.getByText('ASRock MB TRX40 Creator AMD Ryzen Threadripper sTRX4 TRX40 Max256GB DR4 ATX'));
            expect(screen.getByText('ASUS ROG Zenith II Extreme Alpha TRX40 Gaming AMD 3rd Gen Ryzen Threadripper'));
            expect(pickIconOld).not.toBeInTheDocument();
            expect(pickIconNew).toBeInTheDocument();

            await user.click(pickIconNew);

            expect(screen.getByRole('pick-new-system', {name: 'mb01'})).toBeInTheDocument();
            expect(pickIconNew).not.toBeInTheDocument();
        });
    });
});