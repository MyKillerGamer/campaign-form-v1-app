import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setStartDate, setEndDate, sortByOldest, sortByNewest } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange =(e) => {
        if (e.target.value === 'dateNew') {
            this.props.sortByNewest();
        } else if (e.target.value === 'dateOld') {
            this.props.sortByOldest();
        }
    }
    render() {
        return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                        type="text"
                        className="text-input"
                        placeholder="Search expenses"
                        value={this.props.filters.text} 
                        onChange={this.onTextChange} 
                    />
                </div>
                <div className="input-group__item">
                    <select
                    className="select"
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange} 
                    >
                        <option value="dateNew" >Date - Newest First</option>
                        <option value="dateOld" >Date - Oldest First</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        </div>
            )
        }
        
}

const mapStateToProps = (state) => ({
    filters: state.filters  
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByNewest: () => dispatch(sortByNewest()),
    sortByOldest: () => dispatch(sortByOldest()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);