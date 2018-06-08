import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './scss/input.scss';
import './css/output.css';


$(document).ready(function() {
  $(".burger").click(function(event) {
    event.preventDefault();

    $(".burger-nav").toggle();
  });
});
