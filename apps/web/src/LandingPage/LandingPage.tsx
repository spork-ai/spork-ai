import LandingPageGreeting from './LandingPageGreeting.tsx';
import LandingPageInput from './LandingPageInput.tsx';

function LandingPage() {
    return (
        <div className="relative h-screen w-screen bg-gradient-to-b from-teal-500 to-lime-300">
            <div className="absolute right-10 top-5 font-serif text-white text-opacity-70">
                Login / Signup
            </div>
            <div className="flex h-full w-full flex-col items-center justify-between pb-20 pt-36">
                <LandingPageGreeting />
                <LandingPageInput />
            </div>
        </div>
    );
}

export default LandingPage;
