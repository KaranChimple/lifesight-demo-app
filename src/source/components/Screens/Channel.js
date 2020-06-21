import React, { PureComponent } from 'react';
import { Info } from '@material-ui/icons';
import { connect } from 'react-redux';
import {changeTab} from '../../actions/actions';
import {TAB2} from './constants';
import isEmpty from 'lodash.isempty';
import {
    CAMPAIGN_TYPES,
    CHANNEL_TYPES,
    TRACKING_OPTIONS,
} from './constants';
import './styles.css';

class Channel extends PureComponent {
    constructor() {
        super();
        this.state = {
            campaignType: '',
            channelType: [],
            selectedChannelType: [],
            trackingOptions: [],
            selectedTrackingOptions: [],
        }
    }

    componentDidMount() {
        const channelTypesToBeSet = CHANNEL_TYPES.map(item => { return false });
        const trackingOptionsToBeSet = TRACKING_OPTIONS.map(item => { return false });
        this.setState({
            channelType: channelTypesToBeSet,
            trackingOptions: trackingOptionsToBeSet,
        });
    }

    onChangeChannelTypeCheckBox = (itemIndex) => {
        const { channelType, selectedChannelType } = this.state;
        let ChannelNameToBeAdded = selectedChannelType;
        const channelTypesToBeSet = channelType.map((item, index) => {
            if (index === itemIndex) {
                ChannelNameToBeAdded=[...ChannelNameToBeAdded, CHANNEL_TYPES[index]];
                return !item;
            }
            return item;
        });
        this.setState({ 
            channelType: channelTypesToBeSet,
            selectedChannelType: ChannelNameToBeAdded,
        });
    }

    onChangeTrackingOptionsCheckBox = (itemIndex) => {
        const { trackingOptions, selectedTrackingOptions } = this.state;
        let trackingOptionToBeAdded = selectedTrackingOptions;
        const trackingOptionsToBeSet = trackingOptions.map((item, index) => {
            if (index === itemIndex) {
                trackingOptionToBeAdded = [...trackingOptionToBeAdded, TRACKING_OPTIONS[index]];
                return !item;
            }
            return item;
        });
        this.setState({ 
            trackingOptions: trackingOptionsToBeSet,
            selectedTrackingOptions: trackingOptionToBeAdded,
        });
    }

    onSelectCampaignType = (item) => {
        this.setState({ campaignType: item.name });
    }

    // canMoveForward = () => {
    //     const { channelType, trackingOptions, campaignType } = this.state;
    //     let flagChannel = false;
    //     let flagTracking = false;
    //     let flagCampaign = false;
    //     if(!campaignType) {
    //         console.log('flagCampign: ', flagCampaign);
    //         flagCampaign = true;
    //         trackingOptions.some(item => {
    //             if(item === true) {
    //                 flagTracking = true;
    //                 console.log('flagTracking', flagTracking);
    //                 return true;
    //             }
    //             return false;
    //         });
    //         channelType.some(item => {
    //             if(item === true) {
    //                 flagChannel = true;
    //                 console.log('flagChannel', flagChannel)
    //                 return true;
    //             }
    //             return false;
    //         });
    //     }
    //     return (flagCampaign && flagTracking && flagChannel) ? true : false;
    // }

    onChangeTab = () =>{
        const {changeTab} = this.props;
        const {campaignType, selectedChannelType, selectedTrackingOptions} = this.state;
        changeTab({
            tabName: TAB2,
            data: {
                campaignType,
                selectedChannelType, 
                selectedTrackingOptions
            },
        }); 
    }

    render() {
        const { channelType, trackingOptions, campaignType, selectedChannelType, selectedTrackingOptions } = this.state;
        return (
            <div>
                <div>
                    <span className='channel-header-div'>
                        <Info className='card-icon' />Select the channel of your campaign
                    </span>
                    <div className='center-align-children'>
                        {CAMPAIGN_TYPES.map(item => (
                            <div
                                key={item.id}
                                className={campaignType === item.name ? 'card active-card' : 'card'}
                                disabled={item.comingSoon}
                                onClick={() => this.onSelectCampaignType(item)}
                            >
                                <p><img src={item.logo} alt={item.name} height={60} width={60} /></p>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <span className='channel-header-div'>
                        TYPE(S) OF CHANNEL
                    </span>
                    <div className='grid-container'>
                        {CHANNEL_TYPES.map((item, index) => (
                            <div key={index} className='channel-type-card'>
                                <p><input type="checkbox" value={channelType[index]} onChange={() => this.onChangeChannelTypeCheckBox(index)} />{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <span className='channel-header-div'>
                        TRACKING OPTIONS
                    </span>
                    <div className='attribution-subtext'>
                        Attribution Type
                    </div>
                    <div className='grid-container'>
                        {TRACKING_OPTIONS.map((item, index) => (
                            <div key={index} className='channel-type-card'>
                                <p><input type="checkbox" value={trackingOptions[index]} onChange={() => this.onChangeTrackingOptionsCheckBox(index)} />{item}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <footer  className='footer-div'>
                    <div className='footer-button'>
                        CANCEL
                    </div>
                    <div onClick={this.onChangeTab} className={(isEmpty(selectedChannelType) || isEmpty(selectedTrackingOptions) || isEmpty(campaignType)) ? 'footer-button next-button-disabled' : 'footer-button next-button-success'}>
                        NEXT {(isEmpty(selectedChannelType) || isEmpty(selectedTrackingOptions) || isEmpty(campaignType)) ? '!' : '>'}
                    </div>
                </footer>
            </div>
        )
    }

}

export default connect(() => ({}), {changeTab})(Channel);
