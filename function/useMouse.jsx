import { useState, useEffect } from 'react';

export function useMouse() {
    const [cursor, setCursor] = useState({ x: null, y: null });

    useEffect(() => {
        function handler(e) {
            setCursor({ x: e.clientX, y: e.clientY });
        }

        document.addEventListener('mousemove', handler);

        return () => {
            document.removeEventListener('mousemove', handler);
        };
    }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

    return cursor;
}