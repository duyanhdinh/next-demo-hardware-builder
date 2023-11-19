import {render, screen} from "@testing-library/react";
import BuilderTable, {BuilderTableProps} from "./builder-table";
import { currencyFormat } from "@/utils/format/number";
import BuilderTableRow from "@components/builder-table/builder-table-row";
import {removeMotherboard} from "@store/features/hardware/motherboard/motherboardSlice";


describe("BuilderTable component test suite", () => {

    let component: HTMLElement;

    const setup = ({rows, grandTotal}: BuilderTableProps) => {
        component = render(<BuilderTable
            rows={rows}
            grandTotal={grandTotal}
        />).container;
    };

    beforeEach(() => {});

    it('should render correctly with empty data', () => {
        setup({rows: '', grandTotal: 0});

        const header = screen.getByText('Component');
        const footer = screen.queryByText('Grant total');

        expect(header).toBeInTheDocument();
        expect(footer).not.toBeInTheDocument();
    });

    it('should render correctly with footer when have grand total data', () => {
        setup({rows: '', grandTotal: 12});

        const header = screen.getByText('Component');
        const footer = screen.getByText('Grant total');
        const grand = screen.getByText(currencyFormat(12).toString());

        expect(header).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
        expect(grand).toBeInTheDocument();
    });

    it('should render correctly with body when have rows data', () => {
        setup({rows: 'Rendered', grandTotal: 12});

        const header = screen.getByText('Component');
        const body = screen.getByText('Rendered');
        const footer = screen.getByText('Grant total');

        expect(header).toBeInTheDocument();
        expect(body).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });

    it('should render correctly with BuilderTableRows when have rows data', () => {
        const rows = () => (<BuilderTableRow
            name="test"
            href={'/test'}
            data={{} as any}
            info={''}
            removeHandle={() => {}}
        />);
        setup({rows: rows(), grandTotal: 12});

        const header = screen.getByText('Component');
        const href = screen.getByRole('link');
        const name = screen.getAllByText('test')[0];
        const footer = screen.getByText('Grant total');

        expect(header).toBeInTheDocument();
        expect(href).toHaveAttribute('href', '/test');
        expect(name).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });
});