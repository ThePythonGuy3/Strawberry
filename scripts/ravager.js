const unitSpawner = extendContent(Weapon, "unit-spawner-weapon", {
    load(){
        this.region = Core.atlas.find("unit-spawner-weapon");
    }
});

unitSpawner.reload = 60;
unitSpawner.alternate = true;
unitSpawner.length = 15;
unitSpawner.width = 15;
unitSpawner.shots = 3;
unitSpawner.bullet = spawnerBullet;
unitSpawner.recoil = 9;
unitSpawner.shootSound = Sounds.artillery;
unitSpawner.minPlayerDist = 20;

spawnerBullet = extend(BasicBulletType, {
  init(b){
    if(typeof(b) === "undefined"){return;}
    unit = UnitTypes.wraith.create(b.getTeam());
    unit.set(b.x, b.y);
    unit.add();
    Events.fire(new EventType.UnitCreateEvent(unit));
  }
});
spawnerBullet.instantDisappear = true;



//const ravage = extendContent(UnitType, "ravager", {
const ravage = new JavaAdapter(UnitType, {}, "ravager",  prov(() => new JavaAdapter(GroundUnit, {
    load(){
        this.weapon.load();
        this.region = Core.atlas.find("ravager");
        this.legRegion = Core.atlas.find("ravager-leg");
        this.baseRegion = Core.atlas.find("ravager-base");
    }
});

ravager.name = "Ravager";
ravager.description = "j.";
ravager.health = 25000;
ravager.flying = false;
ravager.mass = 100;
ravager.targetAir = true;
ravager.rotateWeapon = false;
ravager.weaponOffsetY = 0;
ravager.engineOffset = 1;
ravager.engineSize = 5;
ravager.weapon = unitSpawner;