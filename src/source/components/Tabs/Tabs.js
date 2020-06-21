import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../../actions/actions';
import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  componentDidUpdate() {
    if (this.props.tabState.tabName !== this.state.activeTab) {
      this.setState({ activeTab: this.props.tabState.tabName });
    }
  }

  onClickTabItem = (tab) => {
    const { changeTab } = this.props;
    changeTab({ tabName: tab, data: {} });
    // this.setState({ activeTab: tab, data: {} });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;
    return (
      <div className="tabs tabs-container">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tabState: state.changeTab,
  }
}

export default connect(mapStateToProps, { changeTab })(Tabs);