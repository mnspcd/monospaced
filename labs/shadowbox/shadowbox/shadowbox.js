/**
 * The Shadowbox class.
 *
 * This file is part of Shadowbox.
 *
 * Shadowbox is an online media viewer application that supports all of the
 * web's most popular media publishing formats. Shadowbox is written entirely
 * in JavaScript and CSS and is highly customizable. Using Shadowbox, website
 * authors can showcase a wide assortment of media in all major browsers without
 * navigating users away from the linking page.
 *
 * You should have received a license with this distribution explaining the terms
 * under which Shadowbox may be used. If you did not, you may obtain a copy of the
 * license at http://shadowbox-js.com/LICENSE
 *
 * @author      Michael J. I. Jackson <michael@mjijackson.com>
 * @copyright   2007-2009 Michael J. I. Jackson
 * @version     SVN: $Id: shadowbox.js 20M 2009-04-29 04:26:23Z (local) $
 */

/**
 * The Shadowbox class. Used to display different media on a web page using a
 * Lightbox-like effect.
 *
 * Known issues:
 *
 * - Location.toString exception in FF3 when loading Flash content into an
 *   iframe (such as a YouTube video). Known Flash bug, will not be fixed.
 *   http://bugs.adobe.com/jira/browse/FP-561
 *
 * Useful resources:
 *
 * - http://www.alistapart.com/articles/byebyeembed
 * - http://www.w3.org/TR/html401/struct/objects.html
 * - http://www.dyn-web.com/dhtml/iframes/
 * - http://www.apple.com/quicktime/player/specs.html
 * - http://www.apple.com/quicktime/tutorials/embed2.html
 * - http://www.howtocreate.co.uk/wrongWithIE/?chapter=navigator.plugins
 * - http://msdn.microsoft.com/en-us/library/ms532969.aspx
 * - http://support.microsoft.com/kb/316992
 * - http://www.alistapart.com/articles/flashembedcagematch
 */
