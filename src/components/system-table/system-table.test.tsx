import {render, screen} from "@testing-library/react";
import SystemTable, {SystemTableProps} from "@components/system-table/system-table";
import SystemTableRow, {SystemData} from "@components/system-table/system-table-row";
import {userEvent} from "@testing-library/user-event";
import { vi } from 'vitest';

const idCheck = '1234';
const data: SystemData = {
    id: idCheck,
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

describe('SystemTable test suite', () => {
    let container: HTMLElement;

    const setup = ({rows}: SystemTableProps) => {
        container = render(SystemTable({rows})).container;
    };

    it('should render correctly without rows data', () => {
        setup({rows: ''});

        const title = screen.getByText('Product');
        const rowDefault = screen.getAllByRole('system-table-default');

        expect(title).toBeInTheDocument();
        expect(rowDefault.length).toBe(3);
    });

    it('should render correctly with rows data', () => {
        setup({rows: <div>rendered</div>});

        const title = screen.getByText('Product');
        const rowDefault = screen.queryByRole('system-table-default');
        const rowData = screen.getByText('rendered');

        expect(title).toBeInTheDocument();
        expect(rowDefault).not.toBeInTheDocument();
        expect(rowData).toBeInTheDocument();
    });

    it('should render correctly with SystemTableRow - item not pick', async () => {
        const user = userEvent.setup();
        const changeFn = vi.fn();
        setup({
            rows: SystemTableRow(
                {
                    data,
                    info: 'someInfo',
                    pickedId: 'someId',
                    changeCallback: changeFn
                }
            )
        });
        await user.click(screen.getByRole('pick-new-system'));

        const title = screen.getByText('someName');
        const info = screen.getByText('someInfo');
        const rowDefault = screen.queryByRole('system-table-default');

        expect(title).toBeInTheDocument();
        expect(info).toBeInTheDocument();
        expect(rowDefault).not.toBeInTheDocument();
        expect(changeFn).toHaveBeenCalledTimes(1);
    });

    it('should render correctly with SystemTableRow - item have picked', async () => {
        const changeFn = vi.fn();
        setup({
            rows: SystemTableRow(
                {
                    data,
                    info: 'someInfo',
                    pickedId: idCheck,
                    changeCallback: changeFn
                }
            )
        });

        const title = screen.getByText('someName');
        const info = screen.getByText('someInfo');
        const rowDefault = screen.queryByRole('system-table-default');

        expect(title).toBeInTheDocument();
        expect(info).toBeInTheDocument();
        expect(rowDefault).not.toBeInTheDocument();
        expect(screen.queryByRole('pick-new-system')).not.toBeInTheDocument();
        expect(screen.getByRole('icon', {name: 'check'})).toBeInTheDocument();
    });
});