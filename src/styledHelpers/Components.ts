import styled from 'styled-components';
import {Colors} from './Colors';
import {rgba} from 'polished';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,
}

export const boxShadow = (): Styles => {
    return {
        boxShadow: `0px 3px 3px ${rgba(Colors.shadowBlue, .05)}, 0px 2px 2px ${rgba(Colors.shadowBlue, .07)}, 0px 1px 1px ${rgba(Colors.shadowBlue, .1)}`
    };
};

export const Wrapper = styled.div`
    display: flex;
    ${boxShadow()};
`;