var size = 0;

var styleCache_battle={}
var style_battle = function(feature, resolution){
    var value = ""
    var size = 0;
	if (resolution < 0.08) {
	var style = [ new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          src: './2016-05-11-agot-map/img/war.png',
		  scale: 0.4
        }))
      })];
	} else {
		var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2 + size,
            stroke: new ol.style.Stroke({color: "rgba(166,44,19,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(166,88,40,1.0)"})})
		})];
	}
    
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_battle[key]){
        var text = new ol.style.Text({
              font: '11.7px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_battle[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_battle[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};