import { KeyboardEvent, useRef } from 'react';
import axios from 'axios';
import IconMicrophone from '../assets/IconMicrophone.tsx';
import IconCircle from '../assets/IconCircle.tsx';
import IconArrowTurnLeft from '../assets/IconArrowTurnLeft.tsx';

function LandingPageInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    function handleInput(): void {
        if (textareaRef.current) {
            // Reset height to default (min-height) if content is deleted
            textareaRef.current.style.height = '48px';

            // Set height to the scrollHeight if content is added
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

            // Adjust padding based on height
            if (textareaRef.current.scrollHeight > 48) {
                // Increase padding when height is greater than 48px
                textareaRef.current.style.padding = '12px 64px 12px 32px';
            } else {
                // Reset padding to original when height is 48px or smaller
                textareaRef.current.style.padding = '12px 64px 12px 20px';
            }
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>): void {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    }

    async function handleSubmit(): Promise<void> {
        if (textareaRef.current) {
            const apiBodyContent = textareaRef.current.value;
            console.log('apiBodyContent', apiBodyContent);

            try {
                const response = await axios.post(
                    'http://localhost:3000/generate',
                    { apiBodyContent }
                );
                console.log('response', response);
            } catch (error) {
                console.error('Error while generating recipes:', error);
            }
        }
    }

    return (
        <div className="relative flex w-2/3 items-center justify-between">
            <button className="h-full w-[5%]">
                <IconCircle>
                    <IconMicrophone />
                </IconCircle>
            </button>
            <textarea
                ref={textareaRef}
                className="h-12 max-h-24 min-h-12 w-[93%] resize-none rounded-full border-2 border-transparent py-3 pl-5 pr-14 drop-shadow focus:border-[#5bd4af] focus:outline-none"
                placeholder="Add ingredients you have on hand, separated by commas"
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
