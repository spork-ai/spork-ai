import IconMicrophone from './assets/IconMicrophone.tsx';
import IconCircle from './assets/IconCircle.tsx';
import IconArrowTurnLeft from './assets/IconArrowTurnLeft.tsx';

function LandingPageInput() {
    return (
        <div className="relative flex w-2/3 items-center justify-between">
            <button className="h-full w-[5%]">
                <IconCircle>
                    <IconMicrophone />
                </IconCircle>
            </button>
            <textarea
                className="w-[93%] resize-none rounded-full border-2 border-transparent py-3 pl-5 pr-14 drop-shadow focus:border-[#5bd4af] focus:outline-none"
                placeholder="Add ingredients you have on hand, separated by commas"
                rows={1}
            />
            <button className="absolute right-2 px-4">
                <IconArrowTurnLeft />
            </button>
        </div>
    );
}

export default LandingPageInput;
