import React, { PureComponent } from 'react';
import { Info } from '@material-ui/icons';
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import { changeTab } from '../../actions/actions';
import { TAB3, TAB1 } from './constants';
import './styles.css';

class Flight extends PureComponent {
    constructor() {
        super();
        this.state = {
            start: new Date(),
            end: null,
        };
    }

    handleStartDateChange = (date) => {
        this.setState({ start: date });
    };

    handleEndDateChange = (date) => {
        this.setState({ end: date });
    };

    onChangeTab = () =>{
        const {changeTab} = this.props;
        const {start, end} = this.state;
        changeTab({
            tabName: TAB3,
            data: {
                flightStartDate: start,
                flightEndDate: end,
            },
        }); 
    }
    onRevertToPreviousScreen = () => {
        const {changeTab} = this.props;
        changeTab({
            tabName: TAB1,
            data: {},
        })
    }

    render() {
        const { start, end } = this.state;
        return (
            <div>
                <span className='channel-header-div'>
                    <Info className='card-icon' />Select when the campaign should start and end
                </span>

                <div className="date-selection-divs">

                    <div>
                        START
                            <div>
                            <DatePicker
                                value={start}
                                format='dd MMMM yyyy'
                                onChange={this.handleStartDateChange}
                            />
                        </div>
                    </div>

                    <div>
                        END
                            <div>
                            <DatePicker
                                disabled={!start}
                                minDate={start}
                                value={end}
                                format='dd MMMM yyyy'
                                onChange={this.handleEndDateChange}
                            />
                        </div>
                    </div>
                </div>

                <footer>
                    <div onClick={this.onRevertToPreviousScreen} className='footer-button footer-prev-div'>
                        {`<     Prev`}
                    </div>
                    <div className='footer-div'>
                        <div className='footer-button'>
                            CANCEL
                        </div>
                        <div onClick={this.onChangeTab} className={(!start || !end) ? 'footer-button next-button-disabled' : 'footer-button next-button-success'}>
                            NEXT {(!start || !end) ? '!' : '>'}
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}

export default connect(() => ({}), { changeTab })(Flight);
