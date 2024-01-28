require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "gray-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,

          // extent: {
          //   // autocasts as new Extent()
          //   xmin: -9177811,
          //   ymin: 4247000,
          //   xmax: -9176791,
          //   ymax: 4247784,
          //   spatialReference: 102100
          // }
        });

        /********************
         * Add feature layer
         ********************/

        // Historical Earthquakes
        const featureLayer1 = new FeatureLayer({
          url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/Historical_Quakes/FeatureServer/0"
        });

        map.add(featureLayer1);
  
        // Tectonic Plate Boundaries
        const featureLayer2 = new FeatureLayer({
          url: "https://services.arcgis.com/BG6nSlhZSAWtExvp/ArcGIS/rest/services/TectonicPlateBoundaries/FeatureServer/0"
        });

        map.add(featureLayer2);
      });