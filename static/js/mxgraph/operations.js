/**
 * Created by admin on 2018/1/16.
 */
function downloadFile() {
    document.getElementById("DownloadDiv").style.display="none";
    console.log("ajaxDownloadSynchronized");
    var url = "http://localhost:8880/ServletDownload";
    var fileName = document.getElementById("txtname1").value+".md";
    var form = $("<form></form>").attr("action", url).attr("method", "post");
    form.append($("<input />").attr("type", "hidden").attr("name", "fileName").attr("value", fileName));
    form.appendTo('body').submit().remove();
};

var urlParams = (function()
{
    var result = new Object();
    var params = window.location.search.slice(1).split('&');

    for (var i = 0; i < params.length; i++)
    {
        idx = params[i].indexOf('=');

        if (idx > 0)
        {
            result[params[i].substring(0, idx)] = params[i].substring(idx + 1);
        }
    }

    return result;
})();

// Redirects page if required
if (urlParams['dev'] == '1')
{
    (function()
    {
        var proto = window.location.protocol;

        // Electron protocol is file:
        if (proto != 'file:')
        {
            var host = window.location.host;

            // Redirects apex and rt to www
            if (host === 'draw.io' || host === 'rt.draw.io')
            {
                host = 'www.draw.io';
            }

            // Redirects to SSL/non-SSL
            if (urlParams['demo'] != '1')
            {
                var ssl = (urlParams['https'] != null) ? urlParams['https'] == '1' :
                navigator.userAgent.indexOf('MSIE') < 0 || document.documentMode >= 9;

                if (ssl && proto != 'https:')
                {
                    proto = 'https:';
                }
                else if (!ssl && proto != 'http:')
                {
                    proto = 'http:';
                }
            }

            var href = proto + '//' + host + window.location.href.substring(
                    window.location.protocol.length +
                    window.location.host.length + 2);

            // Redirects if href changes
            if (href != window.location.href)
            {
                window.location.href = href;
            }
        }
    })();
}

/**
 * Adds meta tags with application name (depends on offline URL parameter)
 */
(function()
{
    function addMeta(name, content)
    {
        try
        {
            var s = document.createElement('meta');
            s.setAttribute('name', name);
            s.setAttribute('content', content);

            var t = document.getElementsByTagName('meta')[0];
            t.parentNode.insertBefore(s, t);
        }
        catch (e)
        {
            // ignore
        }
    };

    var name = 'draw.io';

    if (urlParams['offline'] === '1')
    {
        name += ' app';
    }

    addMeta('apple-mobile-web-app-title', name);
    addMeta('application-name', name);
})();

function mxscript(src, onLoad, id, dataAppKey)
{
    if (onLoad != null)
    {
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('src', src);
        var r = false;

        if (id != null)
        {
            s.setAttribute('id', id);
        }

        if (dataAppKey != null)
        {
            s.setAttribute('data-app-key', dataAppKey);
        }

        s.onload = s.onreadystatechange = function()
        {
            if (!r && (!this.readyState || this.readyState == 'complete'))
            {
                r = true;
                onLoad();
            }
        };

        var t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    }
    else
    {
        document.write('<script src="' + src + '"' + ((id != null) ? ' id="' + id +'" ' : '') +
            ((dataAppKey != null) ? ' data-app-key="' + dataAppKey +'" ' : '') + ' async></scr' + 'ipt>');
    }
};

function mxinclude(src)
{
    var g = document.createElement('script'); g.type = 'text/javascript'; g.async = true; g.src = src;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(g, s);
};

// Checks for local storage
var isLocalStorage = false;

try
{
    isLocalStorage = urlParams['local'] != '1' && typeof(localStorage) != 'undefined';
}
catch (e)
{
    // ignored
}

var t0 = new Date();

// Changes paths for local development environment
if (urlParams['dev'] != '1')
{
    // Used to request grapheditor/mxgraph sources in dev mode
    var mxDevUrl = document.location.protocol + '//devhost.jgraph.com/mxgraph2';

    if (document.location.protocol == 'file:')
    {
        mxDevUrl = '../../mxgraph2';

        // Forces includes for dev environment in node.js
        mxForceIncludes = true;
    }

    var geBasePath = mxDevUrl + '/javascript/examples/grapheditor/www/js';
    //var mxBasePath = mxDevUrl + '/javascript/src';

    // Used to request draw.io sources in dev mode
    var drawDevUrl = '';

    if (urlParams['drawdev'] == '1')
    {
        drawDevUrl = document.location.protocol + '//drawhost.jgraph.com/';
    }
}
else
{
    mxscript('/static/js/app.min.js');
}

if (window && window.process && window.process.type)
{
    // Electron
    mxscript('/static/js/diagramly/ElectronApp.js');
    mxscript('/static/js/diagramly/Extensions.js');
}

// Adds basic error handling
window.onerror = function()
{
    var status = document.getElementById('geStatus');

    if (status != null)
    {
        status.innerHTML = 'Page could not be loaded. Please try refreshing.';
    }
};

