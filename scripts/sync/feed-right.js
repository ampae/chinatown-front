ampaeDealJson('feeds/feed-right.json', ampaeQtRightItem, 'asideRight'); // feed, callback, id, position

function ampaeQtRightItem(val) {

    if (typeof val.link === 'undefined' || val.link === null) { return; }

    var r = '';

    r += '<div style="display:flex;width:98%;height:auto;margin:0 0 .4em 0;padding:0;color:#444;';
    r += 'background-color:#eee;font-family:Verdana, Arial, Helvetica, sans-serif;">';
    r += '<div id="first" style="background-color:#fff;padding:0; flex-wrap: wrap;">';
    // if (true) {
    r += '<figure style="">';
    r += '<a style="color:#444;text-decoration:none;" href="' + val.link + '">';
    r += '<img style="width:auto;height:auto;width:auto;max-width: 100%;max-height:120px;" src="' + val.img + '" class="" alt="IMG" />';
    r += '</a>';
    r += '</figure>';
    // }
    r += '</div>';
    r += '<div id="second" style="flex-grow:1;background-color:#fff;padding:.4em;">';
    r += '<a href="' + val.link + '" style="color:#fff;">';
    r += '<p style="margin:0;padding:0;color:#555;font-size:1em;font-weight:bold;">';
    r += val.subj + '</p>';
    r += '<p style="margin:0;padding:0;color:#555;font-size:.9em;">' + val.note + '</p>';
    r += '<p style="margin:0;padding:0;color:#555;font-weight:bold;font-size:.9em;">' + val.brand + '</p>';
    r += '</a>';
    r += '</div>';
    r += '<div id="third" style="background-color:#fff;padding:.4em;">';
    r += '<a href="' + val.link + '" style="color:#444;text-decoration:none;">';
    r += '<p style="margin:0;padding:0;color:#000;font-size:1em;font-weight:bold;">&#x25B7;';
    r += '</p>';
    r += '</a>';
    r += '</div>';
    r += '</div>';

    return r + '\n';
}
