/*
 * Font Awesome Free 6.7.2 by @fontawesome
 * https://fontawesome.com License - https://fontawesome.com/license/free
 * Copyright 2024 Fonticons, Inc.
 */

import { ReactElement } from 'react';
import { ICON_FILL_SECONDARY } from '../constants.tsx';
import { IconProps } from '../types.tsx';

const DEFAULT_RATIO = 1.2;

function IconMicrophone(props: IconProps): ReactElement {
    const { ratio = DEFAULT_RATIO, fill = ICON_FILL_SECONDARY } = props;

    return (
        <svg
            className={fill}
            height={28 / ratio}
            width={21 / ratio}
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
        </svg>
    );
}

export default IconMicrophone;