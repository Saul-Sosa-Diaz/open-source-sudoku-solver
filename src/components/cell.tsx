import { StyledCell } from "./cell.styles";

export const Cell = ({ ...props }) => {

    return (
        <StyledCell {...props}>
            {props.children}
        </StyledCell>
    );
}