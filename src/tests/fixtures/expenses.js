import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 1950,
    createdAt: 0
}, {
    id: '2',
    description: 'Doctor bills',
    note: '',
    amount: 70000,
    createdAt: moment(0).subtract(6, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 1743,
    createdAt: moment(0).add(17, 'days').valueOf()
}]