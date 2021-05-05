joystickbit.initJoystickBit()
let x = 2
let y = 4
let Person = game.createSprite(x, y)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        Person.delete()
        x = x + 1
        Person = game.createSprite(x, y)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        Person.delete()
        x = x - 1
        Person = game.createSprite(x, y)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        Person.delete()
        y = y - 1
        Person = game.createSprite(x, y)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        Person.delete()
        y = y + 1
        Person = game.createSprite(x, y)
    }
    basic.pause(100)
})