var Shadowbox = function(){

    var ua = navigator.userAgent.toLowerCase(),

    // the Shadowbox object
    S = {

        /**
         * The current version of Shadowbox.
         *
         * @var     String
         * @public
         */
        version: "3.0b",

        /**
         * The name of the adapter currently being used.
         *
         * @var     String
         * @public
         */
        adapter: null,

        /**
         * The array index of the current gallery that is currently being viewed.
         *
         * @var     Number
         * @public
         */
        current: -1,

        /**
         * An array containing the gallery objects currently being viewed. In the
         * case of non-gallery items, this will only hold one object.
         *
         * @var     Array
         * @public
         */
        gallery: [],

        /**
         * A cache of options for links that have been set up for use with
         * Shadowbox.
         *
         * @var     Array
         * @public
         */
        cache: [],

        /**
         * The current content object.
         *
         * @var     Object
         * @public
         */
        content: null,

        /**
         * Holds the current dimensions of Shadowbox as calculated by its skin.
         * Contains the following properties:
         *
         * - height: The total height of #sb-wrapper (including title & info bars)
         * - width: The total width of #sb-wrapper
         * - inner_h: The height of #sb-body
         * - inner_w: The width of #sb-body
         * - top: The top to use for #sb-wrapper
         * - left: The left to use for #sb-wrapper
         * - oversized: True if the content is oversized (too large for the viewport)
         * - resize_h: The height to use for resizable content
         * - resize_w: The width to use for resizable content
         *
         * @var     Object
         * @public
         */
        dimensions: null,

        /**
         * Contains plugin support information. Each property of this object is a
         * boolean indicating whether that plugin is supported.
         *
         * - fla: Flash player
         * - qt: QuickTime player
         * - wmp: Windows Media player
         * - f4m: Flip4Mac plugin
         *
         * @var     Object
         * @public
         */
        plugins: null,

        /**
         * Contains the base path of the Shadowbox script.
         *
         * Note: This property will automatically be populated in Shadowbox.load.
         *
         * @var     String
         * @public
         */
        path: '',

        /**
         * Contains the default options for Shadowbox.
         *
         * @var     Object
         * @public
         */
        options: {
            adapter: null,              // the library adapter to use
            animate: true,              // enable all animations, except for fades
            animateFade: true,          // enable fade animations
            autoplayMovies: true,       // automatically play movies
            autoDimensions: false,      // use the dimensions of the first piece as
                                        // the initial dimensions (if they are
                                        // available)
            continuous: false,          // enables continuous galleries. When enabled,
                                        // user will be able to skip to the first
                                        // gallery item from the last using next and
                                        // vice versa
            counterLimit: 10,           // limit to the number of counter links that
                                        // are displayed in a "skip" style counter
            counterType: 'default',     // counter type. May be either "default" or
                                        // "skip". Skip counter displays a link for
                                        // each item in gallery
            displayCounter: true,       // display the gallery counter
            displayNav: true,           // show the navigation controls

            /**
             * Easing function used for animations. Based on a cubic polynomial.
             *
             * @param   Number      x       The state of the animation (% complete)
             * @return  Number              The adjusted easing value
             */
            ease: function(x){
                return 1 + Math.pow(x - 1, 3);
            },

            enableKeys: true,           // enable keyboard navigation

            /**
             * An object containing names of plugins and links to their respective
             * download pages.
             */
            errors: {
                fla: {
                    name:   'Flash',
                    url:    'http://www.adobe.com/products/flashplayer/'
                },
                qt: {
                    name:   'QuickTime',
                    url:    'http://www.apple.com/quicktime/download/'
                },
                wmp: {
                    name:   'Windows Media Player',
                    url:    'http://www.microsoft.com/windows/windowsmedia/'
                },
                f4m: {
                    name:   'Flip4Mac',
                    url:    'http://www.flip4mac.com/wmv_download.htm'
                }
            },

            /**
             * A map of players to the file extensions they support. Each member of
             * this object is the name of a player (with one exception), whose value
             * is an array of file extensions that player will "play". The one
             * exception to this rule is the "qtwmp" member, which contains extensions
             * that may be played using either QuickTime or Windows Media Player.
             *
             * - img: Image file extensions
             * - swf: Flash SWF file extensions
             * - flv: Flash video file extensions (will be played by JW FLV player)
             * - qt: Movie file extensions supported by QuickTime
             * - wmp: Movie file extensions supported by Windows Media Player
             * - qtwmp: Movie file extensions supported by both QuickTime and Windows Media Player
             * - iframe: File extensions that will be display in an iframe
             *
             * IMPORTANT: If this object is to be modified, it must be copied in its
             * entirety and tweaked because it is not merged recursively with the
             * default. Also, any modifications must be passed into Shadowbox.init
             * for speed reasons.
             */
            ext: {
                img:        ['png', 'jpg', 'jpeg', 'gif', 'bmp'],
                swf:        ['swf'],
                flv:        ['flv'],
                qt:         ['dv', 'mov', 'moov', 'movie', 'mp4'],
                wmp:        ['asf', 'wm', 'wmv'],
                qtwmp:      ['avi', 'mpg', 'mpeg'],
                iframe:     ['asp', 'aspx', 'cgi', 'cfm', 'htm', 'html', 'jsp',
                    'pl', 'php', 'php3', 'php4', 'php5', 'phtml', 'rb', 'rhtml',
                    'shtml', 'txt', 'vbs']
            },

            fadeDuration: 0.35,         // duration of the fading animations (seconds)

            /**
             * Parameters to pass to flash <object>'s.
             */
            flashParams: {
                bgcolor:            '#000000',
                allowFullScreen:    true
            },

            flashVars: {},              // flash vars
            flashVersion: '9.0.115',    // minimum required flash version suggested
                                        // by JW FLV player

            /**
             * How to handle content that is too large to display in its entirety
             * (and is resizable). A value of 'resize' will resize the content while
             * preserving aspect ratio and display it at the smaller resolution. If
             * the content is an image, a value of 'drag' will display the image at
             * its original resolution but it will be draggable within Shadowbox. A
             * value of 'none' will display the content at its original resolution
             * but it may be cropped.
             */
            handleOversize: 'resize',

            /**
             * The mode to use when handling unsupported media. May be either
             * 'remove' or 'link'. If it is 'remove', the unsupported gallery item
             * will merely be removed from the gallery. If it is the only item in
             * the gallery, the link will simply be followed. If it is 'link', a
             * link will be provided to the appropriate plugin page in place of the
             * gallery element.
             */
            handleUnsupported: 'link',

            initialHeight: 160,         // initial height (pixels)
            initialWidth: 320,          // initial width (pixels)
            language: 'en',             // the language to use
            modal: false,               // trigger Shadowbox.close() when overlay is
                                        // clicked
            onChange: null,             // hook function to be fired when changing
                                        // from one item to the next. Is passed the
                                        // item that is about to be displayed
            onClose: null,              // hook function to be fired when closing.
                                        // is passed the most recent item
            onFinish: null,             // hook function to be fired when finished
                                        // loading content. Is passed current
                                        // gallery item
            onOpen: null,               // hook function to be fired when opening.
                                        // is passed the current gallery item
            overlayColor: '#000',       // color to use for modal overlay
            overlayOpacity: 0.8,        // opacity to use for modal overlay
            players: ['img'],           // the players to load
            resizeDuration: 0.35,       // duration of resizing animations (seconds)
            showOverlay: true,          // show the overlay
            showMovieControls: true,    // enable movie controls on movie players
            skipSetup: false,           // skip calling Shadowbox.setup() during
                                        // shadowbox.init()
            slideshowDelay: 0,          // delay to use for slideshows (seconds). If
                                        // set to any duration other than 0, is interval
                                        // at which slideshow will advance
            useSizzle: true,            // use sizzle.js to support css selectors
            viewportPadding: 20         // amount of padding to maintain around the
                                        // edge of the viewport at all times (pixels)
        },

        /**
         * Some simple browser detection variables.
         *
         * @var     Object
         * @public
         */
        client: {
            isIE:       ua.indexOf('msie') > -1,
            isIE6:      ua.indexOf('msie 6') > -1,
            isIE7:      ua.indexOf('msie 7') > -1,
            isGecko:    ua.indexOf('gecko') > -1 && ua.indexOf('safari') == -1,
            isWebkit:   ua.indexOf('applewebkit/') > -1,
            isWindows:  ua.indexOf('windows') > -1 || ua.indexOf('win32') > -1,
            isMac:      ua.indexOf('macintosh') > -1 || ua.indexOf('mac os x') > -1,
            isLinux:    ua.indexOf('linux') > -1
        },

        /**
         * An object containing some regular expressions we'll need later. Compiled
         * up front for speed.
         *
         * @var     Object
         * @public
         */
        regex: {
            domain:         /:\/\/(.*?)[:\/]/,              // domain prefix
            inline:         /#(.+)$/,                       // inline element id
            rel:            /^(light|shadow)box/i,          // rel attribute format
            gallery:        /^(light|shadow)box\[(.*?)\]/i, // rel attribute format for gallery link
            unsupported:    /^unsupported-(\w+)/,           // unsupported media type
            param:          /\s*([a-z_]*?)\s*=\s*(.+)\s*/   // rel string parameter
        },

        /**
         * A map of library object names to their corresponding Shadowbox adapter
         * names.
         *
         * @var     Object
         * @public
         */
        libraries: {
            Prototype:  'prototype',
            jQuery:     'jquery',
            MooTools:   'mootools',
            YAHOO:      'yui',
            dojo:       'dojo',
            Ext:        'ext'
        },

        /**
         * Applies the given set of options to those currently in use.
         *
         * Note: Options will be reset on Shadowbox.open() so this function is
         * only useful after it has already been called (while Shadowbox is
         * open).
         *
         * @param   Object      opts        The options to apply
         * @return  void
         * @public
         */
        applyOptions: function(opts){
            if(opts){
                // store defaults, use apply to break reference
                default_options = apply({}, S.options);
                apply(S.options, opts);
            }
        },

        /**
         * Builds an object from the original link element data to store in cache.
         * These objects contain (most of) the following keys:
         *
         * - el: the link element
         * - title: the object's title
         * - player: the player to use for the object
         * - content: the object's URL
         * - gallery: the gallery the object belongs to (optional)
         * - height: the height of the object (only necessary for movies)
         * - width: the width of the object (only necessary for movies)
         * - options: custom options to use (optional)
         *
         * A custom set of options may be passed in here that will be applied when
         * this object is displayed. However, any options that are specified in
         * the link's HTML markup will trump options given here.
         *
         * @param   HTMLElement     link    The link element to process
         * @param   Object          opts    A set of options to use for the object
         * @return  Object                  An object representing the link
         * @public
         */
        buildCacheObj: function(link, opts){
            var href = link.href, // don't use getAttribute() here
            obj = {
                el:         link,
                title:      link.getAttribute('title'),
                options:    apply({}, opts || {}),
                content:    href
            };

            // remove link-level options from top-level options
            each(['player', 'title', 'height', 'width', 'gallery'], function(o){
                if(typeof obj.options[o] != 'undefined'){
                    obj[o] = obj.options[o];
                    delete obj.options[o];
                }
            });

            if(!obj.player)
                obj.player = getPlayer(href);

            // HTML options always trump JavaScript options, so do these last
            var rel = link.getAttribute('rel');
            if(rel){
                // extract gallery name from shadowbox[name] format
                var m = rel.match(S.regex.gallery);
                if(m)
                    obj.gallery = escape(m[2]);

                // other parameters
                each(rel.split(';'), function(p){
                    m = p.match(S.regex.param);
                    if(m){
                        if(m[1] == 'options')
                            eval('apply(obj.options,' + m[2] + ')');
                        else
                            obj[m[1]] = m[2];
                    }
                });
            }

            return obj;
        },

        /**
         * Jumps to the piece in the current gallery with the given index.
         *
         * @param   Number      n       The gallery index to view
         * @return  void
         * @public
         */
        change: function(n){
            if(!S.gallery) return; // no current gallery
            if(!S.gallery[n]){ // index does not exist
                if(!S.options.continuous){
                    return;
                }else{
                    n = n < 0 ? S.gallery.length - 1 : 0; // loop
                }
            }

            // update current
            S.current = n;

            if(typeof slide_timer == 'number'){
                clearTimeout(slide_timer);
                slide_timer = null;
                slide_delay = slide_start = 0; // reset slideshow variables
            }

            if(S.options.onChange)
                S.options.onChange();

            loadContent();
        },

        /**
         * Removes all onclick listeners from elements that have been setup with
         * Shadowbox and clears all objects from cache.
         *
         * @return  void
         * @public
         */
        clearCache: function(){
            each(S.cache, function(obj){
                if(obj.el)
                    S.lib.removeEvent(obj.el, 'click', handleClick);
            });
            S.cache = [];
        },

        /**
         * Deactivates Shadowbox.
         *
         * @return  void
         * @public
         */
        close: function(){
            if(!active) return; // already closed
            active = false;

            listenKeys(false);

            // remove the content
            if(S.content){
                S.content.remove();
                S.content = null;
            }

            // clear slideshow variables
            if(typeof slide_timer == 'number')
                clearTimeout(slide_timer);
            slide_timer = null;
            slide_delay = 0;

            if(S.options.onClose)
                S.options.onClose();

            S.skin.onClose();

            S.revertOptions();

            // reset troublesome elements to stored visibility settings
            each(v_cache, function(c){
                c[0].style.visibility = c[1];
            });
        },

        /**
         * Gets the id that should be used for content elements.
         *
         * @return  String          The content element id
         * @public
         */
        contentId: function(){
            return content_id;
        },

        /**
         * Gets the values that should appear in the counter (if the skin
         * supports counters). If a "skip" style counter is used, the return
         * value should be an array of all counter indexes that should be
         * displayed. If the "default" counter is used, the return value will
         * be a simple "1 of 5" message as a string. The skin can use the return
         * type to determine how to build the counter.
         *
         * @return  mixed           The counter as described above
         * @public
         */
        getCounter: function(){
            var len = S.gallery.length;

            if(S.options.counterType == 'skip'){
                // limit the counter?
                var c = [],
                    i = 0,
                    end = len,
                    limit = parseInt(S.options.counterLimit) || 0;

                if(limit < len && limit > 2){ // support large galleries
                    var h = Math.floor(limit / 2);
                    i = S.current - h;
                    if(i < 0) i += len;
                    end = S.current + (limit - h);
                    if(end > len) end -= len;
                }
                while(i != end){
                    if(i == len) i = 0;
                    c.push(i++);
                }
            }else
                var c = (S.current + 1) + ' ' + S.lang.of + ' ' + len;

            return c;
        },

        /**
         * Gets the current gallery object.
         *
         * @return  Object          The current gallery item
         * @public
         */
        getCurrent: function(){
            return S.current > -1 ? S.gallery[S.current] : null;
        },

        /**
         * Determines if there is a next piece to display in the current
         * gallery.
         *
         * @return  Boolean         True if there is another piece
         * @public
         */
        hasNext: function(){
            return S.gallery.length > 1 &&
                (S.current != S.gallery.length - 1 || S.options.continuous);
        },

        /**
         * Initializes the Shadowbox environment. Should be called by the user in
         * the <head> of the HTML document.
         *
         * Note: This function attempts to load all Shadowbox dependencies
         * dynamically using document.write. However, if these dependencies are
         * already included, they won't be loaded again.
         *
         * @param   Object      opts    (optional) The default options to use
         * @return  void
         * @public
         */
        init: function(opts){
            if(initialized) return; // don't initialize twice
            initialized = true;

            opts = opts || {};
            init_options = opts;

            // apply options
            if(opts)
                apply(S.options, opts);

            // compile file type regular expressions here for speed
            for(var e in S.options.ext)
                S.regex[e] = new RegExp('\.(' + S.options.ext[e].join('|') + ')\s*$', 'i');

            if(!S.path){
                // determine script path automatically
                var path_re = /(.+)shadowbox\.js/i, path;
                each(document.getElementsByTagName('script'), function(s){
                    if((path = path_re.exec(s.src)) != null){
                        S.path = path[1];
                        return false;
                    }
                });
            }

            // determine adapter
            if(S.options.adapter)
                S.adapter = S.options.adapter;
            else{
                for(var lib in S.libraries){
                    if(typeof window[lib] != 'undefined'){
                        S.adapter = S.libraries[lib];
                        break;
                    }
                }
                if(!S.adapter)
                    S.adapter = 'base';
            }

            // load dependencies
            if(S.options.useSizzle && !window['Sizzle'])
                U.include(S.path + 'libraries/sizzle/sizzle.js');
            if(!S.lang)
                U.include(S.path + 'languages/shadowbox-' + S.options.language + '.js');
            each(S.options.players, function(p){
                if((p == 'swf' || p == 'flv') && !window['swfobject'])
                    U.include(S.path + 'libraries/swfobject/swfobject.js');
                if(!S[p])
                    U.include(S.path + 'players/shadowbox-' + p + '.js');
            });
            if(!S.lib)
                U.include(S.path + 'adapters/shadowbox-' + S.adapter + '.js');
        },

        /**
         * Tells whether or not Shadowbox is currently activated.
         *
         * @return  Boolean         True if activated, false otherwise
         * @public
         */
        isActive: function(){
            return active;
        },

        /**
         * Tells whether or not Shadowbox is currently in the middle of a
         * slideshow in a paused state.
         *
         * @return  Boolean         True if paused, false otherwise
         * @public
         */
        isPaused: function(){
            return slide_timer == 'paused';
        },

        /**
         * Loads Shadowbox into the DOM. Is called automatically by each adapter
         * as soon as the DOM is ready.
         *
         * @return  void
         * @public
         */
        load: function(){
            // apply skin options, re-apply user init options in case they overwrite
            if(S.skin.options){
                apply(S.options, S.skin.options);
                apply(S.options, init_options);
            }

            // append markup and initialize skin
            var markup = S.skin.markup.replace(/\{(\w+)\}/g, function(m, p){
                return S.lang[p];
            });
            S.lib.append(document.body, markup);

            if(S.skin.init)
                S.skin.init();

            // set up window resize event handler
            var id;
            S.lib.addEvent(window, 'resize', function(){
                // use 50 ms event buffering to prevent jerky window resizing
                if(id){
                    clearTimeout(id);
                    id = null;
                }
                // check if activated because IE7 fires window resize event
                // when container display is set to block
                if(active){
                    id = setTimeout(function(){
                        if(S.skin.onWindowResize)
                            S.skin.onWindowResize();
                        var c = S.content;
                        if(c && c.onWindowResize)
                            c.onWindowResize();
                    }, 50);
                }
            });

            if(!S.options.skipSetup)
                S.setup();
        },

        /**
         * Jumps to the next piece in the gallery.
         *
         * @return  void
         * @public
         */
        next: function(){
            S.change(S.current + 1);
        },

        /**
         * Opens the given object in Shadowbox. This object may be either an
         * anchor/area element, or an object similar to the one created by
         * Shadowbox.buildCacheObj().
         *
         * @param   mixed       obj         The object or link element that defines
         *                                  what to display
         * @return  void
         * @public
         */
        open: function(obj){
            // if it's a link element, build an object on the fly
            if(U.isLink(obj))
                obj = S.buildCacheObj(obj);

            // set up the gallery
            if(obj.constructor == Array){
                S.gallery = obj;
                S.current = 0;
            }else{
                if(!obj.gallery){
                    // single item, no gallery
                    S.gallery = [obj];
                    S.current = 0;
                }else{
                    // gallery item, build gallery from cached gallery elements
                    S.current = null;
                    S.gallery = [];
                    each(S.cache, function(c){
                        if(c.gallery && c.gallery == obj.gallery){
                            if(S.current == null && c.content == obj.content && c.title == obj.title)
                                S.current = S.gallery.length;
                            S.gallery.push(c);
                        }
                    });

                    // if not found in cache, prepend to front of gallery
                    if(S.current == null){
                        S.gallery.unshift(obj);
                        S.current = 0;
                    }
                }
            }

            obj = S.getCurrent();
            if(obj.options){
                S.revertOptions();
                S.applyOptions(obj.options);
            }

            // filter gallery for unsupported elements
            var g, r, m, s, a, oe = S.options.errors, msg, el;
            for(var i = 0; i < S.gallery.length; ++i){
                // use apply to break the reference to the original object here
                // because we'll be modifying the properties of the gallery objects
                // directly and we don't want to taint them in case they are used
                // again in a future call
                g = S.gallery[i] = apply({}, S.gallery[i]);
                r = false; // remove the element?
                if(g.player == 'unsupported'){
                    // don't support this at all
                    r = true;
                }else if(m = S.regex.unsupported.exec(g.player)){
                    // handle unsupported elements
                    if(S.options.handleUnsupported == 'link'){
                        g.player = 'html';
                        // generate a link to the appropriate plugin download page(s)
                        switch(m[1]){
                            case 'qtwmp':
                                s = 'either';
                                a = [oe.qt.url, oe.qt.name, oe.wmp.url, oe.wmp.name];
                            break;
                            case 'qtf4m':
                                s = 'shared';
                                a = [oe.qt.url, oe.qt.name, oe.f4m.url, oe.f4m.name];
                            break;
                            default:
                                s = 'single';
                                if(m[1] == 'swf' || m[1] == 'flv') m[1] = 'fla';
                                a = [oe[m[1]].url, oe[m[1]].name];
                        }
                        msg = S.lang.errors[s].replace(/\{(\d+)\}/g, function(m, n){
                            return a[n];
                        });
                        g.content = '<div class="sb-message">' + msg + '</div>';
                    }else
                        r = true;
                }else if(g.player == 'inline'){
                    // inline element, retrieve innerHTML
                    m = S.regex.inline.exec(g.content);
                    if(m){
                        var el = U.get(m[1]);
                        if(el)
                            g.content = el.innerHTML;
                        else
                            throw 'Cannot find element with id ' + m[1];
                    }else
                        throw 'Cannot find element id for inline content';
                }else if(g.player == 'swf' || g.player == 'flv'){
                    var version = (g.options && g.options.flashVersion) || S.options.flashVersion;
                    if(!swfobject.hasFlashPlayerVersion(version)){
                        // express install will be triggered because the client
                        // does not have the minimum required version of flash
                        // installed, set height and width to those of express
                        // install swf
                        g.width = 310;
                        // minimum height is 127, but +20 pixels on top and bottom
                        // looks better
                        g.height = 177;
                    }
                }
                if(r){
                    S.gallery.splice(i, 1); // remove from gallery
                    if(i < S.current)
                        --S.current; // maintain integrity of S.current
                    else if(i == S.current)
                        S.current = i > 0 ? i - 1 : i; // look for supported neighbor
                    --i; // decrement index for next loop
                }
            }

            // anything left to display?
            if(S.gallery.length){
                if(!active){
                    // fire onOpen hook
                    if(typeof S.options.onOpen == 'function' && S.options.onOpen(obj) === false) return;

                    // hide elements troublesome for modal overlays
                    v_cache = [];
                    each(['select', 'object', 'embed', 'canvas'], function(tag){
                        each(document.getElementsByTagName(tag), function(el){
                            v_cache.push([el, el.style.visibility || 'visible']);
                            el.style.visibility = 'hidden';
                        });
                    });

                    // set initial dimensions & load
                    var h = S.options.autoDimensions && 'height' in obj
                        ? obj.height
                        : S.options.initialHeight;
                    var w = S.options.autoDimensions && 'width' in obj
                        ? obj.width
                        : S.options.initialWidth;

                    S.skin.onOpen(h, w, loadContent);
                }else
                    loadContent();

                active = true;
            }
        },

        /**
         * Pauses the current slideshow.
         *
         * @return  void
         * @public
         */
        pause: function(){
            if(typeof slide_timer != 'number') return;

            var time = new Date().getTime();
            slide_delay = Math.max(0, slide_delay - (time - slide_start));

            // if there's any time left on current slide, pause the timer
            if(slide_delay){
                clearTimeout(slide_timer);
                slide_timer = 'paused';

                if(S.skin.onPause)
                    S.skin.onPause();
            }
        },

        /**
         * Sets the timer for the next image in the slideshow to be displayed.
         *
         * @return  void
         * @public
         */
        play: function(){
            if(!S.hasNext()) return;
            if(!slide_delay) slide_delay = S.options.slideshowDelay * 1000;
            if(slide_delay){
                slide_start = new Date().getTime();
                slide_timer = setTimeout(function(){
                    slide_delay = slide_start = 0; // reset slideshow
                    S.next();
                }, slide_delay);

                if(S.skin.onPlay)
                    S.skin.onPlay();
            }
        },

        /**
         * Jumps to the previous piece in the gallery.
         *
         * @return  void
         * @public
         */
        previous: function(){
            S.change(S.current - 1);
        },

        /**
         * Reverts Shadowbox' options to the last default set in use before
         * Shadowbox.applyOptions() was called.
         *
         * @return  void
         * @public
         */
        revertOptions: function(){
            apply(S.options, default_options);
        },

        /**
         * Calculates the dimensions for Shadowbox according to the given
         * parameters. Will determine if content is oversized (too large for the
         * viewport) and will automatically constrain resizable content
         * according to user preference.
         *
         * @param   Number      height      The content height
         * @param   Number      width       The content width
         * @param   Number      max_h       The maximum height available (should
         *                                  be the height of the viewport)
         * @param   Number      max_w       The maximum width available (should
         *                                  be the width of the viewport)
         * @param   Number      tb          The extra top/bottom pixels that are
         *                                  required for borders/toolbars
         * @param   Number      lr          The extra left/right pixels that are
         *                                  required for borders/toolbars
         * @param   Boolean     resizable   True if the content is able to be
         *                                  resized. Defaults to false
         * @return  Object                  The Shadowbox.dimensions object
         * @public
         */
        setDimensions: function(height, width, max_h, max_w, tb, lr, resizable){
            var h = height = parseInt(height),
                w = width = parseInt(width),
                pad = parseInt(S.options.viewportPadding) || 0;

            // calculate the max height/width
            var extra_h = 2 * pad + tb;
            if(h + extra_h >= max_h) h = max_h - extra_h;
            var extra_w = 2 * pad + lr;
            if(w + extra_w >= max_w) w = max_w - extra_w;

            // handle oversized content
            var resize_h = height,
                resize_w = width,
                change_h = (height - h) / height,
                change_w = (width - w) / width,
                oversized = (change_h > 0 || change_w > 0);
            if(resizable && oversized && S.options.handleOversize == 'resize'){
                // adjust resized height/width, preserve original aspect ratio
                if(change_h > change_w)
                    w = Math.round((width / height) * h);
                else if(change_w > change_h)
                    h = Math.round((height / width) * w);
                resize_w = w;
                resize_h = h;
            }

            // update Shadowbox.dimensions
            S.dimensions = {
                height:     h + tb,
                width:      w + lr,
                inner_h:    h,
                inner_w:    w,
                top:        (max_h - (h + extra_h)) / 2 + pad,
                left:       (max_w - (w + extra_w)) / 2 + pad,
                oversized:  oversized,
                resize_h:   resize_h,
                resize_w:   resize_w
            };

            return S.dimensions;
        },

        /**
         * Sets up listeners on the given links that will trigger Shadowbox. If no
         * links are given, this method will set up every anchor element on the page
         * with the appropriate rel attribute. It is important to note that any
         * options given here will be applied to all link elements. Multiple calls
         * to this method may be needed if different options are desired.
         *
         * Note: Because AREA elements do not support the rel attribute, they must
         * be explicitly passed to this method.
         *
         * @param   Array       links       An array (or array-like) list of anchor
         *                                  and/or area elements to set up
         * @param   Object      opts        Some options to use for the given links
         * @return  void
         * @public
         */
        setup: function(links, opts){
            // get links if none specified
            if(!links){
                var links = [], rel;
                each(document.getElementsByTagName('a'), function(a){
                    rel = a.getAttribute('rel');
                    if(rel && S.regex.rel.test(rel)) links.push(a);
                });
            }else{
                var len = links.length;
                if(len){
                    if(window['Sizzle']){
                        if(typeof links == 'string')
                            links = Sizzle(links); // lone selector
                        else if(len == 2 && links.push && typeof links[0] == 'string' && links[1].nodeType)
                            links = Sizzle(links[0], links[1]); // selector + context
                    }
                }else
                    links = [links]; // single link
            }

            each(links, function(link){
                if(typeof link.shadowboxCacheKey == 'undefined'){
                    // assign cache key expando, use integer primitive to avoid
                    // memory leak in IE
                    link.shadowboxCacheKey = S.cache.length;
                    // add onclick listener
                    S.lib.addEvent(link, 'click', handleClick);
                }
                S.cache[link.shadowboxCacheKey] = S.buildCacheObj(link, opts);
            });
        }

    },

    U = S.util = {

        /**
         * Animates any numeric (not color) style of the given element from its
         * current state to the given value. Defaults to using pixel-based
         * measurements.
         *
         * @param   HTMLElement     el      The element to animate
         * @param   String          p       The property to animate (in camelCase)
         * @param   mixed           to      The value to animate to
         * @param   Number          d       The duration of the animation (in
         *                                  seconds)
         * @param   Function        cb      A callback function to call when the
         *                                  animation completes
         * @return  void
         * @public
         */
        animate: function(el, p, to, d, cb){
            var from = parseFloat(S.lib.getStyle(el, p));
            if(isNaN(from)) from = 0;

            var delta = to - from;
            if(delta == 0){
                if(cb) cb();
                return; // nothing to animate
            }

            var op = p == 'opacity';

            function fn(ease){
                var to = from + ease * delta;
                if(op)
                    U.setOpacity(el, to);
                else
                    el.style[p] = to + 'px'; // default unit is px
            }

            // cancel the animation here if duration is 0 or if set in the options
            if(!d || (!op && !S.options.animate) || (op && !S.options.animateFade)){
                fn(1);
                if(cb) cb();
                return;
            }

            d *= 1000; // convert to milliseconds
            var begin = new Date().getTime(),
                end = begin + d,
                time,
                timer = setInterval(function(){
                    time = new Date().getTime();
                    if(time >= end){ // end of animation
                        clearInterval(timer);
                        fn(1);
                        if(cb) cb();
                    }else
                        fn(S.options.ease((time - begin) / d));
                }, 10); // 10 ms interval is minimum on webkit
        },

        /**
         * Applies all properties of e to o.
         *
         * @param   Object      o       The original object
         * @param   Object      e       The extension object
         * @return  Object              The original object with all properties
         *                              of the extension object applied
         * @public
         */
        apply: function(o, e){
            for(var p in e)
                o[p] = e[p];
            return o;
        },

        /**
         * A utility function used by the fade functions to clear the opacity
         * style setting of the given element. Required in some cases for IE.
         *
         * @param   HTMLElement     el      The element
         * @return  void
         * @public
         */
        clearOpacity: function(el){
            var s = el.style;
            if(window.ActiveXObject){
                // be careful not to overwrite other filters!
                if(typeof s.filter == 'string' && (/alpha/i).test(s.filter))
                    s.filter = s.filter.replace(/[\w\.]*alpha\(.*?\);?/i, '');
            }else
                s.opacity = '';
        },

        /**
         * Calls the given function for each element of obj. The obj element must
         * be array-like (meaning it must have a length property and be able to
         * be accessed using the array square bracket syntax). If scope is not
         * explicitly given, the callback will be called with a scope of the
         * current item. Will stop execution if a callback returns false.
         *
         * @param   mixed       obj     An array-like object containing the
         *                              elements
         * @param   Function    fn      The callback function
         * @param   mixed       scope   The scope of the callback
         * @return  void
         * @public
         */
        each: function(obj, fn, scope){
            for(var i = 0, len = obj.length; i < len; ++i)
                if(fn.call(scope || obj[i], obj[i], i, obj) === false) return;
        },

        /**
         * Gets an element by its id.
         *
         * @param   String      id      The element id
         * @return  HTMLElement         A reference to the element with the
         *                              given id
         * @public
         */
        get: function(id){
            return document.getElementById(id);
        },

        /**
         * Dynamically includes a JavaScript file in the current page.
         *
         * @param   String      file    The name of the js file to include
         * @return  void
         * @public
         */
        include: function(){
            var includes = {};
            return function(file){
                if(includes[file]) return; // don't include same file twice
                includes[file] = true;
                document.write('<scr' + 'ipt type="text/javascript" src="' + file + '"><\/script>');
            }
        }(),

        /**
         * Determines if the given object is an anchor/area element.
         *
         * @param   mixed       obj     The object to check
         * @return  Boolean             True if the object is a link element
         * @public
         */
        isLink: function(obj){
            if(!obj || !obj.tagName) return false;
            var up = obj.tagName.toUpperCase();
            return up == 'A' || up == 'AREA';
        },

        /**
         * Removes all child nodes from the given element.
         *
         * @param   HTMLElement     el      The element
         * @return  void
         * @public
         */
        removeChildren: function(el){
            while(el.firstChild)
                el.removeChild(el.firstChild);
        },

        /**
         * Sets the opacity of the given element to the specified level.
         *
         * @param   HTMLElement     el      The element
         * @param   Number          o       The opacity to use
         * @return  void
         * @public
         */
        setOpacity: function(el, o){
            var s = el.style;
            if(window.ActiveXObject){
                s.zoom = 1; // trigger hasLayout
                s.filter = (s.filter || '').replace(/\s*alpha\([^\)]*\)/gi, '') +
                    (o == 1 ? '' : ' alpha(opacity=' + (o * 100) + ')');
            }else
                s.opacity = o;
        }

    },

    // shorthand
    apply = U.apply,
    each = U.each,

    /**
     * The initial options object that was given by the user.
     *
     * @var     Object
     * @private
     */
    init_options,

    /**
     * Keeps track of whether or not Shadowbox.init has been called.
     *
     * @var     Boolean
     * @private
     */
    initialized = false,

    /**
     * Stores the default set of options in case a custom set of options is used
     * on a link-by-link basis so we can restore them later.
     *
     * @var     Object
     * @private
     */
    default_options = {},

    /**
     * The id to use for content objects.
     *
     * @var     String
     * @private
     */
    content_id = 'sb-content',

    /**
     * Keeps track of whether or not Shadowbox is activated.
     *
     * @var     Boolean
     * @private
     */
    active = false,

    /**
     * The timeout id for the slideshow transition function.
     *
     * @var     Number
     * @private
     */
    slide_timer,

    /**
     * Keeps track of the time at which the current slideshow frame was
     * displayed.
     *
     * @var     Number
     * @private
     */
    slide_start,

    /**
     * The delay on which the next slide will display.
     *
     * @var     Number
     * @private
     */
    slide_delay = 0,

    /**
     * A cache for elements that are troublesome for modal overlays.
     *
     * @var     Array
     * @private
     */
    v_cache = [];

    // detect plugin support
    if(navigator.plugins && navigator.plugins.length){
        var names = [];
        each(navigator.plugins, function(p){
            names.push(p.name);
        });
        names = names.join();
        var detectPlugin = function(n){
            return names.indexOf(n) > -1;
        }
        var f4m = detectPlugin('Flip4Mac');
        S.plugins = {
            fla:    detectPlugin('Shockwave Flash'),
            qt:     detectPlugin('QuickTime'),
            wmp:    !f4m && detectPlugin('Windows Media'), // if it's Flip4Mac, it's not really WMP
            f4m:    f4m
        }
    }else{
        function detectPlugin(n){
            try{
                var axo = new ActiveXObject(n);
            }catch(e){}
            return !!axo;
        }
        S.plugins = {
            fla:    detectPlugin('ShockwaveFlash.ShockwaveFlash'),
            qt:     detectPlugin('QuickTime.QuickTime'),
            wmp:    detectPlugin('wmplayer.ocx'),
            f4m:    false
        }
    }

    /**
     * Determines the player needed to display the file at the given URL. If
     * the file type is not supported, the return value will be 'unsupported'.
     * If the file type is not supported but the correct player can be
     * determined, the return value will be 'unsupported-*' where * will be the
     * player abbreviation (e.g. 'qt' = QuickTime).
     *
     * @param   String      url     The url of the file
     * @return  String              The name of the player to use
     * @private
     */
    function getPlayer(url){
        var re = S.regex,
            p = S.plugins,
            m = url.match(re.domain),
            d = m && document.domain == m[1]; // same domain
        if(url.indexOf('#') > -1 && d) return 'inline';
        var q = url.indexOf('?');
        if(q > -1) url = url.substring(0, q); // strip query string for player detection purposes
        if(re.img.test(url)) return 'img';
        if(re.swf.test(url)) return p.fla ? 'swf' : 'unsupported-swf';
        if(re.flv.test(url)) return p.fla ? 'flv' : 'unsupported-flv';
        if(re.qt.test(url)) return p.qt ? 'qt' : 'unsupported-qt';
        if(re.wmp.test(url)){
            if(p.wmp) return 'wmp';
            if(p.f4m) return 'qt';
            if(S.client.isMac) return p.qt ? 'unsupported-f4m' : 'unsupported-qtf4m';
            return 'unsupported-wmp';
        }
        if(re.qtwmp.test(url)){
            if(p.qt) return 'qt';
            if(p.wmp) return 'wmp';
            return S.client.isMac ? 'unsupported-qt' : 'unsupported-qtwmp';
        }
        if(!d || re.iframe.test(url))
            return 'iframe';
        return 'unsupported'; // same domain, not supported
    }

    /**
     * Handles all clicks on links that have been set up to work with Shadowbox
     * and cancels the default event behavior when appropriate.
     *
     * @param   HTMLEvent   e           The click event object
     * @return  void
     * @private
     */
    function handleClick(e){
        // get anchor/area element
        var link;
        if(U.isLink(this)){
            link = this; // jQuery, Prototype, YUI
        }else{
            link = S.lib.getTarget(e); // Ext, standalone
            while(!U.isLink(link) && link.parentNode)
                link = link.parentNode;
        }

        //S.lib.preventDefault(e); // good for debugging

        if(link){
            // if this link has already been set up, use the cached version
            var key = link.shadowboxCacheKey;
            if(typeof key != 'undefined' && typeof S.cache[key] != 'undefined')
                link = S.cache[key];

            S.open(link);
            if(S.gallery.length) S.lib.preventDefault(e); // stop event
        }
    }

    /**
     * Sets up a listener on the document for keystrokes.
     *
     * @param   Boolean     on      True to enable the listener, false to turn
     *                              it off
     * @return  void
     * @private
     */
    function listenKeys(on){
        if(!S.options.enableKeys) return;
        S.lib[(on ? 'add' : 'remove') + 'Event'](document, 'keydown', handleKey);
    }

    /**
     * A listener function that is fired when a key is pressed.
     *
     * @param   mixed       e       The event object
     * @return  void
     * @private
     */
    function handleKey(e){
        var code = S.lib.keyCode(e);

        // attempt to prevent default key action
        S.lib.preventDefault(e);

        switch(code){
            case 81: // q
            case 88: // x
            case 27: // esc
                S.close();
                break;
            case 37: // left
                S.previous();
                break;
            case 39: // right
                S.next();
                break;
            case 32: // space
                S[(typeof slide_timer == 'number' ? 'pause' : 'play')]();
        }
    }

    /**
     * Loads the Shadowbox with the current piece.
     *
     * @return  void
     * @private
     */
    function loadContent(){
        var obj = S.getCurrent();
        if(!obj) return;

        // determine player, inline is really just HTML
        var p = obj.player == 'inline' ? 'html' : obj.player;
        if(typeof S[p] != 'function')
            throw 'Unknown player: ' + p;

        var change = false;
        if(S.content){
            // changing from some previous content
            S.content.remove(); // remove old content
            change = true;

            S.revertOptions();
            if(obj.options)
                S.applyOptions(obj.options);
        }

        // make sure the body element doesn't have any children, just in case
        U.removeChildren(S.skin.bodyEl());

        // load the content
        S.content = new S[p](obj);
        listenKeys(false); // disable the keyboard while content is loading

        S.skin.onLoad(S.content, change, function(){
            if(!S.content) return;

            if(typeof S.content.ready != 'undefined'){
                // if content object has a ready property, wait for it to be
                // ready before loading
                var id = setInterval(function(){
                    if(S.content){
                        if(S.content.ready){
                            clearInterval(id);
                            id = null;
                            S.skin.onReady(contentReady);
                        }
                    }else{ // content has been removed
                        clearInterval(id);
                        id = null;
                    }
                }, 100);
            }else
                S.skin.onReady(contentReady);
        });

        // preload neighboring gallery images
        if(S.gallery.length > 1){
            var next = S.gallery[S.current + 1] || S.gallery[0];
            if(next.player == 'img'){
                var a = new Image();
                a.src = next.content;
            }
            var prev = S.gallery[S.current - 1] || S.gallery[S.gallery.length - 1];
            if(prev.player == 'img'){
                var b = new Image();
                b.src = prev.content;
            }
        }
    }

    /**
     * Callback that should be called with the content is ready to be loaded.
     *
     * @return  void
     * @private
     */
    function contentReady(){
        if(!S.content) return;
        S.content.append(S.skin.bodyEl(), content_id, S.dimensions);
        S.skin.onFinish(finishContent);
    }

    /**
     * Callback that should be called when the content is finished loading.
     *
     * @return  void
     * @private
     */
    function finishContent(){
        if(!S.content) return;

        if(S.content.onLoad)
            S.content.onLoad();
        if(S.options.onFinish)
            S.options.onFinish();
        if(!S.isPaused())
            S.play(); // kick off next slide

        listenKeys(true); // re-enable keyboard when finished
    }

    return S;

}();

