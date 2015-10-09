require('normalize.css');
require('styles/App.css');


import React from 'react/addons';

let yeomanImage = require('../images/yeoman.png');


var Concert = React.createClass({
  render: function () {
    return (
      <div className="col-md-12 btn btn-xs" style={{cursor: 'pointer'}}>
        <div className="col-md-10 col-lg-10 col-sm-10 btn btn-xs bg-warning">
          {this.props.concert.band}
         &nbsp;-&nbsp;
          {this.props.concert.venue}
          &nbsp;-&nbsp;
          {this.props.concert.date}
        </div>
        <div class="col-md-2 col-lg-2 col-sm-2">
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
  render: function () {
    return (
      <div className="row">
        <div className="col-md-9">
          <form name="addConcertForm" noValidate className="form-inline" role="form">
            <div className="form-group">
              <label className="sr-only">Artist</label>
              <input type="text" name="artist"  placeholder="Künstler"
                     required/>
              </div>
              <div className="form-group">
                <label className="sr-only">Ort</label>
                <input type="text" name="venue"  placeholder="Ort" required/>
                </div>
                <div className="form-group">
                  <label className="sr-only">Datum</label>
                  <input type="datetime" name="date" placeholder="Datum" required/>
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
