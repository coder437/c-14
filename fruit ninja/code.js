var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1faef43f-8d4b-4eb1-adec-d5b5b9eb693f","41933769-589b-41ed-9424-4ba33f2190e4","74c5b2e3-6ca4-480b-b92b-f0989254eef2","2943d785-2cb0-4d92-839c-890b74fb8288","75ba4d17-d576-41c3-ba44-0dd7691b357c","045da216-9855-49a8-9e77-31549cd097c8","82f20882-7cde-4d06-9691-11944eb17d1c","9d335ddd-b7f6-4d3a-9189-8436b4152224","77c1748c-b40f-4834-9e94-e03a0f758c11","3394118a-aea3-4cf5-9e7b-7b0c181227bf","4e7a6f37-0f5b-4bfa-a825-efa637a39ab2","d32c6482-b5f3-487f-8fa1-2d6dcd86d450","74531315-5adc-4e94-b50a-47bc9c4d59a6","2512f9c6-4607-4896-89d3-a8aef99f7286","d995b82a-3dad-4a70-b76f-934c9febf128"],"propsByKey":{"1faef43f-8d4b-4eb1-adec-d5b5b9eb693f":{"name":"f1","sourceUrl":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png"},"41933769-589b-41ed-9424-4ba33f2190e4":{"name":"f2","sourceUrl":null,"frameSize":{"x":120,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"rt3vUlpZWAH.JGsGxGjcw0N6t.M4m7h0","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":100},"rootRelativePath":"assets/41933769-589b-41ed-9424-4ba33f2190e4.png"},"74c5b2e3-6ca4-480b-b92b-f0989254eef2":{"name":"f3","sourceUrl":null,"frameSize":{"x":100,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"D2N373MIpRZdwjnSpK7aWCvCuM94KtG3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":120},"rootRelativePath":"assets/74c5b2e3-6ca4-480b-b92b-f0989254eef2.png"},"2943d785-2cb0-4d92-839c-890b74fb8288":{"name":"f4","sourceUrl":null,"frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_UjMuCgPeiMBOTF3FuOsRYg_bmlxnWgM","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/2943d785-2cb0-4d92-839c-890b74fb8288.png"},"75ba4d17-d576-41c3-ba44-0dd7691b357c":{"name":"f5","sourceUrl":null,"frameSize":{"x":70,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lzc.j5ahDkQBCMEkS8G1DlZa.GCgiKCO","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":140},"rootRelativePath":"assets/75ba4d17-d576-41c3-ba44-0dd7691b357c.png"},"045da216-9855-49a8-9e77-31549cd097c8":{"name":"f10","sourceUrl":null,"frameSize":{"x":120,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"odkFt73ll8uFueqPmTF1g58tB5eAhRSv","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":100},"rootRelativePath":"assets/045da216-9855-49a8-9e77-31549cd097c8.png"},"82f20882-7cde-4d06-9691-11944eb17d1c":{"name":"f9","sourceUrl":null,"frameSize":{"x":70,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"pMTEyU5Iz2IcATq3b3dgypmXaMBCqYrI","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":120},"rootRelativePath":"assets/82f20882-7cde-4d06-9691-11944eb17d1c.png"},"9d335ddd-b7f6-4d3a-9189-8436b4152224":{"name":"f8","sourceUrl":null,"frameSize":{"x":100,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"k3twqd52X_z6rL0yLkdyoR6.eDZH3K3w","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":130},"rootRelativePath":"assets/9d335ddd-b7f6-4d3a-9189-8436b4152224.png"},"77c1748c-b40f-4834-9e94-e03a0f758c11":{"name":"f7","sourceUrl":null,"frameSize":{"x":120,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"e7u3jcX_b4bLwgosJIDRFz4rIcsTSk11","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":80},"rootRelativePath":"assets/77c1748c-b40f-4834-9e94-e03a0f758c11.png"},"3394118a-aea3-4cf5-9e7b-7b0c181227bf":{"name":"f6","sourceUrl":null,"frameSize":{"x":150,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"V7kdgA7ZTThvLUuAjAvTAT8mgBJdCF02","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":70},"rootRelativePath":"assets/3394118a-aea3-4cf5-9e7b-7b0c181227bf.png"},"4e7a6f37-0f5b-4bfa-a825-efa637a39ab2":{"name":"knife_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zFG2FzYmpYwwo4aRX6bSHJ9z1N8uTX0m/category_tools/knife_blue.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"zFG2FzYmpYwwo4aRX6bSHJ9z1N8uTX0m","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zFG2FzYmpYwwo4aRX6bSHJ9z1N8uTX0m/category_tools/knife_blue.png"},"d32c6482-b5f3-487f-8fa1-2d6dcd86d450":{"name":"court_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jdVV0fyG164aj2Z2zCJe3iVoKAhZIMyA/category_backgrounds/background_court.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"jdVV0fyG164aj2Z2zCJe3iVoKAhZIMyA","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jdVV0fyG164aj2Z2zCJe3iVoKAhZIMyA/category_backgrounds/background_court.png"},"74531315-5adc-4e94-b50a-47bc9c4d59a6":{"name":"nothing","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"2512f9c6-4607-4896-89d3-a8aef99f7286":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":170,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tk6PKadv_Wd30jdkwJXXmC5rtHLcaKXf","loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":170},"rootRelativePath":"assets/2512f9c6-4607-4896-89d3-a8aef99f7286.png"},"d995b82a-3dad-4a70-b76f-934c9febf128":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":12,"looping":true,"frameDelay":12,"version":"fV8KFTzi6DOmHBjL5ibepOozaUg7jaNn","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1600},"rootRelativePath":"assets/d995b82a-3dad-4a70-b76f-934c9febf128.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg =createSprite(200,200);
bg.setAnimation("court_1");
var knife=createSprite(200,200);
knife.setAnimation("knife_blue_1");
var fruitGroup = createGroup();
var bombGroup = createGroup();
var score = 0;
textSize(27);
fill(0);
textFont("alergia");
function draw() {
  knife.x=World.mouseX;
  knife.y=World.mouseY;
  spawnFruits();
  spawnBombs();
  if (fruitGroup.isTouching(knife)) {
    fruitGroup.destroyEach();
    playSound("assets/category_hits/8bit_splat.mp3");
    score = score + 2;
  }
  if (bombGroup.isTouching(knife)) {
    var ani = createSprite(200, 200);
    ani.setAnimation("animation_2");
    fruitGroup.setVelocityYEach(0);
    playSound("assets/category_explosion/8bit_explosion.mp3");
  }
  drawSprites();
  text("score"+score, 0, 380);
  
}
function spawnFruits() {
  if (World.frameCount%10===0) {
    var r = randomNumber(1, 10);
    var fruit = createSprite(randomNumber(10, 390), -20);
    fruit.setAnimation("f"+r);
    fruit.velocityY = 10+3*score/10;
    fruit.lifetime = 90;
    fruit.rotation = fruit.rotation+5;
    fruitGroup.add(fruit);
  }
}
function spawnBombs() {
  if (World.frameCount%200===0) {
    var bomb = createSprite(200, -10);
    bomb.setAnimation("animation_1");
    bomb.velocityY = 8;
    bomb.lifetime = 60;
    bombGroup.add(bomb);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
