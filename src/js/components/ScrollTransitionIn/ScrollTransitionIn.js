import React, { Component } from 'react';

import scrollMonitor from 'scrollmonitor';
import './ScrollTransitionIn.scss';

class ScrollTransitionIn extends Component {

  state = {
    inView : false
  }

  constructor(props) {
    super(props);
    this.scrollEntrance = React.createRef();
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.itemWatcher.destroy();
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const item = this.scrollEntrance.current;
    const offset = this.props.offset ? this.props.offset : window.innerHeight / -6;

    this.itemWatcher = scrollMonitor.create( item, {top: offset} );

    this.itemWatcher.enterViewport( () => {
      if (!this.state.inView) {
        this.setState({inView : true});
      }
    });

    if (!this.props.once) {
      this.itemWatcher.exitViewport( () => {
        if (this.state.inView) {
          this.setState({inView : false});
        }
      });
    }

    if (this.props.onEnter) {
      this.itemWatcher.enterViewport( () => {
        this.props.onEnter();
      });
    }
    if (this.props.setSection) {
      this.itemWatcher.enterViewport( () => {
        if (!this.state.inView) {
          this.props.setSection();
        }
      });
    }
  }

  getClassName = () => {
    var className = 'scroll-transition-in';
    if (this.props.inViewClass) {
      className = ''
    }
    if (this.state.inView) {
      className += ' in-view'
    }
    if (this.props.className) {
      className += ' ' + this.props.className
    }
    return className
  }

  render() {
    return (
      <div ref={this.scrollEntrance} className={this.getClassName()}>
        {this.props.children}
      </div>
    );
  }
}

export default ScrollTransitionIn;