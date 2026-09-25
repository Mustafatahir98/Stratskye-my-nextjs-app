// © 2020 Prodege, LLC. All rights reserved

function $(i) { return document.getElementById(i) }
var bg = chrome.extension.getBackgroundPage(),
	d = bg.data,
	adurl = bg.config[2] + '?' + bg.br + bg.opts[3] + 'v' + bg.ver + 'v',
	i,
	y;

window.onload = function() {
	upA();
	bg.popen = 1;
	toDOM($('t4'), [['img', {'src': adurl}]]);
};

window.onunload = function() { bg.popen = 0 };
chrome.runtime.onMessage.addListener(function(a) { if (a.popup == 'update') upA() });

function toDOM(i, cs, v) {

	if (typeof v == 'undefined') while (i.firstChild) i.removeChild(i.firstChild);

	for (var c = 0, l = cs.length, o; c < l; c++) {
		
		if (cs[c][0] == 'txt') o = document.createTextNode(cs[c][1]);
		else {

			o = document.createElement(cs[c][0]);
			if (cs[c][1]) for (var a in cs[c][1]) o.setAttribute(a, cs[c][1][a]);
		}

		i.appendChild(o);
		if (cs[c][2]) toDOM(o, cs[c][2], 1);
	}
}

function upA() {
	var i, y, items;

	$('lkh').onclick = function() { openL(bg.config[1]) };

	if (d[1] == 'data') {

		var purl = bg.config[1]+d[9][0], rows = [], nodes = [];

		if (bg.msgs.length) {

			for (i = bg.msgs.length - 1; i >= 0; i--) {

				if (!Array.isArray(bg.msgs[i][0])) continue;

				nodes = [['img', {'src': 'img/delete.png', 'class': 'de'}]];
				if (bg.msgs[i][2]) nodes.push(['span', {'class': 'ex', 'data-time': (bg.msgs[i][1] + bg.msgs[i][2] * 6E4)}]);
				nodes.push(['span', {'class': 'l'}, bg.msgs[i][0]]);
				nodes.push(['div', {'class': 'b'}, [['txt', (new Date(bg.msgs[i][1])).toLocaleString()], (bg.msgs[i][3].length ? ['a', {'href': '#', 'class': 'x'}, [['txt', 'Open & Dismiss']]] : [])]]);
				rows.push(['div', {'class': 'm', 'id': 'msg' + i, 'data-url': (bg.msgs[i][3].length ? bg.msgs[i][3] : ''), 'data-id': i}, nodes]);
			}

			if (rows.length) {

				toDOM($('msgs'), rows);

				upT();

				var x = document.getElementsByClassName('de');

				for (i = 0; i < x.length; i++) x[i].onclick = function(e) { e.stopPropagation(); delM(this.parentNode.getAttribute('data-id')) };

				x = document.getElementsByClassName('m');

				for (i = 0; i < x.length; i++)
					if (x[i].hasAttribute('data-url')) {
						x[i].onclick = function() { var u = this.getAttribute('data-url'); delM(this.getAttribute('data-id')); openL(u) }
					}

				$('dma').onclick = function() { delM(0) };
				$('msgw').style.display = 'table-cell';

			} else {

				toDOM($('msgs'), []);
				$('msgw').style.display = 'none'
			}

		} else {

			toDOM($('msgs'), []);
			$('msgw').style.display = 'none'
		}

		$('t1').style.display = 'none';
		$('t2').style.display = 'block';
		$('t3').style.display = 'none';

		toDOM($('wu'), [['img', {'src': 'img/user.png', 'style': 'width:13px;height:13px'}], ['txt', d[7]]]);

		for (i = 0; i <= 3; i++) {

            y = d[4][i].toFixed(2);
			toDOM($('w' + ['b', 't', 'y', 'x'][i]), [['span', {'class': 'n'}, [['txt', '$' + y]]]]);

        }

		if (d[5] < 0) nodes = [['span', {'class': 'nz'}, [['txt', 'Click to View']]]];
		else if (d[5] > 0) nodes = [['span', {'class': 'n'}, [['txt', d[5]]]]];
		else nodes = [['span', {'class': 'nz'}, [['txt', '0']]]];
		toDOM($('ws'), nodes);

		if (bg.tc > 0) nodes = [['span', {'class': 'n'}, [['txt', bg.tc]]]];
		else nodes = [['span', {'class': 'nz'}, [['txt', '0']]]];
		toDOM($('wc'), nodes);
		
		toDOM($('vr'), [['txt', bg.ver]]);

		$('lkm').onclick = function() { openL(purl + d[9][2]) };
		$('lks').onclick = function() { openL(purl + d[9][4]) };
		$('lko').onclick = function() { openL(purl + d[9][5]) };
		$('lkf').onclick = function() { openL(purl + d[9][7]) };
		
		for(i = 0; i <= 2; i++) $('o0' + i).checked = bg.opts[0][i];

		toDOM($('o2'), [['txt', bg.opts[2]]]);

		$('wo').onclick = function(){$('wax').style.display='block';$('way').style.display='none'};
		$('woc').onclick = function(){$('wax').style.display='none';$('way').style.display='block'};
		for (y = 0; y <= 1; y ++) for (i = 0; i <= 2; i++) $('o' + y + i).onclick = function() { upS(parseInt(this.id[1]), parseInt(this.id[2]), this) };
		$('o2w').onclick = function() { $('o2l').style.display = 'inline' };
		$('o2l').onmouseleave = function() { $('o2l').style.display = 'none' };
		for (i = 0, items = $('o2l').querySelectorAll('li'); i < items.length; i++) items[i].onclick = function(e) { e.stopPropagation(); upE(this) };

        if (bg.config[3]) {
            
            $('lkt').parentNode.style.display='block';
            $('lkt').onclick = function() { openL(purl + d[9][6]) };

            $('otr1').style.display='table-row';
            $('otr2').style.display='table-row';
            
            for(i = 0; i <= 2; i++) $('o1' + i).checked = bg.opts[1][i];

            toDOM($('o13'), [['txt', bg.opts[1][3]]]);
            $('o13w').onclick = function() { $('o13l').style.display = 'inline'};
            $('o13l').onmouseleave = function() { $('o13l').style.display = 'none'};
            for (i = 0, items = $('o13l').querySelectorAll('li'); i < items.length; i++) items[i].onclick = function(e) { e.stopPropagation(); upD(this) };

        } else {

            $('lkt').parentNode.style.display='none';
            $('otr1').style.display='none';
            $('otr2').style.display='none';
        }

	} else if(d[1] == 'msg') {

		$('t1').style.display = 'none';
		$('t2').style.display = 'none';
		$('t3').style.display = 'none';

		if (Array.isArray(d[2])) {
			toDOM($('t33'), d[2]);
			$('t3').style.display = 'block'
		}
		else $('t0').style.display = 'block';
	}
	
	if (d[0] > bg.ver) $('t0').style.display = 'block';

	for (i = 0, items = document.querySelectorAll('*[data-tooltip]'), y = items.length; i < y; i++) {
		items[i].onmousemove = tooltip;
		items[i].onmouseleave = htooltip;
	}
}

