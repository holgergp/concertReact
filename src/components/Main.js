require('normalize.css');
require('styles/App.css');


import React from 'react/addons';

let yeomanImage = require('../images/yeoman.png');


var Concert = React.createClass({
  render: function () {
    return (
      <div className="col-md-12 btn btn-xs">
        <div className="col-md-10 col-lg-10 col-sm-10 btn btn-xs bg-warning">
          {this.props.concert.band}
          -
          {this.props.concert.venue}
          -
          {this.props.concert.date}
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
  render: function () {
    return (
      <form>
        <input type="text" placeholder="New Concert..."/>
      </form>
    );
  }
});

var ConcertPicker = React.createClass({
  render: function () {
    return (
      <div>
        <ConcertLists concertLists={CONCERTLISTS}/>
        <NewConcertForm />
      </div>
    );
  }
});


var CONCERTLISTS = [
  {
    concertType: {id: 'MAYBE', description: 'Vielleicht'},
    concerts: [
      {
        band: 'Slayer',
        venue: 'Duesseldorf Stahlwerk',
        date: '12.02.2016'
      }
    ]
  },
  {
    concertType: {id: 'ALL', description: 'Alle Konzerte'},
    concerts: [
      {
        band: 'Kolmogoroth',
        venue: 'Köln Blue Shell',
        date: '12.07.2016'
      }
    ]
  },
  {
    concertType: {id: 'MUSTGO', description: 'Auf jeden Fall hingehen'},
    concerts: [
      {
        band: 'Backstreet Boys',
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
            <ConcertPicker />
          </div>
        </div>
      </div>



    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
