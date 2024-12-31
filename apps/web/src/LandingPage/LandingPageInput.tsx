import { KeyboardEvent, useRef } from 'react';
import IconMicrophone from '../assets/IconMicrophone.tsx';
import IconCircle from '../assets/IconCircle.tsx';
import IconArrowTurnLeft from '../assets/IconArrowTurnLeft.tsx';
import { generateRecipe } from '../utils/httpClient.tsx';
import { LANDING_PAGE_TEXT_AREA_PLACEHOLDER } from '../constants.tsx';

const MIN_TEXT_AREA_HEIGHT = 48;

function LandingPageInput() {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    function handleInput(): void {
        const textArea = textAreaRef.current;

        if (!textArea) {
            return;
        }

        // Reset height to default (min-height) if content is deleted
        textArea.style.height = `${MIN_TEXT_AREA_HEIGHT}px`;

        // Set height to the scrollHeight if content is added
        textArea.style.height = `${textArea.scrollHeight}px`;

        // Adjust padding based on height
        textArea.style.padding = `12px 64px 12px ${
            textArea.scrollHeight > MIN_TEXT_AREA_HEIGHT ? '32px' : '20px'
        }`;
    }

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>): void {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    }

    function handleSubmit(): void {
        if (!textAreaRef.current) {
            return;
        }

        const prompt = textAreaRef.current.value;
        generateRecipe(prompt);
    }

    return (
        <div className="relative flex w-2/3 items-center justify-between">
            <button className="h-full w-[5%]">
                <IconCircle>
                    <IconMicrophone />
                </IconCircle>
            </button>
            <textarea
                ref={textAreaRef}
                className="h-12 max-h-24 min-h-12 w-[93%] resize-none rounded-full border-2 border-transparent py-3 pl-5 pr-14 drop-shadow focus:border-[#5bd4af] focus:outline-none"
                placeholder={LANDING_PAGE_TEXT_AREA_PLACEHOLDER}
                onInput={handleInput}
                onKeyDown={handleKeyDown}
            />
            <button className="absolute right-2 px-4" onClick={handleSubmit}>
                <IconArrowTurnLeft />
            </button>
        </div>
    );
}

export default LandingPageInput;
