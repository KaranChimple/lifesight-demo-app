import React, { PureComponent } from 'react';
import { Info } from '@material-ui/icons';
import { connect } from 'react-redux';
import isEmpty from 'lodash.isempty';
import { submitDataFromTabs, changeTab } from '../../actions/actions';
import './styles.css';
import { TAB2 } from './constants';

class Budget extends PureComponent {
    constructor() {
        super();
        this.state = {
            budgetVal: '',
            impressionVal: '',
        };
    }

    submitData = () => {
        const { submitDataFromTabs } = this.props;
        const { budgetVal, impressionVal } = this.state;
        submitDataFromTabs({
            data: {
                budget: budgetVal,
                impressions: impressionVal
            },
        });
    }

    handleBudgetValueChange = (event) => {
        this.setState({
            budgetVal: event.target.value,
        });
    }

    handleImpressionsValueChange = (event) => {
        this.setState({
            impressionVal: event.target.value,
        });
    }

    onRevertToPreviousScreen = () => {
        const { changeTab } = this.props;
        changeTab({
            tabName: TAB2,
            data: {},
        })
    }

    render() {
        const { budgetVal, impressionVal } = this.state;
        return (
            <div>
                <span className='channel-header-div'>
                    <Info className='card-icon' />How much is your campaign budget
                </span>

                <div className="date-selection-divs">

                    <div>
                        Total Budget
                        <div>
                            <input type='text' value={budgetVal} onChange={this.handleBudgetValueChange} />
                        </div>
                    </div>

                    <div>
                        Total Impressions
                        <div>
                            <input type='text' value={impressionVal} onChange={this.handleImpressionsValueChange} />
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
                        <div onClick={this.submitData} className={(isEmpty(budgetVal) || isEmpty(impressionVal)) ? 'footer-button next-button-disabled' : 'footer-button next-button-success'}>
                            NEXT {(isEmpty(budgetVal) || isEmpty(impressionVal)) ? '!' : '>'}
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default connect(() => ({}), { submitDataFromTabs, changeTab })(Budget);