/*
 * Font Awesome Free 6.7.2 by @fontawesome
 * https://fontawesome.com License - https://fontawesome.com/license/free
 * Copyright 2024 Fonticons, Inc.
 */

import { ReactElement } from 'react';
import { ICON_FILL_PRIMARY } from '../constants.tsx';
import { IconProps } from '../types.tsx';

const DEFAULT_RATIO = 0.8;

function IconArrowTurnLeft(props: IconProps): ReactElement {
    const { ratio = DEFAULT_RATIO, fill = ICON_FILL_PRIMARY } = props;

    return (
        <svg
            className={`rotate-90 ${fill}`}
            height={14 / ratio}
            width={10.5 / ratio}
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z" />
        </svg>
    );
}

export default IconArrowTurnLeft;