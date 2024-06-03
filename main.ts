let Tir_vaisseau: Sprite = null
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
controller.moveSprite(Vaisseau, 100, 100)
Vaisseau.setStayInScreen(true)
scene.setBackgroundColor(12)
Vaisseau.setPosition(80, 85)
game.onUpdateInterval(70, function () {
    Tir_vaisseau = sprites.createProjectileFromSprite(img`
        2 
        2 
        2 
        2 
        2 
        `, Vaisseau, 0, -100)
    Tir_vaisseau.setPosition(Vaisseau.x, Vaisseau.y - 11)
})
