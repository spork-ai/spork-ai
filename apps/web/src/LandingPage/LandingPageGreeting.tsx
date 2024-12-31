import {
    LANDING_PAGE_EXCEPT_THE_COOKING_TEXT,
    LANDING_PAGE_FEELING_HUNGRY_TEXT,
    LANDING_PAGE_ILL_TAKE_IT_FROM_HERE_TEXT,
    LANDING_PAGE_TELL_ME_WHAT_YOU_HAVE_TEXT
} from '../constants.tsx';

function LandingPageGreeting() {
    return (
        <div className="flex flex-col items-center gap-14 font-serif">
            <p className="text-5xl text-white text-opacity-70">
                {LANDING_PAGE_FEELING_HUNGRY_TEXT} Tiffany?
            </p>
            <p className="text-7xl text-green-950 text-opacity-55">
                {LANDING_PAGE_TELL_ME_WHAT_YOU_HAVE_TEXT}
            </p>
            <div className="flex flex-col items-end">
                <p className="text-7xl text-green-950 text-opacity-50">
                    {LANDING_PAGE_ILL_TAKE_IT_FROM_HERE_TEXT}
                </p>
                <p className="italic text-white text-opacity-80">
                    {LANDING_PAGE_EXCEPT_THE_COOKING_TEXT}
                </p>
            </div>
        </div>
    );
}

export default LandingPageGreeting;
