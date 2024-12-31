function LandingPageGreeting() {
    return (
        <div className="flex flex-col items-center gap-14 font-serif">
            <p className="text-5xl text-white text-opacity-70">
                Feeling hungry, Tiffany?
            </p>
            <p className="text-7xl text-green-950 text-opacity-55">
                Tell me what you've got in the fridge,
            </p>
            <div className="flex flex-col items-end">
                <p className="text-7xl text-green-950 text-opacity-50">
                    and I'll take it from here
                </p>
                <p className="italic text-white text-opacity-80">
                    (except the cooking, of course...)
                </p>
            </div>
        </div>
    );
}

export default LandingPageGreeting;
