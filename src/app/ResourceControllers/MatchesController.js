'use strict';

/**
 * @typedef {{ from: int, to: int, matches: int[][], isRobust: boolean }} TwoViewMatch
 */

module.exports = Ember.ArrayController.extend({

    connectedGroups: function(){

        var _self = this,
            groups = [];

        this.get('model')
            .filter(function(match){
                return match.isRobust;
            })
            .forEach(function(match){

                var foundFrom = groups.find(function(e){
                    return e.contains(match.from);
                }, _self);

                var foundTo = groups.find(function(e){
                    return e.contains(match.to);
                }, _self);

                if (foundFrom && foundTo) {
                    if (foundFrom != foundTo) {
                        foundFrom.addObjects(foundTo);
                        groups.removeObject(foundTo);
                    }
                }
                else if (foundFrom || foundTo) {
                    var found = foundFrom || foundTo;
                    found.addObjects([match.from, match.to]);
                }
                else {
                    groups.push([match.from, match.to]);
                }

        });

    }.property('model.length'),

    isMatched: function(from, to){
        return this.get('model').some(function(match){
            return match.from === from && match.to === to;
        });
    },

    isRobust: function(from, to){
        return this.get('model').some(function(match){
            return match.from === from && match.to === to && match.isRobust;
        });
    },

    isConnected: function(from, to){
        return this.get('connectedGroups').some(function(group){
            return group.contains(from) && group.contains(to);
        });
    }

});