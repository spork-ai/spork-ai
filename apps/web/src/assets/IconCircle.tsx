import { ReactElement } from 'react';
import { ICON_FILL_PRIMARY } from '../constants.tsx';
import { IconProps } from '../types.tsx';

const DEFAULT_SIZE = 50;
const DEFAULT_RATIO = 1;

function IconCircle(props: IconProps): ReactElement {
    const { fill = ICON_FILL_PRIMARY, ratio = DEFAULT_RATIO } = props;
    const iconSize = DEFAULT_SIZE / ratio;

    return (
        <div className="relative flex h-full w-full items-center justify-center">
            <svg
                className={`absolute drop-shadow ${fill}`}
                width={iconSize}
                height={iconSize}
            >
                <circle cx={iconSize / 2} cy={iconSize / 2} r={iconSize / 2} />
            </svg>
            <div className="absolute">{props.children}</div>
        </div>
    );
}

export default IconCircle;
