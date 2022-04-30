// set "Download has started" as the trigger.

var sizes = [];

var links = package.getDownloadLinks();

var urls = [];

for (i = 0; i < links.length; i++) {
    var link = links[i];
    var fileSize = link.getBytesTotal();

    if (sizes.includes(fileSize)) {
        link.setEnabled(false);
    } else {
        sizes.push(fileSize);
    }
}
