var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var RouteHistory = ReactRouter.hashHistory;
var Base = require('./components/Base.jsx');
var Aboutpage = require('./components/Aboutpage.jsx');
var Servicepage = require('./components/Servicepage.jsx');

var Routes = (
    <Router history={RouteHistory}>
      <Route path="/" component={Base}>
        <Route path="/aboutpage" component={Aboutpage} />
        <Route path="/servicepage" component={Servicepage} />
      </Route>
    </Router>
);
module.exports = Routes;
