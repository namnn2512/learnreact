import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

var SearchControl = React.createClass({
    search() {
        var searchText = ReactDOM.findDOMNode(this.refs.txtSearch).value;
        this.props.onClick(searchText);
    },
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.search();
        }
    },
    render() {
        return (
            <div className="row">
                <div className="col-xs-10">
                    <FormGroup controlId="formBasicText">
                        <FormControl
                            type="text"
                            ref="txtSearch"
                            placeholder="Search"
                            onKeyPress={this.handleKeyPress}
                            />
                    </FormGroup>
                </div>
                <div className="col-xs-2">
                    <Button bsStyle="primary" block onClick={this.search}>Tìm</Button>
                </div>
            </div>
        )
    }
});

export default SearchControl