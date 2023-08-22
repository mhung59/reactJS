import React, {Component} from 'react';
import './Toggle.scss'

class Toggle extends Component {

    constructor(props) {
        super(props);

        this.showLabel = "Show";
        this.hideLabel = "Hidden";

        this.state = {
            toggle: {
                isShow: false,
                label: this.showLabel
            }
        }
    }

    handleContent = () => {
        const toggle = {...this.state.toggle}

        if (toggle.isShow) {
            toggle.isShow = false;
            toggle.label = this.showLabel
        } else {
            toggle.isShow = true;
            toggle.label = this.hideLabel
        }

        this.setState(toggle);
    }

    render() {
        const {isShow, label} = this.state.toggle

        return (
            <div style={{
                margin: '3%',
            }}>
                <button type={"button"} onClick={this.handleContent}>{label}</button>
                <div className={`content ${isShow ? 'show' : ''}`}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        );
    }
}

export default Toggle;