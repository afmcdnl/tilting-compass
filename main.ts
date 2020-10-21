basic.forever(function () {
    serial.writeValue("roll", input.rotation(Rotation.Roll))
    serial.writeValue("pitch", input.rotation(Rotation.Pitch))
})
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) >= 50 && Math.abs(input.rotation(Rotation.Roll)) < 20) {
        basic.showString("S")
    } else if (input.rotation(Rotation.Pitch) <= -50 && Math.abs(input.rotation(Rotation.Roll)) < 20) {
        basic.showString("N")
    } else if (input.rotation(Rotation.Roll) >= 50 && Math.abs(input.rotation(Rotation.Pitch)) < 20) {
        basic.showString("E")
    } else if (input.rotation(Rotation.Roll) < -50 && Math.abs(input.rotation(Rotation.Pitch)) < 20) {
        basic.showString("W")
    } else if (input.rotation(Rotation.Pitch) >= 50 && input.rotation(Rotation.Roll) >= 50) {
        basic.showString("SE")
    } else if (input.rotation(Rotation.Pitch) >= 50 && input.rotation(Rotation.Roll) <= -30) {
        basic.showString("SW")
    } else if (input.rotation(Rotation.Roll) >= 50 && input.rotation(Rotation.Pitch) <= -30) {
        basic.showString("NE")
    } else if (input.rotation(Rotation.Roll) <= -50 && input.rotation(Rotation.Pitch) <= -30) {
        basic.showString("NW")
    }
    basic.clearScreen()
    basic.pause(500)
})
