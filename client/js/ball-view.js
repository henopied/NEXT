'use strict';

const PIXI = require('pixi.js');
const AnimatedValue = require('./animated-value');

class BallView {
  constructor(main, ball) {
    this.main = main;
    this.ball = ball;
    this.container = new PIXI.Container();
    this.graphic = new PIXI.Graphics();
    this.container.addChild(this.graphic);

    this.x = new AnimatedValue(0);
    this.y = new AnimatedValue(0);
    this.size = new AnimatedValue(0);

    this.appear();
    this.ball.on('appear', () => this.appear());
    this.ball.on('destroy', reason => {
      if (reason.reason == 'eaten') {
        const eater = this.main.balls[reason.by];
        if (eater && eater.ball.id != this.ball.id) {
          this.x.follow(() => eater.x.get(), 100);
          this.y.follow(() => eater.y.get(), 100);
          setTimeout(() => {
            this.disappear();
            this.destroy();
          }, 50);
        } else {
          this.disappear();
          this.destroy();
        }
      } else {
        this.disappear();
        this.destroy();
      }
    });
    this.ball.on('disappear', () => this.disappear());
    this.ball.on('move', (oldX, oldY, newX, newY) => {
      this.x.set(newX, 120);
      this.y.set(newY, 120);
    });
    this.ball.on('resize', (oldSize, newSize) => {
      this.size.set(newSize, 120);
      this.container.zIndex = newSize;
      this.main.reSort = true;
      this.updateRes(newSize);
    });
    this.container.zIndex = this.ball.size;
    this.container.ballId = this.ball.id;
  }

  destroy() {
    this.main.stage.removeChild(this.container);
    this.graphic.destroy();
    if (this.name) this.name.destroy();
    if (this.mass) this.mass.destroy();
    this.container.destroy();
    delete this.main.balls[this.ball.id];
  }

  appear() {
    this.x.write(this.ball.x);
    this.y.write(this.ball.y);
    this.size.write(this.ball.size);
    this.mainRes = this.ball.size;
    this.shape();
    this.setName();
    this.setMass();
    this.main.stage.addChild(this.container);
    this.main.reSort = true;
  }

  disappear() {
    this.size.write(0);
    this.main.stage.removeChild(this.container);
  }

  shape() {
    this.graphic.clear();
    this.graphic.beginFill(this.ball.virus ? 0x33FF33 : this.ball.color.replace('#', '0x'), 1);
    this.graphic.drawCircle(0, 0, this.mainRes);
    this.graphic.endFill();
  }

  updateRes(newRes) {
    this.mainRes = newRes;
    this.shape();
    if (this.mass) {
      this.mass.style = {
        font: `bold ${this.mainRes * 0.35}pt Ubuntu`,
        fill: 0xFFFFFF,
        stroke: 0x000000,
        strokeThickness: this.mainRes * 0.035,
      };
      this.updateMass();
    }
    if (this.name) {
      this.name.style = {
        font: `bold ${this.mainRes * 0.35}pt Ubuntu`,
        fill: 0xFFFFFF,
        stroke: 0x000000,
        strokeThickness: this.mainRes * 0.035,
      };
      this.updateName();
    }
  }

  setName() {
    if (this.ball.name) {
      if (!this.name) {
        this.name = new PIXI.Text(this.ball.name, {
          font: `bold ${this.mainRes * 0.35}pt Ubuntu`,
          fill: 0xFFFFFF,
          stroke: 0x000000,
          strokeThickness: this.mainRes * 0.035,
        });
        this.ball.on('rename', () => this.updateName());
      }
      this.updateName();
      this.container.addChild(this.name);
    } else {
      if (this.name) {
        this.container.removeChild(this.name);
        this.ball.removeAllListener('rename');
        delete this.name;
      }
    }
  }

  updateName() {
    this.name.resolution = 3;
    this.name.position.x = -this.name.width / 2;
    this.name.position.y = -this.name.height / 2;
  }

  setMass() {
    if (this.ball.mine) {
      if (!this.mass) {
        this.mass = new PIXI.Text(this.ball.mass, {
          font: `bold ${this.mainRes * 0.35}pt Ubuntu`,
          fill: 0xFFFFFF,
          stroke: 0x000000,
          strokeThickness: this.mainRes * 0.035,
        });
      }
      this.updateMass();
      this.container.addChild(this.mass);
    } else {
      if (this.mass) {
        this.container.removeChild(this.mass);
        this.ball.removeAllListeners('rename');
        delete this.mass;
      }
    }
  }

  updateMass() {
    this.mass.text = this.ball.mass;
    this.mass.resolution = 3;
    this.mass.position.x = -this.mass.width / 2;
    this.mass.position.y = this.name ? this.name.height / 2 : 0;
  }

  render() {
    this.container.position.x = this.x.get();
    this.container.position.y = this.y.get();
    this.container.scale.x = this.container.scale.y = this.size.get() / this.mainRes;
  }
}

module.exports = BallView;
