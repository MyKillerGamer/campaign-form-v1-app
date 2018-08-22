// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_NEWEST
export const sortByNewest = () => ({
    type: 'SORT_BY_NEWEST'

});

// SORT_BY_OLDEST
export const sortByOldest = () => ({
    type: 'SORT_BY_OLDEST'

});

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});