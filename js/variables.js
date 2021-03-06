var IS_SAFARI = (typeof (safari) != "undefined");
var IS_CHROME = (typeof (chrome) != "undefined");
var IS_OPERA = navigator.vendor.indexOf("Opera") != -1;
var DONATION_URL = "http://www.download-station-extension.com/donate";
var SAFARI_UPDATE_MANIFEST = "https://www.download-station-extension.com/downloads/safari-extension-updatemanifest.plist";
var DONATION_CHECK_URL = "https://www.download-station-extension.com/donate/check_email";
var ANALYTICS_ID = 'UA-1458452-7';
try {
    if (localStorage["disableGA"] == "true") {
        window["_gaUserPrefs"] = { ioo: function () { return true; } };
    }
}
catch (exc) { }
String.prototype.extractUrls = function () {
    var text = this;
    var patt = new RegExp("(https?|magnet|thunder|flashget|qqdl|s?ftps?|ed2k)(://|:?)\\S+", "ig");
    var urls = new Array();
    do {
        var result = patt.exec(text);
        if (result != null) {
            var url = result[0];
            if (url.charAt(url.length - 1) == ",")
                url = url.substring(0, url.length - 1);
            urls.push(result[0]);
        }
    } while (result != null);
    if (urls.length > 0)
        return urls;
    else
        return [text];
};
Array.prototype.contains = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == item)
            return true;
    }
    return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL3ZhcmlhYmxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFNBQVMsR0FBRyxDQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQztBQUNoRCxJQUFJLFNBQVMsR0FBRyxDQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQztBQUNoRCxJQUFJLFFBQVEsR0FBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN4RCxJQUFJLFlBQVksR0FBTSxrREFBa0QsQ0FBQztBQUN6RSxJQUFJLHNCQUFzQixHQUFHLDRGQUE0RixDQUFDO0FBQzFILElBQUksa0JBQWtCLEdBQUksK0RBQStELENBQUM7QUFDMUYsSUFBSSxZQUFZLEdBQU8sY0FBYyxDQUFDO0FBRXRDLElBQUksQ0FBQztJQUNKLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRyxjQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDO0FBQ0YsQ0FBRTtBQUFBLEtBQUssQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO0FBRVQsTUFBTSxDQUFDLFNBQVUsQ0FBQyxXQUFXLEdBQUc7SUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsZ0VBQWdFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUYsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN2QixHQUFHLENBQUM7UUFDQSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO2dCQUNsQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDLFFBQVEsTUFBTSxJQUFJLElBQUksRUFBRTtJQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLElBQUk7UUFDQSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFSSxLQUFLLENBQUMsU0FBVSxDQUFDLFFBQVEsR0FBRyxVQUFTLElBQVM7SUFDbkQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDckMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZCxDQUFDLENBQUMiLCJmaWxlIjoianMvdmFyaWFibGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIElTX1NBRkFSSSA9ICh0eXBlb2Yoc2FmYXJpKSAhPSBcInVuZGVmaW5lZFwiKTtcbnZhciBJU19DSFJPTUUgPSAodHlwZW9mKGNocm9tZSkgIT0gXCJ1bmRlZmluZWRcIik7XG52YXIgSVNfT1BFUkEgID0gbmF2aWdhdG9yLnZlbmRvci5pbmRleE9mKFwiT3BlcmFcIikgIT0gLTE7XG52YXIgRE9OQVRJT05fVVJMXHRcdFx0XHQ9IFwiaHR0cDovL3d3dy5kb3dubG9hZC1zdGF0aW9uLWV4dGVuc2lvbi5jb20vZG9uYXRlXCI7XG52YXIgU0FGQVJJX1VQREFURV9NQU5JRkVTVFx0PSBcImh0dHBzOi8vd3d3LmRvd25sb2FkLXN0YXRpb24tZXh0ZW5zaW9uLmNvbS9kb3dubG9hZHMvc2FmYXJpLWV4dGVuc2lvbi11cGRhdGVtYW5pZmVzdC5wbGlzdFwiO1xudmFyIERPTkFUSU9OX0NIRUNLX1VSTFx0XHQ9IFwiaHR0cHM6Ly93d3cuZG93bmxvYWQtc3RhdGlvbi1leHRlbnNpb24uY29tL2RvbmF0ZS9jaGVja19lbWFpbFwiO1xudmFyIEFOQUxZVElDU19JRCBcdFx0XHRcdD0gJ1VBLTE0NTg0NTItNyc7XG5cbnRyeSB7XG5cdGlmKGxvY2FsU3RvcmFnZVtcImRpc2FibGVHQVwiXSA9PSBcInRydWVcIikge1xuXHRcdCg8YW55PndpbmRvdylbXCJfZ2FVc2VyUHJlZnNcIl0gPSB7IGlvbyA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSB9O1xuXHR9XG59IGNhdGNoKGV4Yykge31cblxuKDxhbnk+U3RyaW5nLnByb3RvdHlwZSkuZXh0cmFjdFVybHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0ID0gdGhpcztcbiAgICB2YXIgcGF0dCA9IG5ldyBSZWdFeHAoXCIoaHR0cHM/fG1hZ25ldHx0aHVuZGVyfGZsYXNoZ2V0fHFxZGx8cz9mdHBzP3xlZDJrKSg6Ly98Oj8pXFxcXFMrXCIsIFwiaWdcIik7XG4gICAgdmFyIHVybHMgPSBuZXcgQXJyYXkoKTtcbiAgICBkbyB7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0LmV4ZWModGV4dCk7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIHVybCA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIGlmICh1cmwuY2hhckF0KHVybC5sZW5ndGggLSAxKSA9PSBcIixcIilcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHVybHMucHVzaChyZXN1bHRbMF0pO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAocmVzdWx0ICE9IG51bGwpO1xuICAgIGlmICh1cmxzLmxlbmd0aCA+IDApXG4gICAgICAgIHJldHVybiB1cmxzO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIFt0ZXh0XTtcbn07XG5cbig8YW55PkFycmF5LnByb3RvdHlwZSkuY29udGFpbnMgPSBmdW5jdGlvbihpdGVtOiBhbnkpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRpZih0aGlzW2ldID09IGl0ZW0pIHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
