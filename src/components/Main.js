require('normalize.css');
require('styles/App.css');

import React from 'react/addons';

let yeomanImage = require('../images/yeoman.png');









/*var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
});



var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
});*/

var Concert = React.createClass({
  render: function() {

    return (
      <div>
        <div>
          {this.props.concert.band}
        </div>
        <div>
          {this.props.concert.venue}
        </div>
        <div>
          {this.props.concert.date}
        </div>
      </div>
    );
  }
});

var ConcertList = React.createClass({
  render: function() {
    var rows = [];
    this.props.concertList.concerts.forEach(function(concertIter) {

      rows.push(<Concert concert={concertIter}/>);

    });
    return (
      <div>
        <div>{this.props.concertList.concertType.description}</div>
        <div>{rows}</div>
      </div>
    );
  }
});


var ConcertLists = React.createClass({
  render: function() {
    var columns = [];
    this.props.concertLists.forEach(function(concertListIter) {

      columns.push(<ConcertList concertList={concertListIter}/>);

    });
    return (
        <div>{columns}</div>
    );
  }
});




var NewConcertForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="New Concert..." />

      </form>
    );
  }
});

var ConcertPicker = React.createClass({
  render: function() {
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
    concertType:  {id:'MAYBE', description:'Vielleicht' },
    concerts: [
      {
        band: 'Slayer',
        venue: 'Duesseldorf Stahlwerk',
        date: '12.02.2016'
      }
    ]
  },
  {concertType: {id:'ALL', description:'Alle Konzerte' },
    concerts: [
      {
        band: 'Kolmogoroth',
        venue: 'Köln Blue Shell',
        date: '12.07.2016'
      }
    ]
  },
  {
    concertType:  {id:'MUSTGO', description:'Auf jeden Fall hingehen' },
    concerts: [
      {
        band: 'Backstreet Boys',
        venue: 'Mettmann Baumarkt',
        date: '12.01.2016'
      }
    ]
  }

];




var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


//ReactDOM.render(
//  <FilterableProductTable products={PRODUCTS} />,
//  document.getElementById('app')
//);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ConcertPicker />
      </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
