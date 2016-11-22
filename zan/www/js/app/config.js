/**
 * Created by korman on 22.11.16.
 */

require.config({
    baseUrl: './',
    paths: {
        app: "./js/app",
        lib: "./vendor",
        scripts: "./scripts",
        jquery: './vendor/jquery/dist/jquery.min',
        underscore: './vendor/underscore/underscore-min',
        backbone: './vendor/backbone/backbone-min'

    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [ "underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require([
    'backbone',
    'app/main'
], function(Backbone, Router){
    $(function(){
        console.log(Backbone);
        window.BackboneRouter = new Backbone.Router();
        Backbone.history.start({
            pushState: false
        });
    });


});