/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"s/qu_baby_nw2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
