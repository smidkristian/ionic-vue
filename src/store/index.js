import { createStore } from 'vuex';

const store = createStore({
    state: {
        memories: [
            {
                id: 1,
                image: "https://live-language.com/wp-content/uploads/2013/07/Spanish-course-Glasgow.jpg",
                title: 'Ola',
                description: 'Spanish'
            },
            {
                id: 2,
                image: "https://www.hastingssecondarycollege.com.au/sites/default/files/styles/header_slideshow_xs_x_1/public/2018-06/English.jpg",
                title: 'Hello',
                description: 'English'
            },
            {
                id: 3,
                image: "https://www.localspotter.com/images/Editorials/CITY-NOTES/Paris/french-parisian-chic.jpg",
                title: 'Bonjour',
                description: 'French'
            },
    
        ]
    },
    getters: {
        memories: (state) => {
            return state.memories;
        },
        getMemoryById: (state) => (memoryId) => {
            return state.memories.find( memory => memory.id == memoryId );
        }
    }
});

export default store;