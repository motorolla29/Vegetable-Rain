'use strict';
window.addEventListener('DOMContentLoaded', () => {
    var screenSize = {
        WIDTH: 1887,
        HEIGHT: 959
    };
    
    var getRandomValue = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    
    var Raindrop = function () {
        this._reset();
    };
    
    Raindrop.prototype.render = function (ctx) {
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size, this.y - this.size);
        ctx.closePath();
        ctx.stroke();
    };
    
    Raindrop.prototype.update = function () {
        this.x += this.hVelocity/2;
        this.y += this.velocity;

        if (this.isOffscreen()) {
            this._reset();
        }
    };

    Raindrop.prototype.isOffscreen = function () {
        return this.y > screenSize.HEIGHT + this.size*5 ||
               this.x < -this.size*5;
    };
    
    Raindrop.prototype._reset = function () {
        this.size = getRandomValue(6, 20);
    
        this.x = getRandomValue(-200, screenSize.WIDTH*1.3);
        this.y = getRandomValue(-300, -this.size*10);
    
        this.velocity = this.size/5;
        this.hVelocity = -this.size/8;
    };

    // Огурцы
    var Cucumber = function () {
        Raindrop.call(this);
    };

    Cucumber.prototype = Object.create(Raindrop.prototype);

    Cucumber.prototype.render = function (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-this.x, -this.y);
        
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size, this.size * 3, 0, Math.PI * 2, false);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.moveTo(this.x-this.size/2, this.y-this.size*2);
        ctx.lineTo(this.x-this.size/1.5, this.y-this.size*2);
        ctx.moveTo(this.x+this.size/2, this.y-this.size);
        ctx.lineTo(this.x+this.size/1.5, this.y-this.size);
        ctx.moveTo(this.x-this.size/2, this.y);
        ctx.lineTo(this.x-this.size/1.5, this.y);
        ctx.moveTo(this.x+this.size/2, this.y+this.size);
        ctx.lineTo(this.x+this.size/1.5, this.y+this.size);
        ctx.moveTo(this.x-this.size/2, this.y+this.size*2);
        ctx.lineTo(this.x-this.size/1.5, this.y+this.size*2);
        ctx.stroke();
        ctx.strokeStyle = 'black';
        ctx.closePath();
        
        ctx.restore();
    };

    Cucumber.prototype.update = function() {
        Raindrop.prototype.update.call(this);
        this.angle += 0.3;
    };

    Cucumber.prototype._reset = function() {
        Raindrop.prototype._reset.call(this);
        this.size = getRandomValue(20, 45);
        this.angle = getRandomValue(-45, 45);
    };

    // Томаты
    var Tomato = function () {
        Raindrop.call(this);

    };
    
    Tomato.prototype = Object.create(Raindrop.prototype);

    Tomato.prototype.render = function (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-this.x, -this.y);

        ctx.fillStyle = '#b33319';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size*3, this.size*3.4, Math.PI/2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = '#137815';
        ctx.ellipse(this.x-this.size, this.y-this.size*4.2, this.size*1.4, this.size/1.5, Math.PI/3, 0, 2 * Math.PI);
        ctx.ellipse(this.x+this.size/5, this.y-this.size*3.8, this.size*0.8, this.size/3, -Math.PI/3, 0, 2 * Math.PI);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fill();
        
        ctx.restore();
    };
    Tomato.prototype.update = function() {
        Raindrop.prototype.update.call(this);
        this.angle += 0.2;
    };

    Tomato.prototype._reset = function() {
        Raindrop.prototype._reset.call(this);
        this.size = getRandomValue(15, 25);
        this.angle = getRandomValue(-90, 0);
    };

    // Картошка

    var Potato = function () {
        Raindrop.call(this);
    };
    
    Potato.prototype = Object.create(Raindrop.prototype);

    Potato.prototype.render = function (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-this.x, -this.y);

        ctx.fillStyle = '#3d342a';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size*3, this.size*4, Math.PI, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(this.x, this.y-this.size*2);
        ctx.lineTo(this.x-this.size, this.y-this.size*2);
        ctx.moveTo(this.x, this.y-this.size);
        ctx.lineTo(this.x+this.size, this.y-this.size);
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x-this.size*1.5, this.y);
        ctx.moveTo(this.x, this.y+this.size);
        ctx.lineTo(this.x+this.size*1.5, this.y+this.size);
        ctx.moveTo(this.x, this.y+this.size*2);
        ctx.lineTo(this.x-this.size/1.5, this.y+this.size*2);
        ctx.stroke();
        
        ctx.restore();
    };
    Potato.prototype.update = function() {
        Raindrop.prototype.update.call(this);
        this.angle -= 0.1;
    };

    Potato.prototype._reset = function() {
        Raindrop.prototype._reset.call(this);
        this.size = getRandomValue(20, 25);
        this.angle = getRandomValue(0, 90);
    };

    // Морковки

    var Carrot = function () {
        Raindrop.call(this);
    };
    
    Carrot.prototype = Object.create(Raindrop.prototype);

    Carrot.prototype.render = function (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-this.x, -this.y);

        ctx.beginPath();
        ctx.fillStyle = '#e67a07';
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x-this.size, this.y);
        ctx.lineTo(this.x, this.y+this.size*3);
        ctx.lineTo(this.x+this.size, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
        ctx.moveTo(this.x, this.y+this.size);
        ctx.lineTo(this.x+this.size/1.5, this.y+this.size);
        ctx.moveTo(this.x, this.y+this.size*2);
        ctx.lineTo(this.x-this.size/3, this.y+this.size*2);
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = '#49ba0b';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x-this.size*0.7, this.y-this.size*2);
        ctx.lineTo(this.x-this.size*0.3, this.y-this.size*2);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x-this.size*0.3, this.y-this.size*2.3);
        ctx.lineTo(this.x+this.size*0.3, this.y-this.size*2.3);
        ctx.lineTo(this.x, this.y);
        ctx.lineTo(this.x+this.size*0.3, this.y-this.size*2);
        ctx.lineTo(this.x+this.size*0.7, this.y-this.size*2);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        
        ctx.restore();
    };
    Carrot.prototype.update = function() {
        Raindrop.prototype.update.call(this);
        this.angle -= 0.2;
    };

    Carrot.prototype._reset = function() {
        Raindrop.prototype._reset.call(this);
        this.size = getRandomValue(50, 55);
        this.angle = getRandomValue(-30, 30);
        
    };


    // СЫР

    var Cheese = function () {
        Raindrop.call(this);
    };
    
    Cheese.prototype = Object.create(Raindrop.prototype);

    Cheese.prototype.render = function (ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-this.x, -this.y);

        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.size*2, this.size*5, Math.PI / 2, 0, Math.PI);
        ctx.strokeStyle = '#d9b250';
        ctx.fillStyle = '#facd5c';
        ctx.lineWidth = this.size;
        ctx.stroke();
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x-this.size*2, this.y-this.size, this.size/2, 0, 2 * Math.PI);
        ctx.fillStyle = '#d6c687';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x-this.size*3, this.y-this.size*0.7, this.size/3, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x-this.size*3.5, this.y+this.size, this.size/5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x-this.size*1.5, this.y+this.size*0.7, this.size*0.8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x-this.size*0.4, this.y-this.size*0.8, this.size/6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        ctx.restore();
    };

    Cheese.prototype.update = function() {
        Raindrop.prototype.update.call(this);
        this.angle += 0.15;
    };

    Cheese.prototype._reset = function() {
        Raindrop.prototype._reset.call(this);
        this.size = getRandomValue(35, 50);
        this.angle = getRandomValue(-600, 60);
        
    };

    var cleanupFrame = function (ctx) {
        ctx.clearRect(0, 0, screenSize.WIDTH, screenSize.HEIGHT);
    };
    
    var renderFrame = function (ctx, raindrops) {
        cleanupFrame(ctx);
    
        raindrops.forEach(function (it) {
            it.render(ctx);
            it.update();
        });
    
        requestAnimationFrame(renderFrame.bind(null, ctx, raindrops));
        
    };


    var setup = function() {
        var DROPS = 100;
        var CUCUMBER_RATIO = 0.15;
        var TOMATO_RATIO = 0.15;
        var POTATO_RATIO = 0.15;
        var CARROT_RATIO = 0.15;
        var canvas = document.querySelector('#rain');
        var ctx = canvas.getContext('2d');
    
        canvas.width = screenSize.WIDTH;
        canvas.height = screenSize.HEIGHT;
    
    
        var raindrops = new Array(DROPS * CUCUMBER_RATIO)
            .fill('')
            .map(function () {
                return new Cucumber();
            })
            .concat(new Array(DROPS * TOMATO_RATIO)
                .fill('')
                .map(function () {
                    return new Tomato();
                })
            )
            .concat(new Array(DROPS * POTATO_RATIO)
                .fill('')
                .map(function () {
                    return new Potato();
                })
            )
            .concat(new Array(DROPS * CARROT_RATIO)
                .fill('')
                .map(function () {
                    return new Carrot();
                })
            );
              
            renderFrame(ctx, raindrops);

            canvas.addEventListener('click', function(e) {
                var cheese = new Cheese();
                cheese.x = e.clientX;
                cheese.y = e.clientY;
                raindrops.push(cheese);
            });
    };
    setup();
});
