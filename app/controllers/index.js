function doClickWork(e) {
        
    var httpclient = Titanium.Network.createHTTPClient({
        validatesSecureCertificate: true,
        tlsVersion : Ti.Network.TLS_VERSION_1_2,
        onload : function(response) {
             Ti.API.info("Received text: " + this.responseText);
        },
        onerror : function(response) {
             Ti.API.debug(response.error);
        }
    });
    
    httpclient.open("GET","https://appservices.anvilgroup.com/help");
    httpclient.send();
}

function doClickFail(e) {
        
    var httpclient = Titanium.Network.createHTTPClient({
        validatesSecureCertificate: true,
        tlsVersion : Ti.Network.TLS_VERSION_1_2,
        onload : function(response) {
             Ti.API.info("Received text: " + this.responseText);
        },
        onerror : function(response) {
             Ti.API.debug(response.error);
        }
    });
    
    httpclient.open("GET","https://elster.de");
    httpclient.send();
}

$.index.open();
