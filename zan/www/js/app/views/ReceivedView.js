/**
 * Created by korman on 22.11.16.
 */

define(['marionette', 'text!template/received.html'], function(Marionette, template){
    //console.log(Marionette);
    return Marionette.View.extend({
        el: '#content',
        template: function(){
            return _.template(template)({});
        }
    });
});