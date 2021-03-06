define([
        '../Core/defined',
        '../Core/defineProperties'
    ], function(
        defined,
        defineProperties) {
    'use strict';

    /**
     * A policy for discarding tile images that contain no data (and so aren't actually images).
     * This policy discards {@link DiscardEmptyTileImagePolicy.EMPTY_IMAGE}, which is
     * expected to be used in place of any empty tile images by the image loading code.
     *
     * @alias DiscardEmptyTileImagePolicy
     * @constructor
     *
     * @see DiscardMissingTileImagePolicy
     */
    function DiscardEmptyTileImagePolicy(options) {
    }

    /**
     * Determines if the discard policy is ready to process images.
     * @returns {Boolean} True if the discard policy is ready to process images; otherwise, false.
     */
    DiscardEmptyTileImagePolicy.prototype.isReady = function() {
        return true;
    };

    /**
     * Given a tile image, decide whether to discard that image.
     *
     * @param {Image} image An image to test.
     * @returns {Boolean} True if the image should be discarded; otherwise, false.
     */
    DiscardEmptyTileImagePolicy.prototype.shouldDiscardImage = function(image) {
        return DiscardEmptyTileImagePolicy.EMPTY_IMAGE === image;
    };

    var emptyImage;

    defineProperties(DiscardEmptyTileImagePolicy, {
        /**
         * Default value for representing an empty image.
         * @type {Image}
         * @readonly
         * @memberof DiscardEmptyTileImagePolicy
         */
        EMPTY_IMAGE: {
            get: function() {
                if (!defined(emptyImage)) {
                    emptyImage = new Image();
                    // load a blank data URI with a 1x1 transparent pixel.
                    emptyImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
                }
                return emptyImage;
            }
        }
    });

    return DiscardEmptyTileImagePolicy;
});
