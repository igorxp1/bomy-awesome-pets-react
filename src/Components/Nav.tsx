import React from 'react';
//import { Map as GMap, GoogleApiWrapper } from 'google-maps-react';
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import 'mycss.css';
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const mapStyles = {
    width: '100%',
    height: '100%',
  };

export class Nav extends React.Component {




    render() {/*
        return (
            <nav id="nav_tutorials" className="w3-hide-small">
                <div className="w3-content" style="max-width:1100px;font-size:18px">
                    <span onClick="w3_close_nav('tutorials')"
                          className="w3-button w3-xxxlarge w3-display-topright w3-hover-white sectionxsclosenavspan"
                          style="padding-right:30px;padding-left:30px;">&times;</span><br>
                    <div className="w3-row-padding w3-bar-block">
                        <div className="w3-container" style="padding-left:13px">
                            <h2 style="color:#FFF4A3;"><b>Tutorials</b></h2>
                        </div>
                        <div className="w3-col l3 m6">
                            <h3 className="w3-margin-top">HTML and CSS</h3>
                            <a className="w3-bar-item w3-button" href="/html/default.asp">Learn HTML</a>
                            <a className="w3-bar-item w3-button" href="/css/default.asp">Learn CSS</a>
                            <a className="w3-bar-item w3-button" href="/css/css_rwd_intro.asp"
                               title="Responsive Web Design">Learn RWD</a>
                            <a className="w3-bar-item w3-button" href="/bootstrap/bootstrap_ver.asp">Learn Bootstrap</a>
                            <a className="w3-bar-item w3-button" href="/w3css/default.asp">Learn W3.CSS</a>
                            <a className="w3-bar-item w3-button" href="/colors/default.asp">Learn Colors</a>
                            <a className="w3-bar-item w3-button" href="/icons/default.asp">Learn Icons</a>
                            <a className="w3-bar-item w3-button" href="/graphics/default.asp">Learn Graphics</a>
                            <a className="w3-bar-item w3-button" href='/graphics/svg_intro.asp'>Learn SVG</a>
                            <a className="w3-bar-item w3-button" href='/graphics/canvas_intro.asp'>Learn Canvas</a>
                            <a className="w3-bar-item w3-button" href="/howto/default.asp">Learn How To</a>
                            <a className="w3-bar-item w3-button" href="/sass/default.php">Learn Sass</a>
                            <div className="w3-hide-large w3-hide-small">
                                <h3 className="w3-margin-top">Data Analytics</h3>
                                <a className="w3-bar-item w3-button" href="/ai/default.asp">Learn AI</a>
                                <a className="w3-bar-item w3-button" href="/python/python_ml_getting_started.asp">Learn
                                    Machine Learning</a>
                                <a className="w3-bar-item w3-button" href="/datascience/default.asp">Learn Data
                                    Science</a>
                                <a className="w3-bar-item w3-button" href="/python/numpy/default.asp">Learn NumPy</a>
                                <a className="w3-bar-item w3-button" href="/python/pandas/default.asp">Learn Pandas</a>
                                <a className="w3-bar-item w3-button" href="/python/scipy/index.php">Learn SciPy</a>
                                <a className="w3-bar-item w3-button" href="/python/matplotlib_intro.asp">Learn
                                    Matplotlib</a>
                                <a className="w3-bar-item w3-button" href="/statistics/index.php">Learn Statistics</a>
                                <a className="w3-bar-item w3-button" href="/excel/index.php">Learn Excel</a>

                                <h3 className="w3-margin-top">XML Tutorials</h3>
                                <a className="w3-bar-item w3-button" href="/xml/default.asp">Learn XML</a>
                                <a className="w3-bar-item w3-button" href='/xml/ajax_intro.asp'>Learn XML AJAX</a>
                                <a className="w3-bar-item w3-button" href="/xml/dom_intro.asp">Learn XML DOM</a>
                                <a className="w3-bar-item w3-button" href='/xml/xml_dtd_intro.asp'>Learn XML DTD</a>
                                <a className="w3-bar-item w3-button" href='/xml/schema_intro.asp'>Learn XML Schema</a>
                                <a className="w3-bar-item w3-button" href="/xml/xsl_intro.asp">Learn XSLT</a>
                                <a className="w3-bar-item w3-button" href='/xml/xpath_intro.asp'>Learn XPath</a>
                                <a className="w3-bar-item w3-button" href='/xml/xquery_intro.asp'>Learn XQuery</a>
                            </div>
                        </div>
                        <div className="w3-col l3 m6">
                            <h3 className="w3-margin-top">JavaScript</h3>
                            <a className="w3-bar-item w3-button" href="/js/default.asp">Learn JavaScript</a>
                            <a className="w3-bar-item w3-button" href="/jquery/default.asp">Learn jQuery</a>
                            <a className="w3-bar-item w3-button" href="/react/default.asp">Learn React</a>
                            <a className="w3-bar-item w3-button" href="/angular/default.asp">Learn AngularJS</a>
                            <a className="w3-bar-item w3-button" href="/js/js_json_intro.asp">Learn JSON</a>
                            <a className="w3-bar-item w3-button" href="/js/js_ajax_intro.asp">Learn AJAX</a>
                            <a className="w3-bar-item w3-button" href="/appml/default.asp">Learn AppML</a>
                            <a className="w3-bar-item w3-button" href="/w3js/default.asp">Learn W3.JS</a>

                            <h3 className="w3-margin-top">Programming</h3>
                            <a className="w3-bar-item w3-button" href="/python/default.asp">Learn Python</a>
                            <a className="w3-bar-item w3-button" href="/java/default.asp">Learn Java</a>
                            <a className="w3-bar-item w3-button" href="/cpp/default.asp">Learn C++</a>
                            <a className="w3-bar-item w3-button" href="/cs/index.php">Learn C#</a>
                            <a className="w3-bar-item w3-button" href="/r/default.asp">Learn R</a>
                            <a className="w3-bar-item w3-button" href="/kotlin/index.php">Learn Kotlin</a>
                            <a className="w3-bar-item w3-button" href="/go/index.php">Learn Go</a>
                        </div>
                        <div className="w3-col l3 m6">
                            <h3 className="w3-margin-top">Server Side</h3>
                            <a className="w3-bar-item w3-button" href="/sql/default.asp">Learn SQL</a>
                            <a className="w3-bar-item w3-button" href="/mysql/default.asp">Learn MySQL</a>
                            <a className="w3-bar-item w3-button" href="/php/default.asp">Learn PHP</a>
                            <a className="w3-bar-item w3-button" href='/asp/default.asp'>Learn ASP</a>
                            <a className="w3-bar-item w3-button" href='/nodejs/default.asp'>Learn Node.js</a>
                            <a className="w3-bar-item w3-button" href='/nodejs/nodejs_raspberrypi.asp'>Learn Raspberry
                                Pi</a>
                            <a className="w3-bar-item w3-button" href='/git/default.asp'>Learn Git</a>

                            <h3 className="w3-margin-top">Web Building</h3>
                            <a className="w3-bar-item w3-button" href="https://www.w3schools.com/spaces" target="_blank"
                               onClick="ga('send', 'event', 'spacesFromTutorialsAcc', 'click');"
                               title="Get Your Own Website With W3shools Spaces">Create a Website <span
                                className="ribbon-topnav ws-yellow">NEW</span></a>
                            <a className="w3-bar-item w3-button" href="/w3css/w3css_templates.asp">Web Templates</a>
                            <a className="w3-bar-item w3-button" href="/browsers/default.asp">Web Statistics</a>
                            <a className="w3-bar-item w3-button" href="/cert/default.asp">Web Certificates</a>
                            <a className="w3-bar-item w3-button" href="/whatis/default.asp">Web Development</a>
                            <a className="w3-bar-item w3-button" href='/tryit/default.asp'>Code Editor</a>
                            <a className="w3-bar-item w3-button" href="/typingspeed/default.asp">Test Your Typing
                                Speed</a>
                            <a className="w3-bar-item w3-button" href="/codegame/index.html" target="_blank">Play a Code
                                Game</a>
                            <a className="w3-bar-item w3-button" href="/cybersecurity/index.php">Cyber Security</a>
                            <a className="w3-bar-item w3-button" href="/accessibility/index.php">Accessibility</a>
                        </div>
                        <div className="w3-col l3 m6 w3-hide-medium">
                            <h3 className="w3-margin-top">Data Analytics</h3>
                            <a className="w3-bar-item w3-button" href="/ai/default.asp">Learn AI</a>
                            <a className="w3-bar-item w3-button" href="/python/python_ml_getting_started.asp">Learn
                                Machine Learning</a>
                            <a className="w3-bar-item w3-button" href="/datascience/default.asp">Learn Data Science</a>
                            <a className="w3-bar-item w3-button" href="/python/numpy/default.asp">Learn NumPy</a>
                            <a className="w3-bar-item w3-button" href="/python/pandas/default.asp">Learn Pandas</a>
                            <a className="w3-bar-item w3-button" href="/python/scipy/index.php">Learn SciPy</a>
                            <a className="w3-bar-item w3-button" href="/python/matplotlib_intro.asp">Learn
                                Matplotlib</a>
                            <a className="w3-bar-item w3-button" href="/statistics/index.php">Learn Statistics</a>
                            <a className="w3-bar-item w3-button" href="/excel/index.php">Learn Excel</a>
                            <a className="w3-bar-item w3-button" href="/googlesheets/index.php">Learn Google Sheets</a>

                            <h3 className="w3-margin-top">XML Tutorials</h3>
                            <a className="w3-bar-item w3-button" href="/xml/default.asp">Learn XML</a>
                            <a className="w3-bar-item w3-button" href='/xml/ajax_intro.asp'>Learn XML AJAX</a>
                            <a className="w3-bar-item w3-button" href="/xml/dom_intro.asp">Learn XML DOM</a>
                            <a className="w3-bar-item w3-button" href='/xml/xml_dtd_intro.asp'>Learn XML DTD</a>
                            <a className="w3-bar-item w3-button" href='/xml/schema_intro.asp'>Learn XML Schema</a>
                            <a className="w3-bar-item w3-button" href="/xml/xsl_intro.asp">Learn XSLT</a>
                            <a className="w3-bar-item w3-button" href='/xml/xpath_intro.asp'>Learn XPath</a>
                            <a className="w3-bar-item w3-button" href='/xml/xquery_intro.asp'>Learn XQuery</a>
                        </div>
                    </div>
                </div>
                <br className="hidesm">
            </nav>
      );*/
        return ;
    }
}

/*export default GoogleApiWrapper({
    apiKey: ''
  })(Map);*/
