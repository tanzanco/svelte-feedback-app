import { writable } from 'svelte/store';

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',

    },
    {
        id: 2,
        rating: 8,
        text: 'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',
    },
    {
        id: 3,
        rating: 9,
        text: 'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',
    },
    {
        id: 4,
        rating: 6,
        text: 'Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda sapiente unde repellendus blanditiis placeat suscipit exercitationem delectus aspernatur reiciendis!',
    },
]);