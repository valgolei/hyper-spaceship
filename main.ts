namespace SpriteKind {
    export const tir_vaisseau = SpriteKind.create()
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo())
})
sprites.onOverlap(SpriteKind.tir_vaisseau, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    sprites.destroy(sprite)
})
let Tir_vaisseau: Sprite = null
let vie_énemi_basique: StatusBarSprite = null
let énemi_basique: Sprite = null
let Vaisseau = sprites.create(img`
    . . . . . f . . . . . 
    . . . f . f . f . . . 
    . . . f 8 f 8 f . . . 
    . f . f 8 6 8 f . f . 
    . f . 8 6 6 6 8 . f . 
    . f 8 8 6 6 6 8 8 f . 
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
let Vie = statusbars.create(50, 1, StatusBarKind.Health)
Vie.setPosition(27, 118)
let spaw_des_énemis_basiques = 0
forever(function () {
	
})
forever(function () {
    if (spaw_des_énemis_basiques > 6000) {
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
        vie_énemi_basique.max = 30
    }
})
game.onUpdateInterval(100, function () {
    Tir_vaisseau = sprites.createProjectileFromSprite(img`
        2 
        2 
        2 
        2 
        2 
        `, Vaisseau, 0, -120)
    Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
    Tir_vaisseau.setKind(SpriteKind.tir_vaisseau)
})
game.onUpdateInterval(100, function () {
    spaw_des_énemis_basiques += 100
})
