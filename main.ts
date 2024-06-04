namespace SpriteKind {
    export const tir_vaisseau = SpriteKind.create()
    export const tir_énemi = SpriteKind.create()
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo())
    niveau_de_tir += 1
})
sprites.onOverlap(SpriteKind.tir_énemi, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    Vie.value += -10
})
sprites.onOverlap(SpriteKind.tir_vaisseau, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    sprites.destroy(sprite)
})
let Tir_vaisseau: Sprite = null
let tir_énemi_basique: Sprite = null
let vie_énemi_basique: StatusBarSprite = null
let énemi_basique: Sprite = null
let Vie: StatusBarSprite = null
let niveau_de_tir = 1
effects.starField.startScreenEffect()
let Vaisseau = sprites.create(img`
    . . . . . f . . . . . 
    . . . f . f . f . . . 
    . . . f 8 f 8 f . . . 
    . . . f 8 6 8 f . . . 
    . . . 8 6 6 6 8 . . . 
    . . 8 8 6 6 6 8 8 . . 
    . 8 8 6 6 6 6 6 8 8 . 
    . 8 8 6 6 6 6 6 8 8 . 
    8 8 8 8 8 f 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 
    8 . 8 8 8 f 8 8 8 . 8 
    . . 8 . 8 8 8 . 8 . . 
    . 8 2 8 . . . 8 2 8 . 
    . 4 4 4 . . . 4 4 4 . 
    5 5 5 5 5 . 5 5 5 5 5 
    `, SpriteKind.Player)
controller.moveSprite(Vaisseau, 90, 90)
Vaisseau.setStayInScreen(true)
scene.setBackgroundColor(12)
Vaisseau.setPosition(80, 85)
Vie = statusbars.create(50, 1, StatusBarKind.Health)
Vie.setPosition(27, 118)
let spaw_des_énemis_basiques = 0
game.onUpdateInterval(1000, function () {
    for (let valeur of sprites.allOfKind(SpriteKind.Enemy)) {
        valeur.setVelocity(randint(-10, 10), randint(0, 3))
    }
})
forever(function () {
    if (spaw_des_énemis_basiques > 2000) {
        spaw_des_énemis_basiques = 0
        énemi_basique = sprites.create(img`
            . d d d d d . 
            d d d 7 d d d 
            d . d 7 d . d 
            . . d 7 d . . 
            . d d d d d . 
            . . d f d . . 
            . . . f . . . 
            `, SpriteKind.Enemy)
        énemi_basique.setPosition(randint(5, 155), 10)
        vie_énemi_basique = statusbars.create(9, 1, StatusBarKind.EnemyHealth)
        vie_énemi_basique.attachToSprite(énemi_basique, 2, 0)
        vie_énemi_basique.max = 20
        énemi_basique.setStayInScreen(true)
    }
})
forever(function () {
    pause(2000)
    for (let index = 0; index < 3; index++) {
        for (let valeur of sprites.allOfKind(SpriteKind.Enemy)) {
            if (Math.percentChance(50)) {
                tir_énemi_basique = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    . . . . . . . 9 . . . . . . . 
                    . . . . . . . 9 . . . . . . . 
                    . . . . . . . 9 . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . 
                    . . . . . . . 9 . . . . . . . 
                    . . . . . . . . . . . . . . . 
                    `, valeur, randint(-30, 30), 50)
                tir_énemi_basique.setKind(SpriteKind.tir_énemi)
            }
        }
        pause(100)
    }
})
game.onUpdateInterval(100, function () {
    if (niveau_de_tir == 1) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir == 2) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir == 3) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir == 4) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir == 5) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            2 
            2 
            2 
            2 
            2 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir == 6) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir == 7) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            f 
            f 
            f 
            f 
            f 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir == 8) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            5 
            5 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            f 
            f 
            f 
            f 
            f 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            f 
            f 
            f 
            f 
            f 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
    if (niveau_de_tir < 8) {
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            f 
            f 
            f 
            f 
            f 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            f 
            f 
            f 
            f 
            f 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x - 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
        Tir_vaisseau = sprites.createProjectileFromSprite(img`
            f 
            f 
            f 
            f 
            f 
            `, Vaisseau, 0, -120)
        Tir_vaisseau.setPosition(Vaisseau.x + 2, Vaisseau.y - 10)
        Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
    }
})
game.onUpdateInterval(100, function () {
    spaw_des_énemis_basiques += 100
})
