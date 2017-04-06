import React, { Component } from 'react';

var SearchBar = React.createClass({
    search() {
        var searchText = this.refs.txtSearch.value;
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
                <div className="col-xs-12">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" ref="txtSearch" placeholder="Search" onKeyPress={this.handleKeyPress} id="addon1" className="form-control" />
                            <span className="input-group-btn">
                                <button className="btn btn-primary btn-block" onClick={this.search} type="button">Tìm</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default SearchBar