<?php
/**
 * Created by PhpStorm.
 * User: Jawad
 * Date: 08/11/2015
 * Time: 12:27
 */
$this->title = "World Map"
?>

<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
<script src="/js/datamaps.world.min.js"></script>
<div id="rzr-world-map" style="position: relative; width: 80%; max-height: 768px;"></div>
<script>
    var map = new Datamap({
        scope: 'world',
        responsive: true,
        element: document.getElementById('rzr-world-map'),
        projection: 'mercator',
        fills: {
            defaultFill: '#dddddd',
            stable: 'black',
            activated: 'red'
        },

        data: {
            USA: {fillKey: 'stable' },
            RUS: {fillKey: 'stable' },
            CAN: {fillKey: 'stable' },
            BRA: {fillKey: 'activated' },
            ARG: {fillKey: 'activated'},
            COL: {fillKey: 'activated' },
            AUS: {fillKey: 'activated' },
            ZAF: {fillKey: 'activated' },
            MAD: {fillKey: 'activated' }
        }
    })

    window.addEventListener('resize', function() {
        map.resize();
    });



</script>
