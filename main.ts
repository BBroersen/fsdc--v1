basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.SmallDiamond)
music.playTone(139, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.SmallSquare)
music.playTone(147, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Square)
basic.clearScreen()
basic.pause(200)
music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 942, 2391, 154, 16, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
basic.showString("On")
basic.clearScreen()
basic.pause(200)
basic.forever(function () {
	
})
