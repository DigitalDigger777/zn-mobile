/**
 * Created by korman on 22.11.16.
 */

define([
    'backbone',
    './views/ReceivedView',
    'router/CouponRouter',
    'router/FriendRouter',
    'router/MessageRouter',
    'router/ProfileRouter',
    'router/ReceivedRouter',
    'router/ScanRouter',
    'router/StoreRouter'
], function(Backbone, ReceivedView){


    var zan = Backbone.Marionette.Application.extend({

        onStart: function(options){
            var receivedView = new ReceivedView();

            Backbone.history.start();

            receivedView.render();

        }
    });

    return zan;
});