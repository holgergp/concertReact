require('normalize.css');
require('styles/App.css');


import React from 'react/addons';

let yeomanImage = require('../images/yeoman.png');


var Concert = React.createClass({
  render: function () {
    return (
      <div className="col-md-12 btn btn-xs" style={{cursor: 'pointer'}}>
        <div className="col-md-10 col-lg-10 col-sm-10 btn btn-xs bg-warning">
          {this.props.concert.artist}
          &nbsp;-&nbsp;
          {this.props.concert.venue}
          &nbsp;-&nbsp;
          {this.props.concert.date}
        </div>
        <div className="col-md-2 col-lg-2 col-sm-2">
          <button className="btn btn-xs btn-danger glyphicon glyphicon-remove"
            ></button>
        </div>
      </div>
    );
  }
});

var ConcertList = React.createClass({
  render: function () {
    var rows = [];
    this.props.concertList.concerts.forEach(function (concertIter) {

      rows.push(<Concert concert={concertIter} key={concertIter.description}/>);

    });
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">{this.props.concertList.concertType.description}</div>
        <div className="panel-body">{rows}</div>
      </div>
    );
  }
});


var ConcertLists = React.createClass({
  render: function () {
    var columns = [];
    this.props.concertLists.forEach(function (concertListIter) {

      columns.push(
        <div className="col-md-4" key={concertListIter.concertType.id}>
          <ConcertList concertList={concertListIter}/>
        </div>
      );

    });
    return (
      <div>{columns}</div>
    );
  }
});


var NewConcertForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var artistNode=React.findDOMNode(this.refs.artist);
    var artist = artistNode.value.trim();
    var venueNode=React.findDOMNode(this.refs.venue);
    var venue = venueNode.value.trim();
    var dateNode=React.findDOMNode(this.refs.date);
    var date = dateNode.value.trim();
    if (!artist || !venue || !date) {
      return;
    }
    this.props.onConcertSubmit({artist: artist, venue: venue, date: date});
    artistNode.value = '';
    venueNode.value = '';
    dateNode.value = '';
    return;
  },


  render: function () {
    return (
      <div className="row">
        <div className="col-md-9">
          <form name="addConcertForm" noValidate className="form-inline" role="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="sr-only">Artist</label>
              <input type="text" placeholder="Künstler"
                     required ref="artist"/>
            </div>
            <div className="form-group">
              <label className="sr-only">Ort</label>
              <input type="text"  placeholder="Ort" required ref="venue"/>
            </div>
            <div className="form-group">
              <label className="sr-only">Datum</label>
              <input type="datetime"  placeholder="Datum" required ref="date"/>
            </div>
            <button
              className="btn btn-success glyphicon glyphicon-plus"
              type="submit"></button>
          </form>
        </div>

      </div>


    );
  }
});

var ConcertPicker = React.createClass({
  getInitialState: function () {
    return {
      concertLists: CONCERTLISTS,
      newConcert: {}
    };
  },
  handleConcertSubmit: function (concert) {
    //FIXME dreckig!
    var allConcerts = this.state.concertLists[1].concerts;
    var allConcertsPlusOne = allConcerts.concat([concert]);

    var allThreeLists = this.state.concertLists;
    allThreeLists[1].concerts = allConcertsPlusOne;

    this.setState({
      concertLists: allThreeLists,
      newConcert: {}
    });
  },
  render: function () {
    return (
      <div>
        <ConcertLists concertLists={this.state.concertLists} newConcert={this.state.newConcert}/>
        <NewConcertForm onConcertSubmit={this.handleConcertSubmit} concertLists={this.state.concertLists}
                        newConcert={this.state.newConcert}/>
      </div>
    );
  }
});


var CONCERTLISTS = [
  {
    concertType: {id: 'MAYBE', description: 'Vielleicht'},
    concerts: [
      {
        artist: 'Slayer',
        venue: 'Duesseldorf Stahlwerk',
        date: '12.02.2016'
      }
    ]
  },
  {
    concertType: {id: 'ALL', description: 'Alle Konzerte'},
    concerts: [
      {
        artist: 'Kolmogoroth',
        venue: 'Köln Blue Shell',
        date: '12.07.2016'
      }
    ]
  },
  {
    concertType: {id: 'MUSTGO', description: 'Auf jeden Fall hingehen'},
    concerts: [
      {
        artist: 'Backstreet Boys',
        venue: 'Mettmann Baumarkt',
        date: '12.01.2016'
      }
    ]
  }

];

//Hmmm raff ich das?
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="container-fluid">
          <div className="row">
            <ConcertPicker  />
          </div>
        </div>
      </div>



    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
