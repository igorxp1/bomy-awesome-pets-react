import React from 'react';
//import { Map as GMap, GoogleApiWrapper } from 'google-maps-react';
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const mapStyles = {
    width: '100%',
    height: '100%',
  };

export class Map extends React.Component {




    render() {
        return (
            <div>
                <ComposableMap>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                        }
                    </Geographies>
                </ComposableMap>
            </div>
      );
    }
}

/*export default GoogleApiWrapper({
    apiKey: ''
  })(Map);*/
