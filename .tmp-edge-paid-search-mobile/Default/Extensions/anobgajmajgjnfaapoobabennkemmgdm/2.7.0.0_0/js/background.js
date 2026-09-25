// © 2020 Prodege, LLC. All rights reserved

var data = [], msgs = [], bst = 1, ver = chrome.runtime.getManifest().version.replace(/\.0\.0$/, ''),
	su = 0, sc = su, tc = 0, tp = 0, opts = [[true, true, false], [true, true, false, 25], 1, gerU()], lst = 0, tt = 0, dt = 0,
	isC = false,
	isO = false,
	br = 'e',
	config = [
		20, // frequency
		'https://www.ysense.com/', // csurl
		'https://addon.ysense.com/', // adurl
		'https://tasks.figure-eight.work/channels/clixsense/tasks?uid=' // cfurl
	],
	notsl = {},
	popen = 0;

chrome.storage.local.get(['opts', 'msgs', 'config'], function(i) {

	if (typeof i.opts !== 'undefined') {
		opts = i.opts;
		if (opts.length == 5) {
			opts.shift();
			chrome.storage.local.set({'opts': opts})
		}
	} else chrome.storage.local.set({'opts': opts});

	if (typeof i.config !== 'undefined') {

		config = i.config;

		if (typeof i.msgs !== 'undefined') msgs = i.msgs;
		else chrome.storage.local.set({'msgs': msgs});

	} else {
		
		chrome.storage.local.set({'config': config});
		chrome.storage.local.set({'msgs': []});
	}

	setTimeout(updBadge, 500);
	updData()
});

function $(i) {
	return document.getElementById(i)
}

function updP() {
	if (popen) chrome.runtime.sendMessage({popup: 'update'})
}

function updBadge() {
	var nm = [],
		l = msgs.length,
		nl = 0,
		b = 0,
		i = 0,
		t = (new Date()).getTime();

	if (l) {
		for (; i < l; i++) if (msgs[i][2] == 0 || t < msgs[i][1] + msgs[i][2] * 6E4) nm.push(msgs[i]);
		nl = nm.length;
		msgs = nm;
		if (nl < l) {
			chrome.storage.local.set({msgs: msgs});
			updP()
		}
		l = nl
	}
	if (l && bst && !popen) {

		bst = 0;
		setTimeout(updBadge, 200);
		chrome.browserAction.setIcon({path: {'19': 'img/msg_icon_19.png','38': 'img/msg_icon_38.png'}});
		chrome.browserAction.setBadgeText({text: ''})

	} else {

		bst = 1;
		setTimeout(updBadge, 600);

		if (!data || !data[6] || (!opts[0][0] && (!opts[1][0] && config[3]))) {

			chrome.browserAction.setIcon({path: {'19': 'img/ysense_icon_19.png','38': 'img/ysense_icon_38.png'}});
			chrome.browserAction.setBadgeText({text: ''})

		} else {

			if (opts[0][0] && sc > 0) b += sc;
			if (opts[1][0] && tc > 0 && config[3]) b += tc;
			chrome.browserAction.setIcon({path: {'19': 'img/ysense_icon_19.png','38': 'img/ysense_icon_38.png'}});
			chrome.browserAction.setBadgeText({text: b.toFixed(0)})
		}
	}
}

function updTasks() {
	if (!data || !data[6] || !config[3]) {
		tc = tp = 0;
		clearTimeout(tt);
		return
	}
	var xhr = new XMLHttpRequest(),
		i, tn = 0,
		a;
	xhr.open('GET', config[3] + data[6], true);
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			a = this.responseText.match(/data-tasks="([^"]+)"/m);
			if (a[1].length) {
				a = JSON.parse(a[1].replace(/&quot;/g, '"'));
				for (i = 0; i < a.length; i++)
					if (!a[i][9] && a[i][6] >= opts[1][3]) tn++
			}
			tc = tn;
			if (tc > tp) {
				if (opts[1][1]) addMsg(1, tc + ' task' + (tc > 1 ? 's' : '') + ' available (availability each: ' + opts[1][3] + '+)', data[9][0] + data[9][6]);
				if (opts[1][2]) soundAlert()
			}
			tp = tc;
			updP()
		}
	};
	xhr.send();
	clearTimeout(tt);
	tt = setTimeout(updTasks, 24E4)
}

