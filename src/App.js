import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkFormat: 'https://primenow.amazon.com/search?k=<SEARCH>&p_95=A044'
    }

    this.handleListChange = this.handleListChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.openAllLinks = this.openAllLinks.bind(this);
  }

  handleFormatChange(event) {
    this.setState({
      linkFormat: event.target.value
    })
  }

  handleListChange(event) {
    this.setState({
      list: event.target.value.split('\n')
    })
  }

  openAllLinks(e) {
    e.preventDefault();
    this.state.list.forEach((item) => {
      window.open(this.state.linkFormat.replace(/<SEARCH>/, encodeURI(item)))
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label>Link format</label>
                <input
                  className="form-control"
                  value={this.state.linkFormat}
                  onChange={this.handleFormatChange}
                />
              </div>
              <div className="form-group">
                <label>Searches</label>
                <textarea
                  className="form-control"
                  onChange={this.handleListChange}
                  style={{ height: '500px' }}
                />
              </div>

              <button className="btn btn-default" onClick={this.openAllLinks}>Open all links</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
