/**
 * Mobile Extension Example with Events
 * main.ts
 */

//% weight=100 color=#1E90FF icon="\uf10b"
namespace mobileExtension {

    // Internal event IDs
    const EVENT_KEYBOARD = 1;
    const EVENT_VIBRATION = 2;

    // Event sources
    let vibrationTimer: number;

    /**
     * Vibrates the device for a given duration (ms).
     * Triggers a vibration event when finished.
     * @param duration vibration time in milliseconds
     */
    //% block="vibrate for %duration ms"
    export function vibrate(duration: number): void {
        if (navigator.vibrate) {
            navigator.vibrate(duration);
            // Schedule event after vibration ends
            if (vibrationTimer) clearTimeout(vibrationTimer);
            vibrationTimer = setTimeout(() => {
                control.raiseEvent(EVENT_VIBRATION, 0);
            }, duration);
        } else {
            console.log("Vibration not supported on this device.");
        }
    }

    /**
     * Registers an event handler for vibration finished.
     */
    //% block="on vibration finished"
    export function onVibrationFinished(handler: () => void): void {
        control.onEvent(EVENT_VIBRATION, 0, handler);
    }

    /**
     * Registers an event handler for keyboard key presses.
     * @param handler code to run when a key is pressed
     */
    //% block="on key press"
    export function onKeyPress(handler: (key: string) => void): void {
        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            control.raiseEvent(EVENT_KEYBOARD, ev.key.charCodeAt(0));
        });

        control.onEvent(EVENT_KEYBOARD, EventBusValue.MICROBIT_EVT_ANY, () => {
            // Retrieve the last key pressed
            // Note: MakeCode events only carry numeric IDs, so we map char codes
            // For simplicity, we just pass the key string directly
            handler((<KeyboardEvent>eventContext()).key);
        });
    }
}