/**
 * The default skin for Shadowbox. Separated out into its own class so that it may
 * be customized more easily by skin developers.
 */
Shadowbox.skin = function(){

    var S = Shadowbox,
        U = S.util,

    /**
     * Keeps track of whether or not the overlay is activated.
     *
     * @var     Boolean
     * @private
     */
    overlay_on = false,

    /**
     * Id's of elements that need transparent PNG support in IE6.
     *
     * @var     Array
     * @private
     */
    png = [
        'sb-nav-close',
        'sb-nav-next',
        'sb-nav-play',
        'sb-nav-pause',
        'sb-nav-previous'
    ];

    /**
     * Sets the top of the container element. This is only necessary in IE6
     * where the container uses absolute positioning instead of fixed.
     *
     * @return  void
     * @private
     */
    function fixTop(){
        U.get('sb-container').style.top = document.documentElement.scrollTop + 'px';
    }

    /**
     * Toggles the visibility of #sb-container and sets its size (if on
     * IE6). Also toggles the visibility of elements (<select>, <object>, and
     * <embed>) that are troublesome for semi-transparent modal overlays. IE has
     * problems with <select> elements, while Firefox has trouble with
     * <object>s.
     *
     * @param   Function    cb      A callback to call after toggling on, absent
     *                              when toggling off
     * @return  void
     * @private
     */
    function toggleVisible(cb){
        var so = U.get('sb-overlay'),
            sc = U.get('sb-container'),
            sb = U.get('sb-wrapper');

        if(cb){
            if(S.client.isIE6){
                // fix container top before showing
                fixTop();
                S.lib.addEvent(window, 'scroll', fixTop);
            }
            if(S.options.showOverlay){
                overlay_on = true;

                // set overlay color/opacity
                so.style.backgroundColor = S.options.overlayColor;
                U.setOpacity(so, 0);
                if(!S.options.modal) S.lib.addEvent(so, 'click', S.close);

                sb.style.display = 'none'; // cleared in onLoad
            }
            sc.style.visibility = 'visible';
            if(overlay_on){
                // fade in effect
                var op = parseFloat(S.options.overlayOpacity);
                U.animate(so, 'opacity', op, S.options.fadeDuration, cb);
            }else
                cb();
        }else{
            if(S.client.isIE6)
                S.lib.removeEvent(window, 'scroll', fixTop);
            S.lib.removeEvent(so, 'click', S.close);
            if(overlay_on){
                // fade out effect
                sb.style.display = 'none';
                U.animate(so, 'opacity', 0, S.options.fadeDuration, function(){
                    // the following is commented because it causes the overlay to
                    // be hidden on consecutive activations in IE8, even though we
                    // set the visibility to "visible" when we reactivate
                    //sc.style.visibility = 'hidden';
                    sc.style.display = '';
                    sb.style.display = '';
                    U.clearOpacity(so);
                });
            }else
                sc.style.visibility = 'hidden';
        }
    }

    /**
     * Toggles the display of the nav control with the given id on and off.
     *
     * @param   String      id      The id of the navigation control
     * @param   Boolean     on      True to toggle on, false to toggle off
     * @return  void
     * @private
     */
    function toggleNav(id, on){
        var el = U.get('sb-nav-' + id);
        if(el) el.style.display = on ? '' : 'none';
    }

    /**
     * Toggles the visibility of the "loading" layer.
     *
     * @param   Boolean     on      True to toggle on, false to toggle off
     * @param   Function    cb      The callback function to call when toggling
     *                              completes
     * @return  void
     * @private
     */
    function toggleLoading(on, cb){
        var ld = U.get('sb-loading'),
            p = S.getCurrent().player,
            anim = (p == 'img' || p == 'html'); // fade on images & html

        if(on){
            function fn(){
                U.clearOpacity(ld);
                if(cb) cb();
            }

            U.setOpacity(ld, 0);
            ld.style.display = '';

            if(anim)
                U.animate(ld, 'opacity', 1, S.options.fadeDuration, fn);
            else
                fn();
        }else{
            function fn(){
                ld.style.display = 'none';
                U.clearOpacity(ld);
                if(cb) cb();
            }

            if(anim)
                U.animate(ld, 'opacity', 0, S.options.fadeDuration, fn);
            else
                fn();
        }
    }

    /**
     * Builds the content for the title and information bars.
     *
     * @param   Function    cb      A callback function to execute after the
     *                              bars are built
     * @return  void
     * @private
     */
    function buildBars(cb){
        var obj = S.getCurrent();

        // build the title, if present
        U.get('sb-title-inner').innerHTML = obj.title || '';

        // build the nav
        var c, n, pl, pa, p;
        if(S.options.displayNav){
            c = true;
            // next & previous links
            var len = S.gallery.length;
            if(len > 1){
                if(S.options.continuous)
                    n = p = true; // show both
                else{
                    n = (len - 1) > S.current; // not last in gallery, show next
                    p = S.current > 0; // not first in gallery, show previous
                }
            }
            // in a slideshow?
            if(S.options.slideshowDelay > 0 && S.hasNext()){
                pa = !S.isPaused();
                pl = !pa;
            }
        }else{
            c = n = pl = pa = p = false;
        }
        toggleNav('close', c);
        toggleNav('next', n);
        toggleNav('play', pl);
        toggleNav('pause', pa);
        toggleNav('previous', p);

        // build the counter
        var c = '';
        if(S.options.displayCounter && S.gallery.length > 1){
            var count = S.getCounter();
            if(typeof count == 'string') // default
                c = count;
            else{
                U.each(count, function(i){
                    c += '<a onclick="Shadowbox.change(' + i + ');"'
                    if(i == S.current) c += ' class="sb-counter-current"';
                    c += '>' + (i + 1) + '</a>';
                });
            }
        }
        U.get('sb-counter').innerHTML = c;

        cb();
    }

    /**
     * Hides the title and info bars.
     *
     * @param   Boolean     anim    True to animate the transition
     * @param   Function    cb      A callback function to execute after the
     *                              animation completes
     * @return  void
     * @private
     */
    function hideBars(anim, cb){

        var sw = U.get('sb-wrapper'),
            st = U.get('sb-title'),
            si = U.get('sb-info'),
            ti = U.get('sb-title-inner'),
            ii = U.get('sb-info-inner'),
            t = parseInt(S.lib.getStyle(ti, 'height')) || 0,
            b = parseInt(S.lib.getStyle(ii, 'height')) || 0;

        function fn(){
            // hide bars here in case of overflow, build after hidden
            ti.style.visibility = ii.style.visibility = 'hidden';
            buildBars(cb);
        }

        if(anim){
            U.animate(st, 'height', 0, 0.35);
            U.animate(si, 'height', 0, 0.35);
            U.animate(sw, 'paddingTop', t, 0.35);
            U.animate(sw, 'paddingBottom', b, 0.35, fn);
        }else{
            st.style.height = si.style.height = '0px';
            sw.style.paddingTop = t + 'px';
            sw.style.paddingBottom = b + 'px';
            fn();
        }
    }

    /**
     * Shows the title and info bars.
     *
     * @param   Function    cb      A callback function to execute after the
     *                              animation completes
     * @return  void
     * @private
     */
    function showBars(cb){
        var sw = U.get('sb-wrapper'),
            st = U.get('sb-title'),
            si = U.get('sb-info'),
            ti = U.get('sb-title-inner'),
            ii = U.get('sb-info-inner'),
            t = parseInt(S.lib.getStyle(ti, 'height')) || 0,
            b = parseInt(S.lib.getStyle(ii, 'height')) || 0;

        // clear visibility before animating into view
        ti.style.visibility = ii.style.visibility = '';

        // show title?
        if(ti.innerHTML != ''){
            U.animate(st, 'height', t, 0.35);
            U.animate(sw, 'paddingTop', 0, 0.35);
        }
        U.animate(si, 'height', b, 0.35);
        U.animate(sw, 'paddingBottom', 0, 0.35, cb);
    }

    /**
     * Adjusts the height of #sb-body and centers #sb-wrapper vertically
     * in the viewport.
     *
     * @param   Number      height      The height to use for #sb-body
     * @param   Number      top         The top to use for #sb-wrapper
     * @param   Boolean     anim        True to animate the transition
     * @param   Function    cb          A callback to use when the animation
     *                                  completes
     * @return  void
     * @private
     */
    function adjustHeight(height, top, anim, cb){
        var sb = U.get('sb-body'),
            s = U.get('sb-wrapper'),
            h = parseInt(height),
            t = parseInt(top);

        if(anim){
            U.animate(sb, 'height', h, S.options.resizeDuration);
            U.animate(s, 'top', t, S.options.resizeDuration, cb);
        }else{
            sb.style.height = h + 'px';
            s.style.top = t + 'px';
            if(cb) cb();
        }
    }

    /**
     * Adjusts the width and left of #sb-wrapper.
     *
     * @param   Number      width       The width to use for #sb-wrapper
     * @param   Number      left        The left to use for #sb-wrapper
     * @param   Boolean     anim        True to animate the transition
     * @param   Function    cb          A callback to use when the animation
     *                                  completes
     * @return  void
     * @private
     */
    function adjustWidth(width, left, anim, cb){
        var s = U.get('sb-wrapper'),
            w = parseInt(width),
            l = parseInt(left);

        if(anim){
            U.animate(s, 'width', w, S.options.resizeDuration);
            U.animate(s, 'left', l, S.options.resizeDuration, cb);
        }else{
            s.style.width = w + 'px';
            s.style.left = l + 'px';
            if(cb) cb();
        }
    }

    /**
     * Resizes Shadowbox to the appropriate height and width for the current
     * content.
     *
     * @param   Function    cb      A callback function to execute after the
     *                              resize completes
     * @return  void
     * @private
     */
    function resizeContent(cb){
        var c = S.content;
        if(!c) return;

        // set new dimensions
        var d = setDimensions(c.height, c.width, c.resizable);

        switch(S.options.animSequence){
            case 'hw':
                adjustHeight(d.inner_h, d.top, true, function(){
                    adjustWidth(d.width, d.left, true, cb);
                });
            break;
            case 'wh':
                adjustWidth(d.width, d.left, true, function(){
                    adjustHeight(d.inner_h, d.top, true, cb);
                });
            break;
            default: // sync
                adjustWidth(d.width, d.left, true);
                adjustHeight(d.inner_h, d.top, true, cb);
        }
    }

    /**
     * Calculates the dimensions for Shadowbox, taking into account the borders
     * and surrounding elements of #sb-body.
     *
     * @param   Number      height      The content height
     * @param   Number      width       The content width
     * @param   Boolean     resizable   True if the content is able to be
     *                                  resized. Defaults to false
     * @param   Function    cb      A callback function to execute after the
     *                              resize completes
     * @return  Object                  The new dimensions object
     * @private
     */
    function setDimensions(height, width, resizable){
        var sbi = U.get('sb-body-inner')
            sw = U.get('sb-wrapper'),
            so = U.get('sb-overlay'),
            tb = sw.offsetHeight - sbi.offsetHeight,
            lr = sw.offsetWidth - sbi.offsetWidth,
            max_h = so.offsetHeight, // measure overlay to get viewport size for IE6
            max_w = so.offsetWidth;

        return S.setDimensions(height, width, max_h, max_w, tb, lr, resizable);
    }

	/**
     * Sets the width and height of Shadowbox with the supplied dimensions.
     *
     * @param   Number      height		The height
     * @param   Number      width		The width
     * @param   Number      top			The top position
     * @param   Number      left		The left position
     * @param   Boolean     anim		True to animate the transition
     * @param   Function    cb			A callback function to execute after the
     *                              	resize completes
     * @return  Object                  The new dimensions object
     * @private
     */
    function resizeContentManual(height, width, top, left, anim, cb){
    	switch(S.options.animSequence){
            case 'hw':
                adjustHeight(height, top, true, function(){
                    adjustWidth(width, left, true, cb);
                });
            break;
            case 'wh':
                adjustWidth(width, left, true, function(){
                    adjustHeight(height, top, true, cb);
                });
            break;
            default: // sync
                adjustWidth(width, left, true);
                adjustHeight(height, top, true, cb);
        }
    }


    return {
    
    	resizeContentManual : resizeContentManual,

        /**
         * The HTML markup to use.
         *
         * @var     String
         * @public
         */
        markup: '<div id="sb-container">' +
                    '<div id="sb-overlay"></div>' +
                    '<div id="sb-wrapper">' +
                        '<div id="sb-title">' +
                            '<div id="sb-title-inner"></div>' +
                        '</div>' +
                        '<div id="sb-body">' +
                            '<div id="sb-body-inner"></div>' +
                            '<div id="sb-loading">' +
                                '<p><a onclick="Shadowbox.close()">{cancel}</a></p>' +
                            '</div>' +
                        '</div>' +
                        '<div id="sb-info">' +
                            '<div id="sb-info-inner">' +
                                '<div id="sb-counter"></div>' +
                                '<div id="sb-nav">' +
//                                    '<a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a>' + /* customised */
//                                    '<a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a>' +
//                                    '<a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a>' +
//                                    '<a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a>' +
//                                    '<a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a>' +
                                '</div>' +
                                '<div style="clear:both"></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>',

        options: {

            /**
             * Determines the sequence of the resizing animations. A value of
             * "hw" will resize first the height, then the width. Likewise, "wh"
             * will resize the width first, then the height. The default is
             * "sync" and will resize both simultaneously.
             *
             * @var     String
             * @public
             */
            animSequence: 'sync'

        },

        /**
         * Initialization function. Called immediately after this skin's markup
         * has been appended to the document with all of the necessary language
         * replacements done.
         *
         * @return  void
         * @public
         */
        init: function(){
            // several fixes for IE6
            if(S.client.isIE6){
                // trigger hasLayout on sb-body
                U.get('sb-body').style.zoom = 1;

                // support transparent PNG's via AlphaImageLoader
                var el, m, re = /url\("(.*\.png)"\)/;
                U.each(png, function(id){
                    el = U.get(id);
                    if(el){
                        m = S.lib.getStyle(el, 'backgroundImage').match(re);
                        if(m){
                            el.style.backgroundImage = 'none';
                            el.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src=' +
                                m[1] + ',sizingMethod=scale);';
                        }
                    }
                });
            }
        },

        /**
         * Gets the element that content should be appended to.
         *
         * @return  HTMLElement     The body element
         * @public
         */
        bodyEl: function(){
            return U.get('sb-body-inner');
        },

        /**
         * Called when Shadowbox opens from an inactive state.
         *
         * @param   Number      h       The initial height to use
         * @param   Number      w       The initial width to use
         * @param   Function    cb      The function to call when finished
         * @return  void
         * @public
         */
        onOpen: function(h, w, cb){
            U.get('sb-container').style.display = 'block';

            var d = setDimensions(h, w);
            adjustHeight(d.inner_h, d.top, false);
            adjustWidth(d.width, d.left, false);
            toggleVisible(cb);
        },

        /**
         * Called when a new piece of content is being loaded.
         *
         * @param   mixed       content     The content object
         * @param   Boolean     change      True if the content is changing
         *                                  from some previous content
         * @param   Function    cb          A callback that should be fired when
         *                                  this function is finished
         * @return  void
         * @public
         */
        onLoad: function(content, change, cb){
            toggleLoading(true);

            hideBars(change, function(){ // if changing, animate the bars transition
                if(!content) return;

                // if opening, clear #sb-wrapper display
                if(!change) U.get('sb-wrapper').style.display = '';

                cb();
            });
        },

        /**
         * Called when the content is ready to be loaded (e.g. when the image
         * has finished loading). Should resize the content box and make any
         * other necessary adjustments.
         *
         * @param   Function    cb          A callback that should be fired when
         *                                  this function is finished
         * @return  void
         * @public
         */
        onReady: function(cb){
            resizeContent(function(){
                showBars(cb);
            });
        },

        /**
         * Called when the content is loaded into the box and is ready to be
         * displayed.
         *
         * @param   Function    cb          A callback that should be fired when
         *                                  this function is finished
         * @return  void
         * @public
         */
        onFinish: function(cb){
            toggleLoading(false, cb);
        },

        /**
         * Called when Shadowbox is closed.
         *
         * @return  void
         * @public
         */
        onClose: function(){
            toggleVisible(false);
        },

        /**
         * Called in Shadowbox.play().
         *
         * @return  void
         * @public
         */
        onPlay: function(){
            toggleNav('play', false);
            toggleNav('pause', true);
        },

        /**
         * Called in Shadowbox.pause().
         *
         * @return  void
         * @public
         */
        onPause: function(){
            toggleNav('pause', false);
            toggleNav('play', true);
        },

        /**
         * Called when the window is resized.
         *
         * @return  void
         * @public
         */
        onWindowResize: function(){
            var c = S.content;
            if(!c) return;

            // set new dimensions
            var d = setDimensions(c.height, c.width, c.resizable);

            adjustWidth(d.width, d.left, false);
            adjustHeight(d.inner_h, d.top, false);

            var el = U.get(S.contentId());
            if(el){
                // resize resizable content when in resize mode
                if(c.resizable && S.options.handleOversize == 'resize'){
                    el.height = d.resize_h;
                    el.width = d.resize_w;
                }
            }
        }

    };

}();
