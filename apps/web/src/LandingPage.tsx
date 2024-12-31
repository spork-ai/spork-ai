import LandingPageGreetingText from './LandingPageGreetingText.tsx';
import LandingPageInput from './LandingPageInput.tsx';

function LandingPage() {
    return (
        <div className="relative h-screen w-screen bg-gradient-to-b from-[#5bd4af] to-[#aaffad]">
            <div className="absolute right-10 top-5 font-serif text-white text-opacity-70">
                Login / Signup
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between pb-20 pt-36">
                <LandingPageGreetingText />
                <LandingPageInput />
            </div>
        </div>
    );
}

export default LandingPage;
