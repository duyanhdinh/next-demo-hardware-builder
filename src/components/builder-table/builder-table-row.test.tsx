import {render, screen} from "@testing-library/react";
import BuilderTableRow, {BuilderTableRowType} from "@components/builder-table/builder-table-row";
import {SystemData} from "@components/system-table/system-table-row";
import {userEvent} from "@testing-library/user-event";
import { vi } from 'vitest';

const data: SystemData  = {
    id: '1234',
    name: 'someName',
    img_url: '/someImgUrl',
    price: 100,
    url: 'someUrl',
    info: {
        brand: 'someBrand',
        model: 'someModel',
        chipset: 'SomeChipset',
        form_factor: 'SomeForm',
        socket_type: 'SomeSocketType',
        memory_slots: 16,
        max_memory_gb: 16,
    }
};

describe('BuilderTableRow test suite', () => {
    let container: HTMLElement;

    const setup = ({name, href, data, info, removeHandle}: BuilderTableRowType) => {
        container = render(
            BuilderTableRow({name, href, data, info, removeHandle})
        ).container;
    };

    it('should render correctly with RowDefault', () => {
        setup({
            name: 'test',
            href: '/test',
            data: {} as any,
            info: '',
            removeHandle: () => {}
        });

        const defaultRow = screen.getByRole('add-row-builder');
        const dataRow = screen.queryByRole('data-row-builder');
        const href = screen.getByRole('link');
        const name = screen.getAllByText('test')[0];

        expect(href).toHaveAttribute('href', '/test');
        expect(name).toBeInTheDocument();
        expect(defaultRow).toBeInTheDocument();
        expect(dataRow).not.toBeInTheDocument();
    });

    it('should render correctly with RowData', async () => {
        const removeFn = vi.fn();
        const user = userEvent.setup();
        setup({
            name: 'test',
            href: '/test',
            data,
            info: 'someInfo',
            removeHandle: removeFn
        });

        const removeElement = screen.getByRole('remove-builder-row');
        await user.click(removeElement);
        const defaultRow = screen.queryByRole('add-row-builder');
        const dataRow = screen.getByRole('data-row-builder');
        const name = screen.getAllByText('test')[0];
        const img = screen.getByRole('img');
        const info = screen.getByText('someInfo');

        expect(name).toBeInTheDocument();
        expect(defaultRow).not.toBeInTheDocument();
        expect(dataRow).toBeInTheDocument();
        expect(img).toHaveAttribute('alt', 'product');
        expect(info).toBeInTheDocument();
        expect(removeFn).toHaveBeenCalledTimes(1);
    });
});