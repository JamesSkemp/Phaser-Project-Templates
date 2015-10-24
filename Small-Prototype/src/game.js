/// <reference path="../lib/phaser-2.4.4.js" />
var SmallGame = {};

SmallGame.Game = function (game) {
	this.phaserLogo = null;
	this.phaserLogoText = null;
};

SmallGame.Game.prototype = {
	preload: function () {
		this.load.path = 'assets/';
		this.load.image('Phaser-Logo-Small');
	},

	create: function () {
		// 382, 331
		this.phaserLogo = this.add.sprite(this.world.centerX, this.world.centerY, 'Phaser-Logo-Small');
		this.phaserLogo.anchor.setTo(0.5);

		this.phaserLogoText = this.add.text(16, 16, "Powered by", { fill: '#fff', fontSize: '24px' });
	},

	update: function () {

	}
};