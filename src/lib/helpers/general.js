import moment from 'moment';

// Function to generate an array of moments representing each minute within the interval with steps
export const eachMinuteOfInterval = (start, end, step = 1) => {
    const minutes = [];
    let current = moment(start).startOf('minute');

    while (current.isSameOrBefore(end)) {
        minutes.push(current.clone());
        current.add(step, 'minutes');
    }

    return minutes;
};

