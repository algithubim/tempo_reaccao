input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    mede = true
    basic.showNumber(tr)
})
input.onGesture(Gesture.FreeFall, function () {
    if (mede) {
        tr = input.runningTime()
        mede = false
    }
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    led.plotBarGraph(
    25,
    25
    )
})
let tr = 0
let mede = false
input.setAccelerometerRange(AcceleratorRange.EightG)
led.plotBarGraph(
0,
25
)
mede = true
basic.forever(function () {
    if (input.acceleration(Dimension.Z) > 1500) {
        tr = input.runningTime() - tr
        led.plotBarGraph(
        0,
        25
        )
    }
})
