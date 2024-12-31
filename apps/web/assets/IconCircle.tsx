import { ReactElement } from 'react';

interface IconCircleProps {
    children: ReactElement;
    size?: number;
}

function IconCircle(props: IconCircleProps): ReactElement {
    const { size = 50 } = props;

    return (
        <div className="relative flex h-full w-full items-center justify-center">
            <svg className="absolute drop-shadow" width={size} height={size}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2}
                    fill="#5bd4af"
                />
            </svg>
            <div className="absolute">{props.children}</div>
        </div>
    );
}

export default IconCircle;
