import { useEffect } from 'react';

function LandingPage() {
    useEffect(() => {
        const handleMouseClick = () => {
            handlePageTransition();
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key) {
                handlePageTransition();
            }
        };

        window.addEventListener('click', handleMouseClick);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('click', handleMouseClick);
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    function handlePageTransition() {
        console.log('handlePageTransition triggered');
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-[#5BD4AF] to-[#aaffad]">
            <div className="flex h-full w-full cursor-pointer flex-col items-center justify-around">
                <div className="absolute right-10 top-5 text-white text-opacity-70">
                    Login / Signup
                </div>
                <div className="flex flex-col items-center gap-14 pt-14">
                    <p className="text-5xl text-white text-opacity-70">
                        Feeling hungry, Tiffany?
                    </p>
                    <p className="text-7xl text-green-950 text-opacity-50">
                        Tell me what you've got in the fridge,
                    </p>
                    <div className="flex flex-col items-end">
                        <p className="text-7xl text-green-950 text-opacity-50">
                            and I'll take it from here
                        </p>
                        <p className="italic text-white text-opacity-85">
                            (except the cooking, of course...)
                        </p>
                    </div>
                </div>
                <p className="text-green-950 text-opacity-20 transition-all duration-500 hover:text-lg">
                    - Click anywhere to start -
                </p>
            </div>
        </div>
    );
}

export default LandingPage;