function updData() {

	clearTimeout(dt);

	if (data && data[1] == 'msg' && data[3]) return;

	var xhr = new XMLHttpRequest(),
		nt = [],
		nd = 0,
		md = 0,
		sd = 0,
		i = 0,
		y = 0,
		o = (opts[0][1] ? 32 : 0) + (opts[1][1] && config[3] ? 64 : 0);

	xhr.open('GET', config[2] + '?' + br + opts[3] + 'v' + ver + '-' + o, true);

	xhr.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			data = JSON.parse(this.responseText);

			if (JSON.stringify(config) !== JSON.stringify(data[11])) {
				config = data[11];
				chrome.storage.local.set({'config': config});
			}

			if (data && data[1] == 'data') {

				sc = data[5];

				if (data[10]) {

					var hi = 0,
						hl = [],
						hn = 0;

					for (i = 0; i < data[10].length; i++) {

						if (data[10][i][0] == 0) {

							y = data[10][i][1][0];
							addMsg(3,
								[
									['u', {}, 
										[['txt', 'Survey Invitation from ' + y]]
									],
									['br'],
									['span', {'class':'sh'},
										[['txt', 'ID:']]
									],
									['txt', ' ' + data[10][i][1][1] + '  '],
									['span', {'class':'sh'},
										[['txt', 'LOI:']]
									],
									['txt', ' ' + data[10][i][1][2] + '  '],
									['span', {'class':'sh'},
										[['txt', 'Reward:']]
									],
									['txt', ' ' + data[10][i][1][3]]
								],
								data[9][8] + data[10][i][2] + '/' + br + opts[3],
								data[10][i][3]
							);

							if (hl[y]) hl[y] ++;
							else hl[y] = 1;
							hi++

						} else {

							addMsg(3, data[10][i][1], data[10][i][2], data[10][i][3]);
							hn++
						}
					}

					if (hi) {
						var hs = [];
						for (i in hl) hs.push(hl[i] + ' ' + i);
						popNotif(hi + ' New Survey Invite' + (hi > 1 ? 's' : '') + ' Available', hs.join(' + '), '');
						if (opts[0][2]) sd = 1
					}

					if (hn) popNotif(hn + ' New Message' + (hn > 1 ? 's' : '') + ' Available', '', '')
				}

				if (sd) soundAlert();
				if (!tt && config[3]) updTasks();

			} else {

				sc = su;
				tc = 0;
				tp = 0;

				clearTimeout(tt)
			}

			updP()
		}
	};

	xhr.send();

	dt = setTimeout(updData, config[0] * 1000)
}

function addMsg(t, m, l, x) {

	var msg;

	if (t < 2) {

		var txt = 'New Figure Eight Tasks Available';

		l = config[1] + l;
		msg = [['u', {}, [['txt', txt]]], ['br'], ['txt', m]];
		x = 0.5;

		for (var i = 0; i < msgs.length; i++)
			if (msgs[i][4] == t) msgs[i][2] = -1;

		popNotif(txt, m, l)

	}
	else msg = m;

	msgs.push([msg, (new Date()).getTime(), x, l, t]);
	chrome.storage.local.set({'msgs': msgs});
	updP()
}

function popNotif(t, m, l) {
	if (isO) return;

	chrome.notifications.create('', {
		type: 'basic',
		iconUrl: 'img/ysense_icon_80.png',
		title: t,
		message: m,
		isClickable: true
	}, function(i) {notsl[i] = l})
}

chrome.notifications.onClicked.addListener(function(i) {
	chrome.windows.update(-2, {focused: true});
	if (notsl[i]) openL(notsl[i]);
	delete notsl[i]
});

chrome.notifications.onClosed.addListener(function(i) {delete notsl[i]});

chrome.runtime.onMessage.addListener(
    function(request, sender) {
		if (sender.url.match(/^https:\/\/www\.(y|clix)sense\.com\//) && request.action == 'refresh') updData();
    }
);

function soundAlert() {
	if ((new Date()).getTime() - lst < 4E4) return;
	new Audio('audio/alert' + opts[2] + '.mp3').play();
	lst = (new Date()).getTime()
}

function gerU() {
	var s = '',i = 0;
	for (; i < 3; i++) s = s + Math.floor(Math.random() * 4294967296).toString(16);
	return s.substr(0, 16)
}

function openL(l) {
	chrome.tabs.query({
		url: l.replace(/^https?/, '*') + '*',
		windowId: -2
	}, function(t) {
		if (t.length) chrome.tabs.update(t[0].id, {
			highlighted: true,
			url: l
		});
		else chrome.tabs.create({url: l})
	})
}