function tooltip(e) {
	var o = $('tooltip'),
		s = o.style,
		mw = document.body.offsetWidth - 31,
		mh = document.body.offsetHeight,
		px = e.clientX - 10,
		py = e.clientY + 20;
	toDOM(o, [['txt', this.getAttribute('data-tooltip')]]);
	s.visibility = 'visible';
	s.opacity = '1';
	s.maxWidth = mw + 'px';
	s.top = s.left = '';
	var ow = o.offsetWidth,
		oh = o.offsetHeight;
	if (px < 10) px = 10;
	if (px + ow > mw + 22) px -= (px + ow) - (mw + 22);
	if (py + oh + 5 > mh) py -= oh + 21;
	s.left = px + 'px';
	s.top = py + 'px';
	e.stopPropagation()
}

function htooltip(e) {
	var o = $('tooltip');
	o.style.visibility = 'hidden';
	o.style.opacity = '0';
	e.stopPropagation()
}

function upD(o) {
	$('o13l').style.display = 'none';
	toDOM($('o13'), [['txt', o.innerHTML]]);
	bg.opts[1][3] = parseInt(o.innerHTML);
	chrome.storage.local.set({'opts':bg.opts});
	bg.updTasks()
}

function upE(o) {
	$('o2l').style.display = 'none';
	toDOM($('o2'), [['txt', o.innerHTML]]);
	bg.opts[2] = parseInt(o.innerHTML);
	chrome.storage.local.set({'opts':bg.opts});
	new Audio('./audio/alert' + o.innerHTML + '.ogg').play()
}

function upS(a,b,d) {
	bg.opts[a][b] = d.checked;
	chrome.storage.local.set({'opts':bg.opts})
}

function openL(l) {
	bg.openL(l)
}

function delM(s) {
	if (s == 0) bg.msgs.splice(0,bg.msgs.length);
	else bg.msgs.splice(s,1);
	chrome.storage.local.set({'msgs':bg.msgs});
	upA()
}

function upT() {
	for (var i = 0, x = document.getElementsByClassName('ex'), ex = 0, t =(new Date()).getTime(); i < x.length; i++) {
		ex = (parseInt(x[i].getAttribute('data-time')) - t) / 1000;
		toDOM(x[i], [['txt', (ex > 300 ? '' : (ex < 0 ? 0 : ex.toFixed(0)))]])
	}
}

setInterval(upT, 1E3);