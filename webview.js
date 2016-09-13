module.exports = (Franz, options) => {
    function getMessages() {
        var reply = document.querySelector('div#menu2 a#reply.new');
        var dm = document.querySelector('div#menu2 a#direct.new');
        var list = document.querySelector('div#menu2 a.new');

        if (reply || dm) {
            Franz.setBadge(1);
        } else if (list) {
            Franz.setBadge(0, 1);
        } else {
            Franz.setBadge(0);
        }
    }

    Franz.loop(getMessages);
}
