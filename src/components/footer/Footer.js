import React, { Component } from 'react';
export default class Footer extends Component{
    constructor(props){
      super(props);
  }

  render(){
      return(
        <div className="container-fluid ">
          <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">

            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a className="btn-floating btn-fb mx-1">
                  <i className="fa fa-facebook"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-tw mx-1">
                  <i className="fa fa-twitter"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-gplus mx-1">
                  <i className="fa fa-google-plus"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-li mx-1">
                  <i className="fa fa-linkedin"> </i>
                </a>
              </li>
            </ul>
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
              <a href="https://gomycode.tn"> GOMYCODE.TN</a>
            </div>

          </footer>

        </div>
    );
  }
}
